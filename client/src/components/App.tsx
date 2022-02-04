import React from "react";
import styled from "styled-components";
import { Dashboard } from "./Dashboard/Dashboard";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";

const StyledDiv = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  grid-template-rows: 3.5rem 1fr;
  width: 100%;
  min-height: 100vh;
  grid-template-areas:
    "sidebar header"
    "sidebar workspace";
`;
const StyledWorkspace = styled.div`
  grid-area: workspace;

  width: 100vw;
  display: flex;
`;
export const App = () => {
  return (
    <>
      <StyledDiv>
        <Header />
        <Sidebar />
        <StyledWorkspace>
          <Dashboard />
        </StyledWorkspace>
      </StyledDiv>
    </>
  );
};
