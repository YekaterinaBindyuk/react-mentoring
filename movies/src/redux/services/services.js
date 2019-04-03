import axios from 'axios';
import { MOVIES_URL } from '../../environment/const';

const getMovies = () => {
    return axios.get(MOVIES_URL).then(({ data }) => data);
};

export default {
    getMovies
};