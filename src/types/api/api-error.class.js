import ApiErrorResponseData from '@/types/api/api-error-response-data.class';
export default class APIError extends Error {
    constructor(axiosError) {
        super('' + ((axiosError.response && axiosError.response.data && axiosError.response.data.error) || 'Unknown'));
        this.name = 'APIError';
        this.originalError = axiosError;
        this.data = new ApiErrorResponseData((axiosError.response && axiosError.response.data) || null);
        this.message = this.data.error;
    }
}
//# sourceMappingURL=api-error.class.js.map