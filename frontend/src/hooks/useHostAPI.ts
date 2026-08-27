import { computed } from 'vue';

export const getHostAPIUrl = (): string => {
  return (import.meta.env.VITE_API_URL || '/').replace(/\/$/, '') || '/';
};

export const useHostAPI = () => {
  const currentUrl = computed(() => {
    const url = getHostAPIUrl();
    return url.startsWith('/') ? `${window.location.origin}${url}` : url;
  });

  return {
    currentUrl,
  };
};
