import { useState, useEffect } from 'react';
import { 
  ArrowLeft,
  Building2,
  Phone,
  Mail,
  Users,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  ExternalLink,
  Plus,
  FileText,
  X,
  ChevronDown,
  ChevronUp,
  Target,
  Briefcase,
  MessageSquare,
  Edit3,
  Save,
} from 'lucide-react';
import { useAccountReview } from '../hooks/useApi';
import { api } from '../lib/api';

export default function AccountDetail({ accountId, onNavigate }) {
  const { data, isLoading, error, mutate } = useAccountReview(accountId);
  const [showCreateDeal, setShowCreateDeal] = useState(false);
  const [showEditDeal, setShowEditDeal] = useState(false);

  if (!accountId) {
    return (
      <div className="text-center py-12">
        <p className="text-navy-400">No account selected</p>
        <button onClick={() => onNavigate('accounts')} className="btn-primary mt-4">
          View Accounts
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 w-48 bg-navy-800 rounded-lg" />
        <div className="h-32 bg-navy-800/50 rounded-2xl" />
        <div className="grid grid-cols-2 gap-6">
          <div className="h-64 bg-navy-800/50 rounded-2xl" />
          <div className="h-64 bg-navy-800/50 rounded-2xl" />
        </div>
      </div>
    );
  }

  if (error || !data?.account) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400">Failed to load account</p>
        <button onClick={() => onNavigate('accounts')} className="btn-secondary mt-4">
          Back to Accounts
        </button>
      </div>
    );
  }

  const { account, summary, activities, contacts, deals, icpAnalysis, timelineSummary } = data;
  const [selectedActivity, setSelectedActivity] = useState(null);

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate('accounts')}
          className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center hover:bg-navy-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-navy-400" />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 flex items-center justify-center text-2xl font-bold text-brand-400">
              {account.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-white">{account.name}</h1>
              <p className="text-sm text-navy-400">{account.domain}</p>
            </div>
          </div>
        </div>
        <button onClick={() => setShowCreateDeal(true)} className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Deal
        </button>
      </div>

      {/* Deal Value & Requirements - Editable Panel */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            Deal Information
          </h3>
          <button
            onClick={() => setShowEditDeal(true)}
            className="text-sm text-brand-400 hover:text-brand-300 flex items-center gap-1"
          >
            <Edit3 className="w-4 h-4" />
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-navy-400 mb-1">Deal Value</p>
            <p className="text-2xl font-bold text-green-400">{formatCurrency(account.deal_value)}</p>
          </div>
          <div>
            <p className="text-xs text-navy-400 mb-1">Stage</p>
            <p className="text-lg font-semibold text-white capitalize">{account.deal_stage || 'Prospect'}</p>
          </div>
          <div>
            <p className="text-xs text-navy-400 mb-1">Probability</p>
            <p className="text-lg font-semibold text-white">{account.probability || 10}%</p>
          </div>
          <div>
            <p className="text-xs text-navy-400 mb-1">ICP Fit</p>
            <p className="text-lg font-semibold text-white">{account.icp_fit_score || 0}%</p>
          </div>
        </div>
        {(account.requirements || account.use_case) && (
          <div className="mt-4 pt-4 border-t border-navy-700/50 grid grid-cols-1 md:grid-cols-2 gap-4">
            {account.requirements && (
              <div>
                <p className="text-xs text-navy-400 mb-1">Requirements</p>
                <p className="text-sm text-navy-200">{account.requirements}</p>
              </div>
            )}
            {account.use_case && (
              <div>
                <p className="text-xs text-navy-400 mb-1">Use Case</p>
                <p className="text-sm text-navy-200">{account.use_case}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatBox
          icon={Phone}
          label="Total Calls"
          value={timelineSummary?.totalCalls || summary?.total_interactions || 0}
          iconColor="text-brand-400"
          bgColor="bg-brand-500/10"
        />
        <StatBox
          icon={Clock}
          label="Call Minutes"
          value={timelineSummary?.totalMinutes || Math.round(summary?.total_call_minutes || 0)}
          iconColor="text-blue-400"
          bgColor="bg-blue-500/10"
        />
        <StatBox
          icon={Users}
          label="Contacts"
          value={icpAnalysis?.contactCount || contacts?.length || 0}
          iconColor="text-purple-400"
          bgColor="bg-purple-500/10"
        />
        <StatBox
          icon={Target}
          label="Engagement"
          value={timelineSummary?.avgEngagement ? `${Math.round(timelineSummary.avgEngagement)}%` : 'N/A'}
          iconColor="text-amber-400"
          bgColor="bg-amber-500/10"
        />
        <StatBox
          icon={TrendingUp}
          label="Timeline"
          value={timelineSummary?.totalActivities || 0}
          subtext="activities"
          iconColor="text-purple-400"
          bgColor="bg-purple-500/10"
        />
      </div>

      {/* ICP Analysis */}
      {icpAnalysis && (icpAnalysis.decisionMakers?.length > 0 || icpAnalysis.topPainPoints?.length > 0) && (
        <div className="glass-card p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-brand-400" />
            ICP Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Decision Makers */}
            {icpAnalysis.decisionMakers?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-navy-300 mb-3">Decision Makers</h4>
                <div className="space-y-2">
                  {icpAnalysis.decisionMakers.map((dm, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 bg-navy-800/50 rounded-lg">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-sm font-medium text-purple-400">
                        {dm.name?.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm text-white">{dm.name}</p>
                        <p className="text-xs text-navy-400">{dm.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Titles Engaged */}
            {icpAnalysis.titles?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-navy-300 mb-3">Titles Engaged</h4>
                <div className="flex flex-wrap gap-2">
                  {icpAnalysis.titles.map((title, i) => (
                    <span key={i} className="badge-purple text-xs">{title}</span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Top Pain Points */}
            {icpAnalysis.topPainPoints?.length > 0 && (
              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-navy-300 mb-3">Top Pain Points (from calls)</h4>
                <div className="space-y-2">
                  {icpAnalysis.topPainPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Timeline */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pain Points & Next Steps */}
          {(summary.recent_pain_points?.length > 0 || summary.pending_next_steps?.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {summary.recent_pain_points?.length > 0 && (
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <h3 className="font-medium text-white">Pain Points</h3>
                  </div>
                  <ul className="space-y-2">
                    {summary.recent_pain_points.slice(0, 5).map((point, i) => (
                      <li key={i} className="text-sm text-navy-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {summary.pending_next_steps?.length > 0 && (
                <div className="glass-card p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-brand-400" />
                    <h3 className="font-medium text-white">Next Steps</h3>
                  </div>
                  <ul className="space-y-2">
                    {summary.pending_next_steps.slice(0, 5).map((step, i) => (
                      <li key={i} className="text-sm text-navy-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Activity List */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-brand-400" />
              Activity Timeline
              {timelineSummary?.firstContact && (
                <span className="text-xs text-navy-400 font-normal ml-auto">
                  Since {new Date(timelineSummary.firstContact).toLocaleDateString()}
                </span>
              )}
            </h3>
            {activities?.length > 0 ? (
              <div className="space-y-4">
                {activities.map((activity) => (
                  <ActivityItem 
                    key={activity.id} 
                    activity={activity} 
                    onViewTranscript={() => setSelectedActivity(activity)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-navy-400 text-center py-8">
                No activities yet. Sync Sybill calls to see activity here.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contacts */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Contacts</h3>
            {contacts?.length > 0 ? (
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div key={contact.id} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-sm font-medium text-navy-300">
                      {contact.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{contact.name}</p>
                      <p className="text-xs text-navy-400 truncate">{contact.job_title || contact.email}</p>
                    </div>
                    {contact.linkedin_url && (
                      <a
                        href={contact.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-400 hover:text-blue-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-navy-400 text-sm">No contacts yet</p>
            )}
          </div>

          {/* Deals */}
          <div className="glass-card p-6">
            <h3 className="font-semibold text-white mb-4">Deals</h3>
            {deals?.length > 0 ? (
              <div className="space-y-3">
                {deals.map((deal) => (
                  <div key={deal.id} className="p-3 bg-navy-800/50 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm font-medium text-white">{deal.name}</p>
                      <span className="text-sm font-mono text-brand-400">
                        {formatCurrency(deal.deal_size)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge-blue text-[10px] capitalize">{deal.stage}</span>
                      <span className="text-xs text-navy-500">{deal.probability}%</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-navy-400 text-sm">No active deals</p>
            )}
          </div>
        </div>
      </div>

      {/* Create Deal Modal */}
      {showCreateDeal && (
        <CreateDealModal
          accountId={accountId}
          accountName={account.name}
          onClose={() => setShowCreateDeal(false)}
          onCreated={() => {
            setShowCreateDeal(false);
            mutate();
          }}
        />
      )}

      {/* Edit Deal Modal */}
      {showEditDeal && (
        <EditDealModal
          account={account}
          onClose={() => setShowEditDeal(false)}
          onSaved={() => {
            setShowEditDeal(false);
            mutate();
          }}
        />
      )}

      {/* Transcript Modal */}
      {selectedActivity && (
        <TranscriptModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
}

function StatBox({ icon: Icon, label, value, iconColor, bgColor }) {
  return (
    <div className="glass-card p-4">
      <div className={`w-8 h-8 rounded-lg ${bgColor} flex items-center justify-center mb-3`}>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="text-xs text-navy-400">{label}</p>
    </div>
  );
}

function ActivityItem({ activity, onViewTranscript }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          activity.activity_type === 'call' ? 'bg-brand-500/20' : 'bg-blue-500/20'
        }`}>
          {activity.activity_type === 'call' ? (
            <Phone className="w-4 h-4 text-brand-400" />
          ) : (
            <Mail className="w-4 h-4 text-blue-400" />
          )}
        </div>
        <div className="w-px flex-1 bg-navy-700 my-2" />
      </div>
      <div className="flex-1 pb-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="font-medium text-white">{activity.title}</p>
            <div className="flex items-center gap-3 mt-1 flex-wrap">
              <p className="text-xs text-navy-400">
                {new Date(activity.activity_date).toLocaleString()}
                {activity.duration_seconds && ` • ${Math.round(activity.duration_seconds / 60)} min`}
              </p>
              {activity.engagement_score && (
                <span className="text-xs text-amber-400">
                  {Math.round(activity.engagement_score)}% engagement
                </span>
              )}
              {activity.participant_names?.length > 0 && (
                <span className="text-xs text-navy-500">
                  {activity.participant_names.slice(0, 2).join(', ')}
                  {activity.participant_names.length > 2 && ` +${activity.participant_names.length - 2}`}
                </span>
              )}
            </div>
          </div>
          {activity.has_transcript && (
            <button
              onClick={onViewTranscript}
              className="ml-2 px-3 py-1 text-xs bg-brand-500/20 text-brand-400 rounded-lg hover:bg-brand-500/30 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              Transcript
            </button>
          )}
        </div>
        {activity.outcome && (
          <p className="text-sm text-navy-300 mt-2 leading-relaxed">{activity.outcome}</p>
        )}
        
        {/* Pain points and next steps */}
        {(activity.pain_points?.length > 0 || activity.next_steps?.length > 0) && (
          <div className="mt-3">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-xs text-navy-400 hover:text-navy-300 flex items-center gap-1"
            >
              {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              {expanded ? 'Hide details' : 'Show details'}
            </button>
            
            {expanded && (
              <div className="mt-3 space-y-3 animate-fade-in">
                {activity.pain_points?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-yellow-400 mb-1">Pain Points</p>
                    <ul className="space-y-1">
                      {activity.pain_points.map((point, i) => (
                        <li key={i} className="text-xs text-navy-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                          {typeof point === 'string' ? point : JSON.stringify(point)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {activity.next_steps?.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-brand-400 mb-1">Next Steps</p>
                    <ul className="space-y-1">
                      {activity.next_steps.map((step, i) => (
                        <li key={i} className="text-xs text-navy-300 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                          {typeof step === 'string' ? step : JSON.stringify(step)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function TranscriptModal({ activity, onClose }) {
  const [loading, setLoading] = useState(false);
  const [fullActivity, setFullActivity] = useState(null);

  // Fetch full activity with transcript
  useState(() => {
    const fetchTranscript = async () => {
      setLoading(true);
      try {
        const data = await api.getActivity(activity.id);
        setFullActivity(data);
      } catch (error) {
        console.error('Failed to load transcript:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTranscript();
  }, [activity.id]);

  const transcript = fullActivity?.full_content || activity.full_content;

  return (
    <div className="fixed inset-0 bg-navy-950/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card w-full max-w-4xl max-h-[90vh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="p-6 border-b border-navy-700/50">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">{activity.title}</h2>
              <div className="flex items-center gap-3 mt-2 text-sm text-navy-400">
                <span>{new Date(activity.activity_date).toLocaleString()}</span>
                {activity.duration_seconds && (
                  <span>• {Math.round(activity.duration_seconds / 60)} minutes</span>
                )}
                {activity.engagement_score && (
                  <span className="text-amber-400">
                    • {Math.round(activity.engagement_score)}% engagement
                  </span>
                )}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center hover:bg-navy-700 transition-colors"
            >
              <X className="w-4 h-4 text-navy-400" />
            </button>
          </div>
          
          {/* Participants */}
          {activity.participant_names?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activity.participant_names.map((name, i) => (
                <span key={i} className="badge-blue text-xs">{name}</span>
              ))}
            </div>
          )}
        </div>
        
        {/* Summary section */}
        {activity.outcome && (
          <div className="p-6 border-b border-navy-700/50 bg-navy-800/30">
            <h3 className="text-sm font-medium text-navy-300 mb-2">Summary</h3>
            <p className="text-sm text-white leading-relaxed">{activity.outcome}</p>
          </div>
        )}
        
        {/* Transcript */}
        <div className="flex-1 overflow-auto p-6">
          <h3 className="text-sm font-medium text-navy-300 mb-4 sticky top-0 bg-navy-900/90 backdrop-blur-sm py-2">
            Full Transcript
          </h3>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-2 border-brand-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : transcript ? (
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap text-sm text-navy-200 font-sans leading-relaxed bg-navy-800/50 rounded-xl p-4">
                {transcript}
              </pre>
            </div>
          ) : (
            <p className="text-navy-400 text-center py-12">
              No transcript available for this call.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function EditDealModal({ account, onClose, onSaved }) {
  const [formData, setFormData] = useState({
    deal_value: account.deal_value || '',
    deal_stage: account.deal_stage || 'prospect',
    probability: account.probability || 10,
    requirements: account.requirements || '',
    use_case: account.use_case || '',
    decision_maker: account.decision_maker || '',
    champion: account.champion || '',
    timeline: account.timeline || '',
    icp_fit_score: account.icp_fit_score || 0,
    icp_notes: account.icp_notes || '',
    budget_confirmed: account.budget_confirmed || 0,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.updateAccount(account.id, {
        deal_value: formData.deal_value ? parseFloat(formData.deal_value) : 0,
        deal_stage: formData.deal_stage,
        probability: parseInt(formData.probability),
        requirements: formData.requirements,
        use_case: formData.use_case,
        decision_maker: formData.decision_maker,
        champion: formData.champion,
        timeline: formData.timeline,
        icp_fit_score: parseInt(formData.icp_fit_score),
        icp_notes: formData.icp_notes,
        budget_confirmed: formData.budget_confirmed ? 1 : 0,
      });
      onSaved();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Edit Deal Information</h2>
            <p className="text-sm text-navy-400">{account.name}</p>
          </div>
          <button onClick={onClose} className="text-navy-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Deal Info Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-navy-400 mb-2">Deal Value ($)</label>
              <input
                type="number"
                value={formData.deal_value}
                onChange={(e) => setFormData({ ...formData, deal_value: e.target.value })}
                className="input-field"
                placeholder="50000"
              />
            </div>
            <div>
              <label className="block text-sm text-navy-400 mb-2">Stage</label>
              <select
                value={formData.deal_stage}
                onChange={(e) => setFormData({ ...formData, deal_stage: e.target.value })}
                className="input-field"
              >
                <option value="prospect">Prospect</option>
                <option value="discovery">Discovery</option>
                <option value="qualification">Qualification</option>
                <option value="demo">Demo</option>
                <option value="proposal">Proposal</option>
                <option value="negotiation">Negotiation</option>
                <option value="closed_won">Closed Won</option>
                <option value="closed_lost">Closed Lost</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-navy-400 mb-2">Probability (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.probability}
                onChange={(e) => setFormData({ ...formData, probability: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm text-navy-400 mb-2">Timeline</label>
              <input
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="input-field"
                placeholder="Q1 2026, End of month, etc."
              />
            </div>
          </div>

          {/* Requirements */}
          <div>
            <label className="block text-sm text-navy-400 mb-2">Requirements</label>
            <textarea
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className="input-field h-20"
              placeholder="What do they need? Key requirements from calls..."
            />
          </div>

          <div>
            <label className="block text-sm text-navy-400 mb-2">Use Case</label>
            <textarea
              value={formData.use_case}
              onChange={(e) => setFormData({ ...formData, use_case: e.target.value })}
              className="input-field h-20"
              placeholder="How will they use the product?"
            />
          </div>

          {/* ICP Section */}
          <div className="border-t border-navy-700/50 pt-6">
            <h3 className="text-sm font-medium text-white mb-4">ICP Analysis</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-navy-400 mb-2">Decision Maker</label>
                <input
                  type="text"
                  value={formData.decision_maker}
                  onChange={(e) => setFormData({ ...formData, decision_maker: e.target.value })}
                  className="input-field"
                  placeholder="Name of key decision maker"
                />
              </div>
              <div>
                <label className="block text-sm text-navy-400 mb-2">Champion</label>
                <input
                  type="text"
                  value={formData.champion}
                  onChange={(e) => setFormData({ ...formData, champion: e.target.value })}
                  className="input-field"
                  placeholder="Internal champion"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm text-navy-400 mb-2">ICP Fit Score (0-100)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.icp_fit_score}
                  onChange={(e) => setFormData({ ...formData, icp_fit_score: e.target.value })}
                  className="input-field"
                />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.budget_confirmed}
                    onChange={(e) => setFormData({ ...formData, budget_confirmed: e.target.checked })}
                    className="w-5 h-5 rounded border-navy-600 bg-navy-800 text-brand-400 focus:ring-brand-400"
                  />
                  <span className="text-sm text-navy-300">Budget Confirmed</span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm text-navy-400 mb-2">ICP Notes</label>
              <textarea
                value={formData.icp_notes}
                onChange={(e) => setFormData({ ...formData, icp_notes: e.target.value })}
                className="input-field h-20"
                placeholder="Additional ICP observations..."
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-1">
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CreateDealModal({ accountId, accountName, onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    deal_size: '',
    stage: 'discovery',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createDeal({
        account_id: accountId,
        name: formData.name,
        deal_size: formData.deal_size ? parseFloat(formData.deal_size) : 0,
        stage: formData.stage,
      });
      onCreated();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="glass-card p-8 w-full max-w-md animate-slide-up">
        <h2 className="text-xl font-semibold text-white mb-2">Create Deal</h2>
        <p className="text-sm text-navy-400 mb-6">For {accountName}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-navy-400 mb-2">Deal Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
              placeholder="Q1 Implementation"
            />
          </div>
          
          <div>
            <label className="block text-sm text-navy-400 mb-2">Deal Size ($)</label>
            <input
              type="number"
              value={formData.deal_size}
              onChange={(e) => setFormData({ ...formData, deal_size: e.target.value })}
              className="input-field"
              placeholder="50000"
            />
          </div>
          
          <div>
            <label className="block text-sm text-navy-400 mb-2">Stage</label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              className="input-field"
            >
              <option value="discovery">Discovery</option>
              <option value="qualification">Qualification</option>
              <option value="demo">Demo</option>
              <option value="proposal">Proposal</option>
              <option value="negotiation">Negotiation</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-1">
              {loading ? 'Creating...' : 'Create Deal'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
