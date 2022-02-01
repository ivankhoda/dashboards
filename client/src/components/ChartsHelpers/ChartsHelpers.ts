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

  chart: selectChartType("bar"),

  series: [
    {
      data: [],
    },
  ],
};

export const linearChartOptions = {
  title: {
    text: "",
  },
  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
    },
  },
  legend: {
    align: "center",
    verticalAlign: "top",
    layout: "horizontal",
    x: 60,
    y: 60,
    floating: true,
  },

  xAxis: {
    type: "datetime",
    // dateTimeLabelFormats: {
    //   minute: "%d %b %Y %H:%M",
    // },
    // startOnTick: true,
    // endOnTick: true,
    // showLastLabel: true,
    // labels: {
    //   rotation: 0,
    // },
  },
  //  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  // },
  series: [
    {
      data: [1, 2, 3, 4, 8, 6, 7, 12, 9],
      name: "Line 1",
      color: "#FF0000",
      tooltip: {
        valueDecimals: 1,
        valueSuffix: "$",
      },
      pointStart: Date.UTC(2022, 0, 1),
      pointEnd: Date.UTC(2022, 2, 20),
      pointInterval: 36e5,
    },
    {
      data: [5, 6, 7, 8, 9, 10, 11, 20, 13],
      name: "Line 2",
      color: "#42C86A",
      tooltip: {
        valueDecimals: 1,
        valueSuffix: "$",
      },
      pointStart: Date.UTC(2022, 0, 1),
      pointEnd: Date.UTC(2022, 2, 20),
      pointInterval: 36e5,
    },
    {
      data: [9, 10, 11, 12, 8, 14, 15, 16, 17],
      name: "Line 3",
      color: "#1890FF",
      tooltip: {
        valueDecimals: 1,
        valueSuffix: "$",
      },
      pointStart: Date.UTC(2022, 0, 1),
      pointEnd: Date.UTC(2022, 2, 20),
      pointInterval: 36e5,
    },
  ],
};
