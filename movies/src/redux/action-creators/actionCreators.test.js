import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./actionCreators";
import * as types from "../actions/actions";
import fetchMock from "fetch-mock";
import expect from "expect";
import {getMovieList, getMovieListSuccess, getMovieSuccess, getRecommendedMoviesSuccess, sortMoviesSuccess, searchMoviesSuccess} from "./actionCreators";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("creates MOVIES_LIST_SUCCESS when fetching movies has been done", () => {
    fetchMock.getOnce("/movies", {
      body: { movies: ["test"] },
      headers: { "content-type": "application/json" }
    });
    const expectedActions = [
      { type: types.GET_MOVIE_LIST },
      { type: types.GET_MOVIE_LIST_SUCCESS, body: { movies: ["test"] } }
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(getMovieList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("Movie list success", () => {
  it("returnes correct value", () => {
    expect(getMovieListSuccess(["test"])).toEqual({
      type: types.GET_MOVIE_LIST_SUCCESS,
      movies: ["test"]
    });
  });
});

describe("Movie success", () => {
  it("returnes correct value", () => {
    expect(getMovieSuccess({name: "test"})).toEqual({
      type: types.GET_MOVIE_SUCCESS,
      movie: {name: "test"}
    });
  });
});

describe("Recommended Movies success", () => {
  it("returnes correct value", () => {
    expect(getRecommendedMoviesSuccess(["test"])).toEqual({
      type: types.GET_RECOMMENDED_MOVIES_SUCCESS,
      movies: ["test"]
    });
  });
});

describe("Sort Movies success", () => {
  it("returnes correct value", () => {
    expect(sortMoviesSuccess(["test"])).toEqual({
      type: types.SORT_MOVIES_SUCCESS,
      movies: ["test"]
    });
  });
});

describe("Sort Movies success", () => {
  it("returnes correct value", () => {
    expect(searchMoviesSuccess(["test"])).toEqual({
      type: types.SEARCH_MOVIES_SUCCESS,
      movies: ["test"]
    });
  });
});