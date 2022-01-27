import React from "react";
import { Dashboard } from "./Dashboard/Dashboard";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <Dashboard />
      <Statistics />
    </>
  );
};
