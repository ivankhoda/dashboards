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

  return (
    <>
      <StyledStockCard>
        <div>
          <div>
            <h4>{name}</h4> <p>Icon</p>
          </div>
          <div className="pricegoup">
            <p>{currentPrice}</p>
            <p>{getDifference(currentPrice, previousPrice)}%</p>
          </div>
          <p>{previousPrice}</p>
        </div>
      </StyledStockCard>
    </>
  );
};
