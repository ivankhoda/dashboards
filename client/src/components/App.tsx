import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import styled from "styled-components";
import { Dashboard } from "./Dashboard/Dashboard";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Statistics } from "./Statistics/Statistics";

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
  const routes = [
    { path: "/", name: "Dashboard", Component: <Dashboard /> },
    { path: "/stats", name: "Settings", Component: <Statistics /> },
  ];
  return (
    <HashRouter>
      <StyledDiv>
        <Header />
        <Sidebar />
        <StyledWorkspace>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={Component} />
            ))}
          </Routes>
        </StyledWorkspace>
      </StyledDiv>
    </HashRouter>
  );
};
