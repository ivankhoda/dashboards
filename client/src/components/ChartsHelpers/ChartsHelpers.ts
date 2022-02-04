export const selectChartType = (type: string) => {
  return {
    type: type,
  };
};

export const barChartOptions = {
  yAxis: {
    max: 10000,
    tickInterval: 5000,
  },

  xAxis: {
    categories: [],
  },

  chart: { type: "bar", height: 300, widht: 500 },

  series: [
    {
      data: [],
    },
  ],
};
const dateStart = Date.UTC(2022, 1, 2, 22, 10);
const dateEnd = Date.UTC(2022, 1, 2, 23, 20);

export const linearChartOptions = {
  chart: {
    height: 400,
    width: 1024,
    type: "line",
  },
  title: {
    text: "",
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      tooltip: {
        valueDecimals: 1,
        valueSuffix: "$",
      },
      pointStart: dateStart,
      pointEnd: dateEnd,
      pointInterval: dateEnd - dateStart,
    },
  },
  legend: {
    align: "center",
    verticalAlign: "top",
    layout: "horizontal",
  },

  xAxis: {
    type: "datetime",
  },

  series: [
    {
      data: [1, 2, 3, 4, 30, 6, 7, 12, 9],
      name: "Line 1",
      color: "#FF0000",
    },
    {
      data: [5, 6, 7, 8, 9, 10, 11, 20, 13],
      name: "Line 2",
      color: "#42C86A",
    },
    {
      data: [9, 10, 11, 12, 8, 14, 15, 16, 17],
      name: "Line 3",
      color: "#1890FF",
    },
  ],
};
