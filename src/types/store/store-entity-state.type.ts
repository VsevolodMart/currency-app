import ApiErrorResponseData from '@/types/api/api-error-response-data.class';

export type TStoreEntityState<T> = {
  data?: T;
  isLoading: boolean;
  error: ApiErrorResponseData;
};
