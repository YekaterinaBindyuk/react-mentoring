import React from "react";
import MovieTitle from "./MovieTitle";
import MovieCover from "./MovieCover";
import MovieDescription from "./MovieDescription";
import MovieDetails from "./MovieDetails";
import MovieGenres from "./MovieGenres";
import MovieRating from "./MovieRating";

import '../../style/movie.css';

import { MOVIE_COVER } from "../../environment/const";
import RecommendedMovies from "./RecommendedMovies";

class MovieView extends React.Component {
  render = () => {
    const { title, releaseDate, duration, description, genres, rating, url } = this.props;
    return (
      <div className='movie-view'>
        <div className='movie-item'>
        <MovieCover title={title} type={MOVIE_COVER} url={url}/>
        <MovieTitle title={title}/>
        <MovieRating rating={rating}/>
        <MovieGenres genres={genres}/>
        <MovieDetails releaseDate={releaseDate} duration={duration}/>
        </div>
        <MovieDescription description={description}/>
        <RecommendedMovies/>
      </div>
    );
  };
}

export default MovieView;
