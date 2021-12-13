import AxiosCanceler from '@/types/api/axios-canceler.class';
export default class AxiosCancellableRequest {
    constructor(load) {
        this._canceler = null;
        this._promise = null;
        this._load = load;
    }
    async load(params) {
        this.cancel();
        this._canceler = new AxiosCanceler();
        const cancelToken = this._canceler.cancelToken;
        try {
            this._promise = this._load(params, cancelToken);
            return await this._promise;
        }
        finally {
            this._canceler = null;
        }
    }
    cancel(message) {
        if (!this._canceler) {
            return;
        }
        this._canceler.cancel(message);
        this._canceler = null;
    }
    get promise() {
        return this._promise;
    }
}
//# sourceMappingURL=axios-cancellable-request.class.js.map