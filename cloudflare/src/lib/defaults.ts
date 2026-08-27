import type { RoutingTemplateConfig, TemplateRecord } from "../types";

export const DEFAULT_TEMPLATE_ID = "acl4ssr-mihomo";

const TEST_URL = "https://www.gstatic.com/generate_204";

const baseGroups = [
  { name: "🚀 节点选择", type: "select", proxies: ["♻️ 自动选择", "🚀 手动切换", "DIRECT"] },
  { name: "♻️ 自动选择", type: "url-test", proxies: ["$all"], url: TEST_URL, interval: 300, tolerance: 50 },
  { name: "🚀 手动切换", type: "select", proxies: ["$all"] },
  { name: "🌏 国外媒体", type: "select", proxies: ["🚀 节点选择", "♻️ 自动选择", "🚀 手动切换", "DIRECT"] },
  { name: "💬 AI 服务", type: "select", proxies: ["🚀 节点选择", "♻️ 自动选择", "🚀 手动切换", "DIRECT"] },
  { name: "Ⓜ️ 微软服务", type: "select", proxies: ["DIRECT", "🚀 节点选择", "♻️ 自动选择"] },
  { name: "🍎 苹果服务", type: "select", proxies: ["DIRECT", "🚀 节点选择", "♻️ 自动选择"] },
  { name: "🎯 全球直连", type: "select", proxies: ["DIRECT", "🚀 节点选择"] },
  { name: "🛑 全球拦截", type: "select", proxies: ["REJECT", "DIRECT"] },
  { name: "🐟 漏网之鱼", type: "select", proxies: ["🚀 节点选择", "DIRECT"] },
];

const defaultDns = {
  enable: true,
  ipv6: false,
  "enhanced-mode": "fake-ip",
  nameserver: ["https://doh.pub/dns-query", "https://dns.alidns.com/dns-query"],
};

function provider(url: string, behavior: "domain" | "ipcidr" | "classical" = "classical") {
  return {
    type: "http",
    behavior,
    url,
    path: `./ruleset/${url.split("/").pop() || "ruleset"}`,
    interval: 86400,
  };
}

function acl4ssrRaw(name: string) {
  return `https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/${name}.list`;
}

function loyalSoldier(name: string) {
  return `https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/${name}.txt`;
}

function blackmatrix(name: string) {
  return `https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/${name}/${name}.yaml`;
}

const mihomoBase: Omit<RoutingTemplateConfig, "ruleProviders" | "rules"> = {
  mixedPort: 7890,
  allowLan: false,
  mode: "rule",
  logLevel: "info",
  dns: defaultDns,
  proxyGroups: baseGroups,
};

export const MIHOMO_BASIC_TEMPLATE: RoutingTemplateConfig = {
  ...mihomoBase,
  ruleProviders: {},
  rules: [
    "DOMAIN-SUFFIX,openai.com,💬 AI 服务",
    "DOMAIN-SUFFIX,chatgpt.com,💬 AI 服务",
    "DOMAIN-SUFFIX,anthropic.com,💬 AI 服务",
    "DOMAIN-SUFFIX,claude.ai,💬 AI 服务",
    "DOMAIN-SUFFIX,netflix.com,🌏 国外媒体",
    "DOMAIN-SUFFIX,youtube.com,🌏 国外媒体",
    "DOMAIN-SUFFIX,googlevideo.com,🌏 国外媒体",
    "GEOIP,CN,🎯 全球直连",
    "MATCH,🐟 漏网之鱼",
  ],
};

export const ACL4SSR_TEMPLATE: RoutingTemplateConfig = {
  ...mihomoBase,
  ruleProviders: {
    LocalAreaNetwork: provider(acl4ssrRaw("LocalAreaNetwork")),
    UnBan: provider(acl4ssrRaw("UnBan")),
    BanAD: provider(acl4ssrRaw("BanAD")),
    BanProgramAD: provider(acl4ssrRaw("BanProgramAD")),
    GoogleCN: provider(acl4ssrRaw("GoogleCN")),
    SteamCN: provider(acl4ssrRaw("SteamCN")),
    Microsoft: provider(acl4ssrRaw("Microsoft")),
    Apple: provider(acl4ssrRaw("Apple")),
    Telegram: provider(acl4ssrRaw("Telegram")),
    OpenAI: provider(blackmatrix("OpenAI")),
    YouTube: provider(acl4ssrRaw("Ruleset/YouTube")),
    Netflix: provider(acl4ssrRaw("Ruleset/Netflix")),
    DisneyPlus: provider(acl4ssrRaw("Ruleset/DisneyPlus")),
    ProxyGFWlist: provider(acl4ssrRaw("ProxyGFWlist")),
    ChinaDomain: provider(acl4ssrRaw("ChinaDomain")),
    ChinaCompanyIp: provider(acl4ssrRaw("ChinaCompanyIp")),
    Download: provider(acl4ssrRaw("Download")),
  },
  rules: [
    "RULE-SET,LocalAreaNetwork,DIRECT",
    "RULE-SET,UnBan,DIRECT",
    "RULE-SET,BanAD,🛑 全球拦截",
    "RULE-SET,BanProgramAD,🛑 全球拦截",
    "RULE-SET,GoogleCN,DIRECT",
    "RULE-SET,SteamCN,DIRECT",
    "RULE-SET,Microsoft,Ⓜ️ 微软服务",
    "RULE-SET,Apple,🍎 苹果服务",
    "RULE-SET,Telegram,🚀 节点选择",
    "RULE-SET,OpenAI,💬 AI 服务",
    "RULE-SET,YouTube,🌏 国外媒体",
    "RULE-SET,Netflix,🌏 国外媒体",
    "RULE-SET,DisneyPlus,🌏 国外媒体",
    "RULE-SET,ProxyGFWlist,🚀 节点选择",
    "RULE-SET,ChinaDomain,DIRECT",
    "RULE-SET,ChinaCompanyIp,DIRECT",
    "RULE-SET,Download,DIRECT",
    "GEOIP,CN,🎯 全球直连",
    "MATCH,🐟 漏网之鱼",
  ],
};

const loyalSoldierProviders = {
  reject: provider(loyalSoldier("reject"), "domain"),
  icloud: provider(loyalSoldier("icloud"), "domain"),
  apple: provider(loyalSoldier("apple"), "domain"),
  google: provider(loyalSoldier("google"), "domain"),
  proxy: provider(loyalSoldier("proxy"), "domain"),
  direct: provider(loyalSoldier("direct"), "domain"),
  private: provider(loyalSoldier("private"), "domain"),
  gfw: provider(loyalSoldier("gfw"), "domain"),
  greatfire: provider(loyalSoldier("greatfire"), "domain"),
  "tld-not-cn": provider(loyalSoldier("tld-not-cn"), "domain"),
  telegramcidr: provider(loyalSoldier("telegramcidr"), "ipcidr"),
  cncidr: provider(loyalSoldier("cncidr"), "ipcidr"),
  lancidr: provider(loyalSoldier("lancidr"), "ipcidr"),
  applications: provider(loyalSoldier("applications"), "classical"),
};

export const LOYALSOLDIER_WHITELIST_TEMPLATE: RoutingTemplateConfig = {
  ...mihomoBase,
  ruleProviders: loyalSoldierProviders,
  rules: [
    "RULE-SET,reject,🛑 全球拦截",
    "RULE-SET,icloud,DIRECT",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,google,🚀 节点选择",
    "RULE-SET,proxy,🚀 节点选择",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,private,DIRECT",
    "RULE-SET,gfw,🚀 节点选择",
    "RULE-SET,greatfire,🚀 节点选择",
    "RULE-SET,tld-not-cn,🚀 节点选择",
    "RULE-SET,telegramcidr,🚀 节点选择",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,applications,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,🚀 节点选择",
  ],
};

export const LOYALSOLDIER_BLACKLIST_TEMPLATE: RoutingTemplateConfig = {
  ...LOYALSOLDIER_WHITELIST_TEMPLATE,
  rules: [
    "RULE-SET,reject,🛑 全球拦截",
    "RULE-SET,private,DIRECT",
    "RULE-SET,lancidr,DIRECT",
    "RULE-SET,cncidr,DIRECT",
    "RULE-SET,direct,DIRECT",
    "RULE-SET,applications,DIRECT",
    "RULE-SET,icloud,DIRECT",
    "RULE-SET,apple,DIRECT",
    "RULE-SET,google,🚀 节点选择",
    "RULE-SET,proxy,🚀 节点选择",
    "RULE-SET,gfw,🚀 节点选择",
    "RULE-SET,greatfire,🚀 节点选择",
    "RULE-SET,tld-not-cn,🚀 节点选择",
    "RULE-SET,telegramcidr,🚀 节点选择",
    "GEOIP,CN,DIRECT",
    "MATCH,DIRECT",
  ],
};

export const AI_STREAMING_TEMPLATE: RoutingTemplateConfig = {
  ...mihomoBase,
  ruleProviders: {
    OpenAI: provider(blackmatrix("OpenAI")),
    Claude: provider(blackmatrix("Claude")),
    Gemini: provider(blackmatrix("Gemini")),
    YouTube: provider(blackmatrix("YouTube")),
    Netflix: provider(blackmatrix("Netflix")),
    Disney: provider(blackmatrix("Disney")),
    Spotify: provider(blackmatrix("Spotify")),
    Telegram: provider(blackmatrix("Telegram")),
    GitHub: provider(blackmatrix("GitHub")),
    China: provider(blackmatrix("China")),
  },
  rules: [
    "RULE-SET,OpenAI,💬 AI 服务",
    "RULE-SET,Claude,💬 AI 服务",
    "RULE-SET,Gemini,💬 AI 服务",
    "RULE-SET,YouTube,🌏 国外媒体",
    "RULE-SET,Netflix,🌏 国外媒体",
    "RULE-SET,Disney,🌏 国外媒体",
    "RULE-SET,Spotify,🌏 国外媒体",
    "RULE-SET,Telegram,🚀 节点选择",
    "RULE-SET,GitHub,🚀 节点选择",
    "RULE-SET,China,DIRECT",
    "GEOIP,CN,🎯 全球直连",
    "MATCH,🐟 漏网之鱼",
  ],
};

const labelMap: Record<string, string> = {
  "🚀 节点选择": "节点选择",
  "♻️ 自动选择": "自动选择",
  "🚀 手动切换": "手动切换",
  "🌏 国外媒体": "国外媒体",
  "💬 AI 服务": "AI 服务",
  "Ⓜ️ 微软服务": "微软服务",
  "🍎 苹果服务": "苹果服务",
  "🎯 全球直连": "全球直连",
  "🛑 全球拦截": "全球拦截",
  "🐟 漏网之鱼": "漏网之鱼",
};

function withoutEmojiLabels(input: unknown): unknown {
  if (typeof input === "string") {
    return Object.entries(labelMap).reduce((text, [from, to]) => text.replaceAll(from, to), input);
  }
  if (Array.isArray(input)) return input.map(withoutEmojiLabels);
  if (input && typeof input === "object") {
    return Object.fromEntries(Object.entries(input).map(([key, value]) => [key, withoutEmojiLabels(value)]));
  }
  return input;
}

export const ACL4SSR_NO_EMOJI_TEMPLATE = withoutEmojiLabels(ACL4SSR_TEMPLATE) as RoutingTemplateConfig;

export const BUILTIN_TEMPLATES = [
  { id: "mihomo-basic", name: "Mihomo Basic", target: "mihomo", config: MIHOMO_BASIC_TEMPLATE },
  { id: "acl4ssr-mihomo", name: "ACL4SSR Mihomo", target: "mihomo", config: ACL4SSR_TEMPLATE },
  { id: "acl4ssr-mihomo-no-emoji", name: "ACL4SSR Mihomo 无 Emoji", target: "mihomo", config: ACL4SSR_NO_EMOJI_TEMPLATE },
  { id: "loyalsoldier-whitelist", name: "Loyalsoldier 白名单", target: "mihomo", config: LOYALSOLDIER_WHITELIST_TEMPLATE },
  { id: "loyalsoldier-blacklist", name: "Loyalsoldier 黑名单", target: "mihomo", config: LOYALSOLDIER_BLACKLIST_TEMPLATE },
  { id: "ai-streaming-mihomo", name: "AI + Streaming", target: "mihomo", config: AI_STREAMING_TEMPLATE },
] satisfies Array<Pick<TemplateRecord, "id" | "name" | "target" | "config">>;

export const BUILTIN_TEMPLATE_IDS = new Set(BUILTIN_TEMPLATES.map((template) => template.id));
export const DEFAULT_TEMPLATE_CONFIG = ACL4SSR_TEMPLATE;
