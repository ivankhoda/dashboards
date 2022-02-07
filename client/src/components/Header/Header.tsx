import React from "react";
import styled from "styled-components";
import { SelectContainer } from "../SelectContainer/SelectContainer";
import { Caret } from "../StockCard/Icons";
import { AvatarIcon } from "./AvatarIcon";
import { StyledHeader } from "./StyledHeader";

const StyledAvatarContainer = styled.div`
  justify-content: flex-end;
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 40px 5px;
  grid-gap: 5px;
  margin-right: 24px;
  min-width: 56px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <SelectContainer />
      <StyledAvatarContainer>
        <AvatarIcon />
        <Caret className={"neutral"} />
      </StyledAvatarContainer>
    </StyledHeader>
  );
};
