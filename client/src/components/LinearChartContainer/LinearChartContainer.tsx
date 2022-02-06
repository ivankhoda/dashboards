import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { store } from "../../store";
import { linearChartOptions } from "../ChartsHelpers";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";

const valueComparison = (arr: number[]) => {
  const max = Math.max(...arr);
  return max;
};
interface IntervalInfo {
  intervals: number;
  dateStart: number;
  dateEnd: number;
  pointInterval: number;
}

export const LinearChartContainer = (props: IntervalInfo) => {
  const { pointInterval, dateStart, dateEnd, intervals } = props;
  const currency = store.getState().setCurrency;
  const [chartData, setChartData] = useState({});
  const [suffix] = useState(currency);

  console.log(suffix);
  const [legendCoordinates] = useState({
    align: "center",
    verticalAlign: "top",
    layout: "horizontal",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/lines?interval=${intervals}`, {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      const rawData = await result.json();

      const maxValues: number[] = [];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rawData.forEach((element: any) => {
        const maxValue: number = valueComparison(element.data);
        maxValues.push(maxValue);
      });

      const newOptions = {
        ...linearChartOptions,
        legend: legendCoordinates,
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
            pointInterval: pointInterval,
          },
        },
        series: rawData,
      };

      setChartData(newOptions);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateEnd, dateStart, pointInterval, intervals, suffix]);

  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
