import { createI18n } from "vue-i18n";

import en from "./en";
import { getInitialLocale } from "./languages";
import zh from "./zh";

const i18n = createI18n({
  locale: getInitialLocale(), // 初始化配置语言
  messages: {
    zh,
    en,
  },
});

export default i18n;
