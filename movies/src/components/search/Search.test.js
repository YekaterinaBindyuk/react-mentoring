import React from "react";
import { mount } from "enzyme";
import Search from "./Search";
import SearchType from "./SearchType";

it("updates state: searchInput correctly", () => {
  const wrapper = mount(<Search/>);
  wrapper.find("input#search-input").simulate("change", { target: { value: "test value" }} );
  expect(wrapper.state("searchInput")).toEqual("test value");
});

it("updates state: searchType correctly", () => {
  const wrapper = mount(<Search/>);
  wrapper.find("button#search-by-title-btn").simulate("click");
  expect(wrapper.state("searchType")).toEqual("title");
  wrapper.find("button#search-by-genre-btn").simulate("click");
  expect(wrapper.state("searchType")).toEqual("genre");
});