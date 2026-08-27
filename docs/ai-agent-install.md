# 用 AI Agent 部署

这个仓库适合交给 Codex、Claude Code 或其他能读写文件、运行命令的本地 AI 编程 Agent。

Agent 的主要工作不是手工跑十几条命令，而是：

1. 收集缺失输入。
2. 写 `config/agent-setup.local.json`。
3. 运行 `pnpm run install:cloudflare`。
4. 部署后返回 admin URL 和 collection download URLs。

可以复制 [../agent/install.prompt.md](../agent/install.prompt.md)。

## Agent 会问你什么

- Cloudflare 是否已经能登录 Wrangler。
- Worker 名称，默认 `sub-store-cloudflare`。
- 使用 `workers.dev`，还是绑定自己的管理域名。
- 是否需要单独下载域名。
- 管理 token 和下载 token：你提供，或本地自动生成并保存到被忽略的 setup 文件。
- 远程订阅链接。
- 本地节点文本，例如 `vless://`、`trojan://`、`ss://`、`vmess://`。
- 想创建哪些组合订阅。
- 是否需要把个人 JavaScript Filter / Operator 作为构建时代码一起部署。
- 每个组合订阅包含哪些订阅源。
- 使用哪套分流模板。
- 是否需要节点过滤，例如去掉“官网/剩余/流量/倍率”，或只保留某些地区。

## Cloudflare 缺失时怎么处理

如果用户没有 Cloudflare 账号，Agent 应该明确说明：

```text
这个项目需要 Cloudflare 账号，因为它运行在 Workers + D1 上。
我可以先准备本地配置，但不能替你完成线上部署。
创建 Cloudflare 账号后运行：
pnpm --dir cloudflare exec wrangler login
pnpm run install:cloudflare
```

如果 Agent 环境无法连接 Cloudflare，应该停在 handoff 状态，不要假装部署完成：

```text
Cloudflare 当前不可访问。我已经准备好本地配置。
登录或恢复网络后运行：
pnpm run install:cloudflare
```

## 推荐输入格式

```text
我有三个远程订阅源，名字分别是 Airport A、Airport B、Home。
我想创建一个 daily 组合订阅，包含全部订阅源。
默认用 acl4ssr-mihomo。
过滤掉名字里包含 官网、剩余、流量、过期、倍率 的节点。
按 server + port 去重，最后按名称排序。
```

本地节点可以直接给：

```text
我还有一个自建节点，内容是：
vless://...
把它命名为 home-node，也加入 daily。
```

## 本地配置文件

Agent 写入：

```text
config/agent-setup.local.json
```

这个文件按 [../config/agent-setup.schema.json](../config/agent-setup.schema.json) 写。常用过滤器可以直接写 `filterPresetIds`，生成 seed SQL 时会展开成 Worker 能读取的过滤器。

Source、Collection 和自定义 Template 的 ID 只能使用 1–64 位小写字母、数字、下划线或连字符。`sourceIds: []` 表示组合订阅包含全部已启用订阅源；需要固定成员时必须显式列出 source ID。

常用预设在 [../config/rule-presets.json](../config/rule-presets.json)：

- `clean-provider-nodes`：去掉“官网、剩余、流量、过期、倍率”等信息节点。
- `dedupe-by-endpoint`：按 `server + port` 去重。
- `sort-by-name`：按节点名排序。
- `hk-jp-sg-us-only`：只保留香港、日本、新加坡、美国；这个会删掉其他地区节点，必须先确认。

## 内置模板怎么选

- `acl4ssr-mihomo`：推荐默认值，适合大多数用户。
- `acl4ssr-mihomo-no-emoji`：和默认模板同源，但分组名不带 emoji。
- `mihomo-basic`：最小模板，方便检查和改造。
- `loyalsoldier-whitelist`：直连优先的白名单思路。
- `loyalsoldier-blacklist`：代理优先的黑名单思路。
- `ai-streaming-mihomo`：AI、流媒体、Telegram、GitHub 分流更明确。

## 执行命令

配置写好后，Agent 应运行：

```bash
pnpm run install:cloudflare
```

安装器会自动执行验证、部署、seed import 和 HTTP smoke test。任一 HTTP 验证失败都会以非零状态退出，并给出恢复命令；Agent 不能把这种状态报告为部署成功。

Agent 运行通常是非交互环境，因此必须在执行安装器前写好 `config/agent-setup.local.json`。如果缺少文件，安装器会创建示例并停止，绝不会自动部署示例 URL。不要用 `install:quick` 代替用户要求的 Sources / Collections 导入。

如果只想检查环境：

```bash
pnpm run install:doctor
```

## 隐私规则

不要提交这些文件：

- `config/agent-setup.local.json`
- `cloudflare/agent.seed.local.sql`
- `cloudflare/wrangler.deploy.local.jsonc`
- `.dev.vars`
- `cloudflare/.dev.vars`
- `config/script-plugins.local.json`
- `config/scripts.local/`
- `cloudflare/src/generated/`

结束前运行：

```bash
git status --short
```

确认订阅 URL、节点 URI、token、database id 没有进入待提交文件。

## 验证清单

部署完成后，Agent 应检查：

- `/api/env` 能用管理 token 访问。
- `/api/templates` 返回内置模板。
- `/api/sources` 和 `/api/collections` 返回用户配置。
- `/api/link/collection/<id>` 返回带下载 token 的链接。
- `/download/collection/<id>/mihomo?token=...` 能返回 YAML。

最后返回：

- 管理地址。
- 组合订阅下载地址。
- sources / collections 摘要。
- `git status --short` 隐私检查摘要。
