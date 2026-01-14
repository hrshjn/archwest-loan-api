import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign,
  Filter,
  ChevronRight,
} from 'lucide-react';
import { usePipeline, useDeals } from '../hooks/useApi';
import { api } from '../lib/api';

const STAGES = [
  { id: 'discovery', label: 'Discovery', color: 'from-blue-500/20 to-blue-600/20', borderColor: 'border-blue-500/30' },
  { id: 'qualification', label: 'Qualification', color: 'from-indigo-500/20 to-indigo-600/20', borderColor: 'border-indigo-500/30' },
  { id: 'demo', label: 'Demo', color: 'from-purple-500/20 to-purple-600/20', borderColor: 'border-purple-500/30' },
  { id: 'proposal', label: 'Proposal', color: 'from-yellow-500/20 to-yellow-600/20', borderColor: 'border-yellow-500/30' },
  { id: 'negotiation', label: 'Negotiation', color: 'from-orange-500/20 to-orange-600/20', borderColor: 'border-orange-500/30' },
  { id: 'closed_won', label: 'Closed Won', color: 'from-green-500/20 to-green-600/20', borderColor: 'border-green-500/30' },
];

export default function Pipeline({ onNavigate }) {
  const { data: pipelineData, isLoading: pipelineLoading } = usePipeline();
  const { data: deals, isLoading: dealsLoading, mutate } = useDeals({ status: 'active' });
  const [draggedDeal, setDraggedDeal] = useState(null);

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      notation: 'compact',
    }).format(value);
  };

  const getDealsByStage = (stageId) => {
    return deals?.filter(d => d.stage === stageId) || [];
  };

  const getStageTotal = (stageId) => {
    return pipelineData?.stages?.find(s => s.stage === stageId)?.total_value || 0;
  };

  const handleDragStart = (e, deal) => {
    setDraggedDeal(deal);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e, newStage) => {
    e.preventDefault();
    if (!draggedDeal || draggedDeal.stage === newStage) {
      setDraggedDeal(null);
      return;
    }

    try {
      await api.updateDeal(draggedDeal.id, { stage: newStage });
      mutate();
    } catch (error) {
      console.error('Failed to update deal:', error);
    }
    setDraggedDeal(null);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Pipeline</h1>
          <p className="text-navy-400">
            Drag deals between stages to update their status
          </p>
        </div>
        <div className="flex items-center gap-4">
          {pipelineData?.totals && (
            <div className="glass-card px-5 py-3 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-400" />
                <div>
                  <p className="text-xs text-navy-400">Total Pipeline</p>
                  <p className="text-lg font-semibold text-white font-mono">
                    {formatCurrency(pipelineData.totals.total_value)}
                  </p>
                </div>
              </div>
              <div className="w-px h-10 bg-navy-700" />
              <div>
                <p className="text-xs text-navy-400">Weighted</p>
                <p className="text-lg font-semibold text-brand-400 font-mono">
                  {formatCurrency(pipelineData.totals.weighted_value)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Pipeline Board */}
      {(pipelineLoading || dealsLoading) ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STAGES.map(stage => (
            <div key={stage.id} className="flex-shrink-0 w-72 h-96 bg-navy-800/50 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STAGES.map(stage => (
            <div
              key={stage.id}
              className={`flex-shrink-0 w-72 glass-card p-4 transition-all ${
                draggedDeal && draggedDeal.stage !== stage.id ? 'ring-2 ring-brand-500/50' : ''
              }`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, stage.id)}
            >
              {/* Stage Header */}
              <div className={`rounded-xl bg-gradient-to-r ${stage.color} border ${stage.borderColor} p-3 mb-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-white">{stage.label}</h3>
                  <span className="text-xs text-navy-400">
                    {getDealsByStage(stage.id).length} deals
                  </span>
                </div>
                <p className="text-lg font-semibold text-white font-mono mt-1">
                  {formatCurrency(getStageTotal(stage.id))}
                </p>
              </div>

              {/* Deals */}
              <div className="space-y-3 max-h-[500px] overflow-y-auto">
                {getDealsByStage(stage.id).map(deal => (
                  <DealCard
                    key={deal.id}
                    deal={deal}
                    onDragStart={handleDragStart}
                    formatCurrency={formatCurrency}
                    onNavigate={onNavigate}
                  />
                ))}
                {getDealsByStage(stage.id).length === 0 && (
                  <div className="text-center py-8 text-navy-500 text-sm">
                    No deals in this stage
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats Row */}
      {pipelineData?.stages && (
        <div className="glass-card p-6">
          <h3 className="font-semibold text-white mb-4">Pipeline Distribution</h3>
          <div className="flex items-end gap-1 h-32">
            {STAGES.map(stage => {
              const stageData = pipelineData.stages.find(s => s.stage === stage.id);
              const maxValue = Math.max(...pipelineData.stages.map(s => s.total_value || 0), 1);
              const height = stageData ? (stageData.total_value / maxValue) * 100 : 0;
              
              return (
                <div key={stage.id} className="flex-1 flex flex-col items-center">
                  <div 
                    className={`w-full bg-gradient-to-t ${stage.color} rounded-t-lg transition-all`}
                    style={{ height: `${Math.max(height, 4)}%` }}
                  />
                  <p className="text-[10px] text-navy-400 mt-2 text-center">{stage.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function DealCard({ deal, onDragStart, formatCurrency, onNavigate }) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, deal)}
      onClick={() => deal.account_id && onNavigate('account-detail', { accountId: deal.account_id })}
      className="group bg-navy-800/50 rounded-xl p-3 cursor-move hover:bg-navy-800 transition-colors border border-transparent hover:border-navy-700"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-white text-sm truncate group-hover:text-brand-400 transition-colors">
            {deal.name}
          </p>
          <p className="text-xs text-navy-400 truncate">{deal.account_name}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-navy-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-mono text-brand-400">
          {formatCurrency(deal.deal_size)}
        </span>
        <span className="text-[10px] text-navy-500">{deal.probability}%</span>
      </div>
      {deal.last_activity_date && (
        <p className="text-[10px] text-navy-500 mt-2">
          Last activity: {new Date(deal.last_activity_date).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
