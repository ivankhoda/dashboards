import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { barChartOptions } from "../ChartsHelpers";
import { StyledChartsContainer } from "./StyledChartsContainer";

type CountryInfo = {
  name: string;
  currentPrice: number;
};

const zones = [
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
];

export const ChartsContainer = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    const fetchCountriesData = async () => {
      const result = await fetch("http://localhost:8000/countries?orderby=asc", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      const rawData: CountryInfo[] = await result.json();
      console.log(rawData);
      const countryList: string[] = [];
      const valueList: number[] = [];
      rawData.forEach((country) => {
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
        zones: [...zones],
        data: valueList,
      };

      const newOptions = {
        ...barChartOptions,
        xAxis: newAxis,
        series: [newValues],
      };

      setChartData(newOptions);
    };

    fetchCountriesData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const { loading, data, error } = useFetch("http://localhost:8000/countries");

  return (
    <StyledChartsContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledChartsContainer>
  );
};
