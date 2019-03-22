import React from "react";
import renderer from "react-test-renderer";
import { MAIN_LOGO } from "../environment/const";
import { MAIN_PAGE } from "../environment/const";

it("renders correctly", () => {
  const tree = renderer
    .create(
     <a href={MAIN_PAGE}>
      <img src={MAIN_LOGO} alt="logo" className="app-logo"/>
    </a>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
