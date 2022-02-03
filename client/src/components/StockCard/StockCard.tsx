import React from "react";
import { Caret, Icon } from "./Icons";
import { StyledStockCard } from "./StyledStockCard";
export type StockInfo = {
  index?: number;
  name: string;
  currentPrice: number;
  previousPrice: number;
};

export const StockCard = (props: StockInfo) => {
  const { name, currentPrice, previousPrice } = props;
  const getDifference = (currentValue: number, previousValue: number) => {
    const result = ((currentValue - previousValue) / currentValue) * 100.0;

    return result;
  };
  const difference = getDifference(currentPrice, previousPrice);
  const numberTofixedDigits = (num: number, digits: number) => num.toFixed(digits);
  const checkIfValueIsNegative = (value: number) => (value >= 0 ? "positive" : "negative");
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
