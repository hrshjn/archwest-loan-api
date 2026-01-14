import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => {
  if (!res.ok) throw new Error('API error');
  return res.json();
});

export function useAccounts() {
  return useSWR('/api/accounts', fetcher);
}

export function useAccount(id) {
  return useSWR(id ? `/api/accounts/${id}` : null, fetcher);
}

export function useActivities(params = {}) {
  const query = new URLSearchParams(params).toString();
  return useSWR(`/api/activities${query ? `?${query}` : ''}`, fetcher);
}

export function useDeals(params = {}) {
  const query = new URLSearchParams(params).toString();
  return useSWR(`/api/deals${query ? `?${query}` : ''}`, fetcher);
}

export function usePipeline() {
  return useSWR('/api/deals/pipeline', fetcher);
}

export function useWeeklyReview(params = {}) {
  const query = new URLSearchParams(params).toString();
  return useSWR(`/api/reviews/weekly${query ? `?${query}` : ''}`, fetcher);
}

export function useAccountReview(id) {
  return useSWR(id ? `/api/reviews/account/${id}` : null, fetcher);
}
