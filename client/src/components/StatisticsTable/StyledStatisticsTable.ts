import styled from "styled-components";

export const StyledStatisticsTable = styled.table`
  min-width: 1024px;
  margin-top: 16px;
  tr {
  }
  th {
    min-width: 241px;
    min-height: 48px;
    background: #ececff;
    text-align: start;
    padding-left: 12px;
  }
  th:last-child {
    border-top-right-radius: 10px;
  }
  th:first-child {
    border-top-left-radius: 10px;
  }
  td {
    background: #ffffff;
    padding-left: 12px;
    font-style: "Roboto";
    line-height: 22px;
    height: 48px;
  }
  .positive {
    color: #52c41a;
    fill: #52c41a;
  }
  .negative {
    color: #f5222d;
    fill: #f5222d;
  }
`;
