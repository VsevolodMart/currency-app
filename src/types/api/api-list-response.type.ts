
export type TApiListResponse<T> = {
  Limit: number;
  List: T[];
  Offset: number;
  Total: number;
};
