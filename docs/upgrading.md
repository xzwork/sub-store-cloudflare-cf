# 升级指南

升级的核心原则：复用原 Worker、原 D1 数据库和原 Worker Secrets，只更新代码并应用新增 migration。

升级前先在管理端“设置”页面导出完整配置备份，并确认你仍保存着 admin token 和 download token。

## 先判断安装方式

- Cloudflare Deploy Button：Cloudflare 在你的 GitHub/GitLab 账号中创建了仓库副本，并通常配置 Workers Builds。
- Agent / CLI：你本地有 `config/agent-setup.local.json` 和 `cloudflare/wrangler.deploy.local.jsonc`。
- 手动 Wrangler：你自己维护 D1 ID、Secret 和部署配置。

不要默认重新点击 Deploy Button 创建第二套 Worker 和 D1。这样会产生两套配置和两套 Token，也不会自动迁移旧数据。

## Deploy Button 仓库副本

Cloudflare 导入的仓库副本不会自动合并本上游仓库的新提交。

把你的副本克隆到本地后，添加上游：

```bash
git clone https://github.com/<你的账号>/<你的仓库>.git
cd <你的仓库>
git remote add upstream https://github.com/realchendahuang/sub-store-cloudflare.git
git fetch upstream --tags
```

升级前创建本地备份分支：

```bash
git checkout main
git branch backup/pre-upgrade-v1.1.0
```

如果副本没有自己的代码修改，可以快进到上游主线：

```bash
git merge --ff-only upstream/main
git push origin main
```

如果你修改过代码，使用普通 merge 并处理冲突：

```bash
git merge upstream/main
git push origin main
```

Workers Builds 会在 push 后重新运行构建和部署。根目录 `deploy` 脚本会先应用 D1 migrations，再部署 Worker。

在 Cloudflare 构建页确认：

- 构建命令：`pnpm run build`
- 部署命令：`pnpm run deploy`
- D1 仍绑定原数据库
- 两个 Worker Secrets 仍存在

## Agent / CLI 安装

保留以下被忽略的本地文件：

- `config/agent-setup.local.json`
- `cloudflare/wrangler.deploy.local.jsonc`
- `config/script-plugins.local.json` 和 `config/scripts.local/`（如果使用个人脚本）

更新代码并重跑安装器：

```bash
git pull --ff-only
corepack enable
pnpm run install:cloudflare
```

安装器会复用本地保存的 D1 ID 和 Token，运行检查、migration、deploy、seed 和 HTTP 验证。失败后仍使用同一命令恢复，不要临时更换 Token。

## 手动 Wrangler 升级

```bash
git pull --ff-only
corepack enable
pnpm run setup
pnpm run migrate:remote
pnpm run deploy:local
```

部署前可以运行：

```bash
pnpm run check:release
pnpm run deploy:local:dry-run
```

## v1.0.0 及之后的 D1 migration

Migration 使用 `CREATE TABLE IF NOT EXISTS` 等向前兼容操作。正常升级不会删除 Sources、Collections、Templates、Settings、下载授权或回收站数据。

不要手工修改 `d1_migrations` 记录，也不要把一个新建空 D1 当作升级后的原数据库。

## 验证升级

升级完成后检查：

1. 管理页面能用原 admin token 打开。
2. Sources 和 Collections 数量正确。
3. `/api/env` 显示新版本。
4. 至少一个 Collection 的 Mihomo 下载链接正常。
5. 独立下载域名仍拒绝 `/api/*`。
6. 管理端导出备份仍可用。

## 回滚

查看 Worker 版本：

```bash
pnpm --dir cloudflare exec wrangler versions list --config wrangler.deploy.local.jsonc
```

回滚 Worker 代码：

```bash
pnpm --dir cloudflare exec wrangler rollback --config wrangler.deploy.local.jsonc
```

Worker rollback 不会自动回滚 D1 schema。当前 migration 设计为向前兼容；如果配置数据被错误覆盖，应使用升级前导出的 JSON 备份恢复，而不是删除数据库。

无法判断当前安装状态时，先运行：

```bash
pnpm run install:doctor
```

再查看 [故障排查](troubleshooting.md)。
