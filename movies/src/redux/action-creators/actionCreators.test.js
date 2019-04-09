import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./actionCreators";
import * as types from "../actions/actions";
import fetchMock from "fetch-mock";
import expect from "expect";
import { REST_URL } from '../../environment/const';
import {getMovieList, getMovieListSuccess, getMovieSuccess, getRecommendedMoviesSuccess, 
sortMoviesSuccess, searchMoviesSuccess, getMovie, getRecommendedMovies} from "./actionCreators";
import nock from 'nock'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("creates MOVIES_LIST_SUCCESS when fetching movies has been done", () => {
    nock(REST_URL).get("/movies").reply(200, {data: ['test', 'test2']});

    
    const expectedActions = [
      {type: types.GET_MOVIE_LIST_SUCCESS, movies: ['test', 'test2']}
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(getMovieList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates MOVIE_SUCCESS when fetching movie has been done", () => {
    const id = 447365;
    nock(REST_URL).get("/movies/" + id).reply(200, {name: 'test'});
    const expectedActions = [
      {type: types.GET_MOVIE_SUCCESS, movie: {name: 'test'}}
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(getMovie(id)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates RECOMMENDED_MOVIES_SUCCESS when fetching recommended movies has been done", () => {
    const genre = 'Action';
    nock(REST_URL).get("/movies?filter=" + genre).reply(200, {data: ['test', 'test2']});
   
    const expectedActions = [
      {type: types.GET_RECOMMENDED_MOVIES_SUCCESS, movies: ['test', 'test2']}
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(getRecommendedMovies([genre])).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates SORT_MOVIES_SUCCESS when fetching sorted movies has been done", () => {
    const sortBy = 'title';
    nock(REST_URL).get("/movies?sortBy=" + sortBy + "&sortOrder=desc").reply(200, {data: ['test', 'test2']});
   
    const expectedActions = [
      {type: types.SORT_MOVIES_SUCCESS, movies: ['test', 'test2']}
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(actions.sortMovies(sortBy)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates SEARCH_MOVIES_SUCCESS when searching movies has been done", () => {
    const searchValue = 'test';
    const searchBy = 'title';
    nock(REST_URL).get("/movies?search=" + searchValue + "&searchBy=" + searchBy).reply(200, {data: ['test', 'test2']});
   
    const expectedActions = [
      {type: types.SEARCH_MOVIES_SUCCESS, movies: ['test', 'test2']}
    ];
    const store = mockStore({ movies: [], movie: {}, recommendedMovies: [] });

    return store.dispatch(actions.searchMovies(searchValue, searchBy)).then(() => {
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