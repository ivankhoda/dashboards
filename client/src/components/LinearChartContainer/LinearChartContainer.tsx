import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";
export const LinearChartContainer = () => {
  const [
    chartData,
    //setChartData
  ] = useState({
    title: {
      text: "Step line types, with null values in the series",
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
      layout: "vertical",
      x: 50,
      y: 50,
      floating: true,
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    series: [
      {
        data: [1, 2, 3, 4, 8, 6, 7, 12, 9],
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
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:8000/lines", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      const rawData = await result.json();
      console.log(rawData);
    };
    fetchData();
  }, []);

  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
