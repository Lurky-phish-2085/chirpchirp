import axios from 'axios';
import { removeTrailingSlash } from './utils';

const API_BASE_URL = removeTrailingSlash(
  process.env.CMS_BASE_URL ?? 'http://localhost:1337/api',
);

function createApiClient(baseURL: string) {
  const axiosInstance = axios.create();

  axiosInstance.defaults.withCredentials = true;
  axiosInstance.defaults.baseURL = baseURL;

  return {
    use: <ApiType>(api: new (...args: any[]) => ApiType): ApiType =>
      new api(undefined, baseURL, axiosInstance),
    instance: axiosInstance,
  };
}

export const ApiClient = createApiClient(API_BASE_URL || '');