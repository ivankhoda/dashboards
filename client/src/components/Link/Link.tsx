import React from "react";
import { DashBoardIcon } from "./DashboardIcon";
import { StyledLink } from "./StyledLink";

type LinkProps = {
  linkTo: string;
  text: string;
};

export const MenuLink = (props: LinkProps) => {
  const { linkTo, text } = props;

  return (
    <StyledLink to={`${linkTo}`}>
      <DashBoardIcon type={text} /> {text}
    </StyledLink>
  );
};
