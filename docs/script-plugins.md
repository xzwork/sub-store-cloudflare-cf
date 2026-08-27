# 构建时 JavaScript 脚本

Sub-Store Cloudflare 支持随 Worker 一起编译的 JavaScript Filter / Operator。它不是运行时脚本平台：网页、D1 和远程 URL 中的代码字符串都不会被执行。

这种实现使用真正的 JavaScript，同时避开 Cloudflare Workers 对 `eval()` / `new Function()` 的限制，也不需要把额外的 JavaScript 解释器塞进免费版 Worker。

## 内置脚本

当前内置两个经过 Cloudflare 免费版发布检查的脚本：

- `tls-fingerprint`：为所有节点设置 `tls-fingerprint`。
- `name-regex-filter`：按节点名正则保留或排除节点。

在订阅源或组合订阅编辑页的「节点操作」中直接选择脚本，然后填写参数。一个订阅源或组合订阅最多使用两个脚本操作。

内置脚本属于 `free` 兼容级别：不执行外部请求、不睡眠、不增加节点数量，并进入 Worker/D1 集成测试和发布包体检查。

## 个人脚本

个人脚本是部署者信任的应用代码，只能通过 Agent / CLI installer 重新构建部署，不能在网页中粘贴后立即执行。

复制清单：

```bash
cp config/script-plugins.local.example.json config/script-plugins.local.json
mkdir -p config/scripts.local
```

创建 `config/scripts.local/my-operator.js`：

```js
function operator(proxies, targetPlatform, context) {
  const { prefix = "Private" } = $arguments;
  return proxies.map((proxy) => ({
    ...proxy,
    name: `${prefix} ${proxy.name}`,
  }));
}
```

生成注册表并检查：

```bash
pnpm run scripts:generate
pnpm run check
pnpm run install:cloudflare
```

`config/script-plugins.local.json`、`config/scripts.local/` 和生成的 `cloudflare/src/generated/` 都被 Git 忽略。结束前仍应运行 `git status --short`，确认个人代码和订阅数据没有进入提交。

修改个人脚本后必须重新部署 Worker。Deploy to Cloudflare 按钮只能获得公开内置脚本，不能读取本机个人脚本。

## 兼容合同

第一版兼容原版 Sub-Store 的两个主要函数形态：

```js
function filter(proxies, targetPlatform, context) {
  return proxies.map((proxy) => proxy.name.includes("HK"));
}
```

```js
function operator(proxies, targetPlatform, context) {
  return proxies.map((proxy) => ({ ...proxy, udp: true }));
}
```

可以使用：

- `$arguments`：脚本参数。
- `$options`：当前受控请求选项。
- `targetPlatform`：输出目标。
- `context`：当前 source / collection 和 script ID。
- `ProxyUtils.isIP`、`isIPv4`、`isIPv6`、`removeFlag`、`Base64.encode/decode`。

Filter 必须返回与输入节点等长的布尔数组。Operator 必须返回有效节点数组，第一版不能增加节点数量。返回值不合法时，预览或下载会明确报出脚本 ID，不会静默跳过处理。

## 不兼容范围

- 网页粘贴、D1 保存或远程 URL 加载的脚本。
- `eval()`、`new Function()`、动态 `require`、动态 import。
- Node.js 文件系统、持久化存储、文件、同步、分享、归档或 artifact API。
- Response Transformer 和任意配置文件脚本。
- 脚本市场。

个人脚本作为原生 Worker 代码可以接触 Worker 全局 API，因此不是安全沙箱。只部署自己审查并信任的脚本。项目对个人脚本不作免费版 CPU、包体或子请求承诺。

完整架构与性能门槛见 [superpowers/specs/2026-07-11-build-time-script-compatibility-design.md](superpowers/specs/2026-07-11-build-time-script-compatibility-design.md)。
