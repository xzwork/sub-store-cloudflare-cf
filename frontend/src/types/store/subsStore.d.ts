interface SubsStoreState {
  subs: Sub[];
  collections: Collection[];
  flows: FlowsDict;
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

interface Flow {
  status: 'success' | 'noFlow';
  showRemaining?: boolean;
  hideExpire?: boolean;
  data: {
    planName?: string;
    appUrl?: string;
    remainingDays?: number;
    expires?: number;
    total: number;
    usage: {
      upload: number;
      download: number;
    };
  };
}

type GetOne<T extends Sub | Collection> = (name: string) => T;
