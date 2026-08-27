import type { RemoteSubscriptionInfo, SubscriptionResponseMetadata } from "../types";

export function createRemoteSubscriptionInfo(
  raw: string | undefined,
  nodeCount: number,
  lastSuccessAt = Date.now(),
): RemoteSubscriptionInfo {
  const fields = parseFields(raw || "");
  const upload = fields.upload;
  const download = fields.download;
  const total = fields.total;
  const provided = upload !== undefined && download !== undefined && total !== undefined;
  const used = provided ? upload + download : undefined;
  const remaining = provided ? total - used : undefined;
  const usagePercent = provided && total > 0 ? (used / total) * 100 : undefined;

  return {
    provided,
    ...(provided ? { upload, download, used, remaining, total, usagePercent } : {}),
    ...(fields.expire !== undefined ? { expire: fields.expire } : {}),
    nodeCount: Math.max(0, Math.trunc(nodeCount)),
    lastSuccessAt,
  };
}

export function shouldPersistRemoteFetch(metadata: SubscriptionResponseMetadata | undefined) {
  return metadata?.cacheStatus === "miss" || metadata?.cacheStatus === "refresh";
}

function parseFields(raw: string) {
  return {
    upload: numberField(raw, "upload"),
    download: numberField(raw, "download"),
    total: numberField(raw, "total"),
    expire: numberField(raw, "expire"),
  };
}

function numberField(input: string, key: string) {
  const match = input.match(new RegExp(`(?:^|[;\\s])${key}\\s*=\\s*([-+]?\\d+(?:\\.\\d+)?(?:[eE][-+]?\\d+)?)`, "i"));
  if (!match) return undefined;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : undefined;
}
