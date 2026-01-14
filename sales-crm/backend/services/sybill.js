/**
 * Sybill API Integration Service
 * Fetches meeting data, transcripts, and summaries from Sybill
 */

const SYBILL_API_BASE = process.env.SYBILL_API_BASE || 'https://api-cf.dev.sybill.ai';

export class SybillService {
  constructor(authToken) {
    this.authToken = authToken;
    this.baseUrl = SYBILL_API_BASE;
  }

  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'accept': '*/*',
        'authorization': `Bearer ${this.authToken}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Sybill API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * List all calls (paginated)
   * Returns array of call metadata for bulk sync
   */
  async listCalls(options = {}) {
    const { limit = 50, offset = 0, startDate, endDate } = options;
    let endpoint = `/calls?limit=${limit}&offset=${offset}`;
    
    if (startDate) endpoint += `&startDate=${startDate}`;
    if (endDate) endpoint += `&endDate=${endDate}`;
    
    return this.makeRequest(endpoint);
  }

  /**
   * List all calls with pagination (fetches ALL calls)
   */
  async listAllCalls(options = {}) {
    const { startDate, endDate, maxCalls = 500 } = options;
    const allCalls = [];
    let offset = 0;
    const limit = 50;
    
    while (allCalls.length < maxCalls) {
      try {
        const response = await this.listCalls({ limit, offset, startDate, endDate });
        const calls = response.calls || response.data || response || [];
        
        if (!Array.isArray(calls) || calls.length === 0) break;
        
        allCalls.push(...calls);
        offset += limit;
        
        // If we got fewer than limit, we've reached the end
        if (calls.length < limit) break;
      } catch (error) {
        console.error('Error fetching calls at offset', offset, error);
        break;
      }
    }
    
    return allCalls;
  }

  /**
   * Get extended call data including metadata, transcript, summary
   */
  async getCallExtended(callId) {
    const data = await this.makeRequest(`/calls/${callId}/extended`);
    return this.parseCallData(data);
  }

  /**
   * Parse the raw Sybill response into a structured format
   */
  parseCallData(rawData) {
    const result = {
      metadata: null,
      transcript: null,
      transcriptText: null,
      summary: null,
      scores: [],
      contextualMoments: [],
      engagementScore: null,
    };

    for (const insight of rawData) {
      switch (insight.insightType) {
        case 'DASHBOARD_METADATA':
          result.metadata = this.parseMetadata(insight);
          break;
        case 'FINAL_TRANSCRIPT':
        case 'ENRICHED_TRANSCRIPT':
          result.transcript = insight;
          result.transcriptText = this.parseTranscript(insight);
          break;
        case 'CUSTOM_SUMMARY':
          result.summary = this.parseSummary(insight);
          break;
        case 'SCORES':
          if (!insight.participantId) {
            result.scores.push(insight);
            // Extract overall engagement score
            if (insight.scores) {
              const engagementMetric = insight.scores.find(s => s.title === 'Engagement');
              if (engagementMetric) {
                result.engagementScore = engagementMetric.value;
              }
            }
          }
          break;
        case 'CONTEXTUAL_MOMENTS':
          result.contextualMoments.push(insight);
          break;
      }
    }

    return result;
  }

  /**
   * Parse transcript insight into readable text format
   */
  parseTranscript(insight) {
    if (!insight?.transcript) return null;
    
    // Handle different transcript formats
    const transcript = insight.transcript;
    
    // If it's an array of utterances
    if (Array.isArray(transcript)) {
      return transcript.map(utterance => {
        const speaker = utterance.speaker || utterance.speakerName || 'Unknown';
        const text = utterance.text || utterance.content || '';
        const timestamp = utterance.startTime ? 
          `[${this.formatTimestamp(utterance.startTime)}]` : '';
        return `${timestamp} ${speaker}: ${text}`;
      }).join('\n\n');
    }
    
    // If it has a 'segments' array
    if (transcript.segments && Array.isArray(transcript.segments)) {
      return transcript.segments.map(seg => {
        const speaker = seg.speaker || seg.speakerName || 'Unknown';
        const text = seg.text || seg.words?.map(w => w.word).join(' ') || '';
        return `${speaker}: ${text}`;
      }).join('\n\n');
    }

    // If it's raw text
    if (typeof transcript === 'string') {
      return transcript;
    }

    // Return stringified version as fallback
    return JSON.stringify(transcript, null, 2);
  }

  /**
   * Format milliseconds to MM:SS
   */
  formatTimestamp(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Parse metadata insight into structured format
   */
  parseMetadata(insight) {
    const metadata = insight.metadata || {};
    const participants = insight.participants || [];

    return {
      callId: insight._id,
      recordingId: insight.conversationInfo?.recordingId,
      topic: metadata.topic,
      meetingType: metadata.meetingType,
      meetingProvider: metadata.meetingProvider,
      startTime: metadata.realStartTime,
      endTime: metadata.realEndTime,
      duration: metadata.realEndTime - metadata.realStartTime,
      videoUrl: insight.remoteAssets?.find(a => a.assetType === 'GVO_MP4')?.remoteUrl,
      participants: participants.map(p => ({
        id: p.participantId,
        personId: p.personId,
        sybillContactId: p.sybillContactId,
        name: p.name,
        email: p.email,
        isInternal: p.isInternal,
        isInvitee: p.isInvitee,
        isParticipant: p.isParticipant,
        companyDomain: p.companyDomain,
        jobTitle: p.validatedExtendedInfo?.jobTitle,
        linkedInUrl: p.validatedExtendedInfo?.linkedInProfileUrl,
      })),
      externalCompanyDomain: participants.find(p => !p.isInternal)?.companyDomain,
      externalCompanyName: this.extractCompanyName(participants.find(p => !p.isInternal)?.companyDomain),
    };
  }

  /**
   * Parse summary insight into structured format
   */
  parseSummary(insight) {
    const sections = insight.generatedSummaries?.callSummary?.generatedSections || [];
    
    const getSectionValue = (label) => {
      const section = sections.find(s => s.label === label);
      return section?.data?.value || null;
    };

    return {
      outcome: getSectionValue('Outcome'),
      painPoints: getSectionValue('Pain Points'),
      nextSteps: getSectionValue('Next Steps'),
      conversationStarters: getSectionValue('Conversation Starters'),
      qualification: getSectionValue('Qualification'),
      aiTasks: getSectionValue('AI Tasks'),
      // Get all sections for complete data
      allSections: sections.reduce((acc, s) => {
        acc[s.label] = s.data?.value;
        return acc;
      }, {}),
    };
  }

  /**
   * Extract company name from domain
   */
  extractCompanyName(domain) {
    if (!domain) return null;
    // Remove common TLDs and capitalize
    const name = domain.split('.')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  /**
   * Convert Sybill call data to CRM activity format
   */
  toActivity(callData) {
    const { metadata, summary, transcriptText, engagementScore } = callData;
    if (!metadata) return null;

    return {
      source_id: metadata.callId,
      activity_type: 'call',
      source: 'sybill',
      title: metadata.topic,
      summary: summary?.outcome || null,
      full_content: transcriptText, // Store the full transcript
      outcome: summary?.outcome || null,
      pain_points: JSON.stringify(summary?.painPoints || []),
      next_steps: JSON.stringify(summary?.nextSteps || []),
      engagement_score: engagementScore,
      duration_seconds: Math.floor((metadata.duration || 0) / 1000),
      participant_count: metadata.participants?.length || 0,
      meeting_type: metadata.meetingType === 'EXTERNAL' ? 'external' : 'internal',
      activity_date: new Date(metadata.startTime).toISOString(),
      participants: metadata.participants,
      external_company_domain: metadata.externalCompanyDomain,
      external_company_name: metadata.externalCompanyName,
      video_url: metadata.videoUrl,
      // Store all summary sections for rich insights
      all_summary_sections: summary?.allSections ? JSON.stringify(summary.allSections) : null,
    };
  }
}
