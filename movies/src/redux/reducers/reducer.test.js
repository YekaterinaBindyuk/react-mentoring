import reducer from "./reducer";
import * as actions from "../actions/actions";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      movies: [],
      movie: {},
      recommendedMovies: [],
      "sortingType": "release_date"
    });
  });

  it("should handle actions", () => {
    expect(
      reducer([], {
        type: actions.GET_MOVIE_LIST_SUCCESS,
        movies: ["test"]
      })
    ).toEqual({
      movies: ["test"]
    });

    expect(
      reducer([], {
        type: actions.GET_MOVIE_SUCCESS,
        movie: { id: "test" }
      })
    ).toEqual({
      movie: { id: "test" }
    });

    expect(
      reducer([], {
        type: actions.GET_RECOMMENDED_MOVIES_SUCCESS,
        movies: ["test"]
      })
    ).toEqual({
      recommendedMovies: ["test"]
    });

    expect(
      reducer([], {
        type: actions.SEARCH_MOVIES_SUCCESS,
        movies: ["test"]
      })
    ).toEqual({
      movies: ["test"]
    });
  });
});
