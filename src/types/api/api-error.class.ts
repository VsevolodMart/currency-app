import { AxiosError } from 'axios';
import ApiErrorResponseData from '@/types/api/api-error-response-data.class';
import { IAnyResponseData } from '@/types/api/any-response-data.interface';

export default class APIError extends Error {

  public name: string = 'APIError';
  public message: string;
  public data: ApiErrorResponseData;
  public originalError: Error;

  constructor(axiosError: AxiosError<IAnyResponseData>) {
    super('' + ((axiosError.response && axiosError.response.data && axiosError.response.data.error) || 'Unknown'));

    this.originalError = axiosError;
    this.data = new ApiErrorResponseData((axiosError.response && axiosError.response.data) || null);
    this.message = this.data.error;
  }

}
