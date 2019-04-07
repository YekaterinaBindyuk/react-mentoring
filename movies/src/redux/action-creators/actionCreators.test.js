import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./actionCreators";
import * as types from "../actions/actions";
import fetchMock from "fetch-mock";
import expect from "expect";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("creates MOVIES_LIST_SUCCESS when fetching movies has been done", () => {
    fetchMock.getOnce("/movies", {
      body: { movies: ["test"]},
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.GET_MOVIE_LIST },
      { type: types.GET_MOVIE_LIST_SUCCESS, body: { movies: ["test"]} }
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(actions.getMovieList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
