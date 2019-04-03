import * as actions from "../actions/actions";

const initState = {
    movies: []
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_MOVIES_SUCCESS:
      // return Object.assign({}, state, {
      //   movies: action.movies
      // });
      return {...state, movies: action.movies};
    default:
      return state;
  }
}
