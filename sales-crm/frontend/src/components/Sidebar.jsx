import {
  LayoutDashboard,
  Building2,
  TrendingUp,
  Calendar,
  Mic,
  Settings,
  Zap,
} from 'lucide-react';

const navItems = [
  { id: 'accounts', label: 'Accounts', icon: Building2 },
  { id: 'pipeline', label: 'Pipeline', icon: TrendingUp },
  { id: 'weekly-review', label: 'Weekly Review', icon: Calendar },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-navy-900/50 backdrop-blur-xl border-r border-navy-800/50 z-20 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-navy-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-navy-950" />
          </div>
          <div>
            <h1 className="font-display font-semibold text-lg text-white">Sales HQ</h1>
            <p className="text-xs text-navy-400">Command Center</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                ${isActive 
                  ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' 
                  : 'text-navy-400 hover:bg-navy-800/50 hover:text-navy-200'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-brand-400" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Voice Agent Section */}
      <div className="p-4 border-t border-navy-800/50">
        <div className="glass-card p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Mic className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Voice Updates</p>
              <p className="text-xs text-navy-400">Record your day</p>
            </div>
          </div>
          <button className="btn-secondary w-full text-sm">
            <Mic className="w-4 h-4" />
            Start Recording
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-navy-800/50">
        <button 
          onClick={() => onNavigate('settings')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
            ${currentPage === 'settings'
              ? 'bg-brand-500/20 text-brand-400 border border-brand-500/30' 
              : 'text-navy-400 hover:bg-navy-800/50 hover:text-navy-200'
            }`}
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
