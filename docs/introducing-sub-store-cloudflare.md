# sub-store-cloudflare 是什么

sub-store-cloudflare 是一个跑在 Cloudflare Workers 上的订阅聚合工具。一句话说清它干什么：把多个机场订阅和自建节点揉成一条订阅链接，分流规则在服务端配好，客户端只管订阅这一条。

## 它解决什么问题

手里不止一个机场、再加上几台自己搭的节点，是很多人真实的状态。这种状态下客户端那边很烦：

- 每个客户端要把订阅一条条加进去
- 分流规则每个客户端要单独配，换一套规则集又是手动活
- 换设备、给家里人装一次，整套重来一遍

把订阅收拢到云端、把规则也收拢到云端，客户端只盯一条订阅，整件事就清爽了。这个项目做的就是这件事。

## 它做了什么

- 管理远程订阅 URL 和本地节点文本（vless / trojan / ss / vmess / hysteria2 / tuic 等）
- 把多个订阅源组合成一条云端组合订阅
- 对节点做区域 / 类型 / 正则过滤、重命名、去重、排序、域名解析、国旗处理
- 内置常用 Mihomo 分流模板，也能导入自己的 YAML / JSON 模板
- 输出 Mihomo / Stash / Surge / Loon / Quantumult X / Shadowrocket / sing-box / v2ray / URI / JSON
- 用 Worker Secrets 保护管理端和下载链接

客户端拿到的是带好分流规则的成品，不用再手动写规则、维护规则集 URL。

## 为什么是 Cloudflare

主要是三点：

1. **不用自建服务器。** Workers + D1 省掉服务器和数据库服务的日常养护；是否落在免费额度内取决于你的实际请求量和 Cloudflare 当前套餐。
2. **可以先用 workers.dev。** 实际可访问性取决于用户所在网络和 Cloudflare 路由；如果不稳定，可以绑定自己的管理或下载域名。
3. **部署完就是 Web 管理界面加下载端点。** 手机也能开网页改配置。

技术栈刻意保持小：Cloudflare Worker + Static Assets + D1 + Worker Secrets。KV、R2、Durable Objects、Queue、Cron 都不在核心路径里。

## 怎么部署

两条路。

### Cloudflare 一键按钮

点仓库首页的 Deploy to Cloudflare 按钮。Cloudflare 导入仓库副本、建 Worker、建 D1，并要求填写两个不同的随机 token。部署完成后，把 admin token 临时加到 Worker 地址的 `?token=` 参数进入管理端。普通开源用户走这条，详细见 [quick-start.md](quick-start.md)。

### AI Agent 一键安装

仓库里带了 agent 安装协议（[../AGENTS.md](../AGENTS.md) + [../agent/SKILL.md](../agent/SKILL.md)）。把订阅源、要做的组合订阅、想用的规则模板写进 `config/agent-setup.local.json`，跑：

```bash
pnpm run install:cloudflare
```

agent 会替你检查 Cloudflare 登录、建库、写 secret、迁移、部署、导入配置、验证链接，最后把管理链接和下载链接交到你手上。要导入自己的订阅源和组合订阅，这条更顺手，也是作者自己用的路。给 Codex / Claude Code 用，直接复制 [../agent/install.prompt.md](../agent/install.prompt.md) 那段提示词就行。

## 适合谁

- 有多个机场订阅 + 自建节点，想合成一条订阅自用的
- 想把分流规则放服务端维护、不想每个客户端重配的
- 不想养护服务器、想用 Cloudflare 轻量方式跑的

就一个机场将就用的，没必要上这个。

## 和原版 Sub-Store 的关系

前端的交互和管理思路致敬了 [sub-store-org/Sub-Store](https://github.com/sub-store-org/Sub-Store)。原版功能完整、覆盖更广的运行环境和客户端生态；这个仓库选了更小的 Cloudflare-native 形态，方便直接部署和二次修改，不是逐项复刻。详细边界见 [product-scope.md](product-scope.md)。

## 链接

- 仓库：https://github.com/realchendahuang/sub-store-cloudflare
- 部署说明：[deployment.md](deployment.md)
- Agent 安装：[ai-agent-install.md](ai-agent-install.md)
- 架构说明：[architecture.md](architecture.md)
