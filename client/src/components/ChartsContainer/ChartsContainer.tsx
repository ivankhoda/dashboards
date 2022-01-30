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
  const [data, setData] = useState<CountryInfo[]>([]);

  const [chartData, setChartData] = useState({});
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countryList: string[] = [];
  const valueList: number[] = [];
  sortData(data).forEach((country) => {
    countryList.push(country.name), valueList.push(country.currentPrice);
  });
  const newAxis = {
    categories: countryList,
  };
  const newValues = {
    data: valueList,
  };
  const newOptions = { ...options, xAxis: newAxis, series: [newValues] };
  setChartData(newOptions);

  // console.log(newOptions, "new options");

  // console.log(data, "data in usestate");

  return (
    <StyledChartsContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} allowChartUpdate={true} />
    </StyledChartsContainer>
  );
};
