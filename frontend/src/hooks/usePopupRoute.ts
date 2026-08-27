import { useEventListener } from "@vueuse/core";
import type { Ref } from "vue";
import { watch } from "vue";

import {
  isPopupHistoryState,
  pushPopupHistoryState,
} from "@/utils/popupHistory";

export const usePopupRoute = (popupController: Ref<boolean>) => {
  // 监听打开弹窗，添加一条路由记录
  watch(popupController, (newValue) => {
    if (newValue) {
      pushPopupHistoryState();
    }
  });

  // 监听浏览器的 popstate 事件关闭弹窗
  useEventListener(window, "popstate", (event) => {
    if (!popupController.value) return;

    if (isPopupHistoryState((event as PopStateEvent).state ?? {})) return;

    popupController.value = false;
  });
};
