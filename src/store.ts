import Vuex from 'vuex';
import { TAppStoreState } from '@/types/store/app-store-state.type';

import currencyStore from '@/store/currency.store.ts';

const store = new Vuex.Store<TAppStoreState>({
  strict: true,
  modules: {
    currencyStore,
  },
});

export default store;
