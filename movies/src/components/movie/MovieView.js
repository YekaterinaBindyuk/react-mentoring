import React from "react";
import MovieTitle from "./MovieTitle";
import MovieCover from "./MovieCover";
import MovieDescription from "./MovieDescription";
import MovieDetails from "./MovieDetails";
import MovieGenres from "./MovieGenres";
import MovieRating from "./MovieRating";
import BackButton from "../BackButton";
import actionCreators from "../../redux/action-creators/actionCreators";
import { connect } from "react-redux";

import "../../style/movie.css";

import { MOVIE_COVER } from "../../environment/const";
import RecommendedMovies from "./RecommendedMovies";

export class MovieView extends React.Component {

  render = () => {
    const { getMovie } = this.props;
    const { id } = this.props.match.params;
    getMovie(id);
    const {
      title,
      release_date,
      runtime,
      overview,
      genres,
      vote_average,
      poster_path
    } = this.props.movie;
    return (
      <div>
        <div className="movie-view">
          <BackButton />
          <MovieTitle title={title} />
          <div className="movie-details">
            <MovieCover title={title} type={MOVIE_COVER} url={poster_path} />
            <MovieGenres genres={genres} />
            <MovieRating rating={vote_average} />
            <MovieDetails releaseDate={release_date} duration={runtime} />
          </div>
          <MovieDescription description={overview} />
        </div>
        <RecommendedMovies genres={genres}/>
      </div>
    );
  };
}

const mapDispatchToProps = {
  getMovie: actionCreators.getMovie
};

const mapStateToProps = state => {
  return {
    movie: state.movie
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieView);
