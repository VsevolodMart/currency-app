type TDateRange = {
  start: string;
  end: string;
}

type TApiDateRange = {
  dateFrom: string;
  dateTo: string;
}

type TPickerConfig = {
  type: string;
  mask: string;
}

type TChartDataDataSet = {
  label: string;
  backgroundColor: string;
  data: unknown[];
}

type TChartData = {
  labels: string[];
  datasets: TChartDataDataSet[];
}

type THistoricalFXRatesResponse = {
  data: any;
  query: any;
}
