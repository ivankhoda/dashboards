/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/reducer";
import { Caret } from "../StockCard/Icons";
import { checkIfValueIsNegative, getDifference, numberTofixedDigits, StockInfo } from "../StockInfoHelpers";
import { StyledStatisticsTable } from "./StyledStatisticsTable";

export const StatisticsTable = () => {
  const [data, setData] = useState<StockInfo[]>([]);
  const currency = useSelector((state: RootState) => state.currency);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      //key: "name",
    },
    {
      title: "Current price",
      dataIndex: "currentPrice",
      // key: "crnt",
      render: (text: any, record: any) => (
        <p key={record.currentPrice}>
          {record.currentPrice}
          &nbsp;
          {currency}
        </p>
      ),
    },
    {
      title: "Previous price",
      dataIndex: "previousPrice",
      // key: "prv",
      render: (text: any, record: any) => (
        <p key={record.previousPrice}>
          {record.previousPrice}
          &nbsp;
          {currency}
        </p>
      ),
    },
    {
      title: "",
      // key: "index",
      render: (text: any, record: any) => {
        const difference = getDifference(record.currentPrice, record.previousPrice);
        return (
          <p className={`${checkIfValueIsNegative(difference)}`} key={record.index}>
            <Caret className={checkIfValueIsNegative(difference)} key={record.index} />
            &nbsp;&nbsp;
            {numberTofixedDigits(difference, 2)}%
          </p>
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
