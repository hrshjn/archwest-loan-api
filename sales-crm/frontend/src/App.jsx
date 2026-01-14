import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import AccountDetail from './pages/AccountDetail';
import Pipeline from './pages/Pipeline';
import WeeklyReview from './pages/WeeklyReview';
import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';

export default function App() {
  // Default to accounts page - this is the main entry point
  const [currentPage, setCurrentPage] = useState('accounts');
  const [selectedAccountId, setSelectedAccountId] = useState(null);

  const navigateTo = (page, params = {}) => {
    if (params.accountId) {
      setSelectedAccountId(params.accountId);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={navigateTo} />;
      case 'accounts':
        return <Accounts onNavigate={navigateTo} />;
      case 'account-detail':
        return <AccountDetail accountId={selectedAccountId} onNavigate={navigateTo} />;
      case 'pipeline':
        return <Pipeline onNavigate={navigateTo} />;
      case 'weekly-review':
        return <WeeklyReview onNavigate={navigateTo} />;
      case 'settings':
        return <Settings onNavigate={navigateTo} />;
      default:
        return <Accounts onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-navy-950">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 pointer-events-none" />
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <Sidebar currentPage={currentPage} onNavigate={navigateTo} />
      
      <main className="flex-1 ml-64 relative z-10">
        <div className="p-8 max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
