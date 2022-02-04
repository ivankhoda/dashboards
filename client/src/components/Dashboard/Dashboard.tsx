import { DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { ChartsContainer } from "../ChartsContainer/ChartsContainer";
import { LinearChartContainer } from "../LinearChartContainer/LinearChartContainer";
import { PricesContainer } from "../PricesContainer/PricesContainer";
import { StyledDashboard, StyledWorkingPanel } from "./StyledDashboard";
export const Dashboard = () => {
  //require("antd/dist/antd.css");
  // const [date, setRange] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (range: any) => console.log(range[1]._d - range[0]._d, "changed");
  // const dateTimeOnChange = (date: [Moment, Moment] | null, dateString: [string, string]): void => {
  //   console.log(date);
  //   console.log(dateString);
  // };
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

          <LinearChartContainer />
        </StyledWorkingPanel>
      </StyledDashboard>
    </>
  );
};
