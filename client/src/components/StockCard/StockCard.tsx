import React from "react";
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
    const result = (((currentValue - previousValue) / currentValue) * 100.0).toFixed(2);

    return result;
  };
  const difference = getDifference(currentPrice, previousPrice);

  return (
    <>
      <StyledStockCard>
        <div className="stockCard__header">
          <h4>{name}</h4> <img src={require("/assets/icon.svg")} />
        </div>
        <div className="stockCard__pricegoup">
          <p className="stockCard__pricegoup_header">{currentPrice}</p>
          <p className="stockCard__previous-price">{previousPrice}</p>
          <p className="stockCard__pricegoup_difference">{difference}%</p>
        </div>
      </StyledStockCard>
    </>
  );
};
