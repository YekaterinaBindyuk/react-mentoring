import React from "react";
import { shallow } from "enzyme";
import { Sorting } from "./Sorting";

it("updates state correctly", () => {
  const mockSortfn = jest.fn();
  const wrapper = shallow(<Sorting sortMovies={mockSortfn} />);
  wrapper.find("button#sort-by-release-btn").simulate("click");
  expect(wrapper.state("sortingType")).toEqual("release_date");
  wrapper.find("button#sort-by-rating-btn").simulate("click");
  expect(wrapper.state("sortingType")).toEqual("vote_average");
});
