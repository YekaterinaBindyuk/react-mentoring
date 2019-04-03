import services from '../services/services';
import { GET_MOVIES_SUCCESS } from '../actions/actions'
const getMovies = () => (dispatch) => {
    services.getMovies().then(res => {dispatch(getMoviesSuccess(res.data));});
  };

  const getMoviesSuccess = movies => ({
    type: GET_MOVIES_SUCCESS,
    movies
  });


export default {
  getMovies
};