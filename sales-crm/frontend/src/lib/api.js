const API_BASE = '/api';

async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: response.statusText }));
    throw new Error(error.error || 'API request failed');
  }

  return response.json();
}

export const api = {
  // Accounts
  getAccounts: () => fetchAPI('/accounts'),
  getAccount: (id) => fetchAPI(`/accounts/${id}`),
  getAccountByDomain: (domain) => fetchAPI(`/accounts/by-domain/${encodeURIComponent(domain)}`),
  createAccount: (data) => fetchAPI('/accounts', { method: 'POST', body: JSON.stringify(data) }),
  updateAccount: (id, data) => fetchAPI(`/accounts/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),

  // Activities
  getActivities: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchAPI(`/activities${query ? `?${query}` : ''}`);
  },
  getActivity: (id) => fetchAPI(`/activities/${id}`),
  createActivity: (data) => fetchAPI('/activities', { method: 'POST', body: JSON.stringify(data) }),

  // Deals
  getDeals: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchAPI(`/deals${query ? `?${query}` : ''}`);
  },
  getDeal: (id) => fetchAPI(`/deals/${id}`),
  getPipeline: () => fetchAPI('/deals/pipeline'),
  createDeal: (data) => fetchAPI('/deals', { method: 'POST', body: JSON.stringify(data) }),
  updateDeal: (id, data) => fetchAPI(`/deals/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),

  // Reviews
  getWeeklyReview: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchAPI(`/reviews/weekly${query ? `?${query}` : ''}`);
  },
  getAccountReview: (id) => fetchAPI(`/reviews/account/${id}`),

  // Sync
  syncSybillCall: (callId, authToken) =>
    fetchAPI('/sync/sybill/call', {
      method: 'POST',
      body: JSON.stringify({ call_id: callId, auth_token: authToken }),
    }),
  previewSybillCall: (callId, authToken) =>
    fetchAPI(`/sync/sybill/call/${callId}/preview`, {
      headers: { 'x-sybill-token': authToken },
    }),
  
  // Sync All - bulk import
  syncAllCalls: (options = {}) =>
    fetchAPI('/sync/sybill/all', {
      method: 'POST',
      body: JSON.stringify(options),
    }),
  
  // Settings
  getSyncSettings: () => fetchAPI('/sync/settings'),
  saveSyncSettings: (settings) =>
    fetchAPI('/sync/settings', {
      method: 'POST',
      body: JSON.stringify(settings),
    }),
};
