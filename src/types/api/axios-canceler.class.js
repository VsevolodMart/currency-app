import axios from 'axios';
const CancelToken = axios.CancelToken;
export default class AxiosCanceler {
    constructor() {
        this.cancelToken = new CancelToken((cancel) => {
            this.cancel = cancel;
        });
    }
}
//# sourceMappingURL=axios-canceler.class.js.map