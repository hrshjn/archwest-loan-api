import { useState } from 'react';
import { 
  RefreshCw, 
  Link, 
  Key,
  CheckCircle,
  AlertCircle,
  Loader2,
  Phone,
  Building2,
  Users,
} from 'lucide-react';
import { api } from '../lib/api';

export default function SyncCalls({ onNavigate }) {
  const [callIdOrUrl, setCallIdOrUrl] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [syncing, setSyncing] = useState(false);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Extract call ID from URL or use as-is
  const extractCallId = (input) => {
    // Check if it's a URL
    const urlMatch = input.match(/calls\/([a-f0-9-]+)/i);
    if (urlMatch) return urlMatch[1];
    
    // Check if it looks like a UUID
    const uuidMatch = input.match(/^[a-f0-9-]{36}$/i);
    if (uuidMatch) return input;
    
    return input.trim();
  };

  const handlePreview = async () => {
    setError(null);
    setResult(null);
    setPreview(null);

    const callId = extractCallId(callIdOrUrl);
    if (!callId) {
      setError('Please enter a call ID or Sybill call URL');
      return;
    }

    if (!authToken) {
      setError('Please enter your Sybill auth token');
      return;
    }

    setSyncing(true);
    try {
      const data = await api.previewSybillCall(callId, authToken);
      setPreview(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setSyncing(false);
    }
  };

  const handleSync = async () => {
    setError(null);
    setResult(null);

    const callId = extractCallId(callIdOrUrl);
    if (!callId) {
      setError('Please enter a call ID or Sybill call URL');
      return;
    }

    if (!authToken) {
      setError('Please enter your Sybill auth token');
      return;
    }

    setSyncing(true);
    try {
      const data = await api.syncSybillCall(callId, authToken);
      setResult(data);
      setPreview(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">Sync Sybill Calls</h1>
        <p className="text-navy-400">
          Import meeting data from Sybill including transcripts, summaries, and participant info
        </p>
      </div>

      {/* Instructions */}
      <div className="glass-card p-6">
        <h2 className="font-semibold text-white mb-4">How to sync a call</h2>
        <ol className="space-y-3 text-sm text-navy-300">
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
            <span>Open the call in Sybill and copy the URL (e.g., <code className="text-brand-400 bg-navy-800 px-2 py-0.5 rounded">https://app.sybill.ai/call/62282192-60a5-...</code>)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
            <span>Get your auth token from Sybill (open Developer Tools → Network tab → copy Bearer token from any API request)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
            <span>Paste both values below and click "Preview" to see the data, then "Sync" to import</span>
          </li>
        </ol>
      </div>

      {/* Form */}
      <div className="glass-card p-6 space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm text-navy-400 mb-2">
            <Link className="w-4 h-4" />
            Call ID or Sybill URL
          </label>
          <input
            type="text"
            value={callIdOrUrl}
            onChange={(e) => setCallIdOrUrl(e.target.value)}
            className="input-field font-mono text-sm"
            placeholder="https://app.sybill.ai/call/62282192-60a5-4b9e-b0e5-... or just the ID"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm text-navy-400 mb-2">
            <Key className="w-4 h-4" />
            Sybill Auth Token (Bearer)
          </label>
          <textarea
            value={authToken}
            onChange={(e) => setAuthToken(e.target.value)}
            className="input-field font-mono text-xs h-24 resize-none"
            placeholder="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6..."
          />
          <p className="text-xs text-navy-500 mt-2">
            Your token is not stored and is only used for this sync operation
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePreview}
            disabled={syncing}
            className="btn-secondary flex-1"
          >
            {syncing && !preview ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4" />
            )}
            Preview Data
          </button>
          <button
            onClick={handleSync}
            disabled={syncing}
            className="btn-primary flex-1"
          >
            {syncing && preview ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CheckCircle className="w-4 h-4" />
            )}
            Sync to CRM
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="glass-card p-4 border border-red-500/30 bg-red-500/10">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-400">{error}</p>
          </div>
        </div>
      )}

      {/* Success */}
      {result && (
        <div className="glass-card p-6 border border-brand-500/30 bg-brand-500/10">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-brand-400" />
            <div>
              <p className="font-semibold text-white">
                {result.status === 'synced' ? 'Call synced successfully!' : 'Call already synced'}
              </p>
              <p className="text-sm text-navy-400">
                Activity ID: <code className="text-brand-400">{result.activityId}</code>
              </p>
            </div>
          </div>
          {result.accountId && (
            <button
              onClick={() => onNavigate('account-detail', { accountId: result.accountId })}
              className="btn-secondary"
            >
              <Building2 className="w-4 h-4" />
              View Account
            </button>
          )}
        </div>
      )}

      {/* Preview */}
      {preview?.parsed && (
        <div className="glass-card p-6">
          <h3 className="font-semibold text-white mb-4">Preview: Data to be synced</h3>
          
          {/* Meeting Info */}
          <div className="bg-navy-800/50 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-brand-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white">{preview.parsed.title}</h4>
                <p className="text-sm text-navy-400">
                  {preview.parsed.activity_date && new Date(preview.parsed.activity_date).toLocaleString()}
                  {preview.parsed.duration_seconds && ` • ${Math.round(preview.parsed.duration_seconds / 60)} minutes`}
                </p>
              </div>
              <span className="badge-blue capitalize">{preview.parsed.meeting_type}</span>
            </div>
          </div>

          {/* Company */}
          {preview.parsed.external_company_name && (
            <div className="flex items-center gap-3 mb-4 p-3 bg-navy-800/30 rounded-xl">
              <Building2 className="w-5 h-5 text-brand-400" />
              <div>
                <p className="text-sm text-navy-400">Account</p>
                <p className="font-medium text-white">{preview.parsed.external_company_name}</p>
                <p className="text-xs text-navy-500">{preview.parsed.external_company_domain}</p>
              </div>
            </div>
          )}

          {/* Participants */}
          {preview.parsed.participants?.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-navy-400" />
                <p className="text-sm text-navy-400">Participants ({preview.parsed.participants.length})</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {preview.parsed.participants.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-navy-800/30 rounded-lg">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
                      p.isInternal ? 'bg-brand-500/20 text-brand-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {p.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{p.name}</p>
                      <p className="text-xs text-navy-500 truncate">{p.email}</p>
                    </div>
                    <span className={`text-[10px] ${p.isInternal ? 'text-brand-400' : 'text-blue-400'}`}>
                      {p.isInternal ? 'Internal' : 'External'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          {preview.parsed.outcome && (
            <div className="p-4 bg-navy-800/30 rounded-xl">
              <p className="text-sm text-navy-400 mb-2">Summary</p>
              <p className="text-navy-200 leading-relaxed">{preview.parsed.outcome}</p>
            </div>
          )}

          {/* Pain Points */}
          {preview.parsed.pain_points && (
            <div className="mt-4">
              <p className="text-sm text-navy-400 mb-2">Pain Points</p>
              <div className="flex flex-wrap gap-2">
                {JSON.parse(preview.parsed.pain_points).slice(0, 5).map((point, i) => (
                  <span key={i} className="badge-yellow text-xs">{point.slice(0, 40)}...</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
