import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import APIError from '@/types/api/api-error.class';
import { IAnyResponseData } from '@/types/api/any-response-data.interface';

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const TIMEOUT = 10000;

export default abstract class BaseApi {

  private static _axios: AxiosInstance;

  constructor() {
    if (!BaseApi._axios) {
      BaseApi._axios = axios.create({
        baseURL: BASE_URL,
        timeout: TIMEOUT,
      });
      BaseApi._axios.interceptors.request.use((config: AxiosRequestConfig) => {
        if (config.headers['Accept-Language']) {
          return config;
        }
        return config;
      });
    }
  }

  public get axios(): AxiosInstance {
    return BaseApi._axios;
  }

  public responseError(axiosError: AxiosError<IAnyResponseData>): APIError {
    const { response } = axiosError;
    const error = new APIError(axiosError);

    if (!response) {
      return error;
    }

    return error;
  }

}
