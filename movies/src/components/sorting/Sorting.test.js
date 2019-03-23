import React from "react";
import { mount } from "enzyme";
import Sorting from "./Sorting";

it("updates state correctly", () => {
  const wrapper = mount(<Sorting />);
  wrapper.find("button#sort-by-release-btn").simulate("click");
  expect(wrapper.state("sortingType")).toEqual("release");
  wrapper.find("button#sort-by-rating-btn").simulate("click");
  expect(wrapper.state("sortingType")).toEqual("rating");
});
