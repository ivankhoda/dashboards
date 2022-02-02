import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { linearChartOptions } from "../ChartsHelpers";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";

const valueComparison = (arr: number[]) => {
  const max = Math.max(...arr);
  return max;
};

export const LinearChartContainer = () => {
  const [chartData, setChartData] = useState(linearChartOptions);
  const dateStart = Date.UTC(2022, 1, 2, 22, 10);
  const dateEnd = Date.UTC(2022, 1, 2, 23, 20);
  const suffix = "!";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/lines", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify({ intervals: 10 }),
      });
      const rawData = await result.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //const maxValue: number;
      const maxValues: number[] = [];

      rawData.forEach((element: any) => {
        const maxValue: number = valueComparison(element.data);
        maxValues.push(maxValue);
      });
      console.log(valueComparison(maxValues));
      const newOptions = {
        ...linearChartOptions,
        legend: {
          align: "center",
          verticalAlign: "top",
          layout: "horizontal",
          x: 70,
          y: 70,
          floating: true,
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
            },
            tooltip: {
              valueDecimals: 1,
              valueSuffix: suffix,
            },
            pointStart: dateStart,
            pointEnd: dateEnd,
            pointInterval: dateEnd - dateStart,
          },
        },
        series: rawData,
      };
      console.log(newOptions, "newOpt");
      console.log(rawData, "raw");
      setChartData(newOptions);
    };
    fetchData();
  }, [dateEnd, dateStart]);

  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
