import 'jsdom-global/register';
import React from "react";
import { shallow, mount } from "enzyme";
import { Search } from "./Search";

it("updates state: searchInput correctly", () => {
  const mockSearchMoviesfn = jest.fn();
  const wrapper = shallow(<Search searchMovies={mockSearchMoviesfn}/>);
  wrapper.find("input#search-input").simulate("change", { target: { value: "test value" }} );
  expect(wrapper.state("searchInput")).toEqual("test value");
});

it("updates state: searchType correctly", () => {
  const mockSearchMoviesfn = jest.fn();
  const wrapper = mount(<Search searchMovies={mockSearchMoviesfn}/>);
  wrapper.find("button#search-by-title-btn").simulate("click");
  expect(wrapper.state("searchType")).toEqual("title");
  wrapper.find("button#search-by-genre-btn").simulate("click");
  expect(wrapper.state("searchType")).toEqual("genre");
});

it("should search movies", () => {
  const mockSearchMoviesfn = jest.fn();
  const wrapper = shallow(<Search searchMovies={mockSearchMoviesfn}/>);
  wrapper.find("button#search-btn").simulate("click");
  expect(mockSearchMoviesfn).toHaveBeenCalled()
});