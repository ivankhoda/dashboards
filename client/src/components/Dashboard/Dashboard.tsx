import React from "react";
import { ChartsContainer } from "../ChartsContainer/ChartsContainer";
import { LinearChartContainer } from "../LinearChartContainer/LinearChartContainer";
import { PricesContainer } from "../PricesContainer/PricesContainer";
import { StyledDashboard, StyledWorkingPanel } from "./StyledDashboard";

export const Dashboard = () => {
  return (
    <>
      <StyledDashboard>
        <h2>Good morning</h2>
        <div>Date</div>
        <StyledWorkingPanel>
          <PricesContainer />
          <ChartsContainer />

          <LinearChartContainer />
        </StyledWorkingPanel>
      </StyledDashboard>
    </>
  );
};
