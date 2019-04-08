import React from "react";
import { render, shallow } from "enzyme";
import { NO_FILMS_WARNING } from "../../environment/const";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

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
  const store = mockStore({ movies: moviesList, movie: {}, recommendedMovies: [] });
  const mockGetMoviesfn = jest.fn();
  
  const wrapper = shallow(
    <Provider store={store}>
      <SearchResults moviesList={moviesList} getMovies={mockGetMoviesfn} />
    </Provider>
  );
  expect(wrapper.html()).toEqual(

'<main><div><div class="search-results-info"><div class="movies-count"><div class="badge badge-dark p-2"><i class="fa"></i><span> films found: <span class="badge badge-light">1</span></span></div></div><div class="sort">Sort by: <button id="sort-by-release-btn" class="btn btn-dark m-1"><i class="fa"></i>release date</button><button id="sort-by-rating-btn" class="btn btn-dark"><i class="fa"></i><i class="fa"></i><i class="fa"></i>rating</button></div></div><div class="movies-list"><div class="movies-list-item"><img src="https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg" alt="Guardians of the Galaxy Vol. 3" class="img_small"/><h3 class="title">Guardians of the Galaxy Vol. 3</h3><section><div class="genres">Comedy</div></section><div>2020-05-01</div></div></div></div></main>'
    );
});
