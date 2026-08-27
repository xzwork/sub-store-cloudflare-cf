import yaml from 'js-yaml';

export type PreviewNodeNameSide = 'before' | 'after';

export interface PreviewNodeInfo {
  name: string;
  type: string;
}

const NODE_ARRAY_KEYS = [
  'proxies',
  'proxy',
  'nodes',
  'servers',
  'outbounds',
  'original',
  'processed',
];

const NODE_HINT_KEYS = [
  'server',
  'port',
  'type',
  'password',
  'uuid',
  'UUID',
  'addresses',
  'udp',
  'tfo',
  'skip-cert-verify',
];

const normalizeText = (value: unknown) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim();
};

const addNodeInfo = (nodeInfos: PreviewNodeInfo[], value: Record<string, any>) => {
  const name = normalizeText(value.name);
  if (!name) {
    return;
  }

  nodeInfos.push({
    name,
    type: normalizeText(value.type),
  });
};

const isPlainRecord = (value: unknown): value is Record<string, any> => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

const isNodeLikeRecord = (value: Record<string, any>) => {
  if (!normalizeText(value.name)) {
    return false;
  }

  return NODE_HINT_KEYS.some(key => key in value);
};

const parseStructuredText = (value: string) => {
  const text = value.trim();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    // Not JSON. Try YAML below.
  }

  try {
    return yaml.load(text);
  } catch (e) {
    return null;
  }
};

const collectNodeInfos = (
  value: unknown,
  nodeInfos: PreviewNodeInfo[],
  depth = 0,
) => {
  if (value == null || depth > 8) {
    return;
  }

  if (typeof value === 'string') {
    const parsed = parseStructuredText(value);
    if (parsed !== null && parsed !== value) {
      collectNodeInfos(parsed, nodeInfos, depth + 1);
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach(item => {
      if (isPlainRecord(item) && typeof item.name === 'string') {
        addNodeInfo(nodeInfos, item);
      } else if (isPlainRecord(item) && typeof item.tag === 'string') {
        addNodeInfo(nodeInfos, {
          name: item.tag,
          type: item.type,
        });
      } else {
        collectNodeInfos(item, nodeInfos, depth + 1);
      }
    });
    return;
  }

  if (!isPlainRecord(value)) {
    return;
  }

  if (isNodeLikeRecord(value)) {
    addNodeInfo(nodeInfos, value);
    return;
  }

  NODE_ARRAY_KEYS.forEach(key => {
    if (key in value) {
      collectNodeInfos(value[key], nodeInfos, depth + 1);
    }
  });
};

export const extractPreviewNodeInfos = (value: unknown) => {
  const nodeInfos: PreviewNodeInfo[] = [];
  collectNodeInfos(value, nodeInfos);
  return nodeInfos;
};

export const extractPreviewSideNodeInfos = (
  previewData: any,
  side: PreviewNodeNameSide,
) => {
  const primaryKey = side === 'after' ? 'processed' : 'original';
  const primaryNodeInfos = extractPreviewNodeInfos(previewData?.[primaryKey]);

  if (primaryNodeInfos.length > 0) {
    return primaryNodeInfos;
  }

  if (side === 'after') {
    return extractPreviewNodeInfos(previewData);
  }

  return [];
};

export const formatPreviewNodeInfos = (nodeInfos: PreviewNodeInfo[]) => {
  return nodeInfos
    .map(({ name, type }) => `{ "name": ${JSON.stringify(name)}, "type": ${JSON.stringify(type)} }`)
    .join('\n');
};

export const formatPreviewNodeInfoPrompt = (nodeInfos: PreviewNodeInfo[]) => {
  return [
    '请根据下面的代理节点名称，帮我设计一套通用、可维护的节点命名规则。',
    '不要输出 JavaScript 代码；请输出：',
    '1. 建议的统一命名格式',
    '2. 可用于正则重命名的匹配思路',
    '3. 需要特殊处理的地区、倍率、协议或中转标记',
    '4. 5 个改名前后的示例',
    '',
    '节点信息：',
    '```',
    formatPreviewNodeInfos(nodeInfos),
    '```',
    '',
    '目标：命名结果尽量包含地区、协议或线路类型，并能适应后续新增节点。',
  ].join('\n');
};

export const formatPreviewNodeNames = (nodeInfos: PreviewNodeInfo[]) => {
  return nodeInfos.map(({ name }) => name).join('\n');
};
