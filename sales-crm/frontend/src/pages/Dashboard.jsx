import { 
  TrendingUp, 
  Phone, 
  Building2, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { useWeeklyReview, usePipeline, useActivities } from '../hooks/useApi';

export default function Dashboard({ onNavigate }) {
  const { data: weeklyData, isLoading: weeklyLoading } = useWeeklyReview();
  const { data: pipelineData, isLoading: pipelineLoading } = usePipeline();
  const { data: activities, isLoading: activitiesLoading } = useActivities({ limit: 10 });

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">
          Dashboard
        </h1>
        <p className="text-navy-400">
          Your sales command center — track accounts, calls, and pipeline at a glance.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Pipeline"
          value={formatCurrency(pipelineData?.totals?.total_value)}
          subValue={`${pipelineData?.totals?.total_deals || 0} deals`}
          icon={DollarSign}
          trend="+12%"
          trendUp
          className="glow-green"
        />
        <StatCard
          label="Calls This Week"
          value={weeklyData?.stats?.total_calls || 0}
          subValue={`${Math.round(weeklyData?.stats?.total_call_minutes || 0)} mins`}
          icon={Phone}
          trend="+8%"
          trendUp
        />
        <StatCard
          label="Accounts Touched"
          value={weeklyData?.stats?.accounts_touched || 0}
          subValue={`${weeklyData?.stats?.total_activities || 0} activities`}
          icon={Building2}
        />
        <StatCard
          label="Weighted Pipeline"
          value={formatCurrency(pipelineData?.totals?.weighted_value)}
          subValue="Probability-weighted"
          icon={TrendingUp}
          className="glow-blue"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
            <button 
              onClick={() => onNavigate('accounts')}
              className="text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              View all →
            </button>
          </div>

          {activitiesLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-20 bg-navy-800/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : activities?.length > 0 ? (
            <div className="space-y-4">
              {activities.slice(0, 5).map((activity) => (
                <ActivityCard 
                  key={activity.id} 
                  activity={activity} 
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={Phone}
              title="No recent activity"
              description="Sync your Sybill calls to see activity here"
              action="Sync Calls"
              onAction={() => onNavigate('sync')}
            />
          )}
        </div>

        {/* Deals at Risk */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-semibold text-white">Attention Needed</h2>
          </div>

          {weeklyLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-navy-800/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : weeklyData?.stuckDeals?.length > 0 ? (
            <div className="space-y-3">
              {weeklyData.stuckDeals.slice(0, 5).map((deal) => (
                <div 
                  key={deal.id}
                  className="p-3 bg-navy-800/30 rounded-xl border border-yellow-500/20"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-white text-sm">{deal.name}</p>
                      <p className="text-xs text-navy-400">{deal.account_name}</p>
                    </div>
                    <span className="badge-yellow text-[10px]">
                      {Math.round(deal.days_since_activity || 0)}d ago
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs text-navy-500 capitalize">{deal.stage}</span>
                    <span className="text-xs text-navy-600">•</span>
                    <span className="text-xs font-mono text-brand-400">
                      {formatCurrency(deal.deal_size)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-brand-400" />
              </div>
              <p className="text-sm text-navy-400">All deals are on track!</p>
            </div>
          )}
        </div>
      </div>

      {/* Pipeline by Stage */}
      {pipelineData?.stages && (
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Pipeline by Stage</h2>
          <div className="flex gap-2">
            {pipelineData.stages.map((stage, i) => (
              <div 
                key={stage.stage}
                className="flex-1 group cursor-pointer"
                onClick={() => onNavigate('pipeline')}
              >
                <div 
                  className="h-16 rounded-xl bg-gradient-to-t from-brand-500/10 to-brand-500/30 flex items-end justify-center pb-2 transition-all group-hover:from-brand-500/20 group-hover:to-brand-500/40"
                  style={{ 
                    opacity: 0.4 + (stage.total_value / Math.max(...pipelineData.stages.map(s => s.total_value || 1))) * 0.6 
                  }}
                >
                  <span className="text-xs font-mono text-brand-400">
                    {formatCurrency(stage.total_value)}
                  </span>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs text-navy-400 capitalize truncate">{stage.stage}</p>
                  <p className="text-[10px] text-navy-500">{stage.deal_count} deals</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, subValue, icon: Icon, trend, trendUp, className = '' }) {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-400" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trendUp ? 'text-brand-400' : 'text-red-400'}`}>
            {trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {trend}
          </div>
        )}
      </div>
      <p className="stat-value text-white">{value}</p>
      <p className="text-sm text-navy-400 mt-1">{subValue}</p>
      <p className="text-xs text-navy-500 mt-2">{label}</p>
    </div>
  );
}

function ActivityCard({ activity, onNavigate }) {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'call': return Phone;
      case 'email': return Clock;
      default: return Clock;
    }
  };

  const Icon = getActivityIcon(activity.activity_type);

  return (
    <div 
      className="flex items-start gap-4 p-4 bg-navy-800/30 rounded-xl hover:bg-navy-800/50 transition-colors cursor-pointer"
      onClick={() => activity.account_id && onNavigate('account-detail', { accountId: activity.account_id })}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        activity.activity_type === 'call' ? 'bg-brand-500/20' : 'bg-blue-500/20'
      }`}>
        <Icon className={`w-5 h-5 ${
          activity.activity_type === 'call' ? 'text-brand-400' : 'text-blue-400'
        }`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-white text-sm truncate">{activity.title}</p>
            <p className="text-xs text-navy-400">{activity.account_name || 'Unknown Account'}</p>
          </div>
          <span className="text-[10px] text-navy-500 whitespace-nowrap">
            {new Date(activity.activity_date).toLocaleDateString()}
          </span>
        </div>
        {activity.summary && (
          <p className="text-xs text-navy-400 mt-2 line-clamp-2">{activity.summary}</p>
        )}
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, title, description, action, onAction }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-2xl bg-navy-800 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-navy-500" />
      </div>
      <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-navy-400 mb-6">{description}</p>
      {action && onAction && (
        <button onClick={onAction} className="btn-primary">
          {action}
        </button>
      )}
    </div>
  );
}
