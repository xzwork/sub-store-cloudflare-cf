import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const formatNotifyText = (value: unknown) => {
  if (typeof value === "string") {
    const text = value.trim();
    return text || undefined;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return undefined;
};

const escapeHtml = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const formatNotifyHtml = (value: string) => {
  return escapeHtml(value).replace(/\n/g, "<br/>");
};

export const useAppNotifyStore = defineStore("appNotify", {
  state: (): AppNotifyStoreState => {
    return {
      navBartop: 0,
    };
  },
  getters: {},
  actions: {
    showNotify(settings: NotifySettings) {
      const { title, content, type, duration } = settings;
      const notifyType = type || "primary";
      const fallbackTitle = notifyType === "danger" ? "操作失败" : "通知";
      const safeTitle = formatNotifyText(title) || fallbackTitle;
      const safeContent = formatNotifyText(content);
      let html = `<strong>${formatNotifyHtml(safeTitle)}</strong>`;
      if (safeContent) {
        html += `<br/>${formatNotifyHtml(safeContent)}`;
      }
      // primary，success ，danger，warning
      // info, success, warning, error, default
      const types = {
        primary: "INFO",
        success: "SUCCESS",
        danger: "ERROR",
        warning: "WARNING",
      };
      toast(html, {
        theme: "colored",
        type: toast.TYPE[types[notifyType] || "DEFAULT"],
        position: "top-center",
        transition: "slide",
        dangerouslyHTMLString: true,
        closeButton: true,
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        closeOnClick: false,
        autoClose: duration || 2500,
        style: { zIndex: 65535, paddingTop: this.navBartop + "px" },
      });
    },
  },
});
