import { AxiosRequestConfig } from 'axios';
import api from '../services/axios';

type UseFetchOptions = {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
};

const useFetch = async ({
  url,
  data,
  config,
}: UseFetchOptions): Promise<void> => {
  await api.post(url, data, config);
};

export default useFetch;
