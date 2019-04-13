import React from "react";
import { shallow } from "enzyme";
import { NO_FILMS_WARNING } from "../../environment/const";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { shallowWrap } from "../test-helpers/ContextWrap";

import { SearchResults } from "./SearchResults";
describe("SearchResults", () => {
  it('should render correctly in "debug" mode', () => {
    const wrappedMount = () => shallowWrap(<SearchResults debug moviesList={[]} />);
    expect(wrappedMount).toMatchSnapshot();
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
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
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
  const store = mockStore({
    movies: moviesList,
    movie: {},
    recommendedMovies: []
  });
  const mockGetMoviesfn = jest.fn();
  const wrappedMount = () => shallowWrap(
    <Provider store={store}>
      <SearchResults moviesList={moviesList} getMovies={mockGetMoviesfn} />
    </Provider>
  );
  expect(wrappedMount).toMatchSnapshot();

});
