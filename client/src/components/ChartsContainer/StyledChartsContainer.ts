import styled from "styled-components";

export const StyledChartsContainer = styled.div`
  grid-area: barChart;

  width: 502px;
  height: 302px;
  .highcharts-root {
    border-radius: 8px;
  }
  .highcharts-color-0 {
    //fill: #c4688c;
    background-color: red;
  }
  .highcharts-background {
    max-height: 302px;
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
