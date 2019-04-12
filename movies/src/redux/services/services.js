import axios from "axios";
import { MOVIES_URL } from "../../environment/const";

const getMovies = () => {
  return axios.get(MOVIES_URL).then(({ data }) => data);
};

const getMovie = id => {
  const url = MOVIES_URL + "/" + id;
  return axios.get(url).then(({ data }) => data);
};

const getRecommendedMovies = genres => {
  const url = MOVIES_URL + "?filter=" + genres.join(",");
  return axios.get(url).then(({ data }) => data);
};

const sortMovies = sortBy => {
  const url = MOVIES_URL + "?sortBy=" + sortBy + "&sortOrder=desc";
  return axios.get(url).then(({ data }) => data);
};

const searchMovies = (searchValue, searchBy) => {
  const url = MOVIES_URL + "?search=" + searchValue + "&searchBy=" + searchBy;
  return axios.get(url).then(({ data }) => data);
};

export default {
  getMovies,
  getMovie,
  getRecommendedMovies,
  sortMovies,
  searchMovies
};
