import { useAppNotifyStore } from '@/store/appNotify';
import axios, { AxiosError } from 'axios';
import i18n from '@/locales';
import { getHostAPIUrl } from '@/hooks/useHostAPI';
import { getStoredAdminToken } from '@/utils/adminToken';
import { getApiRequestTimeout } from '@/utils/requestTimeout';

let appNotifyStore = null;

const notifyConfig: { type: 'danger'; duration: number } = {
  type: 'danger',
  duration: 2500,
};

const getText = (value: unknown) => {
  if (typeof value === 'string') {
    const text = value.trim();
    return text || undefined;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  return undefined;
};

const stringifyUnknown = (value: unknown) => {
  const text = getText(value);
  if (text)
    return text;

  if (value == null)
    return undefined;

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
};

const getResponseTitle = (e: AxiosError<ErrorResponse>) => {
  const backendMessage = getText(e.response?.data?.error?.message);
  if (backendMessage)
    return backendMessage;

  const responseText = getText(e.response?.statusText);
  if (e.response?.status && responseText)
    return i18n.global.t("globalNotify.request.failedWithStatus", { status: e.response.status, statusText: responseText });

  if (e.response?.status)
    return i18n.global.t("globalNotify.request.failedStatusOnly", { status: e.response.status });

  return i18n.global.t("globalNotify.request.failed");
};

const getResponseContent = (e: AxiosError<ErrorResponse>) => {
  const error = e.response?.data?.error;
  const statusLine = e.response?.status ? `status: ${e.response.status}` : undefined;
  const backendErrorLines = [
    getText(error?.code) ? `code: ${getText(error?.code)}` : undefined,
    getText(error?.type) ? `type: ${getText(error?.type)}` : undefined,
    getText(error?.details),
  ].filter(Boolean);

  if (backendErrorLines.length > 0)
    return [statusLine, ...backendErrorLines].filter(Boolean).join('\n');

  const responseData = stringifyUnknown(e.response?.data);
  if (responseData)
    return [statusLine, responseData].filter(Boolean).join('\n');

  return [statusLine, getText(e.message)].filter(Boolean).join('\n') || undefined;
};

const isCanceledRequestError = (error: AxiosError<ErrorResponse>) => {
  return error.name === 'AbortError'
    || error.name === 'CanceledError'
    || error.code === 'ERR_CANCELED'
    || error.message === 'canceled'
    || axios.isCancel(error);
};

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: getHostAPIUrl(),
  timeout: getApiRequestTimeout(),
  headers: { 'Content-Type': 'application/json' },
});

service.interceptors.request.use(config => {
  const token = getStoredAdminToken();
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
    config.headers.set('X-Sub-Store-Token', token);
  }
  return config;
});

service.interceptors.response.use(
  response => response,
  (e: AxiosError<ErrorResponse>) => {
    const requestUrl = e.config?.url || '';

    if (isCanceledRequestError(e))
      return Promise.reject(e);

    // 流量信息接口的报错,不通知，直接返回
    if (requestUrl.startsWith('/api/source/flow'))
      return Promise.resolve(e.response);

    if (!appNotifyStore)
      appNotifyStore = useAppNotifyStore();

    // 如果是网络错误，则提示网络错误
    if (!e.response || e.response.status === 0) {
      appNotifyStore.showNotify({
        title: i18n.global.t("globalNotify.request.network"),
        content: [
          `code: ${e.response?.status ?? e.code ?? 'NO_RESPONSE'}`,
          `msg: ${getText(e.message) || i18n.global.t("globalNotify.request.noResponse")}`,
        ].join('\n'),
        ...notifyConfig,
      });
      return Promise.reject(e);
    } else {
      appNotifyStore.showNotify({
        title: getResponseTitle(e),
        content: getResponseContent(e),
        ...notifyConfig,
      });
      return Promise.reject(e);
    }
  }
);

// 导出 axios 实例
export default service;
