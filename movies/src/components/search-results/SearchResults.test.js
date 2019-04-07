import React from "react";
import { render, shallow } from "enzyme";
import { NO_FILMS_WARNING } from "../../environment/const";

import { SearchResults } from "./SearchResults";
describe("SearchResults", () => {
  it('should render correctly in "debug" mode', () => {
    const component = render(<SearchResults debug moviesList={[]} />);
    expect(component).toMatchSnapshot();
  });
});

it("renders no films warning in case of absense of films", () => {
  const mockGetMoviesfn = jest.fn();
  const wrapper = shallow(
    <SearchResults moviesList={[]} getMovies={mockGetMoviesfn} />
  );
  expect(wrapper.html()).toEqual(
    "<main><div>" + NO_FILMS_WARNING + "</div></main>"
  );
});

it("renders films", () => {
  const mockGetMoviesfn = jest.fn();
  const moviesList = [
    {
      budget: 0,
      genres: ["Comedy"],
      id: 447365,
      overview: "The third film based on Marvel's Guardians of the Galaxy.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg",
      release_date: "2020-05-01",
      revenue: 0,
      runtime: null,
      tagline: "",
      title: "Guardians of the Galaxy Vol. 3",
      vote_average: 0,
      vote_count: 9
    }
  ];
  const wrapper = shallow(
    <SearchResults moviesList={moviesList} getMovies={mockGetMoviesfn} />
  );
  expect(wrapper.html()).toEqual(
    "<main><div>" + NO_FILMS_WARNING + "</div></main>"
  );
});
