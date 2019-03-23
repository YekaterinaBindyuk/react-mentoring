import React from "react";
import { MAIN_LOGO } from "../environment/const";
import { MAIN_PAGE } from "../environment/const";

const AppLogo = () => {
  return (
    <a href={MAIN_PAGE}>
      <img src={MAIN_LOGO} alt="logo" className="app-logo"/>
    </a>
  );
};
export default AppLogo;
