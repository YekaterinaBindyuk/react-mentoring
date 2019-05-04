import * as actions from "../actions/actions";

const initState = {
  movies: [],
  movie: {},
  recommendedMovies: [],
  sortingType: null
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_MOVIE_LIST_SUCCESS:
      return { ...state, movies: action.movies };
    case actions.GET_MOVIE_SUCCESS:
      return { ...state, movie: action.movie };
    case actions.GET_RECOMMENDED_MOVIES_SUCCESS:
      return { ...state, recommendedMovies: action.movies };
    case actions.SORT_MOVIES_SUCCESS:
      return { ...state, sortingType: action.sortingType };
    case actions.SEARCH_MOVIES_SUCCESS:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
}
