import { useState, useEffect } from 'react';
import { api } from '../lib/api';
import { Settings as SettingsIcon, Key, RefreshCw, Check, AlertCircle } from 'lucide-react';

export default function Settings() {
  const [token, setToken] = useState('');
  const [savedToken, setSavedToken] = useState(false);
  const [lastSync, setLastSync] = useState(null);
  const [syncStatus, setSyncStatus] = useState(null);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await api.getSyncSettings();
      setSavedToken(!!data.sybill_token);
      setLastSync(data.last_sync);
      setSyncStatus(data.sync_status);
    } catch (err) {
      console.error('Failed to load settings:', err);
    }
  }

  async function saveToken() {
    if (!token.trim()) return;
    
    setSaving(true);
    setError(null);
    try {
      await api.saveSyncSettings({ sybill_token: token });
      setSavedToken(true);
      setToken('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function syncAll() {
    setSyncing(true);
    setSyncResult(null);
    setError(null);
    
    try {
      const result = await api.syncAllCalls({ maxCalls: 100 });
      setSyncResult(result);
      loadSettings();
    } catch (err) {
      setError(err.message);
    } finally {
      setSyncing(false);
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-brand-400" />
          Settings
        </h1>
        <p className="text-navy-400">Configure your integrations and sync preferences</p>
      </div>

      {/* Sybill Integration */}
      <div className="glass-card p-8">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Key className="w-5 h-5 text-brand-400" />
          Sybill Integration
        </h2>

        <div className="space-y-6">
          {/* Token Status */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-navy-800/50">
            {savedToken ? (
              <>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Token saved</p>
                  <p className="text-sm text-navy-400">Your Sybill API token is configured</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-medium">No token saved</p>
                  <p className="text-sm text-navy-400">Add your Sybill token to enable sync</p>
                </div>
              </>
            )}
          </div>

          {/* Token Input */}
          <div>
            <label className="block text-sm font-medium text-navy-300 mb-2">
              {savedToken ? 'Update Token' : 'Sybill Auth Token'}
            </label>
            <textarea
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your Bearer token from Sybill (without 'Bearer ' prefix)"
              className="input-field h-24 font-mono text-xs"
            />
            <p className="text-xs text-navy-500 mt-2">
              Get your token from Sybill: Open Developer Tools → Network tab → Copy the Bearer token from any API request
            </p>
          </div>

          <button
            onClick={saveToken}
            disabled={saving || !token.trim()}
            className="btn-primary"
          >
            {saving ? 'Saving...' : savedToken ? 'Update Token' : 'Save Token'}
          </button>
        </div>
      </div>

      {/* Sync Controls */}
      <div className="glass-card p-8">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-brand-400" />
          Sync All Calls
        </h2>

        <div className="space-y-6">
          {/* Last Sync Status */}
          {lastSync && (
            <div className="p-4 rounded-xl bg-navy-800/50">
              <p className="text-sm text-navy-400">
                Last sync: <span className="text-white">{new Date(lastSync).toLocaleString()}</span>
              </p>
              {syncStatus && (
                <p className="text-sm text-navy-400 mt-1">
                  Status: <span className={syncStatus === 'completed' ? 'text-green-400' : 'text-amber-400'}>{syncStatus}</span>
                </p>
              )}
            </div>
          )}

          {/* Sync Button */}
          <div>
            <button
              onClick={syncAll}
              disabled={syncing || !savedToken}
              className={`btn-primary flex items-center gap-2 ${syncing ? 'opacity-50' : ''}`}
            >
              <RefreshCw className={`w-4 h-4 ${syncing ? 'animate-spin' : ''}`} />
              {syncing ? 'Syncing...' : 'Sync All Calls from Sybill'}
            </button>
            {!savedToken && (
              <p className="text-xs text-amber-400 mt-2">Save your token first to enable sync</p>
            )}
          </div>

          {/* Sync Result */}
          {syncResult && (
            <div className="p-4 rounded-xl bg-navy-800/50 space-y-2">
              <p className="text-white font-medium">Sync Complete!</p>
              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-navy-400">Total Calls</p>
                  <p className="text-2xl font-bold text-white">{syncResult.total}</p>
                </div>
                <div>
                  <p className="text-navy-400">Synced</p>
                  <p className="text-2xl font-bold text-green-400">{syncResult.synced}</p>
                </div>
                <div>
                  <p className="text-navy-400">Skipped</p>
                  <p className="text-2xl font-bold text-navy-300">{syncResult.skipped}</p>
                </div>
                <div>
                  <p className="text-navy-400">Accounts</p>
                  <p className="text-2xl font-bold text-brand-400">{syncResult.accounts}</p>
                </div>
              </div>
              {syncResult.errors?.length > 0 && (
                <div className="mt-4 p-3 rounded bg-red-500/10 text-red-400 text-sm">
                  <p className="font-medium">Errors:</p>
                  {syncResult.errors.slice(0, 5).map((e, i) => (
                    <p key={i} className="text-xs mt-1">{e.callId}: {e.error}</p>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 text-red-400">
              <p className="font-medium">Error</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
