import Vuex from 'vuex';
import currencyStore from '@/store/currency.store.ts';
const store = new Vuex.Store({
    strict: true,
    modules: {
        currencyStore,
    },
});
export default store;
//# sourceMappingURL=store.js.map