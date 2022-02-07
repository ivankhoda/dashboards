import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledDashboard } from "../Dashboard/StyledDashboard";
import { StatisticsTable } from "../StatisticsTable/StatisticsTable";
import { StockCard } from "../StockCard/StockCard";
import { StockInfo } from "../StockInfoHelpers";
import { StyledStatistics } from "./StyledStatistics";

const StyledStatisticsData = styled.div`
  table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;

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

        <StyledStatisticsData>
          <StatisticsTable />
        </StyledStatisticsData>
      </StyledDashboard>
    </StyledStatistics>
  );
};
