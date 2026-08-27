type SubsType = 'sub' | 'collection';
type DeleteMode = 'permanent';

type MyAxiosRes = ErrorResponse | SucceedResponse;

interface ErrorResponse {
  status: 'failed';
  error: {
    code: string;
    type: string;
    message: string;
    details?: string;
  };
}

interface SucceedResponse {
  status: 'success';
  data?: any;
}

interface NodeInfo {
  name: string;
  server: string;
  port: number;
  id: number;
  password?: string;
  UUID?: string;
  tls?: boolean;
  'skip-cert-verify'?: boolean;
  tfo?: boolean;
  udp?: boolean;
  __source?: {
    id: string;
    name: string;
    type: 'remote' | 'local';
    subscriptionInfo?: SubscriptionInfo;
  };
  type?:
    | 'trojan'
    | 'ss'
    | 'socks5'
    | 'http'
    | 'shadowsocks'
    | 'vmess'
    | 'custom';
}
