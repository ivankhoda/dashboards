import styled from "styled-components";

export const StyledChartsContainer = styled.div`
  grid-area: barChart;
  display: grid;
  max-width: 502px;
  max-height: 302px;
  .highcharts-color-0 {
    //fill: #c4688c;
    background-color: red;
  }
  .highcharts-color-1 {
    stroke: #b3597c;
  }
  .highcharts-color-2 {
    fill: #c4688c;
  }
  .highcharts-color-3 {
    fill: #c4688c;
  }

  .highcharts-title,
  .highcharts-axis-title,
  .highcharts-legend-item,
  .highcharts-axis-line,
  .highcharts-grid-line {
    display: none;
  }
`;
