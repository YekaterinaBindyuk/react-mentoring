import React from "react";
import MovieTitle from "./MovieTitle";
import MovieCover from "./MovieCover";
import MovieDescription from "./MovieDescription";
import MovieRating from "./MovieRating";
import MovieDetails from "./MovieDetails";
import MovieGenres from "./MovieGenres";
import '../../style/movie.css';

import { MOVIE_COVER } from "../../environment/const";
import RecommendedMovies from "./RecommendedMovies";

class MovieView extends React.Component {
  render = () => {
    const { title, releaseDate, duration, description, genres, url } = this.props;
    return (
      <div className='movie-view'>
        <MovieCover title={title} type={MOVIE_COVER} url={url}/>
        <MovieTitle title={title}/>
        <MovieGenres genres={genres}/>
        <MovieDetails releaseDate={releaseDate} duration={duration}/>
        <MovieDescription description={description}/>
        <RecommendedMovies/>
      </div>
    );
  };
}

export default MovieView;
