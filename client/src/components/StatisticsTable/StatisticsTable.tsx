/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../reducers";
import { store } from "../../store";
import { Caret } from "../StockCard/Icons";
import { checkIfValueIsNegative, getDifference, numberTofixedDigits, StockInfo } from "../StockInfoHelpers";
import { StyledStatisticsTable } from "./StyledStatisticsTable";

export const StatisticsTable = () => {
  const [data, setData] = useState<StockInfo[]>([]);

  //const currency = store.getState().setCurrency;
  store.subscribe(() => {
    console.log(store.getState(), "suscribe in stats");
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Current price",
      dataIndex: "currentPrice",

      render: (text: any, record: any) => (
        <p key={record.index}>
          {record.currentPrice}
          &nbsp;
          {store.getState().setCurrency}
        </p>
      ),
    },
    {
      title: "Previous price",
      dataIndex: "previousPrice",

      render: (text: any, record: any) => (
        <p key={record.index}>
          {record.previousPrice}
          &nbsp;
          {store.getState().setCurrency}
        </p>
      ),
    },
    {
      title: "",
      key: "index",
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
const mapStateToProps = (state: any) => {
  console.log(state, "state map state");
  return {
    currency: setCurrency(state),
  };
};

connect(mapStateToProps)(StatisticsTable);
