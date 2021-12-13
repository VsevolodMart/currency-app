import {TStoreEntityState} from '@/types/store/store-entity-state.type';

export type TCurrencyStoreState = {
  currencyEntity: TStoreEntityState<THistoricalFXRatesResponse>;
  currencyList: string[];
}
