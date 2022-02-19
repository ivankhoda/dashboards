import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SELECT_CURRENCY } from "../../actions/actions";
import { linearChartOptions } from "../ChartsHelpers";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";

interface IntervalInfo {
  dateStart: number;
}

export const LinearChartContainerTest = (props: IntervalInfo) => {
  const { dateStart } = props;

  const [chartData, setChartData] = useState(linearChartOptions);

  useEffect(() => {
    const newOptions = {
      ...linearChartOptions,
    };

    setChartData(newOptions);
  }, [dateStart]);
  console.log(chartData, "chart data");
  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
export default connect(null, { SELECT_CURRENCY })(LinearChartContainerTest);
