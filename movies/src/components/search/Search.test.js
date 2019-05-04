import "jsdom-global/register";
import React from "react";
import { shallow, mount } from "enzyme";
import { Search } from "./Search";
import Router from "next/router";

it("updates state: searchInput correctly", () => {
  const mockSearchMoviesfn = jest.fn();
  const wrapper = shallow(<Search searchMovies={mockSearchMoviesfn} />);
  wrapper
    .find("input#search-input")
    .simulate("change", { target: { value: "test value" } });
  expect(wrapper.state("searchInput")).toEqual("test value");
});

it("should search movies", () => {
  const mockedRouter = {push: jest.fn()};
  Router.router = mockedRouter;
  const wrapper = shallow(<Search />);
  wrapper.find("#search-btn").simulate("click");
  expect(mockedRouter.push).toHaveBeenCalled();
});
