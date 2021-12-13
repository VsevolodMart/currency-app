import BaseApi from '@/types/api/base.api.class';
import {AxiosRequestConfig, CancelToken} from 'axios';


export class CurrencyApi extends BaseApi {

  public async historicalFXRates(params: TApiDateRange, cancelToken?: CancelToken): Promise<THistoricalFXRatesResponse> {
    const apiKey = process.env.VUE_APP_API_KEY
    const {dateFrom, dateTo} = params;
    const config: AxiosRequestConfig = {
      url: `/historical?apikey=${apiKey}&base_currency=USD&date_from=${dateFrom}&date_to=${dateTo}`,
      method: 'GET',
      cancelToken,
    };

    let response;
    try {
      response = await this.axios.request(config);
    } catch (error) {
      throw this.responseError(error);
    }

    return response.data;
  }

}

const currencyApi = new CurrencyApi();
export default currencyApi;
