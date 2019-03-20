import React from "react";
import MovieTitle from "./movie-item/MovieTitle";
import MovieCover from "./movie-item/MovieCover";
import MovieDescription from "./movie-item/MovieDescription";
import MovieDetails from "./movie-item/MovieDetails";
import MovieGenres from "./movie-item/MovieGenres";
import MovieRating from "./movie-item/MovieRating";

import '../../style/movie.css';

import { MOVIE_COVER } from "../../environment/const";

class MovieView extends React.Component {
  render = () => {
    const { title, releaseDate, duration, description, genres, rating, url } = this.props;
    return (
        <div className='movie-item'>
        <MovieTitle title={title}/>
        <MovieCover title={title} type={MOVIE_COVER} url={url}/>
        <MovieGenres genres={genres}/>
        <MovieRating rating={rating}/>
        <MovieDetails releaseDate={releaseDate} duration={duration}/>
        <MovieDescription description={description}/>
        </div>
    );
  };
}

export default MovieView;