import axios from 'axios';
import APIError from '@/types/api/api-error.class';
const BASE_URL = process.env.VUE_APP_API_BASE_URL;
const TIMEOUT = 10000;
export default class BaseApi {
    constructor() {
        if (!BaseApi._axios) {
            BaseApi._axios = axios.create({
                baseURL: BASE_URL,
                timeout: TIMEOUT,
            });
            BaseApi._axios.interceptors.request.use((config) => {
                if (BaseApi._token) {
                    config.headers['X-Token-Key'] = BaseApi._token;
                }
                if (config.headers['Accept-Language']) {
                    return config;
                }
                return config;
            });
        }
    }
    get axios() {
        return BaseApi._axios;
    }
    get token() {
        return BaseApi._token;
    }
    set token(token) {
        BaseApi._token = token;
    }
    responseError(axiosError) {
        const { response } = axiosError;
        const error = new APIError(axiosError);
        if (!response) {
            return error;
        }
        return error;
    }
}
//# sourceMappingURL=base.api.class.js.map