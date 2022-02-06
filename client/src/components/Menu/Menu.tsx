import React from "react";
import { MenuLink } from "../Link/Link";
import { StyledMenu } from "./StyledMenu";
export const Menu = () => {
  return (
    <StyledMenu>
      <MenuLink linkTo="/" text="Dashboard" />
      <MenuLink linkTo="/stats" text="Statistics" />
    </StyledMenu>
  );
};
