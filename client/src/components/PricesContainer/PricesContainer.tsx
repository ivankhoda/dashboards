import React from "react";
import { StockCard } from "../StockCard/StockCard";
import { StyledPricesContainer } from "./StyledPricesContainer";
import { useFetch } from "./useFetch";

export const PricesContainer = () => {
  const { loading, data, error } = useFetch("http://localhost:8000/prices");
  console.log(data, loading, error);
  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>We have some troubles...</h1>;

  // useEffect(() => {
  //     const fetchGoodsPrices = async () => {
  //       try {
  //         const result = await fetch("http://localhost:8000/prices", {
  //           method: "GET",
  //           credentials: "same-origin",
  //           headers: { "Content-Type": "application/json" },
  //         });
  //         setPrices(await result.json());
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchGoodsPrices();
  //   }, []);
  if (data)
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
