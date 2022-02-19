import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { SELECT_CURRENCY } from "../../actions/actions";
import { RootState } from "../../reducers/reducer";
import { linearChartOptions } from "../ChartsHelpers";
import { StyledLinearChartContainer } from "./StyledLinearChartContainer";

interface IntervalInfo {
  dateStart?: number;
  dateEnd?: number;
  pointInterval: number;
}

export const LinearChartContainer = (props: IntervalInfo) => {
  const { pointInterval, dateStart, dateEnd } = props;
  const startingDate = moment.utc(dateStart).local().format("YYYY-MM-DD HH:mm:ss");
  const endingDate = moment.utc(dateEnd).local().format("YYYY-MM-DD HH:mm:ss");

  const [chartData, setChartData] = useState({});
  const currency = useSelector((state: RootState) => state.currency);
  console.log(currency);
  // const [suffix] = useState(currency);
  // console.log(suffix, "suffix");
  const [legendCoordinates] = useState({
    align: "center",
    verticalAlign: "top",
    layout: "horizontal",
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:8000/lines?From=${startingDate}&To=${endingDate}`, {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      const rawData = await result.json();

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
              valueSuffix: currency,
            },
            pointInterval: pointInterval,
          },
        },
        series: rawData,
      };

      setChartData(newOptions);
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateEnd, currency]);

  return (
    <StyledLinearChartContainer>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </StyledLinearChartContainer>
  );
};
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const mapStateToProps = (state: any) => {
//   console.log(state, "state map state");
//   return {
//     currency: setCurrency(state),
//   };
// };

export default connect(null, { SELECT_CURRENCY })(LinearChartContainer);
