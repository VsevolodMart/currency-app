import { CancelToken } from 'axios';
import AxiosCanceler from '@/types/api/axios-canceler.class';

export default class AxiosCancellableRequest<TParams, TData> {

  private _canceler: AxiosCanceler = null;
  private _load: (params: TParams, cancelToken?: CancelToken) => Promise<TData>;
  private _promise: Promise<TData> = null;

  constructor(load: (params: TParams, cancelToken?: CancelToken) => Promise<TData>) {
    this._load = load;
  }

  public async load(params: TParams): Promise<TData> {
    this.cancel();
    this._canceler = new AxiosCanceler();
    const cancelToken = this._canceler.cancelToken;

    try {
      this._promise = this._load(params, cancelToken);
      return await this._promise;
    } finally {
      this._canceler = null;
    }
  }

  public cancel(message?: string): void {
    if (!this._canceler) {
      return;
    }
    this._canceler.cancel(message);
    this._canceler = null;
  }

  public get promise(): Promise<TData> {
    return this._promise;
  }

}
