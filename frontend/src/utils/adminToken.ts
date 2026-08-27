export const ADMIN_TOKEN_STORAGE_KEY = 'substore_admin_token';

export const syncAdminTokenFromUrl = () => {
  if (typeof window === 'undefined') return;

  const url = new URL(window.location.href);
  const token = url.searchParams.get('token');
  if (!token) return;

  localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, token);
  url.searchParams.delete('token');
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
};

export const getStoredAdminToken = () => {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY) || '';
};

export const setStoredAdminToken = (token: string) => {
  if (typeof window === 'undefined') return;

  const normalized = token.trim();
  if (normalized) {
    localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, normalized);
  } else {
    localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
  }
};
