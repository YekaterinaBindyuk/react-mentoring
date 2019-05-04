import { createSelector } from 'reselect';
import moment from 'moment';

const getMovies = (state) => state.movies;
const getSortingType = (state) => state.sortingType;

const sortByRatingCallback = (movie1, movie2) => {
  if(movie1.vote_average <= movie2.vote_average) {return 1} else {return -1}

};
const sortByReleaseDateCallback = (movie1, movie2) => {
  if(moment(movie1.release_date).isSameOrBefore(moment(movie2.release_date))) {return 1} else {return -1}
};

export const sortMovies = createSelector(
  [getMovies, getSortingType], 
  (movies, sortingType) => {
    return movies.slice(0, movies.length).sort(sortingType === 'vote_average' ? sortByRatingCallback : sortByReleaseDateCallback);    
  }
  );
