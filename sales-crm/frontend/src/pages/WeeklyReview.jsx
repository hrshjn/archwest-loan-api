import { 
  Calendar, 
  Phone, 
  Mail, 
  Building2,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
} from 'lucide-react';
import { useWeeklyReview } from '../hooks/useApi';

export default function WeeklyReview({ onNavigate }) {
  const { data, isLoading, error } = useWeeklyReview();

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  if (isLoading) {
    return (
      <div className="space-y-8 animate-pulse">
        <div className="h-10 w-64 bg-navy-800 rounded-lg" />
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-32 bg-navy-800/50 rounded-2xl" />
          ))}
        </div>
        <div className="h-64 bg-navy-800/50 rounded-2xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400">Failed to load weekly review</p>
      </div>
    );
  }

  const { week, stats, topAccounts, stuckDeals, highlights, pipeline } = data || {};

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Weekly Review</h1>
          <p className="text-navy-400">
            {week?.start && week?.end ? (
              <>
                {new Date(week.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                {' - '}
                {new Date(week.end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </>
            ) : 'This week\'s summary'}
          </p>
        </div>
        <div className="flex items-center gap-2 text-navy-400">
          <Calendar className="w-5 h-5" />
          <span className="text-sm">Auto-generated summary</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={Phone}
          label="Calls Made"
          value={stats?.total_calls || 0}
          subValue={`${Math.round(stats?.total_call_minutes || 0)} minutes`}
          color="brand"
        />
        <StatCard
          icon={Mail}
          label="Emails Sent"
          value={stats?.total_emails || 0}
          color="blue"
        />
        <StatCard
          icon={Building2}
          label="Accounts Touched"
          value={stats?.accounts_touched || 0}
          subValue={`${stats?.total_activities || 0} total activities`}
          color="purple"
        />
        <StatCard
          icon={Target}
          label="Pipeline Value"
          value={formatCurrency(pipeline?.reduce((sum, p) => sum + (p.total_value || 0), 0))}
          subValue={`${pipeline?.reduce((sum, p) => sum + (p.deal_count || 0), 0) || 0} deals`}
          color="green"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Accounts */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-brand-400" />
            <h2 className="text-lg font-semibold text-white">Most Active Accounts</h2>
          </div>
          
          {topAccounts?.length > 0 ? (
            <div className="space-y-3">
              {topAccounts.map((account, index) => (
                <div
                  key={account.id}
                  onClick={() => onNavigate('account-detail', { accountId: account.id })}
                  className="flex items-center gap-4 p-3 bg-navy-800/30 rounded-xl hover:bg-navy-800/50 cursor-pointer transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-sm font-bold text-brand-400">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white truncate">{account.name}</p>
                    <p className="text-xs text-navy-400">{account.domain}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-white">{account.activity_count} activities</p>
                    <p className="text-xs text-navy-400 capitalize">{account.deal_stage?.replace('_', ' ')}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message="No account activity this week" />
          )}
        </div>

        {/* Deals Needing Attention */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-semibold text-white">Deals Needing Attention</h2>
          </div>
          
          {stuckDeals?.length > 0 ? (
            <div className="space-y-3">
              {stuckDeals.map((deal) => (
                <div
                  key={deal.id}
                  className="p-3 bg-navy-800/30 rounded-xl border border-yellow-500/20"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium text-white">{deal.name}</p>
                      <p className="text-xs text-navy-400">{deal.account_name}</p>
                    </div>
                    <span className="badge-yellow">
                      {Math.round(deal.days_since_activity || 0)} days idle
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-navy-500 capitalize">{deal.stage?.replace('_', ' ')}</span>
                    <span className="text-xs text-navy-600">•</span>
                    <span className="text-sm font-mono text-brand-400">{formatCurrency(deal.deal_size)}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-brand-400" />
              </div>
              <p className="text-navy-400">All deals are progressing nicely!</p>
            </div>
          )}
        </div>
      </div>

      {/* Highlights */}
      {highlights?.length > 0 && (
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="w-5 h-5 text-brand-400" />
            <h2 className="text-lg font-semibold text-white">Week Highlights</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="p-4 bg-navy-800/30 rounded-xl"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-400" />
                    <p className="font-medium text-white text-sm">{highlight.title}</p>
                  </div>
                  <span className="text-xs text-navy-500">
                    {new Date(highlight.activity_date).toLocaleDateString()}
                  </span>
                </div>
                {highlight.account_name && (
                  <p className="text-xs text-navy-400 mb-2">{highlight.account_name}</p>
                )}
                {highlight.outcome && (
                  <p className="text-sm text-navy-300 leading-relaxed">{highlight.outcome}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pipeline Summary */}
      {pipeline?.length > 0 && (
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Pipeline Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pipeline.map((stage) => (
              <div key={stage.stage} className="text-center p-4 bg-navy-800/30 rounded-xl">
                <p className="text-2xl font-semibold text-white">{stage.deal_count}</p>
                <p className="text-xs text-navy-400 capitalize mb-2">{stage.stage?.replace('_', ' ')}</p>
                <p className="text-sm font-mono text-brand-400">{formatCurrency(stage.total_value)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subValue, color }) {
  const colorClasses = {
    brand: { bg: 'bg-brand-500/10', text: 'text-brand-400' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400' },
    green: { bg: 'bg-green-500/10', text: 'text-green-400' },
  };

  const colors = colorClasses[color] || colorClasses.brand;

  return (
    <div className="glass-card p-5">
      <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
        <Icon className={`w-5 h-5 ${colors.text}`} />
      </div>
      <p className="text-3xl font-semibold text-white">{value}</p>
      {subValue && <p className="text-sm text-navy-400 mt-1">{subValue}</p>}
      <p className="text-xs text-navy-500 mt-2">{label}</p>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="text-center py-8">
      <Clock className="w-8 h-8 text-navy-500 mx-auto mb-3" />
      <p className="text-navy-400">{message}</p>
    </div>
  );
}
