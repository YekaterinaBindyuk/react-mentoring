import React from "react";
import { MAIN_LOGO } from "../environment/const";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <Link to="/About">
      <img src={MAIN_LOGO} alt="logo" className="app-logo" />
    </Link>
  );
};
export default AppLogo;
