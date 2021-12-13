import {ActionContext, Module} from 'vuex';
import {TAppStoreState} from '@/types/store/app-store-state.type.ts';
import {TCurrencyStoreState} from '@/types/store/currency-store-state.type.ts';
import AxiosCancellableRequest from '@/types/api/axios-cancellable-request.class';
import ApiErrorResponseData from "@/types/api/api-error-response-data.class";
import currencyApi from "@/api/currency/currency.api";

const getHistoricalFXRatesRequest = new AxiosCancellableRequest<TApiDateRange, THistoricalFXRatesResponse>(currencyApi.historicalFXRates.bind(currencyApi));

const currencyStore: Module<TCurrencyStoreState, TAppStoreState> = {
  namespaced: true,
  state: {
    currencyEntity: {
      data: null,
      isLoading: false,
      error: null,
    },
    currencyList: ["-","JPY", "PGK", "TJS", "XPF", "MGA", "AMD", "MKD", "LAK", "NIO", "MNT", "MUR", "SSP", "ALL",
      "NAD", "XAF", "JMD", "BWP", "BSD", "AFN", "BHD", "CDF", "PYG", "UGX", "SVC", "TTD", "NPR", "MZN", "HNL", "BIH",
      "BND", "ISK", "KHR", "GEL", "HTG", "MDL", "YER", "DJF", "LTC", "EUR", "ETH", "GBP", "JOD", "BTC", "BGN", "AUD",
      "XRP", "STD", "KMF", "GMD", "SOS", "SCR", "CVE", "RWF", "FJD", "KGS", "GNF", "SRD", "SLL", "XOF", "MWK", "ERN",
      "LRD", "SZL", "GYD", "BIF", "KYD", "MVR", "LSL", "BOB", "GHS", "CNY", "IRR", "IQD", "PKR", "CLP", "PHP", "EGP",
      "HKD", "ILS", "SGD", "MYR", "DKK", "ZAR", "THB", "COP", "AED", "TWD", "KZT", "KRW", "CHF", "CAD", "MXN", "INR",
      "BRL", "RUB", "IDR", "NOK", "TRY", "SAR", "SEK", "NGN", "PLN", "ARS", "DZD", "QAR", "LYD", "DOP", "RSD", "LBP",
      "PAB", "TND", "TMT", "TZS", "CRC", "ETB", "MOP", "HRV", "URY", "GTQ", "KES", "UZS", "MMK", "CZK", "AOA", "PEN",
      "RON", "VND", "BDT", "HUF", "UAH", "MAD", "SYP", "OMR", "CUC", "BYR", "AZN", "LKR", "SDG", "NZD"]
  },
  getters: {
    historicalFXRates: (state: TCurrencyStoreState): THistoricalFXRatesResponse => {
      return state.currencyEntity.data;
    },
    isLoading: (state: TCurrencyStoreState): boolean => {
      return state.currencyEntity.isLoading;
    },
    currencyList: (state: TCurrencyStoreState): string[] => {
      let currencyList = state.currencyList.slice();
      return currencyList.sort(function (a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      })
    }

  },
  actions: {

    getHistoricalFXRates: async (context: ActionContext<TCurrencyStoreState, TAppStoreState>, params: TApiDateRange): Promise<any> => {
      const {commit, state} = context;

      if (state.currencyEntity.isLoading) {
        try {
          return await getHistoricalFXRatesRequest.promise;
        } catch (error) {
          return null;
        }
      }

      commit('currencyRequest');
      let data;
      try {
        data = await getHistoricalFXRatesRequest.load(params);
        return data;
      } catch (error) {
        commit('currencyError', error);
        return null;
      } finally {
        commit('currency', data);
      }
    },

  },
  mutations: {

    currencyRequest(state: TCurrencyStoreState): void {
      state.currencyEntity.data = null;
      state.currencyEntity.isLoading = true;
      state.currencyEntity.error = null;
    },
    currencyError(state: TCurrencyStoreState, error: ApiErrorResponseData): void {
      state.currencyEntity.error = error;
    },
    currency(state: TCurrencyStoreState, currency: any): void {
      state.currencyEntity.data = currency || null;
      state.currencyEntity.isLoading = false;
    },
  }
};

export default currencyStore;
