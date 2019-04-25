import React from "react";
import { MAIN_LOGO } from "../environment/const";
import Link from 'next/link';

const AppLogo = () => {
  return (
    <Link href={`/about`}>
      <img src={MAIN_LOGO} alt="logo" className="app-logo" />
    </Link>
  );
};
export default AppLogo;
