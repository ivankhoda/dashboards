import React from "react";
import styled from "styled-components";
import { Menu } from "../Menu/Menu";
import { StyledSidebar } from "./StyledSidebar";

const StyledLogoContainer = styled.div`
  min-width: 208px;
  min-height: 60px;
`;
const StyledLogo = styled.h1`
  font-family: Gropled;
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  text-align: center;
  margin: 0;
`;

export const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogoContainer>
        <StyledLogo>Logo</StyledLogo>
      </StyledLogoContainer>
      <Menu />
    </StyledSidebar>
  );
};
