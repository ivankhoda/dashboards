import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { StyledChartsContainer } from "./StyledChartsContainer";
const options = {
  xAxis: {
    categories: [],
    //["Russia", "Spain", "United States", "China"],
  },
  chart: {
    type: "bar",
  },

  series: [
    {
      dataSorting: {
        enabled: true,
      },
      zoneAxis: "x",
      zones: [
        {
          value: 1,
          color: "#2100EE",
        },
        {
          value: 2,
          color: "#6900EE",
        },
        {
          value: 3,
          color: "#EE0056",
        },
        {
          value: 4,
          color: "#EE9D00",
        },
      ],

      data: [],
      //[100, 200, 300, 40],
    },
  ],
};
// type CountryInfo = {
//   name: string;
//   currentValue: number;
// };
export const ChartsContainer = () => {
  const [data, setData] = useState();
  const [chartData, setChartData] = useState(options);
  // const pushCountriesToOptions = (data: CountryInfo[]) => {
  //   data.forEach((item) => {
  //     return options.xAxis.categories.push(item.name);
  //   });
  //   return;
  // };

  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await fetch("http://localhost:8000/countries", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      setData(await result.json());
    };

    fetchCountriesData();
  }, []);

  console.log(data);
  console.log(chartData);

  return (
    <StyledChartsContainer>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledChartsContainer>
  );
};
