<style lang="scss" scoped src="./line-chart.scss"></style>
<script lang="ts">

import { Component, Mixins, Prop, Watch } from 'vue-property-decorator'
import { Line } from 'vue-chartjs'
import { ChartOptions } from 'chart.js'

@Component({
  extends: Line,
})
export default class LineChart extends Mixins( Line)  {


  @Prop({type: Object, default: null})
  public readonly chartdata: TChartData;

  @Prop({type: Object, default: null})
  public readonly options!: ChartOptions

  @Prop({type: String, default: ''})
  public readonly currencyName: string;

  @Watch('chartdata.labels')
  public onChartDataChanged() {
    if (this.$data && this.$data._chart && this.chartdata) {
      this.$data._chart.update();
    }

  }

  public mounted(): void {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
