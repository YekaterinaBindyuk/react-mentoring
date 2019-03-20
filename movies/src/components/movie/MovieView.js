import React from "react";
import MovieTitle from "./MovieTitle";
import MovieCover from "./MovieCover";
import MovieDescription from "./MovieDescription";
import MovieDetails from "./MovieDetails";
import MovieGenres from "./MovieGenres";
import MovieRating from "./MovieRating";
import BackButton from "../BackButton";

import "../../style/movie.css";

import { MOVIE_COVER } from "../../environment/const";
import RecommendedMovies from "./RecommendedMovies";

class MovieView extends React.Component {
  render = () => {
    const {
      title,
      releaseDate,
      duration,
      description,
      genres,
      rating,
      url
    } = this.props;
    return (
      <div>
      <div className="movie-view">
        <BackButton />
        <MovieTitle title={title} />
        <div className="movie-details">
          <MovieCover title={title} type={MOVIE_COVER} url={url} />
          <MovieGenres genres={genres} />
          <MovieRating rating={rating} />
          <MovieDetails releaseDate={releaseDate} duration={duration} />
        </div>
        <MovieDescription description={description} />
        </div>
        <RecommendedMovies />
      </div>
    );
  };
}

export default MovieView;
