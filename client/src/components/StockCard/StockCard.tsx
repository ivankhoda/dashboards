import React from "react";
import { checkIfValueIsNegative, getDifference, numberTofixedDigits, StockInfo } from "../StockInfoHelpers";
import { Caret, Icon } from "./Icons";
import { StyledStockCard } from "./StyledStockCard";

export const StockCard = (props: StockInfo) => {
  const { name, currentPrice, previousPrice } = props;

  const difference = getDifference(currentPrice, previousPrice);

  return (
    <>
      <StyledStockCard>
        <div className="stockCard__header">
          <h4>{name}</h4>
          <div className="stockCard__logo">
            <Icon />
          </div>
        </div>
        <div className="stockCard__pricegoup">
          <div className="stockCard__pricegoup_main">
            <p className="stockCard__pricegoup_current">{currentPrice}</p>
            <p className={`stockCard__pricegoup_difference ${checkIfValueIsNegative(difference)}`}>
              <Caret className={checkIfValueIsNegative(difference)} />
              &nbsp;&nbsp;
              {numberTofixedDigits(difference, 2)}%
            </p>
          </div>

          <p className="stockCard__pricegoup_previous">{previousPrice}</p>
        </div>
      </StyledStockCard>
    </>
  );
};
