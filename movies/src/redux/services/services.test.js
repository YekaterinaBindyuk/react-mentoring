import { MOVIES_URL } from "../../environment/const";
import services from "./services";

jest.mock("axios", () => {
  const testMovies = [{ title: "test movie" }];

  return {
    get: jest.fn(() => Promise.resolve(testMovies))
  };
});

const axios = require("axios");

it("fetch movies on getMovies", () => {
  services.getMovies();
  expect(axios.get).toHaveBeenCalledWith(MOVIES_URL);
});

it("fetch movie on getMovie", () => {
  const id = 123;
  const url = MOVIES_URL + "/" + id;
  services.getMovie(id);
  expect(axios.get).toHaveBeenCalledWith(url);
});

it("fetch recommended movies on getRecommendedMovies", () => {
  const genres = ["test", "test2"];
  const url = MOVIES_URL + "?filter=" + genres.join(",");
  services.getRecommendedMovies(genres);
  expect(axios.get).toHaveBeenCalledWith(url);
});

it("sort movies on sortMovies", () => {
  const sortBy = "title";
  const url = MOVIES_URL + "?sortBy=" + sortBy + "&sortOrder=desc";
  services.sortMovies(sortBy);
  expect(axios.get).toHaveBeenCalledWith(url);
});

it("search movies on searchMovies", () => {
  const searchBy = "title";
  const searchValue = "test";
  const url = MOVIES_URL + "?search=" + searchValue + "&searchBy=" + searchBy;
  services.searchMovies(searchValue, searchBy);
  expect(axios.get).toHaveBeenCalledWith(url);
});
