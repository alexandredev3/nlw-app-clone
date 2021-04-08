import { AxiosRequestConfig } from 'axios';
import api from '../services/axios';

export type UseFetchOptions = {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
};

export const useFetch = async ({
  url,
  data,
  config,
}: UseFetchOptions): Promise<void> => {
  await api.post(url, data, config);
};
