import React from "react";
import { shallow } from "enzyme";
import BackButton from "./BackButton";

it("Goback logs correctly", () => {
  global.console = {
    log: jest.fn()
  };
  const wrapper = shallow(<BackButton />);
  wrapper.find("#back-btn").simulate("click");
  expect(global.console.log).toHaveBeenCalledWith("goBack button clicked");
});
