import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { linearChartOptions } from "../ChartsHelpers";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";
// type LineInfo = {
//   name: string;
//   data: number[];
//   color?: string;
//   tooltip?: {
//     valueDecimal: number;
//     valueSuffix: string;
//   };
//   pointStart?: number;
//   pointEnd?: number;
//   pointInterval?: number;
// };

export const LinearChartContainer = () => {
  const [chartData, setChartData] = useState(linearChartOptions);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/lines", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        //body: JSON.stringify({ intervals: 10 }),
      });
      const rawData = await result.json();
      console.log(rawData);
      const newOptions = {
        ...linearChartOptions,

        series: rawData,
      };
      console.log(newOptions, "newOpt");
      console.log(rawData, "raw");
      setChartData(newOptions);
    };
    fetchData();
  }, []);

  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
