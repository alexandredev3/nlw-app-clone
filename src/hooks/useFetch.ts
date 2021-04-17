import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from '../services/axios';

type UseFetchOptions = {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
};

export default async function useFetch<T>({
  url,
  data,
  config,
}: UseFetchOptions): Promise<AxiosResponse<T>> {
  const response = await api.post(url, data, config);

  return response;
}
