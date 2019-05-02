import services from "../services/services";
import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_SUCCESS,
  GET_RECOMMENDED_MOVIES_SUCCESS,
  SORT_MOVIES_SUCCESS,
  SEARCH_MOVIES_SUCCESS
} from "../actions/actions";

export function getMovieList() {
  return dispatch => {
    return services.getMovies().then(res => {
      dispatch(getMovieListSuccess(res.data));
    });
  };
}

export function getMovieListSuccess(movies: Array<mixed>) {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    movies
  };
}

export function getMovie(id: number) {
  return dispatch => {
    return services.getMovie(id).then(res => {
      dispatch(getMovieSuccess(res));
    });
  };
}

export function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    movie
  };
}

export function getRecommendedMovies(genres: Array<string>) {
  return dispatch => {
    return services.getRecommendedMovies(genres).then(res => {
      dispatch(getRecommendedMoviesSuccess(res.data));
    });
  };
}

export function getRecommendedMoviesSuccess(movies: Array<mixed>) {
  return {
    type: GET_RECOMMENDED_MOVIES_SUCCESS,
    movies
  };
}

export function sortMovies(sortBy: string) {
  return dispatch => {
    return services.sortMovies(sortBy).then(res => {
      dispatch(sortMoviesSuccess(res.data));
    });
  };
}

export function sortMoviesSuccess(movies: Array<mixed>) {
  return {
    type: SORT_MOVIES_SUCCESS,
    movies
  };
}

export function searchMovies(searchValue: string, searchBy: string) {
  return dispatch => {
    return services.searchMovies(searchValue, searchBy).then(res => {
      dispatch(searchMoviesSuccess(res.data));
    });
  };
}

export function searchMoviesSuccess(movies: Array<mixed>) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    movies
  };
}

export default {
  getMovieList,
  getMovie,
  getRecommendedMovies,
  sortMovies,
  searchMovies
};
