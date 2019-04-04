import * as actions from "../actions/actions";

const initState = {
  movies: [],
  movie: {},
  recommendedMovies: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_MOVIE_LIST_SUCCESS:
      return { ...state, movies: action.movies };
    case actions.GET_MOVIE_SUCCESS:
      return { ...state, movie: action.movie };
    case actions.GET_RECOMMENDED_MOVIES_SUCCESS:
      return { ...state, recommendedMovies: action.movies };
    default:
      return state;
  }
}
