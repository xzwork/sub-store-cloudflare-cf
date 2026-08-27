// Generated from locally vendored upstream Mihomo configurations on 2026-08-27.
// Each entry remains an independent selectable template; none are merged.
// See NOTICE.md in this directory for sources, adaptation notes, and licenses.
import type { RoutingTemplateConfig } from "../../types";

export const VENDORED_ROUTING_TEMPLATES: Record<string, RoutingTemplateConfig> = {
  "aethersailor-standard": {
    "proxy-groups": [
      {
        "name": "🚀 手动选择",
        "type": "select",
        "proxies": [
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🌐 社交媒体",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🤖 ChatGPT",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🤖 AI服务",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎶 TikTok",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "📹 YouTube",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 Netflix",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 HBO",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 AppleTV+",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🎥 Emby",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎻 Spotify",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "📺 Bahamut",
        "type": "select",
        "proxies": [
          "🇼🇸 台湾节点",
          "🚀 手动选择",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🌎 国外媒体",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🛒 国外电商",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ]
      },
      {
        "name": "🇬 谷歌服务",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 手动选择",
      "RULE-SET,Custom_Proxy_IP,🚀 手动选择,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,gfw,🚀 手动选择",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    }
  },
  "aethersailor-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌐 社交媒体",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 ChatGPT",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🤖 AI服务",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎶 TikTok",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📹 YouTube",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Netflix",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 HBO",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 AppleTV+",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Emby",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎻 Spotify",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📺 Bahamut",
        "type": "fallback",
        "proxies": [
          "🇼🇸 台湾节点",
          "🚀 故障转移",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌎 国外媒体",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🛒 国外电商",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🇬 谷歌服务",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 故障转移",
      "RULE-SET,Custom_Proxy_IP,🚀 故障转移,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,gfw,🚀 故障转移",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "aethersailor-lite": {
    "proxy-groups": [
      {
        "name": "🚀 手动选择",
        "type": "select",
        "proxies": [
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点"
        ],
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ]
      },
      {
        "name": "🇬 谷歌服务",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点"
        ],
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 手动选择",
      "RULE-SET,Custom_Proxy_IP,🚀 手动选择,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Game_Download_CDN_Domain,🎯 全球直连",
      "RULE-SET,Game_Download_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,gfw,🚀 手动选择",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Game_Download_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Game_Download_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Game_Download_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Game_Download_CDN_IP.mrs",
        "format": "mrs"
      }
    }
  },
  "aethersailor-lite-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🇬 谷歌服务",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Game_Download_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Game_Download_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Game_Download_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Game_Download_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 故障转移",
      "RULE-SET,Custom_Proxy_IP,🚀 故障转移,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Game_Download_CDN_Domain,🎯 全球直连",
      "RULE-SET,Game_Download_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,gfw,🚀 故障转移",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "aethersailor-gfw": {
    "proxy-groups": [
      {
        "name": "🚀 手动选择",
        "type": "select",
        "proxies": [
          "♻️ 自动选择"
        ],
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
    },
    "rules": [
      "GEOSITE,gfw,🚀 手动选择",
      "GEOIP,telegram,🚀 手动选择,no-resolve",
      "GEOIP,facebook,🚀 手动选择,no-resolve",
      "GEOIP,twitter,🚀 手动选择,no-resolve",
      "MATCH,🎯 全球直连"
    ]
  },
  "aethersailor-gfw-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
    },
    "rules": [
      "GEOSITE,gfw,🚀 故障转移",
      "GEOIP,telegram,🚀 故障转移,no-resolve",
      "GEOIP,facebook,🚀 故障转移,no-resolve",
      "GEOIP,twitter,🚀 故障转移,no-resolve",
      "MATCH,🎯 全球直连"
    ]
  },
  "aethersailor-full": {
    "proxy-groups": [
      {
        "name": "🚀 手动选择",
        "type": "select",
        "proxies": [
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🌐 社交媒体",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "📞 Talkatone",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🤖 ChatGPT",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🤖 Copilot",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🤖 AI服务",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎶 TikTok",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "📹 YouTube",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 Netflix",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 HBO",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎥 AppleTV+",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇸🇬 新加坡节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🎥 Emby",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎻 Spotify",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "📺 Bahamut",
        "type": "select",
        "proxies": [
          "🇼🇸 台湾节点",
          "🚀 手动选择",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🌎 国外媒体",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🛒 国外电商",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🪙 加密货币",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🇬 谷歌服务",
        "type": "select",
        "proxies": [
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "💾 OneDrive",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "💳 PayPal",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "⏬ PT站点",
        "type": "select",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🌍 国外域名",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 手动选择",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ],
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇨🇦 加拿大节点",
        "type": "url-test",
        "filter": "(?i)(🇨🇦|加拿大|\\bCA(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Canada|CANADA|CAN|渥太华|温哥华|卡尔加里|蒙特利尔|Montreal|YVR|YYZ|YUL)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇬🇧 英国节点",
        "type": "url-test",
        "filter": "(?i)(🇬🇧|英国|Britain|United Kingdom|UNITED KINGDOM|England|伦敦|曼彻斯特|Manchester|\\bUK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|GBR|LHR|MAN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇫🇷 法国节点",
        "type": "url-test",
        "filter": "(?i)(🇫🇷|法国|\\bFR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|France|FRANCE|FRA|巴黎|马赛|Marseille|CDG|MRS)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇩🇪 德国节点",
        "type": "url-test",
        "filter": "(?i)(🇩🇪|德国|Germany|GERMANY|\\bDE(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|DEU|柏林|法兰克福|慕尼黑|Munich|MUC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇳🇱 荷兰节点",
        "type": "url-test",
        "filter": "(?i)(🇳🇱|荷兰|Netherlands|NETHERLANDS|\\bNL(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|NLD|阿姆斯特丹|AMS)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇹🇷 土耳其节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇷|土耳其|Turkey|TURKEY|Türkiye|\\bTR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|TUR|IST|ANK)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇷🇺 俄罗斯节点",
        "type": "url-test",
        "filter": "(?i)(🇷🇺|(?<!白)俄罗斯|(?<!白)俄|莫斯科|圣彼得堡|新西伯利亚|海参崴|符拉迪沃斯托克|哈巴罗夫斯克|伯力|\\bRU(?:[-_ ]?\\d+)?\\b|Russia)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🌐 其他地区",
        "type": "url-test",
        "filter": "(?i)(^(?!.*(港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|🇭🇰|九龙|Kowloon|新界|沙田|荃湾|葵涌|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇺🇸|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|🇯🇵|关西|Kansai|KANSAI|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇸🇬|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇹🇼|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN|🇰🇷|加拿大|\\bCA(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Canada|CANADA|CAN|渥太华|温哥华|卡尔加里|蒙特利尔|Montreal|YVR|YYZ|YUL|🇨🇦|英国|Britain|United Kingdom|UNITED KINGDOM|England|伦敦|曼彻斯特|Manchester|\\bUK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|GBR|LHR|MAN|🇬🇧|法国|\\bFR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|France|FRANCE|FRA|巴黎|马赛|Marseille|CDG|MRS|🇫🇷|德国|Germany|GERMANY|\\bDE(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|DEU|柏林|法兰克福|慕尼黑|Munich|MUC|🇩🇪|荷兰|Netherlands|NETHERLANDS|\\bNL(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|NLD|阿姆斯特丹|AMS|🇳🇱|土耳其|Turkey|TURKEY|Türkiye|\\bTR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|TUR|IST|ANK|🇹🇷|🇷🇺|(?<!白)俄罗斯|(?<!白)俄|莫斯科|圣彼得堡|新西伯利亚|海参崴|符拉迪沃斯托克|哈巴罗夫斯克|伯力|\\bRU(?:[-_ ]?\\d+)?\\b|Russia|家宽|家庭宽带|住宅|Residential|低倍率|低倍|(?<![\\d\\.])0?\\.\\d+(?![0-9])(?:x|倍)?|倍率[:： ]?0?\\.\\d+)).*)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🏠 家宽节点",
        "type": "url-test",
        "filter": "(?i)(家宽|家庭宽带|住宅|Residential)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🐢 低倍率节点",
        "type": "url-test",
        "filter": "(?i)(低倍率|低倍|(?<![\\d\\.])0?\\.\\d+(?![0-9])(?:x|倍)?|倍率[:： ]?0?\\.\\d+)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 手动选择",
      "RULE-SET,Custom_Proxy_IP,🚀 手动选择,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,talkatone,📞 Talkatone",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,onedrive,💾 OneDrive",
      "GEOSITE,bing,🤖 Copilot",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-pt,⏬ PT站点",
      "GEOSITE,paypal,💳 PayPal",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,category-cryptocurrency,🪙 加密货币",
      "GEOSITE,gfw,🚀 手动选择",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,geolocation-!cn,🌍 国外域名",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "aethersailor-full-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🌐 社交媒体",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "📞 Talkatone",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🚀 GitHub",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 ChatGPT",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 Copilot",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 AI服务",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎶 TikTok",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "📹 YouTube",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 Netflix",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 HBO",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 AppleTV+",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎥 Emby",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🎻 Spotify",
        "type": "fallback",
        "proxies": [
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "📺 Bahamut",
        "type": "fallback",
        "proxies": [
          "🇼🇸 台湾节点",
          "🚀 故障转移",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🌎 国外媒体",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🛒 国外电商",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🪙 加密货币",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "📢 谷歌FCM",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🇬 谷歌服务",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "💾 OneDrive",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "💳 PayPal",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "⏬ PT站点",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ]
      },
      {
        "name": "🌍 国外域名",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🚀 故障转移",
          "♻️ 自动选择",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点"
        ]
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "fallback",
        "proxies": [
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "🇨🇦 加拿大节点",
          "🇬🇧 英国节点",
          "🇫🇷 法国节点",
          "🇩🇪 德国节点",
          "🇳🇱 荷兰节点",
          "🇹🇷 土耳其节点",
          "🇷🇺 俄罗斯节点",
          "🌐 其他地区",
          "🏠 家宽节点",
          "🐢 低倍率节点",
          "♻️ 自动选择"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇨🇦 加拿大节点",
        "type": "url-test",
        "filter": "(?i)(🇨🇦|加拿大|\\bCA(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Canada|CANADA|CAN|渥太华|温哥华|卡尔加里|蒙特利尔|Montreal|YVR|YYZ|YUL)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇬🇧 英国节点",
        "type": "url-test",
        "filter": "(?i)(🇬🇧|英国|Britain|United Kingdom|UNITED KINGDOM|England|伦敦|曼彻斯特|Manchester|\\bUK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|GBR|LHR|MAN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇫🇷 法国节点",
        "type": "url-test",
        "filter": "(?i)(🇫🇷|法国|\\bFR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|France|FRANCE|FRA|巴黎|马赛|Marseille|CDG|MRS)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇩🇪 德国节点",
        "type": "url-test",
        "filter": "(?i)(🇩🇪|德国|Germany|GERMANY|\\bDE(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|DEU|柏林|法兰克福|慕尼黑|Munich|MUC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇳🇱 荷兰节点",
        "type": "url-test",
        "filter": "(?i)(🇳🇱|荷兰|Netherlands|NETHERLANDS|\\bNL(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|NLD|阿姆斯特丹|AMS)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇹🇷 土耳其节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇷|土耳其|Turkey|TURKEY|Türkiye|\\bTR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|TUR|IST|ANK)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇷🇺 俄罗斯节点",
        "type": "url-test",
        "filter": "(?i)(🇷🇺|(?<!白)俄罗斯|(?<!白)俄|莫斯科|圣彼得堡|新西伯利亚|海参崴|符拉迪沃斯托克|哈巴罗夫斯克|伯力|\\bRU(?:[-_ ]?\\d+)?\\b|Russia)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🌐 其他地区",
        "type": "url-test",
        "filter": "(?i)(^(?!.*(港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|🇭🇰|九龙|Kowloon|新界|沙田|荃湾|葵涌|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇺🇸|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|🇯🇵|关西|Kansai|KANSAI|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇸🇬|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇹🇼|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN|🇰🇷|加拿大|\\bCA(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Canada|CANADA|CAN|渥太华|温哥华|卡尔加里|蒙特利尔|Montreal|YVR|YYZ|YUL|🇨🇦|英国|Britain|United Kingdom|UNITED KINGDOM|England|伦敦|曼彻斯特|Manchester|\\bUK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|GBR|LHR|MAN|🇬🇧|法国|\\bFR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|France|FRANCE|FRA|巴黎|马赛|Marseille|CDG|MRS|🇫🇷|德国|Germany|GERMANY|\\bDE(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|DEU|柏林|法兰克福|慕尼黑|Munich|MUC|🇩🇪|荷兰|Netherlands|NETHERLANDS|\\bNL(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|NLD|阿姆斯特丹|AMS|🇳🇱|土耳其|Turkey|TURKEY|Türkiye|\\bTR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|TUR|IST|ANK|🇹🇷|🇷🇺|(?<!白)俄罗斯|(?<!白)俄|莫斯科|圣彼得堡|新西伯利亚|海参崴|符拉迪沃斯托克|哈巴罗夫斯克|伯力|\\bRU(?:[-_ ]?\\d+)?\\b|Russia|家宽|家庭宽带|住宅|Residential|低倍率|低倍|(?<![\\d\\.])0?\\.\\d+(?![0-9])(?:x|倍)?|倍率[:： ]?0?\\.\\d+)).*)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🏠 家宽节点",
        "type": "url-test",
        "filter": "(?i)(家宽|家庭宽带|住宅|Residential)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🐢 低倍率节点",
        "type": "url-test",
        "filter": "(?i)(低倍率|低倍|(?<![\\d\\.])0?\\.\\d+(?![0-9])(?:x|倍)?|倍率[:： ]?0?\\.\\d+)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 故障转移",
      "RULE-SET,Custom_Proxy_IP,🚀 故障转移,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,talkatone,📞 Talkatone",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,onedrive,💾 OneDrive",
      "GEOSITE,bing,🤖 Copilot",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-pt,⏬ PT站点",
      "GEOSITE,paypal,💳 PayPal",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,category-cryptocurrency,🪙 加密货币",
      "GEOSITE,gfw,🚀 故障转移",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,geolocation-!cn,🌍 国外域名",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "aethersailor-selfhosted-manual-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🏴‍☠️ 自建节点",
        "type": "url-test",
        "proxies": [

        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "tolerance": 50,
        "lazy": false,
        "expected-status": 204,
        "include-all": true,
        "filter": "(?i)(🏴‍☠️|自建|家宽|home|private|selfhost)"
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌐 社交媒体",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 ChatGPT",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🤖 AI服务",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎶 TikTok",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📹 YouTube",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Netflix",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 HBO",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 AppleTV+",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Emby",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎻 Spotify",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📺 Bahamut",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇼🇸 台湾节点",
          "🚀 故障转移",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌎 国外媒体",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🛒 国外电商",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🇬 谷歌服务",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 故障转移",
      "RULE-SET,Custom_Proxy_IP,🚀 故障转移,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,gfw,🚀 故障转移",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "aethersailor-selfhosted-provider-fallback": {
    "proxy-groups": [
      {
        "name": "🚀 故障转移",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🏴‍☠️ 自建节点",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "tolerance": 50,
        "lazy": false,
        "expected-status": 204,
        "include-all": true,
        "filter": "(?i)(🏴‍☠️|自建|家宽|home|private|selfhost)",
        "proxies": [

        ]
      },
      {
        "name": "♻️ 自动选择",
        "type": "url-test",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "💬 即时通讯",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌐 社交媒体",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🚀 GitHub",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204
      },
      {
        "name": "🤖 ChatGPT",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🤖 AI服务",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎶 TikTok",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📹 YouTube",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Netflix",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 DisneyPlus",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 HBO",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 PrimeVideo",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 AppleTV+",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎥 Emby",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🎻 Spotify",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇸🇬 新加坡节点",
          "🇯🇵 日本节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📺 Bahamut",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇼🇸 台湾节点",
          "🚀 故障转移",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🌎 国外媒体",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🛒 国外电商",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "📢 谷歌FCM",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🇬 谷歌服务",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🍎 苹果服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "Ⓜ️ 微软服务",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 游戏平台",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🎮 Steam",
        "type": "select",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择",
          "🎯 全球直连"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🚀 测速工具",
        "type": "select",
        "proxies": [
          "🎯 全球直连",
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "include-all": true
      },
      {
        "name": "🐟 漏网之鱼",
        "type": "fallback",
        "proxies": [
          "🏴‍☠️ 自建节点",
          "🇭🇰 香港节点",
          "🇺🇸 美国节点",
          "🇯🇵 日本节点",
          "🇸🇬 新加坡节点",
          "🇼🇸 台湾节点",
          "🇰🇷 韩国节点",
          "♻️ 自动选择"
        ],
        "exclude-filter": "(?i)(?:🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌|🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC|🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI|🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN|🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC|🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "timeout": 5000,
        "lazy": false,
        "expected-status": 204,
        "include-all": true
      },
      {
        "name": "🔀 非标端口",
        "type": "select",
        "proxies": [
          "🐟 漏网之鱼",
          "🎯 全球直连"
        ]
      },
      {
        "name": "🇭🇰 香港节点",
        "type": "url-test",
        "filter": "(?i)(🇭🇰|港|\\bHK(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|hk|Hong Kong|HongKong|hongkong|HONG KONG|HONGKONG|深港|HKG|九龙|Kowloon|新界|沙田|荃湾|葵涌)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇺🇸 美国节点",
        "type": "url-test",
        "filter": "(?i)(🇺🇸|美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|纽约|纽纽|亚特兰大|迈阿密|华盛顿|\\bUS(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|United States|UnitedStates|UNITED STATES|USA|America|AMERICA|JFK|EWR|IAD|ATL|ORD|MIA|NYC|LAX|SFO|SEA|DFW|SJC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇯🇵 日本节点",
        "type": "url-test",
        "filter": "(?i)(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|(?<!尼|-)日|\\bJP(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Japan|JAPAN|JPN|NRT|HND|KIX|TYO|OSA|关西|Kansai|KANSAI)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇸🇬 新加坡节点",
        "type": "url-test",
        "filter": "(?i)(🇸🇬|新加坡|坡|狮城|\\bSG(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Singapore|SINGAPORE|SIN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇼🇸 台湾节点",
        "type": "url-test",
        "filter": "(?i)(🇹🇼|🇼🇸|台|新北|彰化|\\bTW(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Taiwan|TAIWAN|TWN|TPE|ROC)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🇰🇷 韩国节点",
        "type": "url-test",
        "filter": "(?i)(🇰🇷|\\bKR(?:[-_ ]?\\d+(?:[-_ ]?[A-Za-z]{2,})?)?\\b|Korea|KOREA|KOR|首尔|韩|韓|春川|Chuncheon|ICN)",
        "url": "https://cp.cloudflare.com/generate_204",
        "interval": 300,
        "tolerance": 50,
        "include-all": true
      },
      {
        "name": "🎯 全球直连",
        "type": "select",
        "url": "http://wifi.vivo.com.cn/generate_204",
        "proxies": [
          "DIRECT"
        ]
      }
    ],
    "rule-providers": {
      "Nonstandard_Port_Direct": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml",
        "format": "yaml"
      },
      "Custom_Direct_Domain": {
        "behavior": "domain",
        "interval": 1800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Direct_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_IP.mrs",
        "format": "mrs"
      },
      "Custom_Direct_Port": {
        "behavior": "classical",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_Port.yaml",
        "format": "yaml"
      },
      "Custom_Proxy_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.mrs",
        "format": "mrs"
      },
      "Custom_Proxy_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_IP.mrs",
        "format": "mrs"
      },
      "Steam_CDN_Domain": {
        "behavior": "domain",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Domain.mrs",
        "format": "mrs"
      },
      "Steam_CDN_IP": {
        "behavior": "ipcidr",
        "interval": 28800,
        "type": "http",
        "url": "https://cdn.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_IP.mrs",
        "format": "mrs"
      }
    },
    "rules": [
      "GEOSITE,private,🎯 全球直连",
      "GEOIP,private,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Domain,🎯 全球直连",
      "RULE-SET,Custom_Direct_IP,🎯 全球直连,no-resolve",
      "RULE-SET,Custom_Direct_Port,🎯 全球直连",
      "RULE-SET,Custom_Proxy_Domain,🚀 故障转移",
      "RULE-SET,Custom_Proxy_IP,🚀 故障转移,no-resolve",
      "GEOSITE,google-cn,🎯 全球直连",
      "GEOSITE,category-games@cn,🎯 全球直连",
      "RULE-SET,Steam_CDN_Domain,🎯 全球直连",
      "RULE-SET,Steam_CDN_IP,🎯 全球直连,no-resolve",
      "GEOSITE,category-game-platforms-download,🎯 全球直连",
      "GEOSITE,category-public-tracker,🎯 全球直连",
      "GEOSITE,category-communication,💬 即时通讯",
      "GEOSITE,category-social-media-!cn,🌐 社交媒体",
      "GEOSITE,openai,🤖 ChatGPT",
      "GEOSITE,category-ai-!cn,🤖 AI服务",
      "GEOSITE,github,🚀 GitHub",
      "GEOSITE,category-speedtest,🚀 测速工具",
      "GEOSITE,steam,🎮 Steam",
      "GEOSITE,youtube,📹 YouTube",
      "GEOSITE,apple-tvplus,🎥 AppleTV+",
      "GEOSITE,apple,🍎 苹果服务",
      "GEOSITE,microsoft,Ⓜ️ 微软服务",
      "GEOSITE,googlefcm,📢 谷歌FCM",
      "GEOSITE,google,🇬 谷歌服务",
      "GEOSITE,tiktok,🎶 TikTok",
      "GEOSITE,netflix,🎥 Netflix",
      "GEOSITE,disney,🎥 DisneyPlus",
      "GEOSITE,hbo,🎥 HBO",
      "GEOSITE,primevideo,🎥 PrimeVideo",
      "GEOSITE,category-emby,🎥 Emby",
      "GEOSITE,spotify,🎻 Spotify",
      "GEOSITE,bahamut,📺 Bahamut",
      "GEOSITE,category-games,🎮 游戏平台",
      "GEOSITE,category-entertainment,🌎 国外媒体",
      "GEOSITE,category-ecommerce,🛒 国外电商",
      "GEOSITE,gfw,🚀 故障转移",
      "GEOIP,telegram,💬 即时通讯,no-resolve",
      "GEOIP,twitter,🌐 社交媒体,no-resolve",
      "GEOIP,facebook,🌐 社交媒体,no-resolve",
      "GEOIP,google,🇬 谷歌服务,no-resolve",
      "GEOIP,netflix,🎥 Netflix,no-resolve",
      "GEOSITE,cn,🎯 全球直连",
      "GEOIP,cn,🎯 全球直连,no-resolve",
      "RULE-SET,Nonstandard_Port_Direct,🔀 非标端口",
      "MATCH,🐟 漏网之鱼"
    ]
  },
  "hulter-mihomo": {
    "mixed-port": 1080,
    "redir-port": 7891,
    "tproxy-port": 1536,
    "mode": "rule",
    "find-process-mode": "strict",
    "global-client-fingerprint": "random",
    "global-ua": "clash.meta",
    "log-level": "error",
    "allow-lan": true,
    "bind-address": "*",
    "ipv6": true,
    "tcp-concurrent": true,
    "keep-alive-interval": 30,
    "unified-delay": true,
    "geodata-mode": true,
    "geosite-matcher": "succinct",
    "geodata-loader": "memconservative",
    "geo-auto-update": true,
    "geo-update-interval": 72,
    "geox-url": {
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip.dat",
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country.mmdb",
      "asn": "https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "127.0.0.1:9090",
    "secret": "ksc666",
    "external-ui": "./ui",
    "external-ui-name": "metacubexd",
    "external-ui-url": "https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
    "profile": {
      "store-selected": true,
      "store-fake-ip": true
    },
    "sniffer": {
      "enable": true,
      "force-dns-mapping": true,
      "parse-pure-ip": true,
      "override-destination": true,
      "sniff": {
        "HTTP": {
          "ports": [
            80,
            "8080-8880"
          ],
          "override-destination": true
        },
        "TLS": {
          "ports": [
            443,
            8443
          ]
        },
        "QUIC": {
          "ports": [
            443,
            8443
          ]
        }
      },
      "force-domain": [
        "+.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud"
      ]
    },
    "tun": {
      "enable": false,
      "stack": "mixed",
      "auto-route": true,
      "auto-detect-interface": true,
      "dns-hijack": [
        "any:53"
      ],
      "device": "Meta",
      "mtu": 9000,
      "strict-route": false,
      "gso": true,
      "gso-max-size": 65536,
      "udp-timeout": 300,
      "endpoint-independent-nat": false,
      "inet4-route-exclude-address": [
        "192.168.0.0/16"
      ],
      "inet6-route-exclude-address": [
        "fc00::/7"
      ]
    },
    "dns": {
      "enable": true,
      "prefer-h3": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "ipv6-timeout": 300,
      "cache-algorithm": "arc",
      "use-hosts": true,
      "default-nameserver": [
        "https://1.12.12.12/dns-query",
        "https://[2400:3200::1]/dns-query"
      ],
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "198.18.0.0/16",
      "fake-ip-filter": [
        "*",
        "+.lan",
        "+.local"
      ],
      "nameserver-policy": {
        "geosite:cn,private": [
          "https://1.12.12.12/dns-query",
          "https://223.5.5.5/dns-query",
          "https://[2400:3200::1]/dns-query",
          "https://[2402:4e00::]/dns-query"
        ]
      },
      "nameserver": [
        "https://1.1.1.1/dns-query#🌍DNS解析",
        "https://8.8.8.8/dns-query#🌍DNS解析",
        "https://[2606:4700:4700::1111]/dns-query#🌍DNS解析",
        "https://[2001:4860:4860::8888]/dns-query#🌍DNS解析"
      ],
      "proxy-server-nameserver": [
        "https://1.1.1.1/dns-query#🌍DNS解析",
        "https://8.8.8.8/dns-query#🌍DNS解析"
      ]
    },
    "proxy-groups": [
      {
        "name": "🌍DNS解析",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🇨🇳国内直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🌎代理",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🚀手动选择",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "♻️自动选择",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "url": "https://www.gstatic.com/generate_204",
        "interval": 300,
        "tolerance": 5,
        "lazy": true,
        "include-all": true
      },
      {
        "name": "🔯负载均衡",
        "type": "load-balance",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "strategy": "consistent-hashing",
        "url": "https://www.gstatic.com/generate_204",
        "interval": 300,
        "lazy": true,
        "include-all": true
      },
      {
        "name": "🛠故障转移",
        "type": "fallback",
        "proxies": [
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ],
        "url": "https://www.gstatic.com/generate_204",
        "interval": 300,
        "lazy": true
      },
      {
        "name": "🔔Google FCM",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "📺YouTube",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "📲Telegram",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "📳Github",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🤖人工智障",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "Ⓜ️MEGA",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🔐Google",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "Ⓜ️Microsoft",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🍎Apple",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🐦Twitter",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🅿️Pixiv",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🅿️PikPak",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "👛Paypal",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🎮Steam",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "📹TikTok",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "📺Netflix",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🎵Spotify",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "⛔️GFW",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🐟漏网之鱼",
        "type": "select",
        "proxies": [
          "DIRECT",
          "REJECT",
          "🚀手动选择",
          "♻️自动选择",
          "🔯负载均衡",
          "🛠故障转移",
          "🇭🇰香港",
          "🇹🇼台湾",
          "🇯🇵日本",
          "🇸🇬新加坡",
          "🇺🇸美国",
          "🌎其它地区",
          "💎专线",
          "🌍全部节点"
        ]
      },
      {
        "name": "🇭🇰香港",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)港|hk|hongkong|hong kong",
        "include-all": true
      },
      {
        "name": "🇹🇼台湾",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)台|tw|taiwan|tai",
        "include-all": true
      },
      {
        "name": "🇯🇵日本",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)日本|jp|japan",
        "include-all": true
      },
      {
        "name": "🇺🇸美国",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)^(?!.*(?:RU)).*(美|us|unitedstates|united states)",
        "include-all": true
      },
      {
        "name": "🇸🇬新加坡",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)(新|sg|singapore)",
        "include-all": true
      },
      {
        "name": "🌎其它地区",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)^(?!.*(?:🇭🇰|🇯🇵|🇺🇸|🇸🇬|🇹🇼|港|hk|hongkong|hong kong|台|tw|taiwan|tai|日|jp|japan|新|sg|singapore|美|us|unitedstates)).*",
        "include-all": true
      },
      {
        "name": "💎专线",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "filter": "(?i)奈飞|解锁|原生|gpt|Netflix",
        "include-all": true
      },
      {
        "name": "🌍全部节点",
        "type": "url-test",
        "exclude-filter": "套餐|流量|群组|频道|官网|推荐使用|测试|电报",
        "exclude-type": "http",
        "include-all": true
      }
    ],
    "rule-providers": {
      "Gemini": {
        "type": "http",
        "path": "./rule-providers/Gemini.yaml",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml",
        "interval": 86400,
        "behavior": "classical",
        "format": "yaml"
      },
      "Copilot": {
        "type": "http",
        "path": "./rule-providers/Copilot.yaml",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.yaml",
        "interval": 86400,
        "behavior": "classical",
        "format": "yaml"
      },
      "自定义代理": {
        "type": "file",
        "path": "./rule-providers/自定义代理.yaml",
        "behavior": "classical",
        "format": "yaml"
      },
      "自定义直连": {
        "type": "file",
        "path": "./rule-providers/自定义直连.yaml",
        "behavior": "classical",
        "format": "yaml"
      }
    },
    "rules": [
      "RULE-SET,自定义直连,🇨🇳国内直连",
      "GEOSITE,tencent,🇨🇳国内直连",
      "GEOSITE,alibaba,🇨🇳国内直连",
      "GEOSITE,bytedance,🇨🇳国内直连",
      "GEOSITE,xiaomi,🇨🇳国内直连",
      "GEOSITE,bilibili,🇨🇳国内直连",
      "GEOSITE,category-netdisk-cn,🇨🇳国内直连",
      "GEOSITE,telegram,📲Telegram",
      "GEOSITE,github,📳Github",
      "GEOSITE,googlefcm,🔔Google FCM",
      "GEOSITE,youtube,📺YouTube",
      "RULE-SET,Gemini,🤖人工智障",
      "GEOSITE,google,🔐Google",
      "GEOSITE,mega,Ⓜ️MEGA",
      "RULE-SET,自定义代理,🌎代理",
      "GEOSITE,openai,🤖人工智障",
      "RULE-SET,Copilot,🤖人工智障",
      "GEOSITE,microsoft,Ⓜ️Microsoft",
      "GEOSITE,apple,🍎Apple",
      "GEOSITE,twitter,🐦Twitter",
      "GEOSITE,pixiv,🅿️Pixiv",
      "GEOSITE,pikpak,🅿️PikPak",
      "GEOSITE,steam,🎮Steam",
      "GEOSITE,tiktok,📹TikTok",
      "GEOSITE,paypal,👛Paypal",
      "GEOSITE,netflix,📺Netflix",
      "GEOSITE,Spotify,🎵Spotify",
      "GEOSITE,GFW,⛔️GFW",
      "GEOSITE,CN,🇨🇳国内直连",
      "GEOSITE,geolocation-!cn,🌎代理",
      "GEOSITE,private,DIRECT,no-resolve",
      "GEOIP,telegram,📲Telegram",
      "GEOIP,google,🔐Google",
      "GEOIP,twitter,🐦Twitter",
      "GEOIP,netflix,📺Netflix",
      "GEOIP,CN,🇨🇳国内直连",
      "GEOIP,private,DIRECT,no-resolve",
      "MATCH,🐟漏网之鱼"
    ]
  }
};
