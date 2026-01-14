import { useState } from 'react';
import { 
  Building2, 
  Search, 
  Plus,
  Phone,
  Users,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { useAccounts } from '../hooks/useApi';
import { api } from '../lib/api';

export default function Accounts({ onNavigate }) {
  const { data: accounts, isLoading, mutate } = useAccounts();
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredAccounts = accounts?.filter(account => 
    account.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.domain?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (value) => {
    if (!value) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const getStageColor = (stage) => {
    const colors = {
      'prospect': 'badge-gray',
      'discovery': 'badge-blue',
      'qualification': 'badge-blue',
      'demo': 'badge-yellow',
      'proposal': 'badge-yellow',
      'negotiation': 'badge-green',
      'closed_won': 'badge-green',
      'closed_lost': 'badge-red',
    };
    return colors[stage] || 'badge-gray';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Accounts</h1>
          <p className="text-navy-400">
            {accounts?.length || 0} total accounts • {accounts?.filter(a => a.deal_stage !== 'prospect').length || 0} active
          </p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Account
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-500" />
        <input
          type="text"
          placeholder="Search accounts by name or domain..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-12"
        />
      </div>

      {/* Accounts Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-48 bg-navy-800/50 rounded-2xl animate-pulse" />
          ))}
        </div>
      ) : filteredAccounts?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccounts.map((account) => (
            <AccountCard 
              key={account.id} 
              account={account} 
              onClick={() => onNavigate('account-detail', { accountId: account.id })}
              getStageColor={getStageColor}
              formatCurrency={formatCurrency}
            />
          ))}
        </div>
      ) : (
        <EmptyState 
          onNavigate={onNavigate}
          onCreate={() => setShowCreateModal(true)}
        />
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <CreateAccountModal 
          onClose={() => setShowCreateModal(false)}
          onCreated={() => {
            setShowCreateModal(false);
            mutate();
          }}
        />
      )}
    </div>
  );
}

function AccountCard({ account, onClick, getStageColor, formatCurrency }) {
  return (
    <div 
      onClick={onClick}
      className="glass-card-hover p-6 cursor-pointer group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400/20 to-brand-600/20 flex items-center justify-center text-lg font-bold text-brand-400">
            {account.name?.charAt(0).toUpperCase() || '?'}
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-brand-400 transition-colors">
              {account.name}
            </h3>
            <p className="text-xs text-navy-400">{account.domain}</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-navy-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Stage Badge */}
      <div className="mb-4">
        <span className={`${getStageColor(account.deal_stage)} capitalize`}>
          {account.deal_stage?.replace('_', ' ')}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-navy-400 mb-1">
            <Phone className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-wider">Calls</span>
          </div>
          <p className="text-lg font-semibold text-white">{account.activity_count || 0}</p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-navy-400 mb-1">
            <Users className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-wider">Contacts</span>
          </div>
          <p className="text-lg font-semibold text-white">{account.contact_count || 0}</p>
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-navy-400 mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="text-[10px] uppercase tracking-wider">Pipeline</span>
          </div>
          <p className="text-lg font-semibold text-brand-400 font-mono">
            {formatCurrency(account.total_pipeline)}
          </p>
        </div>
      </div>

      {/* Last Activity */}
      {account.last_activity_date && (
        <div className="mt-4 pt-4 border-t border-navy-700/50">
          <p className="text-xs text-navy-500">
            Last activity: {new Date(account.last_activity_date).toLocaleDateString()}
          </p>
        </div>
      )}
    </div>
  );
}

function EmptyState({ onNavigate, onCreate }) {
  return (
    <div className="glass-card p-12 text-center">
      <div className="w-20 h-20 rounded-2xl bg-navy-800 flex items-center justify-center mx-auto mb-6">
        <Building2 className="w-10 h-10 text-navy-500" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">No accounts yet</h3>
      <p className="text-navy-400 mb-8 max-w-md mx-auto">
        Start by syncing your Sybill calls to automatically create accounts from meeting participants, 
        or add an account manually.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => onNavigate('sync')} className="btn-primary">
          Sync Sybill Calls
        </button>
        <button onClick={onCreate} className="btn-secondary">
          Add Manually
        </button>
      </div>
    </div>
  );
}

function CreateAccountModal({ onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    domain: '',
    industry: '',
    revenue_potential: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createAccount({
        ...formData,
        revenue_potential: formData.revenue_potential ? parseFloat(formData.revenue_potential) : 0,
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
        <h2 className="text-xl font-semibold text-white mb-6">Add New Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-navy-400 mb-2">Company Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
              placeholder="Acme Corp"
            />
          </div>
          
          <div>
            <label className="block text-sm text-navy-400 mb-2">Domain</label>
            <input
              type="text"
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className="input-field"
              placeholder="acme.com"
            />
          </div>
          
          <div>
            <label className="block text-sm text-navy-400 mb-2">Industry</label>
            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="input-field"
              placeholder="Technology"
            />
          </div>
          
          <div>
            <label className="block text-sm text-navy-400 mb-2">Revenue Potential ($)</label>
            <input
              type="number"
              value={formData.revenue_potential}
              onChange={(e) => setFormData({ ...formData, revenue_potential: e.target.value })}
              className="input-field"
              placeholder="50000"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary flex-1">
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
