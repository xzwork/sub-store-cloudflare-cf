// Generated from locally vendored upstream Mihomo configurations on 2026-08-27.
// Each entry remains an independent selectable template; none are merged.
// See NOTICE.md in this directory for sources, adaptation notes, and licenses.
import type { RoutingTemplateConfig } from "../../types";

export const VENDORED_ROUTING_TEMPLATES: Record<string, RoutingTemplateConfig> = {
  "lanlan-standard": {
    "global-ua": "clash.meta",
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": true,
    "unified-delay": true,
    "tcp-concurrent": true,
    "authentication": [
      ""
    ],
    "skip-auth-prefixes": [
      "127.0.0.1/8",
      "::1/128"
    ],
    "geodata-mode": false,
    "geodata-loader": "standard",
    "geo-auto-update": true,
    "geo-update-interval": 48,
    "geox-url": {
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.metadb",
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "0.0.0.0:9090",
    "secret": "",
    "external-ui": "ui",
    "external-ui-url": "https://github.com/Zephyruso/zashboard/archive/refs/heads/gh-pages.zip",
    "find-process-mode": "strict",
    "keep-alive-idle": 600,
    "keep-alive-interval": 30,
    "ntp": {
      "enable": true,
      "write-to-system": false,
      "server": "ntp.aliyun.com",
      "port": 123,
      "interval": 30
    },
    "profile": {
      "store-selected": true,
      "store-fake-ip": false
    },
    "sniffer": {
      "enable": true,
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
        "*.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud",
        "dlg.io.mi.com",
        "*.push.apple.com",
        "*.apple.com",
        "*.wechat.com",
        "*.qpic.cn",
        "*.qq.com",
        "*.wechatapp.com",
        "*.vivox.com",
        "*.oray.com",
        "*.sunlogin.net"
      ]
    },
    "tun": {
      "enable": true,
      "stack": "gvisor",
      "mtu": 9000,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ],
      "auto-route": true,
      "auto-redirect": true,
      "auto-detect-interface": true
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "prefer-h3": false,
      "respect-rules": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "28.0.0.1/8",
      "fake-ip-range6": "2001:480:abcd::1/64",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "rule-set:fakeip_filter_domain,game_cn_domain,bank_cn_domain,wechat_domain,ai_cn_domain,NetEaseMusic_domain,fcm_domain,alibaba_domain,media_cn_domain,xiaomi_domain,steam_cn_domain,115_domain,aliyun_domain,direct_domain,apple_cn_domain,apple_firmware_domain,iptv_domain,private_domain,cn_domain"
      ],
      "default-nameserver": [
        "119.29.29.29",
        "180.184.1.1"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "direct-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "nameserver": [
        "https://dns.google/dns-query",
        "https://dns.cloudflare.com/dns-query"
      ]
    },
    "proxy-groups": [
      {
        "name": "节点选择",
        "type": "select",
        "proxies": [
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "故障转移"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/select.png"
      },
      {
        "name": "YouTube",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/youtube.png"
      },
      {
        "name": "FCM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fcm.png"
      },
      {
        "name": "GoogleVPN",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/googlevpn.png"
      },
      {
        "name": "Google",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/google.png"
      },
      {
        "name": "Meta",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/meta.png"
      },
      {
        "name": "AI",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/ai.png"
      },
      {
        "name": "GitHub",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/github.png"
      },
      {
        "name": "OneDrive",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/onedrive.png"
      },
      {
        "name": "Microsoft",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/microsoft.png"
      },
      {
        "name": "Telegram",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/telegram.png"
      },
      {
        "name": "Discord",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/discord.png"
      },
      {
        "name": "Talkatone",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/talkatone.png"
      },
      {
        "name": "LINE",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/line.png"
      },
      {
        "name": "Signal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/signal.png"
      },
      {
        "name": "TikTok",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tiktok.png"
      },
      {
        "name": "NETFLIX",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/netflix.png"
      },
      {
        "name": "DisneyPlus",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/disney.png"
      },
      {
        "name": "HBO",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hbo.png"
      },
      {
        "name": "Primevideo",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/primevideo.png"
      },
      {
        "name": "AppleTV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/appletv.png"
      },
      {
        "name": "Apple",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/apple.png"
      },
      {
        "name": "Emby",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/emby.png"
      },
      {
        "name": "哔哩哔哩",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibili.png"
      },
      {
        "name": "哔哩东南亚",
        "type": "select",
        "proxies": [
          "节点选择",
          "新加坡节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibilit.png"
      },
      {
        "name": "巴哈姆特",
        "type": "select",
        "proxies": [
          "台湾节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bahamut.png"
      },
      {
        "name": "Spotify",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/spotify.png"
      },
      {
        "name": "国内媒体",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Chinese_media.png"
      },
      {
        "name": "Global-TV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global_tv.png"
      },
      {
        "name": "Global-Medial",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global_media.png"
      },
      {
        "name": "游戏平台",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/game.png"
      },
      {
        "name": "Speedtest",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/speedtest.png"
      },
      {
        "name": "PayPal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/paypal.png"
      },
      {
        "name": "Wise",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/wise.png"
      },
      {
        "name": "国外电商",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/shopping.png"
      },
      {
        "name": "STEAM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/steam.png"
      },
      {
        "name": "全球直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "🔗 代理",
          "全部节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/direct.png"
      },
      {
        "name": "隐私拦截",
        "type": "select",
        "proxies": [
          "🚫 拒绝",
          "⚪ 丢弃",
          "DIRECT",
          "🔗 代理"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/block.png"
      },
      {
        "name": "Final",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/final.png"
      },
      {
        "name": "自建/家宽节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(自建|CF|The_house|private|home|家宽|hgc|HKT|HKBN|icable|Hinet|att))",
        "exclude-filter": "(?=.*(?i)(Seattle))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/private_node.png"
      },
      {
        "name": "香港节点",
        "type": "select",
        "proxies": [
          "香港自动",
          "香港均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(港|hk|hongkong|Hong Kong|🇭🇰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Hongkong.png"
      },
      {
        "name": "新加坡节点",
        "type": "select",
        "proxies": [
          "新加坡自动",
          "新加坡均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|singapore))",
        "exclude-filter": "(?=.*(?i)(新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Singapore.png"
      },
      {
        "name": "日本节点",
        "type": "select",
        "proxies": [
          "日本自动",
          "日本均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Japan.png"
      },
      {
        "name": "台湾节点",
        "type": "select",
        "proxies": [
          "台湾自动",
          "台湾均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Taiwan_China.png"
      },
      {
        "name": "美国节点",
        "type": "select",
        "proxies": [
          "美国自动",
          "美国均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(Australia|Russia|RUS))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/America.png"
      },
      {
        "name": "欧洲节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(🇦🇱|🇦🇩|🇦🇹|🇧🇾|🇧🇪|🇧🇦|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇸|🇮🇪|🇮🇹|🇽🇰|🇱🇻|🇱🇮|🇱🇹|🇱🇺|🇲🇹|🇲🇩|🇲🇨|🇲🇪|🇳🇱|🇲🇰|🇳🇴|🇵🇱|🇵🇹|🇷🇴|🇷🇺|🇸🇲|🇷🇸|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇨🇭|🇹🇷|🇺🇦|🇬🇧|🇻🇦))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/European.png"
      },
      {
        "name": "全部节点",
        "type": "select",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/all.png"
      },
      {
        "name": "香港自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hk_automatic_selection.png"
      },
      {
        "name": "新加坡自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/sg_automatic_selection.png"
      },
      {
        "name": "日本自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/jp_automatic_selection.png"
      },
      {
        "name": "台湾自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tw_automatic_selection.png"
      },
      {
        "name": "美国自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(The_US_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/usa_automatic_selection.png"
      },
      {
        "name": "香港均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "新加坡均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "日本均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "台湾均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "美国均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn|Kansas|Seattle))",
        "exclude-filter": "(?=.*(?i)(The_US_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "🔗 代理",
        "type": "select",
        "hidden": true,
        "proxies": [
          "节点选择"
        ]
      },
      {
        "name": "🚫 拒绝",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT"
        ]
      },
      {
        "name": "⚪ 丢弃",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT-DROP"
        ]
      },
      {
        "name": "故障转移",
        "type": "fallback",
        "include-all": true,
        "interval": 300,
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fallback.png"
      },
      {
        "name": "GLOBAL",
        "type": "select",
        "include-all": true,
        "proxies": [
          "节点选择",
          "YouTube",
          "GoogleVPN",
          "FCM",
          "Google",
          "Meta",
          "AI",
          "GitHub",
          "OneDrive",
          "Microsoft",
          "Telegram",
          "Discord",
          "Talkatone",
          "LINE",
          "Signal",
          "TikTok",
          "NETFLIX",
          "DisneyPlus",
          "HBO",
          "Primevideo",
          "AppleTV",
          "Apple",
          "Emby",
          "哔哩哔哩",
          "哔哩东南亚",
          "巴哈姆特",
          "Spotify",
          "国内媒体",
          "Global-TV",
          "Global-Medial",
          "游戏平台",
          "Speedtest",
          "PayPal",
          "Wise",
          "国外电商",
          "STEAM",
          "全球直连",
          "隐私拦截",
          "Final",
          "自建/家宽节点",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "香港自动",
          "新加坡自动",
          "日本自动",
          "台湾自动",
          "美国自动",
          "香港均衡",
          "新加坡均衡",
          "日本均衡",
          "台湾均衡",
          "美国均衡",
          "故障转移"
        ],
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global.png"
      }
    ],
    "rules": [
      "RULE-SET,banAd_domain,隐私拦截",
      "RULE-SET,wechat_domain,全球直连",
      "RULE-SET,pikpak_domain,节点选择",
      "RULE-SET,speedtest_domain,Speedtest",
      "RULE-SET,Cloudflare_domain,节点选择",
      "RULE-SET,Wise_domain,Wise",
      "RULE-SET,paypal_domain,PayPal",
      "RULE-SET,proxy_domain,节点选择",
      "RULE-SET,biliintl_domain,哔哩东南亚",
      "RULE-SET,bilibili_domain,哔哩哔哩",
      "RULE-SET,bilibili_ip,哔哩哔哩,no-resolve",
      "RULE-SET,bahamut_domain,巴哈姆特",
      "RULE-SET,bank_cn_domain,全球直连",
      "RULE-SET,ai_cn_domain,全球直连",
      "RULE-SET,direct_domain,全球直连",
      "RULE-SET,alibaba_domain,全球直连",
      "RULE-SET,115_domain,全球直连",
      "RULE-SET,aliyun_domain,全球直连",
      "RULE-SET,github_domain,GitHub",
      "RULE-SET,gitbook_domain,GitHub",
      "RULE-SET,googlevpn_domain,GoogleVPN",
      "RULE-SET,youtube_domain,YouTube",
      "RULE-SET,fcm_domain,FCM",
      "RULE-SET,google_domain,Google",
      "RULE-SET,google_asn_cn,Google,no-resolve",
      "RULE-SET,google_ip,Google,no-resolve",
      "RULE-SET,onedrive_domain,OneDrive",
      "RULE-SET,microsoft_domain,Microsoft",
      "RULE-SET,ai!cn_domain,AI",
      "RULE-SET,ai_domain,AI",
      "RULE-SET,openai_domain,AI",
      "RULE-SET,telegram_domain,Telegram",
      "RULE-SET,telegram_ip,Telegram,no-resolve",
      "RULE-SET,line_domain,LINE",
      "RULE-SET,talkatone_domain,Talkatone",
      "RULE-SET,talkatone_ip,Talkatone,no-resolve",
      "RULE-SET,discord_domain,Discord",
      "RULE-SET,discord_asn,Discord,no-resolve",
      "RULE-SET,signal_domain,Signal",
      "RULE-SET,tencent!cn_domain,节点选择",
      "RULE-SET,tencent_domain,全球直连",
      "RULE-SET,iptv_domain,全球直连",
      "RULE-SET,private_domain,全球直连",
      "DOMAIN-KEYWORD,hk.tv.global.mi.com,节点选择",
      "RULE-SET,xiaomi_domain,全球直连",
      "RULE-SET,steam_cn_domain,全球直连",
      "RULE-SET,steamcdn_domain,全球直连",
      "RULE-SET,steamcdn_ip,全球直连,no-resolve",
      "RULE-SET,NetEaseMusic_domain,全球直连",
      "RULE-SET,NetEaseMusic_ip,全球直连,no-resolve",
      "RULE-SET,media_cn_domain,国内媒体",
      "RULE-SET,appleTV_domain,AppleTV",
      "RULE-SET,apple_cn_domain,全球直连",
      "RULE-SET,apple_firmware_domain,Apple",
      "RULE-SET,apple_domain,Apple",
      "RULE-SET,tiktok_domain,TikTok",
      "RULE-SET,netflix_domain,NETFLIX",
      "RULE-SET,netflix_ip,NETFLIX,no-resolve",
      "RULE-SET,disney_domain,DisneyPlus",
      "RULE-SET,hbo_domain,HBO",
      "RULE-SET,primevideo_domain,Primevideo",
      "RULE-SET,emby_domain,Emby",
      "RULE-SET,emby_ip,Emby,no-resolve",
      "RULE-SET,spotify_domain,Spotify",
      "RULE-SET,facebook_domain,Meta",
      "RULE-SET,whatsapp_domain,Meta",
      "RULE-SET,instagram_domain,Meta",
      "RULE-SET,threads_domain,Meta",
      "RULE-SET,meta_domain,Meta",
      "RULE-SET,facebook_ip,Meta,no-resolve",
      "DOMAIN-SUFFIX,mytvsuper.com,Global-TV",
      "DOMAIN-SUFFIX,mytv.com.hk,Global-TV",
      "RULE-SET,twitch_domain,Global-TV",
      "RULE-SET,porn_domain,Global-TV",
      "RULE-SET,TVB_domain,Global-TV",
      "RULE-SET,media!cn_domain,Global-Medial",
      "RULE-SET,twitter_ip,节点选择,no-resolve",
      "RULE-SET,steam_domain,STEAM",
      "RULE-SET,Epic_domain,游戏平台",
      "RULE-SET,EA_domain,游戏平台",
      "RULE-SET,Blizzard_domain,游戏平台",
      "RULE-SET,UBI_domain,游戏平台",
      "RULE-SET,Sony_domain,游戏平台",
      "RULE-SET,Nintendo_domain,游戏平台",
      "RULE-SET,ifast_domain,全球直连",
      "RULE-SET,Amazon_domain,国外电商",
      "RULE-SET,Amazon_ip,国外电商,no-resolve",
      "RULE-SET,Shopee_domain,国外电商",
      "RULE-SET,Shopify_domain,国外电商",
      "RULE-SET,ebay_domain,国外电商",
      "RULE-SET,gfw_domain,节点选择",
      "RULE-SET,geolocation-!cn,节点选择",
      "RULE-SET,cn_domain,全球直连",
      "RULE-SET,private_ip,全球直连,no-resolve",
      "RULE-SET,cn_ip,全球直连,no-resolve",
      "MATCH,Final"
    ],
    "rule-providers": {
      "banAd_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/banAd_mini.mrs"
      },
      "private_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs"
      },
      "bank_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-bank-cn.mrs"
      },
      "xiaomi_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/xiaomi.mrs"
      },
      "biliintl_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili%40!cn.mrs"
      },
      "bilibili_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili.mrs"
      },
      "bahamut_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bahamut.mrs"
      },
      "spotify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/spotify.mrs"
      },
      "steam_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam%40cn.mrs"
      },
      "steamcdn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Steam-domain.mrs"
      },
      "steam_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam.mrs"
      },
      "ai!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-!cn.mrs"
      },
      "openai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/openai.mrs"
      },
      "youtube_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs"
      },
      "google_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/google.mrs"
      },
      "github_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs"
      },
      "telegram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs"
      },
      "netflix_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs"
      },
      "paypal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs"
      },
      "onedrive_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/onedrive.mrs"
      },
      "microsoft_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs"
      },
      "apple_firmware_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/applefirmware.mrs"
      },
      "apple_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/apple.mrs"
      },
      "speedtest_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs"
      },
      "tiktok_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs"
      },
      "gfw_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/gfw.mrs"
      },
      "geolocation-!cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs"
      },
      "cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs"
      },
      "media_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-media-cn.mrs"
      },
      "media!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-social-media-!cn.mrs"
      },
      "Cloudflare_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/cloudflare.mrs"
      },
      "gitbook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/gitbook.mrs"
      },
      "disney_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/disney.mrs"
      },
      "hbo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/hbo.mrs"
      },
      "primevideo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/primevideo.mrs"
      },
      "NetEaseMusic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/NetEaseMusic-domain.mrs"
      },
      "Amazon_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/amazon.mrs"
      },
      "Shopee_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopee.mrs"
      },
      "ebay_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ebay.mrs"
      },
      "appleTV_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/appletv.mrs"
      },
      "Epic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/epicgames.mrs"
      },
      "EA_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ea.mrs"
      },
      "Blizzard_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/blizzard.mrs"
      },
      "UBI_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ubi.mrs"
      },
      "Sony_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/sony.mrs"
      },
      "Nintendo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/nintendo.mrs"
      },
      "facebook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/facebook.mrs"
      },
      "whatsapp_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/whatsapp.mrs"
      },
      "instagram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/instagram.mrs"
      },
      "threads_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/threads.mrs"
      },
      "meta_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/meta.mrs"
      },
      "Wise_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/wise.mrs"
      },
      "ifast_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ifast.mrs"
      },
      "line_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/line.mrs"
      },
      "talkatone_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Talkatone-domain.mrs"
      },
      "Shopify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopify.mrs"
      },
      "signal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/signal.mrs"
      },
      "wechat_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/WeChat.mrs"
      },
      "proxy_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/proxy.mrs"
      },
      "direct_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/direct.mrs"
      },
      "apple_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/apple%40cn.mrs"
      },
      "alibaba_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/alibaba.mrs"
      },
      "tencent!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/tencent%40!cn.mrs"
      },
      "tencent_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/tencent.mrs"
      },
      "ai_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-ai-cn.mrs"
      },
      "discord_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/discord.mrs"
      },
      "fcm_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/googlefcm.mrs"
      },
      "emby_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/emby.mrs"
      },
      "115_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/115.mrs"
      },
      "aliyun_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/aliyun.mrs"
      },
      "twitch_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/twitch.mrs"
      },
      "porn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-porn.mrs"
      },
      "iptv_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/iptv.mrs"
      },
      "googlevpn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/googleVPN.mrs"
      },
      "ai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ai.mrs"
      },
      "TVB_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/tvb.mrs"
      },
      "game_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-games%40cn.mrs"
      },
      "fakeip_filter_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/fakeip-filter.mrs"
      },
      "pikpak_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/pikpak.mrs"
      },
      "bilibili_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.mrs"
      },
      "cn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs"
      },
      "google_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs"
      },
      "telegram_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs"
      },
      "netflix_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs"
      },
      "Amazon_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/amazon-ip.mrs"
      },
      "facebook_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/facebook.mrs"
      },
      "twitter_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/twitter.mrs"
      },
      "private_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/private.mrs"
      },
      "talkatone_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/Talkatone-ip.mrs"
      },
      "steamcdn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/steamCDN-ip.mrs"
      },
      "NetEaseMusic_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/NetEaseMusic-ip.mrs"
      },
      "emby_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/emby-ip.mrs"
      },
      "google_asn_cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS24424.mrs"
      },
      "discord_asn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS49544.mrs"
      }
    }
  },
  "lanlan-no-ad": {
    "global-ua": "clash.meta",
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": true,
    "unified-delay": true,
    "tcp-concurrent": true,
    "authentication": [
      ""
    ],
    "skip-auth-prefixes": [
      "127.0.0.1/8",
      "::1/128"
    ],
    "geodata-mode": false,
    "geodata-loader": "standard",
    "geo-auto-update": true,
    "geo-update-interval": 48,
    "geox-url": {
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.metadb",
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "0.0.0.0:9090",
    "secret": "",
    "external-ui": "ui",
    "external-ui-url": "https://github.com/Zephyruso/zashboard/archive/refs/heads/gh-pages.zip",
    "find-process-mode": "strict",
    "keep-alive-idle": 600,
    "keep-alive-interval": 30,
    "ntp": {
      "enable": true,
      "write-to-system": false,
      "server": "ntp.aliyun.com",
      "port": 123,
      "interval": 30
    },
    "profile": {
      "store-selected": true,
      "store-fake-ip": false
    },
    "sniffer": {
      "enable": true,
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
        "*.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud",
        "dlg.io.mi.com",
        "*.push.apple.com",
        "*.apple.com",
        "*.wechat.com",
        "*.qpic.cn",
        "*.qq.com",
        "*.wechatapp.com",
        "*.vivox.com",
        "*.oray.com",
        "*.sunlogin.net"
      ]
    },
    "tun": {
      "enable": true,
      "stack": "gvisor",
      "mtu": 9000,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ],
      "auto-route": true,
      "auto-redirect": true,
      "auto-detect-interface": true
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "prefer-h3": false,
      "respect-rules": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "28.0.0.1/8",
      "fake-ip-range6": "2001:480:abcd::1/64",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "rule-set:fakeip_filter_domain,game_cn_domain,bank_cn_domain,wechat_domain,ai_cn_domain,NetEaseMusic_domain,fcm_domain,alibaba_domain,media_cn_domain,xiaomi_domain,steam_cn_domain,115_domain,aliyun_domain,direct_domain,apple_cn_domain,apple_firmware_domain,iptv_domain,private_domain,cn_domain"
      ],
      "default-nameserver": [
        "119.29.29.29",
        "180.184.1.1"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "direct-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "nameserver": [
        "https://dns.google/dns-query",
        "https://dns.cloudflare.com/dns-query"
      ]
    },
    "proxy-groups": [
      {
        "name": "节点选择",
        "type": "select",
        "proxies": [
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "故障转移"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/select.png"
      },
      {
        "name": "YouTube",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/youtube.png"
      },
      {
        "name": "FCM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fcm.png"
      },
      {
        "name": "GoogleVPN",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/googlevpn.png"
      },
      {
        "name": "Google",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/google.png"
      },
      {
        "name": "Meta",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/meta.png"
      },
      {
        "name": "AI",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/ai.png"
      },
      {
        "name": "GitHub",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/github.png"
      },
      {
        "name": "OneDrive",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/onedrive.png"
      },
      {
        "name": "Microsoft",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/microsoft.png"
      },
      {
        "name": "Telegram",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/telegram.png"
      },
      {
        "name": "Discord",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/discord.png"
      },
      {
        "name": "Talkatone",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/talkatone.png"
      },
      {
        "name": "LINE",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/line.png"
      },
      {
        "name": "Signal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/signal.png"
      },
      {
        "name": "TikTok",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tiktok.png"
      },
      {
        "name": "NETFLIX",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/netflix.png"
      },
      {
        "name": "DisneyPlus",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/disney.png"
      },
      {
        "name": "HBO",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hbo.png"
      },
      {
        "name": "Primevideo",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/primevideo.png"
      },
      {
        "name": "AppleTV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/appletv.png"
      },
      {
        "name": "Apple",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/apple.png"
      },
      {
        "name": "Emby",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/emby.png"
      },
      {
        "name": "哔哩哔哩",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibili.png"
      },
      {
        "name": "哔哩东南亚",
        "type": "select",
        "proxies": [
          "节点选择",
          "新加坡节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibilit.png"
      },
      {
        "name": "巴哈姆特",
        "type": "select",
        "proxies": [
          "台湾节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bahamut.png"
      },
      {
        "name": "Spotify",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/spotify.png"
      },
      {
        "name": "国内媒体",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Chinese_media.png"
      },
      {
        "name": "Global-TV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global_tv.png"
      },
      {
        "name": "Global-Medial",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global_media.png"
      },
      {
        "name": "游戏平台",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/game.png"
      },
      {
        "name": "Speedtest",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/speedtest.png"
      },
      {
        "name": "PayPal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/paypal.png"
      },
      {
        "name": "Wise",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/wise.png"
      },
      {
        "name": "国外电商",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/shopping.png"
      },
      {
        "name": "STEAM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/steam.png"
      },
      {
        "name": "全球直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "🔗 代理",
          "全部节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/direct.png"
      },
      {
        "name": "Final",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/final.png"
      },
      {
        "name": "自建/家宽节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(自建|CF|The_house|private|home|家宽|hgc|HKT|HKBN|icable|Hinet|att))",
        "exclude-filter": "(?=.*(?i)(Seattle))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/private_node.png"
      },
      {
        "name": "香港节点",
        "type": "select",
        "proxies": [
          "香港自动",
          "香港均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(港|hk|hongkong|Hong Kong|🇭🇰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Hongkong.png"
      },
      {
        "name": "新加坡节点",
        "type": "select",
        "proxies": [
          "新加坡自动",
          "新加坡均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|singapore))",
        "exclude-filter": "(?=.*(?i)(新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Singapore.png"
      },
      {
        "name": "日本节点",
        "type": "select",
        "proxies": [
          "日本自动",
          "日本均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Japan.png"
      },
      {
        "name": "台湾节点",
        "type": "select",
        "proxies": [
          "台湾自动",
          "台湾均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Taiwan_China.png"
      },
      {
        "name": "美国节点",
        "type": "select",
        "proxies": [
          "美国自动",
          "美国均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(Australia|Russia|RUS))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/America.png"
      },
      {
        "name": "欧洲节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(🇦🇱|🇦🇩|🇦🇹|🇧🇾|🇧🇪|🇧🇦|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇸|🇮🇪|🇮🇹|🇽🇰|🇱🇻|🇱🇮|🇱🇹|🇱🇺|🇲🇹|🇲🇩|🇲🇨|🇲🇪|🇳🇱|🇲🇰|🇳🇴|🇵🇱|🇵🇹|🇷🇴|🇷🇺|🇸🇲|🇷🇸|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇨🇭|🇹🇷|🇺🇦|🇬🇧|🇻🇦))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/European.png"
      },
      {
        "name": "全部节点",
        "type": "select",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/all.png"
      },
      {
        "name": "香港自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hk_automatic_selection.png"
      },
      {
        "name": "新加坡自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/sg_automatic_selection.png"
      },
      {
        "name": "日本自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/jp_automatic_selection.png"
      },
      {
        "name": "台湾自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tw_automatic_selection.png"
      },
      {
        "name": "美国自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(The_US_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/usa_automatic_selection.png"
      },
      {
        "name": "香港均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "新加坡均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "日本均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "台湾均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "美国均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn|Kansas|Seattle))",
        "exclude-filter": "(?=.*(?i)(The_US_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "🔗 代理",
        "type": "select",
        "hidden": true,
        "proxies": [
          "节点选择"
        ]
      },
      {
        "name": "故障转移",
        "type": "fallback",
        "include-all": true,
        "interval": 300,
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fallback.png"
      },
      {
        "name": "GLOBAL",
        "type": "select",
        "include-all": true,
        "proxies": [
          "节点选择",
          "YouTube",
          "GoogleVPN",
          "FCM",
          "Google",
          "Meta",
          "AI",
          "GitHub",
          "OneDrive",
          "Microsoft",
          "Telegram",
          "Discord",
          "Talkatone",
          "LINE",
          "Signal",
          "TikTok",
          "NETFLIX",
          "DisneyPlus",
          "HBO",
          "Primevideo",
          "AppleTV",
          "Apple",
          "Emby",
          "哔哩哔哩",
          "哔哩东南亚",
          "巴哈姆特",
          "Spotify",
          "国内媒体",
          "Global-TV",
          "Global-Medial",
          "游戏平台",
          "Speedtest",
          "PayPal",
          "Wise",
          "国外电商",
          "STEAM",
          "全球直连",
          "Final",
          "自建/家宽节点",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "香港自动",
          "新加坡自动",
          "日本自动",
          "台湾自动",
          "美国自动",
          "香港均衡",
          "新加坡均衡",
          "日本均衡",
          "台湾均衡",
          "美国均衡",
          "故障转移"
        ],
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global.png"
      }
    ],
    "rules": [
      "RULE-SET,wechat_domain,全球直连",
      "RULE-SET,pikpak_domain,节点选择",
      "RULE-SET,speedtest_domain,Speedtest",
      "RULE-SET,Cloudflare_domain,节点选择",
      "RULE-SET,Wise_domain,Wise",
      "RULE-SET,paypal_domain,PayPal",
      "RULE-SET,proxy_domain,节点选择",
      "RULE-SET,biliintl_domain,哔哩东南亚",
      "RULE-SET,bilibili_domain,哔哩哔哩",
      "RULE-SET,bilibili_ip,哔哩哔哩,no-resolve",
      "RULE-SET,bahamut_domain,巴哈姆特",
      "RULE-SET,bank_cn_domain,全球直连",
      "RULE-SET,ai_cn_domain,全球直连",
      "RULE-SET,direct_domain,全球直连",
      "RULE-SET,alibaba_domain,全球直连",
      "RULE-SET,115_domain,全球直连",
      "RULE-SET,aliyun_domain,全球直连",
      "RULE-SET,github_domain,GitHub",
      "RULE-SET,gitbook_domain,GitHub",
      "RULE-SET,googlevpn_domain,GoogleVPN",
      "RULE-SET,youtube_domain,YouTube",
      "RULE-SET,fcm_domain,FCM",
      "RULE-SET,google_domain,Google",
      "RULE-SET,google_asn_cn,Google,no-resolve",
      "RULE-SET,google_ip,Google,no-resolve",
      "RULE-SET,onedrive_domain,OneDrive",
      "RULE-SET,microsoft_domain,Microsoft",
      "RULE-SET,ai!cn_domain,AI",
      "RULE-SET,ai_domain,AI",
      "RULE-SET,openai_domain,AI",
      "RULE-SET,telegram_domain,Telegram",
      "RULE-SET,telegram_ip,Telegram,no-resolve",
      "RULE-SET,line_domain,LINE",
      "RULE-SET,talkatone_domain,Talkatone",
      "RULE-SET,talkatone_ip,Talkatone,no-resolve",
      "RULE-SET,discord_domain,Discord",
      "RULE-SET,discord_asn,Discord,no-resolve",
      "RULE-SET,signal_domain,Signal",
      "RULE-SET,tencent!cn_domain,节点选择",
      "RULE-SET,tencent_domain,全球直连",
      "RULE-SET,iptv_domain,全球直连",
      "RULE-SET,private_domain,全球直连",
      "DOMAIN-KEYWORD,hk.tv.global.mi.com,节点选择",
      "RULE-SET,xiaomi_domain,全球直连",
      "RULE-SET,steam_cn_domain,全球直连",
      "RULE-SET,steamcdn_domain,全球直连",
      "RULE-SET,steamcdn_ip,全球直连,no-resolve",
      "RULE-SET,NetEaseMusic_domain,全球直连",
      "RULE-SET,NetEaseMusic_ip,全球直连,no-resolve",
      "RULE-SET,media_cn_domain,国内媒体",
      "RULE-SET,appleTV_domain,AppleTV",
      "RULE-SET,apple_cn_domain,全球直连",
      "RULE-SET,apple_firmware_domain,Apple",
      "RULE-SET,apple_domain,Apple",
      "RULE-SET,tiktok_domain,TikTok",
      "RULE-SET,netflix_domain,NETFLIX",
      "RULE-SET,netflix_ip,NETFLIX,no-resolve",
      "RULE-SET,disney_domain,DisneyPlus",
      "RULE-SET,hbo_domain,HBO",
      "RULE-SET,primevideo_domain,Primevideo",
      "RULE-SET,emby_domain,Emby",
      "RULE-SET,emby_ip,Emby,no-resolve",
      "RULE-SET,spotify_domain,Spotify",
      "RULE-SET,facebook_domain,Meta",
      "RULE-SET,whatsapp_domain,Meta",
      "RULE-SET,instagram_domain,Meta",
      "RULE-SET,threads_domain,Meta",
      "RULE-SET,meta_domain,Meta",
      "RULE-SET,facebook_ip,Meta,no-resolve",
      "DOMAIN-SUFFIX,mytvsuper.com,Global-TV",
      "DOMAIN-SUFFIX,mytv.com.hk,Global-TV",
      "RULE-SET,twitch_domain,Global-TV",
      "RULE-SET,porn_domain,Global-TV",
      "RULE-SET,TVB_domain,Global-TV",
      "RULE-SET,media!cn_domain,Global-Medial",
      "RULE-SET,twitter_ip,节点选择,no-resolve",
      "RULE-SET,steam_domain,STEAM",
      "RULE-SET,Epic_domain,游戏平台",
      "RULE-SET,EA_domain,游戏平台",
      "RULE-SET,Blizzard_domain,游戏平台",
      "RULE-SET,UBI_domain,游戏平台",
      "RULE-SET,Sony_domain,游戏平台",
      "RULE-SET,Nintendo_domain,游戏平台",
      "RULE-SET,ifast_domain,全球直连",
      "RULE-SET,Amazon_domain,国外电商",
      "RULE-SET,Amazon_ip,国外电商,no-resolve",
      "RULE-SET,Shopee_domain,国外电商",
      "RULE-SET,Shopify_domain,国外电商",
      "RULE-SET,ebay_domain,国外电商",
      "RULE-SET,gfw_domain,节点选择",
      "RULE-SET,geolocation-!cn,节点选择",
      "RULE-SET,cn_domain,全球直连",
      "RULE-SET,private_ip,全球直连,no-resolve",
      "RULE-SET,cn_ip,全球直连,no-resolve",
      "MATCH,Final"
    ],
    "rule-providers": {
      "private_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs"
      },
      "bank_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-bank-cn.mrs"
      },
      "xiaomi_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/xiaomi.mrs"
      },
      "biliintl_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili%40!cn.mrs"
      },
      "bilibili_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili.mrs"
      },
      "bahamut_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bahamut.mrs"
      },
      "spotify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/spotify.mrs"
      },
      "steam_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam%40cn.mrs"
      },
      "steamcdn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Steam-domain.mrs"
      },
      "steam_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam.mrs"
      },
      "ai!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-!cn.mrs"
      },
      "openai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/openai.mrs"
      },
      "youtube_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs"
      },
      "google_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/google.mrs"
      },
      "github_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs"
      },
      "telegram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs"
      },
      "netflix_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs"
      },
      "paypal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs"
      },
      "onedrive_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/onedrive.mrs"
      },
      "microsoft_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs"
      },
      "apple_firmware_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/applefirmware.mrs"
      },
      "apple_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/apple.mrs"
      },
      "speedtest_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs"
      },
      "tiktok_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs"
      },
      "gfw_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/gfw.mrs"
      },
      "geolocation-!cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs"
      },
      "cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs"
      },
      "media_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-media-cn.mrs"
      },
      "media!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-social-media-!cn.mrs"
      },
      "Cloudflare_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/cloudflare.mrs"
      },
      "gitbook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/gitbook.mrs"
      },
      "disney_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/disney.mrs"
      },
      "hbo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/hbo.mrs"
      },
      "primevideo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/primevideo.mrs"
      },
      "NetEaseMusic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/NetEaseMusic-domain.mrs"
      },
      "Amazon_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/amazon.mrs"
      },
      "Shopee_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopee.mrs"
      },
      "ebay_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ebay.mrs"
      },
      "appleTV_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/appletv.mrs"
      },
      "Epic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/epicgames.mrs"
      },
      "EA_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ea.mrs"
      },
      "Blizzard_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/blizzard.mrs"
      },
      "UBI_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ubi.mrs"
      },
      "Sony_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/sony.mrs"
      },
      "Nintendo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/nintendo.mrs"
      },
      "facebook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/facebook.mrs"
      },
      "whatsapp_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/whatsapp.mrs"
      },
      "instagram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/instagram.mrs"
      },
      "threads_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/threads.mrs"
      },
      "meta_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/meta.mrs"
      },
      "Wise_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/wise.mrs"
      },
      "ifast_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ifast.mrs"
      },
      "line_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/line.mrs"
      },
      "talkatone_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Talkatone-domain.mrs"
      },
      "Shopify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopify.mrs"
      },
      "signal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/signal.mrs"
      },
      "wechat_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/WeChat.mrs"
      },
      "proxy_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/proxy.mrs"
      },
      "direct_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/direct.mrs"
      },
      "apple_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/apple%40cn.mrs"
      },
      "alibaba_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/alibaba.mrs"
      },
      "tencent!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/tencent%40!cn.mrs"
      },
      "tencent_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/tencent.mrs"
      },
      "ai_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-ai-cn.mrs"
      },
      "discord_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/discord.mrs"
      },
      "fcm_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/googlefcm.mrs"
      },
      "emby_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/emby.mrs"
      },
      "115_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/115.mrs"
      },
      "aliyun_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/aliyun.mrs"
      },
      "twitch_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/twitch.mrs"
      },
      "porn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-porn.mrs"
      },
      "iptv_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/iptv.mrs"
      },
      "googlevpn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/googleVPN.mrs"
      },
      "ai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ai.mrs"
      },
      "TVB_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/tvb.mrs"
      },
      "game_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-games%40cn.mrs"
      },
      "fakeip_filter_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/fakeip-filter.mrs"
      },
      "pikpak_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/pikpak.mrs"
      },
      "bilibili_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.mrs"
      },
      "cn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs"
      },
      "google_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs"
      },
      "telegram_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs"
      },
      "netflix_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs"
      },
      "Amazon_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/amazon-ip.mrs"
      },
      "facebook_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/facebook.mrs"
      },
      "twitter_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/twitter.mrs"
      },
      "private_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/private.mrs"
      },
      "talkatone_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/Talkatone-ip.mrs"
      },
      "steamcdn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/steamCDN-ip.mrs"
      },
      "NetEaseMusic_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/NetEaseMusic-ip.mrs"
      },
      "emby_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/emby-ip.mrs"
      },
      "google_asn_cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS24424.mrs"
      },
      "discord_asn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS49544.mrs"
      }
    }
  },
  "lanlan-lite": {
    "global-ua": "clash.meta",
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": true,
    "unified-delay": true,
    "tcp-concurrent": true,
    "authentication": [
      ""
    ],
    "skip-auth-prefixes": [
      "127.0.0.1/8",
      "::1/128"
    ],
    "geodata-mode": false,
    "geodata-loader": "standard",
    "geo-auto-update": true,
    "geo-update-interval": 48,
    "geox-url": {
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.metadb",
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "0.0.0.0:9090",
    "secret": "",
    "external-ui": "ui",
    "external-ui-url": "https://github.com/Zephyruso/zashboard/archive/refs/heads/gh-pages.zip",
    "find-process-mode": "strict",
    "keep-alive-idle": 600,
    "keep-alive-interval": 30,
    "ntp": {
      "enable": true,
      "write-to-system": false,
      "server": "ntp.aliyun.com",
      "port": 123,
      "interval": 30
    },
    "profile": {
      "store-selected": true,
      "store-fake-ip": false
    },
    "sniffer": {
      "enable": true,
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
        "*.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud",
        "dlg.io.mi.com",
        "*.push.apple.com",
        "*.apple.com",
        "*.wechat.com",
        "*.qpic.cn",
        "*.qq.com",
        "*.wechatapp.com",
        "*.vivox.com",
        "*.oray.com",
        "*.sunlogin.net"
      ]
    },
    "tun": {
      "enable": true,
      "stack": "gvisor",
      "mtu": 9000,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ],
      "auto-route": true,
      "auto-redirect": true,
      "auto-detect-interface": true
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "prefer-h3": false,
      "respect-rules": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "28.0.0.1/8",
      "fake-ip-range6": "2001:480:abcd::1/64",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "rule-set:fakeip_filter_domain",
        "geosite:cn,category-games@cn,private"
      ],
      "default-nameserver": [
        "119.29.29.29",
        "180.184.1.1"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "direct-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "nameserver": [
        "https://dns.google/dns-query",
        "https://dns.cloudflare.com/dns-query"
      ]
    },
    "proxy-groups": [
      {
        "name": "节点选择",
        "type": "select",
        "proxies": [
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "故障转移"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/select.png"
      },
      {
        "name": "YouTube",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/youtube.png"
      },
      {
        "name": "Google",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/google.png"
      },
      {
        "name": "Meta",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/meta.png"
      },
      {
        "name": "AI",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/ai.png"
      },
      {
        "name": "GitHub",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/github.png"
      },
      {
        "name": "OneDrive",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/onedrive.png"
      },
      {
        "name": "Microsoft",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/microsoft.png"
      },
      {
        "name": "Telegram",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/telegram.png"
      },
      {
        "name": "TikTok",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tiktok.png"
      },
      {
        "name": "NETFLIX",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/netflix.png"
      },
      {
        "name": "DisneyPlus",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/disney.png"
      },
      {
        "name": "HBO",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hbo.png"
      },
      {
        "name": "Apple",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/apple.png"
      },
      {
        "name": "Emby",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/emby.png"
      },
      {
        "name": "哔哩哔哩",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibili.png"
      },
      {
        "name": "哔哩东南亚",
        "type": "select",
        "proxies": [
          "节点选择",
          "新加坡节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibilit.png"
      },
      {
        "name": "巴哈姆特",
        "type": "select",
        "proxies": [
          "台湾节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bahamut.png"
      },
      {
        "name": "Spotify",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/spotify.png"
      },
      {
        "name": "国内媒体",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Chinese_media.png"
      },
      {
        "name": "STEAM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/steam.png"
      },
      {
        "name": "全球直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "🔗 代理",
          "全部节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/direct.png"
      },
      {
        "name": "隐私拦截",
        "type": "select",
        "proxies": [
          "🚫 拒绝",
          "⚪ 丢弃",
          "DIRECT",
          "🔗 代理"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/block.png"
      },
      {
        "name": "Final",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/final.png"
      },
      {
        "name": "自建/家宽节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(自建|CF|The_house|private|home|家宽|hgc|HKT|HKBN|icable|Hinet|att))",
        "exclude-filter": "(?=.*(?i)(Seattle))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/private_node.png"
      },
      {
        "name": "香港节点",
        "type": "select",
        "proxies": [
          "香港自动",
          "香港均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(港|hk|hongkong|Hong Kong|🇭🇰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Hongkong.png"
      },
      {
        "name": "新加坡节点",
        "type": "select",
        "proxies": [
          "新加坡自动",
          "新加坡均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|singapore))",
        "exclude-filter": "(?=.*(?i)(新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Singapore.png"
      },
      {
        "name": "日本节点",
        "type": "select",
        "proxies": [
          "日本自动",
          "日本均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Japan.png"
      },
      {
        "name": "台湾节点",
        "type": "select",
        "proxies": [
          "台湾自动",
          "台湾均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Taiwan_China.png"
      },
      {
        "name": "美国节点",
        "type": "select",
        "proxies": [
          "美国自动",
          "美国均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(Australia|Russia|RUS))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/America.png"
      },
      {
        "name": "欧洲节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(🇦🇱|🇦🇩|🇦🇹|🇧🇾|🇧🇪|🇧🇦|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇸|🇮🇪|🇮🇹|🇽🇰|🇱🇻|🇱🇮|🇱🇹|🇱🇺|🇲🇹|🇲🇩|🇲🇨|🇲🇪|🇳🇱|🇲🇰|🇳🇴|🇵🇱|🇵🇹|🇷🇴|🇷🇺|🇸🇲|🇷🇸|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇨🇭|🇹🇷|🇺🇦|🇬🇧|🇻🇦))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/European.png"
      },
      {
        "name": "全部节点",
        "type": "select",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/all.png"
      },
      {
        "name": "香港自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hk_automatic_selection.png"
      },
      {
        "name": "新加坡自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/sg_automatic_selection.png"
      },
      {
        "name": "日本自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/jp_automatic_selection.png"
      },
      {
        "name": "台湾自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tw_automatic_selection.png"
      },
      {
        "name": "美国自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(The_US_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/usa_automatic_selection.png"
      },
      {
        "name": "香港均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "新加坡均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "日本均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "台湾均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "美国均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn|Kansas|Seattle))",
        "exclude-filter": "(?=.*(?i)(The_US_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "故障转移",
        "type": "fallback",
        "include-all": true,
        "interval": 300,
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fallback.png"
      },
      {
        "name": "🔗 代理",
        "type": "select",
        "hidden": true,
        "proxies": [
          "节点选择"
        ]
      },
      {
        "name": "🚫 拒绝",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT"
        ]
      },
      {
        "name": "⚪ 丢弃",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT-DROP"
        ]
      },
      {
        "name": "GLOBAL",
        "type": "select",
        "include-all": true,
        "proxies": [
          "节点选择",
          "YouTube",
          "Google",
          "Meta",
          "AI",
          "GitHub",
          "OneDrive",
          "Microsoft",
          "Telegram",
          "TikTok",
          "NETFLIX",
          "DisneyPlus",
          "HBO",
          "Apple",
          "Emby",
          "哔哩哔哩",
          "哔哩东南亚",
          "巴哈姆特",
          "Spotify",
          "国内媒体",
          "STEAM",
          "全球直连",
          "隐私拦截",
          "Final",
          "自建/家宽节点",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "香港自动",
          "新加坡自动",
          "日本自动",
          "台湾自动",
          "美国自动",
          "香港均衡",
          "新加坡均衡",
          "日本均衡",
          "台湾均衡",
          "美国均衡",
          "故障转移"
        ],
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global.png"
      }
    ],
    "rules": [
      "GEOSITE,category-ads-all,隐私拦截",
      "GEOSITE,private,全球直连",
      "GEOIP,private,全球直连,no-resolve",
      "GEOSITE,category-games@cn,全球直连",
      "GEOSITE,category-public-tracker,全球直连",
      "GEOSITE,youtube,YouTube",
      "GEOSITE,google,Google",
      "GEOIP,google,Google,no-resolve",
      "GEOSITE,github,GitHub",
      "GEOSITE,onedrive,OneDrive",
      "GEOSITE,microsoft,Microsoft",
      "GEOSITE,openai,AI",
      "GEOSITE,category-ai-!cn,AI",
      "RULE-SET,ai_domain,AI",
      "GEOSITE,apple,Apple",
      "GEOSITE,telegram,Telegram",
      "GEOIP,telegram,Telegram,no-resolve",
      "GEOSITE,facebook,Meta",
      "GEOSITE,netflix,NETFLIX",
      "GEOSITE,disney,DisneyPlus",
      "GEOSITE,hbo,HBO",
      "RULE-SET,emby_domain,Emby",
      "GEOSITE,spotify,Spotify",
      "GEOSITE,bahamut,巴哈姆特",
      "GEOSITE,tiktok,TikTok",
      "GEOSITE,bilibili,哔哩哔哩",
      "RULE-SET,bilibili_ip,哔哩哔哩,no-resolve",
      "GEOSITE,biliintl,哔哩东南亚",
      "GEOSITE,category-media-cn,国内媒体",
      "GEOSITE,steam,STEAM",
      "GEOIP,twitter,节点选择,no-resolve",
      "GEOIP,ai,AI,no-resolve",
      "GEOSITE,gfw,节点选择",
      "GEOSITE,geolocation-!cn,节点选择",
      "GEOSITE,cn,全球直连",
      "GEOIP,private,全球直连,no-resolve",
      "GEOIP,cn,全球直连,no-resolve",
      "MATCH,Final"
    ],
    "rule-providers": {
      "emby_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/emby.mrs"
      },
      "ai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ai.mrs"
      },
      "bilibili_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.mrs"
      },
      "fakeip_filter_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/fakeip-filter.mrs"
      }
    }
  },
  "lanlan-lite-no-ad": {
    "global-ua": "clash.meta",
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": true,
    "unified-delay": true,
    "tcp-concurrent": true,
    "authentication": [
      ""
    ],
    "skip-auth-prefixes": [
      "127.0.0.1/8",
      "::1/128"
    ],
    "geodata-mode": false,
    "geodata-loader": "standard",
    "geo-auto-update": true,
    "geo-update-interval": 48,
    "geox-url": {
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.metadb",
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "0.0.0.0:9090",
    "secret": "",
    "external-ui": "ui",
    "external-ui-url": "https://github.com/Zephyruso/zashboard/archive/refs/heads/gh-pages.zip",
    "find-process-mode": "strict",
    "keep-alive-idle": 600,
    "keep-alive-interval": 30,
    "ntp": {
      "enable": true,
      "write-to-system": false,
      "server": "ntp.aliyun.com",
      "port": 123,
      "interval": 30
    },
    "profile": {
      "store-selected": true,
      "store-fake-ip": false
    },
    "sniffer": {
      "enable": true,
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
        "*.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud",
        "dlg.io.mi.com",
        "*.push.apple.com",
        "*.apple.com",
        "*.wechat.com",
        "*.qpic.cn",
        "*.qq.com",
        "*.wechatapp.com",
        "*.vivox.com",
        "*.oray.com",
        "*.sunlogin.net"
      ]
    },
    "tun": {
      "enable": true,
      "stack": "gvisor",
      "mtu": 9000,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ],
      "auto-route": true,
      "auto-redirect": true,
      "auto-detect-interface": true
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "prefer-h3": false,
      "respect-rules": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "28.0.0.1/8",
      "fake-ip-range6": "2001:480:abcd::1/64",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "rule-set:fakeip_filter_domain",
        "geosite:cn,category-games@cn,private"
      ],
      "default-nameserver": [
        "119.29.29.29",
        "180.184.1.1"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "direct-nameserver": [
        "https://doh.pub/dns-query",
        "https://223.5.5.5/dns-query#h3=true"
      ],
      "nameserver": [
        "https://dns.google/dns-query",
        "https://dns.cloudflare.com/dns-query"
      ]
    },
    "proxy-groups": [
      {
        "name": "节点选择",
        "type": "select",
        "proxies": [
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "故障转移"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/select.png"
      },
      {
        "name": "YouTube",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/youtube.png"
      },
      {
        "name": "Google",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/google.png"
      },
      {
        "name": "Meta",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/meta.png"
      },
      {
        "name": "AI",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/ai.png"
      },
      {
        "name": "GitHub",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/github.png"
      },
      {
        "name": "OneDrive",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/onedrive.png"
      },
      {
        "name": "Microsoft",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/microsoft.png"
      },
      {
        "name": "Telegram",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/telegram.png"
      },
      {
        "name": "TikTok",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tiktok.png"
      },
      {
        "name": "NETFLIX",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/netflix.png"
      },
      {
        "name": "DisneyPlus",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/disney.png"
      },
      {
        "name": "HBO",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hbo.png"
      },
      {
        "name": "Apple",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/apple.png"
      },
      {
        "name": "Emby",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/emby.png"
      },
      {
        "name": "哔哩哔哩",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibili.png"
      },
      {
        "name": "哔哩东南亚",
        "type": "select",
        "proxies": [
          "节点选择",
          "新加坡节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bilibilit.png"
      },
      {
        "name": "巴哈姆特",
        "type": "select",
        "proxies": [
          "台湾节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/bahamut.png"
      },
      {
        "name": "Spotify",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/spotify.png"
      },
      {
        "name": "国内媒体",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Chinese_media.png"
      },
      {
        "name": "STEAM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/steam.png"
      },
      {
        "name": "全球直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "🔗 代理",
          "全部节点"
        ],
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/direct.png"
      },
      {
        "name": "Final",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "自建/家宽节点",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/final.png"
      },
      {
        "name": "自建/家宽节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(自建|CF|The_house|private|home|家宽|hgc|HKT|HKBN|icable|Hinet|att))",
        "exclude-filter": "(?=.*(?i)(Seattle))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/private_node.png"
      },
      {
        "name": "香港节点",
        "type": "select",
        "proxies": [
          "香港自动",
          "香港均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(港|hk|hongkong|Hong Kong|🇭🇰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Hongkong.png"
      },
      {
        "name": "新加坡节点",
        "type": "select",
        "proxies": [
          "新加坡自动",
          "新加坡均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|singapore))",
        "exclude-filter": "(?=.*(?i)(新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Singapore.png"
      },
      {
        "name": "日本节点",
        "type": "select",
        "proxies": [
          "日本自动",
          "日本均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Japan.png"
      },
      {
        "name": "台湾节点",
        "type": "select",
        "proxies": [
          "台湾自动",
          "台湾均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/Taiwan_China.png"
      },
      {
        "name": "美国节点",
        "type": "select",
        "proxies": [
          "美国自动",
          "美国均衡"
        ],
        "include-all": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(Australia|Russia|RUS))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/America.png"
      },
      {
        "name": "欧洲节点",
        "type": "select",
        "include-all": true,
        "filter": "(?=.*(?i)(🇦🇱|🇦🇩|🇦🇹|🇧🇾|🇧🇪|🇧🇦|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇸|🇮🇪|🇮🇹|🇽🇰|🇱🇻|🇱🇮|🇱🇹|🇱🇺|🇲🇹|🇲🇩|🇲🇨|🇲🇪|🇳🇱|🇲🇰|🇳🇴|🇵🇱|🇵🇹|🇷🇴|🇷🇺|🇸🇲|🇷🇸|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇨🇭|🇹🇷|🇺🇦|🇬🇧|🇻🇦))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/European.png"
      },
      {
        "name": "全部节点",
        "type": "select",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/all.png"
      },
      {
        "name": "香港自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hk_automatic_selection.png"
      },
      {
        "name": "新加坡自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/sg_automatic_selection.png"
      },
      {
        "name": "日本自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/jp_automatic_selection.png"
      },
      {
        "name": "台湾自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tw_automatic_selection.png"
      },
      {
        "name": "美国自动",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "max-failed-times": 1,
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Los Angeles|Chicago|Ashburn|Seattle|Kansas))",
        "exclude-filter": "(?=.*(?i)(The_US_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/usa_automatic_selection.png"
      },
      {
        "name": "香港均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(香港|hk|hongkong|Hong Kong|🇭🇰))",
        "exclude-filter": "(?=.*(?i)(The_HK_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "新加坡均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(新|🇸🇬|SG|Singapore))",
        "exclude-filter": "(?=.*(?i)(The_SG_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus|新西兰))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "日本均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(日本|🇯🇵|JP|Japan))",
        "exclude-filter": "(?=.*(?i)(The_JP_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "台湾均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(台|🇹🇼|TW|Taiwan))",
        "exclude-filter": "(?=.*(?i)(The_TW_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "美国均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?=.*(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn|Kansas|Seattle))",
        "exclude-filter": "(?=.*(?i)(The_US_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus))",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/load-balance.png"
      },
      {
        "name": "故障转移",
        "type": "fallback",
        "include-all": true,
        "interval": 300,
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/fallback.png"
      },
      {
        "name": "🔗 代理",
        "type": "select",
        "hidden": true,
        "proxies": [
          "节点选择"
        ]
      },
      {
        "name": "GLOBAL",
        "type": "select",
        "include-all": true,
        "proxies": [
          "节点选择",
          "YouTube",
          "Google",
          "Meta",
          "AI",
          "GitHub",
          "OneDrive",
          "Microsoft",
          "Telegram",
          "TikTok",
          "NETFLIX",
          "DisneyPlus",
          "HBO",
          "Apple",
          "Emby",
          "哔哩哔哩",
          "哔哩东南亚",
          "巴哈姆特",
          "Spotify",
          "国内媒体",
          "STEAM",
          "全球直连",
          "Final",
          "自建/家宽节点",
          "香港节点",
          "新加坡节点",
          "日本节点",
          "台湾节点",
          "美国节点",
          "欧洲节点",
          "全部节点",
          "香港自动",
          "新加坡自动",
          "日本自动",
          "台湾自动",
          "美国自动",
          "香港均衡",
          "新加坡均衡",
          "日本均衡",
          "台湾均衡",
          "美国均衡",
          "故障转移"
        ],
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/global.png"
      }
    ],
    "rules": [
      "GEOSITE,private,全球直连",
      "GEOIP,private,全球直连,no-resolve",
      "GEOSITE,category-games@cn,全球直连",
      "GEOSITE,category-public-tracker,全球直连",
      "GEOSITE,youtube,YouTube",
      "GEOSITE,google,Google",
      "GEOIP,google,Google,no-resolve",
      "GEOSITE,github,GitHub",
      "GEOSITE,onedrive,OneDrive",
      "GEOSITE,microsoft,Microsoft",
      "GEOSITE,openai,AI",
      "GEOSITE,category-ai-!cn,AI",
      "RULE-SET,ai_domain,AI",
      "GEOSITE,apple,Apple",
      "GEOSITE,telegram,Telegram",
      "GEOIP,telegram,Telegram,no-resolve",
      "GEOSITE,facebook,Meta",
      "GEOSITE,netflix,NETFLIX",
      "GEOSITE,disney,DisneyPlus",
      "GEOSITE,hbo,HBO",
      "RULE-SET,emby_domain,Emby",
      "GEOSITE,spotify,Spotify",
      "GEOSITE,bahamut,巴哈姆特",
      "GEOSITE,tiktok,TikTok",
      "GEOSITE,bilibili,哔哩哔哩",
      "RULE-SET,bilibili_ip,哔哩哔哩,no-resolve",
      "GEOSITE,biliintl,哔哩东南亚",
      "GEOSITE,category-media-cn,国内媒体",
      "GEOSITE,steam,STEAM",
      "GEOIP,twitter,节点选择,no-resolve",
      "GEOIP,ai,AI,no-resolve",
      "GEOSITE,gfw,节点选择",
      "GEOSITE,geolocation-!cn,节点选择",
      "GEOSITE,cn,全球直连",
      "GEOIP,private,全球直连,no-resolve",
      "GEOIP,cn,全球直连,no-resolve",
      "MATCH,Final"
    ],
    "rule-providers": {
      "emby_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/emby.mrs"
      },
      "ai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ai.mrs"
      },
      "bilibili_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.mrs"
      },
      "fakeip_filter_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/fakeip-filter.mrs"
      }
    }
  },
  "lanlan-beta": {
    "global-ua": "clash.meta",
    "mixed-port": 7890,
    "ipv6": true,
    "allow-lan": true,
    "unified-delay": true,
    "tcp-concurrent": true,
    "authentication": [
      ""
    ],
    "skip-auth-prefixes": [
      "127.0.0.1/8",
      "::1/128"
    ],
    "geodata-mode": false,
    "geodata-loader": "standard",
    "geo-auto-update": true,
    "geo-update-interval": 48,
    "geox-url": {
      "geosite": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
      "mmdb": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.metadb",
      "geoip": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
      "asn": "https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/GeoLite2-ASN.mmdb"
    },
    "external-controller": "0.0.0.0:9090",
    "secret": "",
    "external-ui": "ui",
    "external-ui-url": "https://github.com/Zephyruso/zashboard/archive/refs/heads/gh-pages.zip",
    "find-process-mode": "strict",
    "global-client-fingerprint": "chrome",
    "keep-alive-idle": 600,
    "keep-alive-interval": 30,
    "profile": {
      "store-selected": true,
      "store-fake-ip": false
    },
    "sniffer": {
      "enable": true,
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
        "*.v2ex.com"
      ],
      "skip-domain": [
        "Mijia Cloud",
        "dlg.io.mi.com",
        "*.push.apple.com",
        "*.apple.com",
        "*.wechat.com",
        "*.qpic.cn",
        "*.qq.com",
        "*.wechatapp.com",
        "*.vivox.com",
        "*.oray.com",
        "*.sunlogin.net"
      ]
    },
    "tun": {
      "enable": true,
      "stack": "gvisor",
      "mtu": 9000,
      "dns-hijack": [
        "any:53",
        "tcp://any:53"
      ],
      "auto-route": true,
      "auto-redirect": true,
      "auto-detect-interface": true
    },
    "dns": {
      "enable": true,
      "listen": "0.0.0.0:1053",
      "ipv6": true,
      "prefer-h3": false,
      "respect-rules": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "28.0.0.1/8",
      "fake-ip-filter-mode": "blacklist",
      "fake-ip-filter": [
        "rule-set:fakeip_filter_domain,game_cn_domain,bank_cn_domain,wechat_domain,ai_cn_domain,NetEaseMusic_domain,fcm_domain,alibaba_domain,media_cn_domain,xiaomi_domain,steam_cn_domain,pt_cn_domain,public-tracker_domain,115_domain,aliyun_domain,direct_domain,apple_cn_domain,apple_firmware_domain,iptv_domain,private_domain,cn_domain"
      ],
      "default-nameserver": [
        "119.29.29.29",
        "180.184.1.1"
      ],
      "proxy-server-nameserver": [
        "https://doh.pub/dns-query",
        "https://101.34.254.32/ihtw"
      ],
      "direct-nameserver": [
        "https://doh.pub/dns-query",
        "https://101.34.254.32/ihtw"
      ],
      "nameserver": [
        "https://dns.google/dns-query",
        "https://dns.cloudflare.com/dns-query"
      ]
    },
    "proxy-groups": [
      {
        "name": "节点选择",
        "type": "select",
        "proxies": [
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "故障转移"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/select.png"
      },
      {
        "name": "🔗 代理",
        "type": "select",
        "hidden": true,
        "proxies": [
          "节点选择"
        ]
      },
      {
        "name": "🚫 拒绝",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT"
        ]
      },
      {
        "name": "⚪ 丢弃",
        "type": "select",
        "hidden": true,
        "proxies": [
          "REJECT-DROP"
        ]
      },
      {
        "name": "YouTube",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/youtube.png"
      },
      {
        "name": "FCM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/fcm.png"
      },
      {
        "name": "GoogleVPN",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/googlevpn.png"
      },
      {
        "name": "Google",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/google.png"
      },
      {
        "name": "Meta",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/meta.png"
      },
      {
        "name": "AI",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/ai.png"
      },
      {
        "name": "GitHub",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/github.png"
      },
      {
        "name": "OneDrive",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/onedrive.png"
      },
      {
        "name": "Microsoft",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/microsoft.png"
      },
      {
        "name": "Telegram",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/telegram.png"
      },
      {
        "name": "Discord",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/discord.png"
      },
      {
        "name": "Talkatone",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/talkatone.png"
      },
      {
        "name": "LINE",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/line.png"
      },
      {
        "name": "Signal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/signal.png"
      },
      {
        "name": "TikTok",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/tiktok.png"
      },
      {
        "name": "NETFLIX",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/netflix.png"
      },
      {
        "name": "DisneyPlus",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/disney.png"
      },
      {
        "name": "HBO",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/hbo.png"
      },
      {
        "name": "Primevideo",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/primevideo.png"
      },
      {
        "name": "AppleTV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/appletv.png"
      },
      {
        "name": "Apple",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/apple.png"
      },
      {
        "name": "Emby",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/emby.png"
      },
      {
        "name": "哔哩哔哩",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/bilibili.png"
      },
      {
        "name": "哔哩东南亚",
        "type": "select",
        "proxies": [
          "节点选择",
          "新加坡-Select",
          "新加坡-Auto",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/bilibilit.png"
      },
      {
        "name": "巴哈姆特",
        "type": "select",
        "proxies": [
          "台湾-Select",
          "台湾-Auto"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/bahamut.png"
      },
      {
        "name": "Spotify",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/spotify.png"
      },
      {
        "name": "国内媒体",
        "type": "select",
        "proxies": [
          "全球直连",
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/Chinese_media.png"
      },
      {
        "name": "Global-TV",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/global_tv.png"
      },
      {
        "name": "Global-Medial",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/global_media.png"
      },
      {
        "name": "游戏平台",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/game.png"
      },
      {
        "name": "Speedtest",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/speedtest.png"
      },
      {
        "name": "PayPal",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/paypal.png"
      },
      {
        "name": "Wise",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/wise.png"
      },
      {
        "name": "国外电商",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/shopping.png"
      },
      {
        "name": "STEAM",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/steam.png"
      },
      {
        "name": "全球直连",
        "type": "select",
        "proxies": [
          "DIRECT",
          "🔗 代理"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/direct.png"
      },
      {
        "name": "隐私拦截",
        "type": "select",
        "proxies": [
          "🚫 拒绝",
          "⚪ 丢弃",
          "DIRECT",
          "🔗 代理"
        ],
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/block.png"
      },
      {
        "name": "Final",
        "type": "select",
        "proxies": [
          "节点选择",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select",
          "全球直连"
        ],
        "include-all": true,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/final.png"
      },
      {
        "name": "自建/家宽-Select",
        "type": "select",
        "include-all": true,
        "filter": "(?i)(自建|CF|The_house|private|home|家宽)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/private_node.png"
      },
      {
        "name": "香港-Select",
        "type": "select",
        "proxies": [
          "香港均衡"
        ],
        "include-all": true,
        "filter": "(?i)(港|hk|hongkong|Hong Kong)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/Hongkong.png"
      },
      {
        "name": "新加坡-Select",
        "type": "select",
        "proxies": [
          "新加坡均衡"
        ],
        "include-all": true,
        "filter": "(?i)(新|🇸🇬|SG|singapore)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/Singapore.png"
      },
      {
        "name": "日本-Select",
        "type": "select",
        "proxies": [
          "日本均衡"
        ],
        "include-all": true,
        "filter": "(?i)(日本|🇯🇵|JP|Japan)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/Japan.png"
      },
      {
        "name": "台湾-Select",
        "type": "select",
        "proxies": [
          "台湾均衡"
        ],
        "include-all": true,
        "filter": "(?i)(台|🇹🇼|TW|Taiwan)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/Taiwan_China.png"
      },
      {
        "name": "美国-Select",
        "type": "select",
        "proxies": [
          "美国均衡"
        ],
        "include-all": true,
        "filter": "(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn)",
        "exclude-filter": "(?i)(Australia|Russia)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/America.png"
      },
      {
        "name": "欧洲-Select",
        "type": "select",
        "include-all": true,
        "filter": "(?i)(🇦🇱|🇦🇩|🇦🇹|🇧🇾|🇧🇪|🇧🇦|🇧🇬|🇭🇷|🇨🇾|🇨🇿|🇩🇰|🇪🇪|🇫🇮|🇫🇷|🇩🇪|🇬🇷|🇭🇺|🇮🇸|🇮🇪|🇮🇹|🇽🇰|🇱🇻|🇱🇮|🇱🇹|🇱🇺|🇲🇹|🇲🇩|🇲🇨|🇲🇪|🇳🇱|🇲🇰|🇳🇴|🇵🇱|🇵🇹|🇷🇴|🇷🇺|🇸🇲|🇷🇸|🇸🇰|🇸🇮|🇪🇸|🇸🇪|🇨🇭|🇹🇷|🇺🇦|🇬🇧|🇻🇦)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/European.png"
      },
      {
        "name": "香港-Auto",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 120,
        "filter": "(?i)(香港|hk|hongkong|Hong Kong)",
        "exclude-filter": "(?i)(The_HK_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/hk_automatic_selection.png"
      },
      {
        "name": "新加坡-Auto",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 120,
        "filter": "(?i)(新|🇸🇬|SG|Singapore)",
        "exclude-filter": "(?i)(The_SG_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/sg_automatic_selection.png"
      },
      {
        "name": "日本-Auto",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 120,
        "filter": "(?i)(日本|🇯🇵|JP|Japan)",
        "exclude-filter": "(?i)(The_JP_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/jp_automatic_selection.png"
      },
      {
        "name": "台湾-Auto",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 120,
        "filter": "(?i)(台|🇹🇼|TW|Taiwan)",
        "exclude-filter": "(?i)(The_TW_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/tw_automatic_selection.png"
      },
      {
        "name": "美国-Auto",
        "type": "url-test",
        "include-all": true,
        "tolerance": 20,
        "interval": 120,
        "filter": "(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn)",
        "exclude-filter": "(?i)(The_US_automation|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus)",
        "icon": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/icon/usa_automatic_selection.png"
      },
      {
        "name": "香港均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?i)(香港|hk|hongkong|Hong Kong)",
        "exclude-filter": "(?i)(The_HK_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/load-balance.png"
      },
      {
        "name": "新加坡均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?i)(新|🇸🇬|SG|Singapore)",
        "exclude-filter": "(?i)(The_SG_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/load-balance.png"
      },
      {
        "name": "日本均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?i)(日本|🇯🇵|JP|Japan)",
        "exclude-filter": "(?i)(The_JP_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/load-balance.png"
      },
      {
        "name": "台湾均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?i)(台|🇹🇼|TW|Taiwan)",
        "exclude-filter": "(?i)(The_TW_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|traffic|plus)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/load-balance.png"
      },
      {
        "name": "美国均衡",
        "type": "load-balance",
        "include-all": true,
        "strategy": "consistent-hashing",
        "hidden": true,
        "filter": "(?i)(美|🇺🇲|🇺🇸|US|America|United States|UnitedState|Ashburn)",
        "exclude-filter": "(?i)(The_US_balance|wcloud|0倍|0\\.1倍|0\\.01倍|0\\.3X|0\\.2x|0\\.5x|3X|2x|1\\.5x|russia|austria|plus|traffic|Australia|rus|aus)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/load-balance.png"
      },
      {
        "name": "故障转移",
        "type": "fallback",
        "include-all": true,
        "proxies": [
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "全部节点",
          "自建/家宽-Select"
        ],
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/fallback.png"
      },
      {
        "name": "全部节点",
        "type": "select",
        "include-all": true,
        "tolerance": 20,
        "interval": 300,
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/all.png"
      },
      {
        "name": "GLOBAL",
        "type": "select",
        "include-all": true,
        "proxies": [
          "节点选择",
          "YouTube",
          "GoogleVPN",
          "FCM",
          "Google",
          "Meta",
          "AI",
          "GitHub",
          "OneDrive",
          "Microsoft",
          "Telegram",
          "Discord",
          "Talkatone",
          "LINE",
          "Signal",
          "TikTok",
          "NETFLIX",
          "DisneyPlus",
          "HBO",
          "Primevideo",
          "AppleTV",
          "Apple",
          "Emby",
          "哔哩哔哩",
          "哔哩东南亚",
          "巴哈姆特",
          "Spotify",
          "国内媒体",
          "Global-TV",
          "Global-Medial",
          "游戏平台",
          "Speedtest",
          "PayPal",
          "Wise",
          "国外电商",
          "STEAM",
          "全球直连",
          "隐私拦截",
          "Final",
          "自建/家宽-Select",
          "香港-Select",
          "香港-Auto",
          "新加坡-Select",
          "新加坡-Auto",
          "日本-Select",
          "日本-Auto",
          "台湾-Select",
          "台湾-Auto",
          "美国-Select",
          "美国-Auto",
          "欧洲-Select",
          "香港均衡",
          "新加坡均衡",
          "日本均衡",
          "台湾均衡",
          "美国均衡",
          "故障转移",
          "全部节点"
        ],
        "exclude-filter": "(?i)(🟢 直连)",
        "icon": "https://pub-8feead0908f649a8b94397f152fb9cba.r2.dev/global.png"
      }
    ],
    "rules": [
      "RULE-SET,banAd_domain,隐私拦截",
      "RULE-SET,wechat_domain,全球直连",
      "RULE-SET,wechat_asn,全球直连,no-resolve",
      "RULE-SET,speedtest_domain,Speedtest",
      "RULE-SET,Cloudflare_domain,节点选择",
      "RULE-SET,Wise_domain,Wise",
      "RULE-SET,paypal_domain,PayPal",
      "RULE-SET,proxy_domain,节点选择",
      "RULE-SET,biliintl_domain,哔哩东南亚",
      "RULE-SET,bilibili_domain,哔哩哔哩",
      "RULE-SET,bilibili_ip,哔哩哔哩,no-resolve",
      "RULE-SET,bahamut_domain,巴哈姆特",
      "RULE-SET,bank_cn_domain,全球直连",
      "RULE-SET,ai_cn_domain,全球直连",
      "RULE-SET,direct_domain,全球直连",
      "RULE-SET,alibaba_domain,全球直连",
      "RULE-SET,115_domain,全球直连",
      "RULE-SET,aliyun_domain,全球直连",
      "RULE-SET,github_domain,GitHub",
      "RULE-SET,gitbook_domain,GitHub",
      "RULE-SET,googlevpn_domain,GoogleVPN",
      "RULE-SET,youtube_domain,YouTube",
      "RULE-SET,fcm_domain,FCM",
      "RULE-SET,google_domain,Google",
      "RULE-SET,google_asn_cn,Google,no-resolve",
      "RULE-SET,google_ip,Google,no-resolve",
      "RULE-SET,onedrive_domain,OneDrive",
      "RULE-SET,microsoft_domain,Microsoft",
      "RULE-SET,ai!cn_domain,AI",
      "RULE-SET,ai_domain,AI",
      "RULE-SET,openai_domain,AI",
      "RULE-SET,telegram_domain,Telegram",
      "RULE-SET,telegram_ip,Telegram,no-resolve",
      "RULE-SET,line_domain,LINE",
      "RULE-SET,talkatone_domain,Talkatone",
      "RULE-SET,talkatone_ip,Talkatone,no-resolve",
      "RULE-SET,discord_domain,Discord",
      "RULE-SET,discord_asn,Discord,no-resolve",
      "RULE-SET,signal_domain,Signal",
      "RULE-SET,iptv_domain,全球直连",
      "RULE-SET,private_domain,全球直连",
      "RULE-SET,xiaomi_domain,全球直连",
      "RULE-SET,steam_cn_domain,全球直连",
      "RULE-SET,steamcdn_domain,全球直连",
      "RULE-SET,steamcdn_ip,全球直连,no-resolve",
      "RULE-SET,NetEaseMusic_domain,全球直连",
      "RULE-SET,NetEaseMusic_ip,全球直连,no-resolve",
      "RULE-SET,pt_cn_domain,全球直连",
      "RULE-SET,public-tracker_domain,全球直连",
      "RULE-SET,media_cn_domain,国内媒体",
      "RULE-SET,appleTV_domain,AppleTV",
      "RULE-SET,apple_cn_domain,全球直连",
      "RULE-SET,apple_firmware_domain,Apple",
      "RULE-SET,apple_domain,Apple",
      "RULE-SET,tiktok_domain,TikTok",
      "RULE-SET,netflix_domain,NETFLIX",
      "RULE-SET,netflix_ip,NETFLIX,no-resolve",
      "RULE-SET,disney_domain,DisneyPlus",
      "RULE-SET,hbo_domain,HBO",
      "RULE-SET,primevideo_domain,Primevideo",
      "RULE-SET,emby_domain,Emby",
      "RULE-SET,emby_ip,Emby,no-resolve",
      "RULE-SET,spotify_domain,Spotify",
      "RULE-SET,facebook_domain,Meta",
      "RULE-SET,whatsapp_domain,Meta",
      "RULE-SET,instagram_domain,Meta",
      "RULE-SET,threads_domain,Meta",
      "RULE-SET,meta_domain,Meta",
      "RULE-SET,facebook_ip,Meta,no-resolve",
      "RULE-SET,twitch_domain,Global-TV",
      "RULE-SET,porn_domain,Global-TV",
      "RULE-SET,TVB_domain,Global-TV",
      "RULE-SET,media!cn_domain,Global-Medial",
      "RULE-SET,twitter_ip,节点选择,no-resolve",
      "RULE-SET,steam_domain,STEAM",
      "RULE-SET,Epic_domain,游戏平台",
      "RULE-SET,EA_domain,游戏平台",
      "RULE-SET,Blizzard_domain,游戏平台",
      "RULE-SET,UBI_domain,游戏平台",
      "RULE-SET,Sony_domain,游戏平台",
      "RULE-SET,Nintendo_domain,游戏平台",
      "RULE-SET,ifast_domain,全球直连",
      "RULE-SET,Amazon_domain,国外电商",
      "RULE-SET,Amazon_ip,国外电商,no-resolve",
      "RULE-SET,Shopee_domain,国外电商",
      "RULE-SET,Shopify_domain,国外电商",
      "RULE-SET,ebay_domain,国外电商",
      "RULE-SET,gfw_domain,节点选择",
      "RULE-SET,geolocation-!cn,节点选择",
      "RULE-SET,cn_domain,全球直连",
      "RULE-SET,private_ip,全球直连,no-resolve",
      "RULE-SET,cn_ip,全球直连,no-resolve",
      "MATCH,Final"
    ],
    "rule-providers": {
      "banAd_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/banAd.mrs"
      },
      "private_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/private.mrs"
      },
      "bank_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-bank-cn.mrs"
      },
      "xiaomi_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/xiaomi.mrs"
      },
      "biliintl_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili%40!cn.mrs"
      },
      "bilibili_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bilibili.mrs"
      },
      "bahamut_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/bahamut.mrs"
      },
      "spotify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/spotify.mrs"
      },
      "steam_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam%40cn.mrs"
      },
      "steamcdn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Steam-domain.mrs"
      },
      "steam_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/steam.mrs"
      },
      "ai!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-!cn.mrs"
      },
      "openai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/openai.mrs"
      },
      "youtube_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/youtube.mrs"
      },
      "google_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/google.mrs"
      },
      "github_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/github.mrs"
      },
      "telegram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/telegram.mrs"
      },
      "netflix_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/netflix.mrs"
      },
      "paypal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/paypal.mrs"
      },
      "onedrive_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/onedrive.mrs"
      },
      "microsoft_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/microsoft.mrs"
      },
      "apple_firmware_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/applefirmware.mrs"
      },
      "apple_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/apple.mrs"
      },
      "speedtest_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/ookla-speedtest.mrs"
      },
      "tiktok_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/tiktok.mrs"
      },
      "gfw_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/gfw.mrs"
      },
      "geolocation-!cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.mrs"
      },
      "cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/cn.mrs"
      },
      "media_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-media-cn.mrs"
      },
      "media!cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-social-media-!cn.mrs"
      },
      "Cloudflare_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/cloudflare.mrs"
      },
      "gitbook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/gitbook.mrs"
      },
      "disney_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/disney.mrs"
      },
      "hbo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/hbo.mrs"
      },
      "primevideo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/primevideo.mrs"
      },
      "NetEaseMusic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/NetEaseMusic-domain.mrs"
      },
      "Amazon_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/amazon.mrs"
      },
      "Shopee_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopee.mrs"
      },
      "ebay_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ebay.mrs"
      },
      "appleTV_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/appletv.mrs"
      },
      "Epic_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/epicgames.mrs"
      },
      "EA_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ea.mrs"
      },
      "Blizzard_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/blizzard.mrs"
      },
      "UBI_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ubi.mrs"
      },
      "Sony_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/sony.mrs"
      },
      "Nintendo_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/nintendo.mrs"
      },
      "facebook_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/facebook.mrs"
      },
      "whatsapp_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/whatsapp.mrs"
      },
      "instagram_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/instagram.mrs"
      },
      "threads_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/threads.mrs"
      },
      "meta_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/meta.mrs"
      },
      "Wise_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/wise.mrs"
      },
      "ifast_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/ifast.mrs"
      },
      "line_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/line.mrs"
      },
      "talkatone_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/Talkatone-domain.mrs"
      },
      "Shopify_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/shopify.mrs"
      },
      "signal_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/signal.mrs"
      },
      "wechat_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/WeChat.mrs"
      },
      "proxy_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/proxy.mrs"
      },
      "direct_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/direct.mrs"
      },
      "apple_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/apple%40cn.mrs"
      },
      "alibaba_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/alibaba.mrs"
      },
      "ai_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-ai-cn.mrs"
      },
      "discord_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/discord.mrs"
      },
      "fcm_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/googlefcm.mrs"
      },
      "emby_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/emby.mrs"
      },
      "pt_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-pt.mrs"
      },
      "public-tracker_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-public-tracker.mrs"
      },
      "115_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/115.mrs"
      },
      "aliyun_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/aliyun.mrs"
      },
      "twitch_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/twitch.mrs"
      },
      "porn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-porn.mrs"
      },
      "iptv_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/iptv.mrs"
      },
      "googlevpn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/googleVPN.mrs"
      },
      "ai_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/ai.mrs"
      },
      "TVB_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/tvb.mrs"
      },
      "game_cn_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/category-games%40cn.mrs"
      },
      "fakeip_filter_domain": {
        "type": "http",
        "interval": 86400,
        "behavior": "domain",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/Domain/fakeip-filter.mrs"
      },
      "bilibili_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo-lite/geoip/bilibili.mrs"
      },
      "cn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/cn.mrs"
      },
      "google_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.mrs"
      },
      "telegram_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/telegram.mrs"
      },
      "netflix_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/netflix.mrs"
      },
      "Amazon_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/amazon-ip.mrs"
      },
      "facebook_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/facebook.mrs"
      },
      "twitter_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/twitter.mrs"
      },
      "private_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geoip/private.mrs"
      },
      "talkatone_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/Talkatone-ip.mrs"
      },
      "steamcdn_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/steamCDN-ip.mrs"
      },
      "NetEaseMusic_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/NetEaseMusic-ip.mrs"
      },
      "emby_ip": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/emby-ip.mrs"
      },
      "google_asn_cn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS24424.mrs"
      },
      "discord_asn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS49544.mrs"
      },
      "wechat_asn": {
        "type": "http",
        "interval": 86400,
        "behavior": "ipcidr",
        "format": "mrs",
        "url": "https://raw.githubusercontent.com/Lanlan13-14/Rules/refs/heads/main/rules/IP/AS132203.mrs"
      }
    }
  },
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
