/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { ChartsContainer } from "../ChartsContainer/ChartsContainer";
import { oneDay, oneHour } from "../ChartsHelpers";
import { LinearChartContainer } from "../LinearChartContainer/LinearChartContainer";
import { PricesContainer } from "../PricesContainer/PricesContainer";
import { StyledDashboard, StyledWorkingPanel } from "./StyledDashboard";

export const Dashboard = () => {
  const [chartOptions, setChartOptions] = useState({
    dateStart: Date.now() - oneDay * 7,
    dateEnd: Date.now(),
    pointInterval: oneDay,
  });

  const calculateInterval = (firstDate: any, nextDate: any) => {
    const differenceInDays = (nextDate - firstDate) / oneDay;
    const differenceInHours = (nextDate - firstDate) / oneHour;
    const wholeDay = 1;

    let interval;
    let time;
    differenceInDays >= wholeDay
      ? ((interval = Math.floor(differenceInDays)), (time = "days"))
      : ((interval = Math.floor(differenceInHours)), (time = "hours"));

    return { interval, time };
  };

  const onChange = (range: any) => {
    const firstDate = new Date(range[0]._d).getTime();
    const nextDate = new Date(range[1]._d).getTime();
    const intervals = calculateInterval(firstDate, nextDate);
    const newChartOptions = {
      dateStart: firstDate,
      dateEnd: nextDate,
      pointInterval: intervals.time === "days" ? oneDay : oneHour,
    };

    setChartOptions(newChartOptions);
  };

  const { RangePicker } = DatePicker;
  return (
    <>
      <StyledDashboard>
        <h2>Good morning</h2>
        <div>
          <Space direction="vertical" size={12}>
            <RangePicker showTime onChange={(range) => onChange(range)} />
          </Space>
        </div>
        <StyledWorkingPanel>
          <PricesContainer />
          <ChartsContainer />

          <LinearChartContainer
            dateStart={chartOptions.dateStart}
            dateEnd={chartOptions.dateEnd}
            pointInterval={chartOptions.pointInterval}
          />
        </StyledWorkingPanel>
        {/* Testing chart */}
        {/* <LinearChartContainerTest dateStart={chartOptions.dateStart} /> */}
      </StyledDashboard>
    </>
  );
};
