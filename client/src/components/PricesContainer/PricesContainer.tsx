import React from "react";
import { StockCard } from "../StockCard/StockCard";
import { StyledPricesContainer } from "./StyledPricesContainer";
import { useFetch } from "./useFetch";

export const PricesContainer = () => {
  const { loading, data, error } = useFetch("http://localhost:8000/prices");

  if (error) return <h1>We have some troubles...</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <StyledPricesContainer>
      {data.length !== 0 ? (
        data.map((item, i) => (
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
