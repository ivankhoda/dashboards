import styled from "styled-components";

export const StyledStockCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid #e1e1e1;
  border-radius: 8px;
  max-width: 241px;
  max-height: 142px;
  .stockCard__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-left: 10px;
    margin-right: 10px;
  }
  .stockCard__pricegoup {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .stockCard__pricegoup_main {
    display: flex;
    flex-direction: row;
  }
  .stockCard__pricegoup_header {
  }
  .stockCard__logo {
    margin-top: auto;
    margin-bottom: auto;
  }
  .stockCard__pricegoup_current {
    font-family: Roboto;
    font-size: 30px;
    height: 38px;
    margin: 0;
  }

  .stockCard__pricegoup_difference {
    font-family: Roboto;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
    margin-left: 22px;
  }
  .positive {
    color: #52c41a;
    fill: #52c41a;
  }
  .negative {
    color: #f5222d;
    fill: #f5222d;
  }
  .stockCard__pricegoup_previous {
    color: #8c8c8c;
    font-family: Roboto;
    font-size: 14px;
    //text-indent: 30px;
  }
  h4 {
    font-family: Roboto;
    font-size: 14px;
    height: 22px;
  }
`;
