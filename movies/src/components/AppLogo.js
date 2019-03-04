import React from "react";
import { MAIN_LOGO } from "../environment/const";
import { MAIN_PAGE } from "../environment/const";

const AppLogo = props => {
  return (
    <a href={MAIN_PAGE}>
      <img src={MAIN_LOGO} alt="logo" />
    </a>
  );
};
export default AppLogo;
