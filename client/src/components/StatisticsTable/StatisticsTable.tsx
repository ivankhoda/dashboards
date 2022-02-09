/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { store } from "../../store";
import { Caret } from "../StockCard/Icons";
import { checkIfValueIsNegative, getDifference, numberTofixedDigits, StockInfo } from "../StockInfoHelpers";
import { StyledStatisticsTable } from "./StyledStatisticsTable";

export const StatisticsTable = () => {
  const [data, setData] = useState<StockInfo[]>([]);
  const [currency] = useState(store.getState().setCurrency);
  console.log(currency);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Current price",
      dataIndex: "currentPrice",
      render: (text: any, record: any) => (
        <p>
          {record.currentPrice}
          &nbsp;
          {currency}
        </p>
      ),
    },
    {
      title: "Previous price",
      dataIndex: "previousPrice",
      render: (text: any, record: any) => (
        <p>
          {record.previousPrice}
          &nbsp;
          {currency}
        </p>
      ),
    },
    {
      title: "",
      key: "skunk",
      render: (text: any, record: any) => {
        const difference = getDifference(record.currentPrice, record.previousPrice);
        return (
          <td className={`${checkIfValueIsNegative(difference)}`}>
            <Caret className={checkIfValueIsNegative(difference)} />
            &nbsp;&nbsp;
            {numberTofixedDigits(difference, 2)}%
          </td>
        );
      },
    },
  ];
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

  return (
    <StyledStatisticsTable>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </StyledStatisticsTable>
  );
};
