export const selectChartType = (type: string) => {
  return {
    type: type,
  };
};

export const options = {
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

// dataSorting: {
//   enabled: true,
// },
// zoneAxis: "x",
// zones: [
//   {
//     value: 1,
//     color: "#2100EE",
//   },
//   {
//     value: 2,
//     color: "#6900EE",
//   },
//   {
//     value: 3,
//     color: "#EE0056",
//   },
//   {
//     value: 4,
//     color: "#EE9D00",
//   },
// ],
