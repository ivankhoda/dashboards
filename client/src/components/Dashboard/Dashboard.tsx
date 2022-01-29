import React from "react";
import { ChartsContainer } from "../ChartsContainer/ChartsContainer";
import { LinearChartContainer } from "../LinearChartContainer/LinearChartContainer";
import { PricesContainer } from "../PricesContainer/PricesContainer";
import { StyledDashboard } from "./StyledDashboard";

export const Dashboard = () => {
  return (
    <>
      <StyledDashboard>
        Dashboard page is here
        <h2>Good morning</h2>
        <div>Date</div>
        <div>
          <PricesContainer />
          <ChartsContainer />

          <LinearChartContainer />
        </div>
      </StyledDashboard>
    </>
  );
};
