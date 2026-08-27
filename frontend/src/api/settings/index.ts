import request from '@/api';
import { AxiosPromise } from 'axios';

export function useSettingsApi() {
  return {
    getSettings: (): AxiosPromise<MyAxiosRes> => {
      return request({
        url: '/api/settings',
        method: 'get',
      });
    },
    setSettings: (data: SettingsPostData): AxiosPromise<MyAxiosRes> => {
      return request({
        url: '/api/settings',
        method: 'patch',
        data,
      });
    },
    downloadBackup: (): AxiosPromise<Blob> => {
      return request<Blob>({
        url: '/api/storage',
        method: 'get',
        responseType: 'blob',
      });
    },
    restoreSettings: (data: StoragePostData): AxiosPromise<MyAxiosRes> => {
      return request({
        url: '/api/storage',
        method: 'post',
        data,
      });
    },
  };
}
