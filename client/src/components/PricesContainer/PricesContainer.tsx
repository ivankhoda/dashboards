import React, { useEffect, useState } from "react";
import { StockCard, StockInfo } from "../StockCard/StockCard";
import { StyledPricesContainer } from "./StyledPricesContainer";

export const PricesContainer = () => {
  const [prices, setPrices] = useState<StockInfo[]>([]);
  useEffect(() => {
    const fetchGoodsPrices = async () => {
      const result = await fetch("http://localhost:8000/prices", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      setPrices(await result.json());
    };
    fetchGoodsPrices();
  }, []);

  return (
    <StyledPricesContainer>
      {prices.length !== 0 ? (
        prices.map((item) => (
          <StockCard
            key={item.name}
            name={item.name}
            currentPrice={item.currentPrice}
            previousPrice={item.previousPrice}
          />
        ))
      ) : (
        <div>Empty</div>
      )}
    </StyledPricesContainer>
  );
};
