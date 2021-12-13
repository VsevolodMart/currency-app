import AxiosCancellableRequest from '@/types/api/axios-cancellable-request.class';
import currencyApi from "@/api/currency/currency.api";
const getHistoricalFXRatesRequest = new AxiosCancellableRequest(currencyApi.historicalFXRates.bind(currencyApi));
const currencyStore = {
    namespaced: true,
    state: {
        currencyEntity: {
            data: null,
            isLoading: false,
            error: null,
        },
    },
    getters: {
        historicalFXRates: (state) => {
            return state.currencyEntity.data;
        },
        isLoading: (state) => {
            return state.currencyEntity.isLoading;
        },
    },
    actions: {
        getHistoricalFXRates: async (context, params) => {
            const { commit, state } = context;
            if (state.currencyEntity.data) {
                return state.currencyEntity.data;
            }
            if (state.currencyEntity.isLoading) {
                try {
                    return await getHistoricalFXRatesRequest.promise;
                }
                catch (error) {
                    return null;
                }
            }
            commit('currencyRequest');
            let data;
            try {
                data = await getHistoricalFXRatesRequest.load(params);
                return data;
            }
            catch (error) {
                commit('currencyError', error);
                return null;
            }
            finally {
                commit('currency', data);
            }
        },
    },
    mutations: {
        currencyRequest(state) {
            state.currencyEntity.data = null;
            state.currencyEntity.isLoading = true;
            state.currencyEntity.error = null;
        },
        currencyError(state, error) {
            state.currencyEntity.error = error;
        },
        currency(state, currency) {
            state.currencyEntity.data = currency || null;
            state.currencyEntity.isLoading = false;
        },
    }
};
export default currencyStore;
//# sourceMappingURL=currency.store.js.map