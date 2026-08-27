interface SubsStoreState {
  subs: Sub[];
  collections: Collection[];
  flows: FlowsDict;
}

interface SubscriptionInfo {
  provided: boolean;
  upload?: number;
  download?: number;
  used?: number;
  remaining?: number;
  total?: number;
  usagePercent?: number;
  expire?: number;
  nodeCount: number;
  lastSuccessAt: number;
  stale?: boolean;
}

interface FlowsDict {
  [key: string]: Flow | ErrorResponse;
}

// 结构有点乱 太难定义
// type Process1 = {
//   key: string;
//   value: boolean;
// };
//
// type Process2 = {
//   [key: string]: string;
// };

type ProcessArg = any;

interface Process {
  type: string;
  id?: string;
  customName?: string;
  args?: ProcessArg;
  disabled?: boolean;
}

interface Sub {
  name: string;
  content?: string;
  displayName?: string;
  remark?: string;
  url?: string;
  source: 'remote' | 'local';
  icon?: string;
  isIconColor?: boolean;
  ua?: string;
  subUserinfo?: string;
  subscriptionInfo?: SubscriptionInfo;
  tag?: string[];
  process: Process[];
}

interface Collection {
  name: string;
  displayName?: string;
  remark?: string;
  process: Process[];
  subscriptions: string[];
  subUserinfo?: string;
  icon?: string;
  isIconColor?: boolean;
  tag?: string[];
}

interface FlowData {
  provided?: boolean;
  upload?: number;
  download?: number;
  used?: number;
  remaining?: number;
  usagePercent?: number;
  nodeCount?: number;
  lastSuccessAt?: number;
  expire?: number;
  planName?: string;
  appUrl?: string;
  remainingDays?: number;
  expires?: number;
  total?: number;
  usage?: {
    upload: number;
    download: number;
  };
}

type Flow = {
  status: 'success';
  showRemaining?: boolean;
  hideExpire?: boolean;
  data: FlowData;
} | {
  status: 'noFlow';
  showRemaining?: boolean;
  hideExpire?: boolean;
  data?: never;
};

type GetOne<T extends Sub | Collection> = (name: string) => T;
