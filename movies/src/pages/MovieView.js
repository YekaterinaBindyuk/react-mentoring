import React from "react";
import "babel-polyfill";
import MovieTitle from "../components/movie/MovieTitle";
import MovieCover from "../components/movie/MovieCover";
import MovieDescription from "../components/movie/MovieDescription";
import MovieDetails from "../components/movie/MovieDetails";
import MovieGenres from "../components/movie/MovieGenres";
import MovieRating from "../components/movie/MovieRating";
import BackButton from "../components/BackButton";
import actionCreators from "../redux/action-creators/actionCreators";
import { connect } from "react-redux";

import "../style/movie.css";

import { MOVIE_COVER } from "../environment/const";
import RecommendedMovies from "../components/movie/RecommendedMovies";

export class MovieView extends React.Component {
  static async getInitialProps(context) {
    return context.query;
  }

  componentDidMount() {
    const { getMovie } = this.props;
    const { id } = this.props;
    getMovie(id);
  }
  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      const { getMovie } = this.props;
      getMovie(id);
    }
  }
  render = () => {
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
        <RecommendedMovies genres={genres} />
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
