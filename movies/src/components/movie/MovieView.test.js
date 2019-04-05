import React from "react";
import { shallow } from "enzyme";
import { MovieView } from "./MovieView";

it("should get movie", () => {
  const mockGetMoviefn = jest.fn();

  const props = {
    movie: {},
    id: "123",
    getMovie: mockGetMoviefn,
  };
  shallow(<MovieView {...props}/>);
  expect(mockGetMoviefn).toHaveBeenCalledWith(props.id);
});