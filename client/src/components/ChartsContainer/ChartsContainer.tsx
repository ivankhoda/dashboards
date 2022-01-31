import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { options } from "../ChartsHelpers";
import { StyledChartsContainer } from "./StyledChartsContainer";

type CountryInfo = {
  name: string;
  currentPrice: number;
};

const sortData = (arr: CountryInfo[]) => {
  return arr.sort((a: CountryInfo, b: CountryInfo) => (a.currentPrice < b.currentPrice ? 1 : -1));
};

export const ChartsContainer = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await fetch("http://localhost:8000/countries", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      const rawData = await result.json();
      const countryList: string[] = [];
      const valueList: number[] = [];
      sortData(rawData).forEach((country) => {
        countryList.push(country.name), valueList.push(country.currentPrice);
      });
      const newAxis = {
        categories: countryList,
      };
      const newValues = {
        zoneAxis: "x",
        dataSorting: {
          enabled: true,
        },
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
        data: valueList,
      };

      const newOptions = {
        ...options,
        xAxis: newAxis,
        series: [newValues],
      };
      console.log(options);
      console.log(newOptions);
      setChartData(newOptions);
    };

    fetchCountriesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledChartsContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledChartsContainer>
  );
};
