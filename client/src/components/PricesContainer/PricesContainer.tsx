import React, { useEffect, useState } from "react";
import { StockCard } from "../StockCard/StockCard";
import { StockInfo } from "../StockInfoHelpers";
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
        prices.map((item, i) => (
          <StockCard key={i} name={item.name} currentPrice={item.currentPrice} previousPrice={item.previousPrice} />
        ))
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </StyledPricesContainer>
  );
};
