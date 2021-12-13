import BaseApi from '@/types/api/base.api.class';
export class CurrencyApi extends BaseApi {
    async historicalFXRates(params, cancelToken) {
        const apiKey = process.env.VUE_APP_API_KEY;
        const { dateFrom, dateTo } = params;
        const config = {
            url: `/historical?apikey=${apiKey}&base_currency=USD&date_from=2020-10-01&date_to=2021-01-01`,
            method: 'GET',
            cancelToken,
        };
        let response;
        try {
            response = await this.axios.request(config);
        }
        catch (error) {
            throw this.responseError(error);
        }
        return response.data;
    }
}
const currencyApi = new CurrencyApi();
export default currencyApi;
//# sourceMappingURL=currency.api.js.map