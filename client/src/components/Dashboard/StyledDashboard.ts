import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: #e5e5e5;
  height: 100vh;
  width: 100%;
`;
export const StyledWorkingPanel = styled.div`

    display: grid;
    grid-gap: 20px;
    width: 100%;

    grid-template-areas:
      "prices barChart"
      "linearChart linearChart";
  }`;
