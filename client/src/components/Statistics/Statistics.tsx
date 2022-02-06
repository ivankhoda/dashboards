import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import { StyledDashboard } from "../Dashboard/StyledDashboard";
import { StockCard, StockInfo } from "../StockCard/StockCard";
import { StyledStatistics } from "./StyledStatistics";

export const Statistics = () => {
  const [prices, setPrices] = useState<StockInfo[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (range: any) => {
    const nextDate = range[1]._d;
    const firstDate = range[0]._d;
    console.log(firstDate, nextDate);
  };

  const random = Math.floor(Math.random() * prices.length);
  const { RangePicker } = DatePicker;
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
    <StyledStatistics>
      <StyledDashboard>
        <h2>Statistics</h2>
        <div>
          <Space direction="vertical" size={12}>
            <RangePicker showTime onChange={(range) => onChange(range)} />
          </Space>
        </div>
        {prices.length !== 0 ? (
          <StockCard
            key={prices[random].index}
            name={prices[random].name}
            currentPrice={prices[random].currentPrice}
            previousPrice={prices[random].previousPrice}
          />
        ) : (
          <div>Loading...</div>
        )}
      </StyledDashboard>
    </StyledStatistics>
  );
};
