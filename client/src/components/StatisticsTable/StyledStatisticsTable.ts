import styled from "styled-components";

export const StyledStatisticsTable = styled.div`
  min-width: 1024px;
  margin-top: 16px;
  /*  */

  .ant-table-thead th {
    background-color: #ececff;
  }
  .ant-table-thead th:last-child {
    border-top-right-radius: 8px !important;
  }
  .ant-table-thead th:first-child {
    border-top-left-radius: 8px !important;
  }
  .ant-table {
    border-top-right-radius: 8px !important;
    border-top-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
  }

  .ant-table-cell {
    min-width: 241px;
    min-height: 48px;
    text-align: start;
    padding-left: 12px;
  }
  .ant-table-tbody th:last-child {
    border-top-right-radius: 10px;
  }
  .ant-table-tbody > th:first-child {
    border-top-left-radius: 10px;
  }
  .ant-pagination-item-active a {
    color: #8f00ff;
    border-color: #8f00ff;
  }
  .ant-pagination-item-active {
    border-color: #8f00ff;
  }
  .ant-pagination-item:hover {
    border-color: #8f00ff;
  }
  .ant-pagination-item a:hover {
    color: #8f00ff;
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
