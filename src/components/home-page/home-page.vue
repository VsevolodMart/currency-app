<template src="./home-page.html"></template>
<style lang="scss" scoped src="./home-page.scss"></style>
<script lang="ts">
import {Component, Ref, Vue, Watch} from 'vue-property-decorator';
import {Getter, Action} from "vuex-class";
import Button from '@/parts/Button/Button.vue'
import CSelect from "@/parts/c-select/c-select.vue";
import 'clickout-event';
import LineChart from "@/components/line-chart/line-chart.vue";

@Component({
  components: {Button, CSelect, LineChart},
})
export default class HomePage extends Vue {
  @Getter('currencyStore/historicalFXRates') public readonly historicalFXRates: THistoricalFXRatesResponse;
  @Getter('currencyStore/currencyList') public readonly currencyList: string[];
  @Action('currencyStore/getHistoricalFXRates') public getHistoricalFXRates: (params: { dateFrom: string; dateTo: string }) => Promise<void>;

  public isShowDateRangePicker: boolean = false
  public selectedCurrency: string = ''
  public showDateError: boolean = false
  public chartData: TChartData = {
    labels: [],
    datasets: [
      {
        label: this.selectedCurrency,
        backgroundColor: '#02acea',
        data: []
      }
    ]
  }

  public lineChatWidth: number = 400;

  public range: TDateRange = {
    start: '',
    end: ''
  }

  public pickerConfig: TPickerConfig = {
    type: 'string',
    mask: 'YYYY-MM-DD', // Uses 'iso' if missing
  }

  @Watch('range.start', {immediate: true})
  public onRangeStarChanged() {
    if(!this.range.start) return
    if (this.isFutureDate(this.range.start) ) {
      this.clearRange()
      this.showDateError = true
    } else {
      this.showDateError = false
    }


  }

  @Watch('range.end', {immediate: true})
  public onRangeEndChanged() {
    if(!this.range.end) return
    if (this.isFutureDate(this.range.end)) {
      this.clearRange()
      this.showDateError = true
    } else {
      this.showDateError = false
    }
  }

  @Watch('historicalFXRates', {immediate: true})
  public onHistoricalFXRatesChanged() {
    this.chartData.labels = []
    this.chartData.datasets[0].data = []
    for (let obj in this.historicalFXRates && this.historicalFXRates.data) {
      for (const [key, value] of Object.entries(this.historicalFXRates.data[obj])) {
        if (key === this.selectedCurrency) {
          this.chartData.labels = [...this.chartData.labels, obj]
          this.chartData.datasets[0].data = [...this.chartData.datasets[0].data, value]
          break
        }
      }
    }

  }


  public get rangeStart(): string {
    return this.range && this.range.start
  }

  public get rangeEnd(): string {
    return this.range && this.range.end
  }

  public onHistoricalFXRatesClick(): void {
    this.getHistoricalFXRates({dateFrom: this.rangeStart, dateTo: this.rangeEnd});
  }

  public onClearAllClick(): void {
    this.clearRange();
    this.selectedCurrency = '';
    this.chartData.labels = []
    this.chartData.datasets[0].data = []
  }

  public showDateRangePicker() {
    this.isShowDateRangePicker = true;
  }


  public clearRange(): void {
    this.range.start = '';
    this.range.end = '';
  }

  public setSelectedCurrency(currency: string): void {
    this.selectedCurrency = currency
  }

  public isFutureDate(date: any): boolean {
    let today = new Date().getTime()
    let idate = date.split("-");
    let fdate = new Date(idate[0],idate[1] - 1, idate[2]).getTime();
    return (today - fdate) < 0;
  }
}
</script>
