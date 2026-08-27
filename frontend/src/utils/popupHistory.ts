export const POPUP_HISTORY_KEY = "subStorePopup";

const getHistoryState = () => {
  if (typeof window === "undefined") return {};
  return window.history.state || {};
};

export const pushPopupHistoryState = () => {
  if (typeof window === "undefined") return;

  window.history.pushState(
    {
      ...getHistoryState(),
      [POPUP_HISTORY_KEY]: true,
    },
    "",
    "",
  );
};

export const isPopupHistoryState = (state = getHistoryState()) => {
  return Boolean(state?.[POPUP_HISTORY_KEY]);
};
