import styled from "styled-components";

export const StyledDashboard = styled.div`
  background-color: #e5e5e5;

  padding: 24px;
`;
export const StyledWorkingPanel = styled.div`

    display: grid;
    grid-gap: 20px;
    width: 100%;

    grid-template-areas:
      "prices barChart"
      "linearChart linearChart";
  }`;
