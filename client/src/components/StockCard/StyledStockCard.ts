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
    width: 100%;
  }
  .stockCard__pricegoup {
    display: flex;
    flex-direction: column;
  }
  .stockCard__pricegoup_header {
    font-family: Roboto;
    font-size: 30px;
    height: 38px;
    margin: 0;
  }

  .stockCard__pricegoup_difference {
    font-family: Roboto;
    font-size: 12px;
  }
  .stockCard__previous-price {
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
