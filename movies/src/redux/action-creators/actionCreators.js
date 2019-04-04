import services from "../services/services";
import { GET_MOVIE_LIST_SUCCESS, GET_MOVIE_SUCCESS, GET_RECOMMENDED_MOVIES_SUCCESS, SORT_MOVIES_SUCCESS, SEARCH_MOVIES_SUCCESS } from "../actions/actions";

const getMovieList = () => dispatch => {
  services.getMovies().then(res => {
    dispatch(getMovieListSuccess(res.data));
  });
};

const getMovieListSuccess = movies => ({
  type: GET_MOVIE_LIST_SUCCESS,
  movies
});

const getMovie = (id) => dispatch => {
  services.getMovie(id).then(res => {
    dispatch(getMovieSuccess(res));
  });
};

const getMovieSuccess = movie => ({
  type: GET_MOVIE_SUCCESS,
  movie
});

const getRecommendedMovies  = (genres) => dispatch => {
  services.getRecommendedMovies(genres).then(res => {
    dispatch(getRecommendedMoviesSuccess(res.data));
  })
};

const getRecommendedMoviesSuccess = movies => ({
  type: GET_RECOMMENDED_MOVIES_SUCCESS,
  movies
});

const sortMovies  = (sortBy) => dispatch => {
  services.sortMovies(sortBy).then(res => {
    dispatch(sortMoviesSuccess(res.data));
  })
};

const sortMoviesSuccess = movies => ({
  type: SORT_MOVIES_SUCCESS,
  movies
});

const searchMovies  = (searchValue, searchBy) => dispatch => {
  services.searchMovies(searchValue, searchBy).then(res => {
    dispatch(searchMoviesSuccess(res.data));
  })
};

const searchMoviesSuccess = movies => ({
  type: SEARCH_MOVIES_SUCCESS,
  movies
});

export default {
  getMovieList,
  getMovie,
  getRecommendedMovies,
  sortMovies,
  searchMovies
};
