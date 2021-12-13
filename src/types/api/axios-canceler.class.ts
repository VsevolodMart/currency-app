import axios, { Canceler, CancelToken } from 'axios';

const CancelToken = axios.CancelToken;

export default class AxiosCanceler {

  public cancel: Canceler;
  public cancelToken: CancelToken;

  constructor() {
    this.cancelToken = new CancelToken((cancel: Canceler) => {
      this.cancel = cancel;
    });
  }

}
