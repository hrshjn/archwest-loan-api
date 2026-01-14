/**
 * Sync Service
 * Orchestrates data synchronization from various sources
 */

import { v4 as uuid } from 'uuid';
import { getDatabase } from '../db/init.js';
import { SybillService } from './sybill.js';

export class SyncService {
  constructor(sybillToken) {
    this.sybill = new SybillService(sybillToken);
  }

  /**
   * Sync a single Sybill call by ID
   */
  async syncCall(callId) {
    const db = getDatabase();
    
    try {
      // Fetch call data from Sybill
      const callData = await this.sybill.getCallExtended(callId);
      const activity = this.sybill.toActivity(callData);
      
      if (!activity) {
        throw new Error('Failed to parse call data');
      }

      // Check if activity already exists
      const existing = db.prepare('SELECT id FROM activities WHERE source_id = ?').get(callId);
      if (existing) {
        console.log(`Call ${callId} already synced`);
        return { status: 'skipped', activityId: existing.id };
      }

      // Find or create account based on external company domain
      let accountId = null;
      if (activity.external_company_domain) {
        accountId = await this.findOrCreateAccount(db, {
          domain: activity.external_company_domain,
          name: activity.external_company_name,
        });
      }

      // Find or create contacts for external participants
      const externalParticipants = activity.participants.filter(p => !p.isInternal);
      for (const participant of externalParticipants) {
        await this.findOrCreateContact(db, participant, accountId);
      }

      // Find or create sales rep for internal participants
      const internalParticipants = activity.participants.filter(p => p.isInternal);
      let repId = null;
      if (internalParticipants.length > 0) {
        repId = await this.findOrCreateSalesRep(db, internalParticipants[0]);
      }

      // Create the activity with full transcript
      const activityId = uuid();
      db.prepare(`
        INSERT INTO activities (
          id, account_id, rep_id, activity_type, source, source_id,
          title, summary, full_content, outcome, pain_points, next_steps,
          engagement_score, duration_seconds, participant_count, meeting_type, activity_date
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        activityId,
        accountId,
        repId,
        activity.activity_type,
        activity.source,
        activity.source_id,
        activity.title,
        activity.summary,
        activity.full_content, // Full transcript text
        activity.outcome,
        activity.pain_points,
        activity.next_steps,
        activity.engagement_score,
        activity.duration_seconds,
        activity.participant_count,
        activity.meeting_type,
        activity.activity_date
      );

      // Create activity participants
      for (const participant of activity.participants) {
        const contactRow = participant.email ? 
          db.prepare('SELECT id FROM contacts WHERE email = ?').get(participant.email) : null;
        
        db.prepare(`
          INSERT INTO activity_participants (id, activity_id, contact_id, name, email, is_internal)
          VALUES (?, ?, ?, ?, ?, ?)
        `).run(
          uuid(),
          activityId,
          contactRow?.id || null,
          participant.name,
          participant.email,
          participant.isInternal ? 1 : 0
        );
      }

      console.log(`✅ Synced call: ${activity.title}`);
      return { status: 'synced', activityId, accountId };

    } catch (error) {
      console.error(`Failed to sync call ${callId}:`, error);
      throw error;
    } finally {
      db.close();
    }
  }

  /**
   * Find or create an account by domain
   */
  async findOrCreateAccount(db, { domain, name }) {
    let account = db.prepare('SELECT id FROM accounts WHERE domain = ?').get(domain);
    
    if (!account) {
      const id = uuid();
      db.prepare(`
        INSERT INTO accounts (id, name, domain, deal_stage)
        VALUES (?, ?, ?, 'prospect')
      `).run(id, name || domain, domain);
      account = { id };
      console.log(`Created account: ${name || domain}`);
    }
    
    return account.id;
  }

  /**
   * Find or create a contact
   */
  async findOrCreateContact(db, participant, accountId) {
    if (!participant.email) return null;

    let contact = db.prepare('SELECT id FROM contacts WHERE email = ?').get(participant.email);
    
    if (!contact) {
      const id = uuid();
      db.prepare(`
        INSERT INTO contacts (
          id, account_id, sybill_contact_id, sybill_person_id,
          name, email, job_title, linkedin_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).run(
        id,
        accountId,
        participant.sybillContactId,
        participant.personId,
        participant.name,
        participant.email,
        participant.jobTitle,
        participant.linkedInUrl
      );
      contact = { id };
      console.log(`Created contact: ${participant.name}`);
    }
    
    return contact.id;
  }

  /**
   * Find or create a sales rep
   */
  async findOrCreateSalesRep(db, participant) {
    if (!participant.email) return null;

    let rep = db.prepare('SELECT id FROM sales_reps WHERE email = ?').get(participant.email);
    
    if (!rep) {
      const id = uuid();
      db.prepare(`
        INSERT INTO sales_reps (id, sybill_user_id, name, email)
        VALUES (?, ?, ?, ?)
      `).run(id, participant.sybillContactId, participant.name, participant.email);
      rep = { id };
      console.log(`Created sales rep: ${participant.name}`);
    }
    
    return rep.id;
  }
}
