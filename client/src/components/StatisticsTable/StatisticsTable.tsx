import React, { useEffect, useState } from "react";
import { store } from "../../store";
import { Caret } from "../StockCard/Icons";
import { checkIfValueIsNegative, getDifference, numberTofixedDigits, StockInfo } from "../StockInfoHelpers";
import { StyledStatisticsTable } from "./StyledStatisticsTable";

export const StatisticsTable = () => {
  const [data, setData] = useState<StockInfo[]>([]);
  const [currency] = useState(store.getState().setCurrency);

  useEffect(() => {
    const fetchGoodsPrices = async () => {
      const result = await fetch("http://localhost:8000/statistics", {
        method: "GET",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      setData(await result.json());
    };
    fetchGoodsPrices();
  }, []);

  const TableElement = (props: StockInfo) => {
    const { name, currentPrice, previousPrice } = props;
    const difference = getDifference(currentPrice, previousPrice);
    return (
      <tr>
        <td>{name}</td>
        <td>
          {currentPrice}
          &nbsp;
          {currency}
        </td>
        <td>
          {previousPrice} &nbsp;{currency}
        </td>
        <td className={`${checkIfValueIsNegative(difference)}`}>
          <Caret className={checkIfValueIsNegative(difference)} />
          &nbsp;&nbsp;
          {numberTofixedDigits(difference, 2)}%
        </td>
      </tr>
    );
  };

  return (
    <StyledStatisticsTable>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Previos value</th>
          <th></th>
        </tr>
        {data.length !== 0 ? (
          data.map((item) => (
            <TableElement
              key={item.name}
              name={item.name}
              currentPrice={item.currentPrice}
              previousPrice={item.previousPrice}
            />
          ))
        ) : (
          <tr>
            <th>Loading...</th>
            <th>Loading...</th>
            <th>Loading...</th>
            <th>Loading...</th>
          </tr>
        )}
      </tbody>
    </StyledStatisticsTable>
  );
};
