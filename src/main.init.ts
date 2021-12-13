import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import VCalendar from 'v-calendar';

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

declare module 'vue/types/vue' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  // interface VueConstructor {
  //   renderChart(chartdata: TChartData, options?: ChartOptions): void;
  // }
}

Vue.use(Vuex);
