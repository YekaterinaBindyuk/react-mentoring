import React from "react";
import MoviesList from "../movies-list/MoviesList";
import { RECOMMENDED_MOVIES } from "../../environment/const";
import actionCreators from "../../redux/action-creators/actionCreators";
import { connect } from "react-redux";

export class RecommendedMovies extends React.Component {
  componentDidUpdate(prevProps) {
    const { getRecommendedMovies, genres } = this.props;
    if (genres && this.props.genres !== prevProps.genres) {
      getRecommendedMovies(genres);
    }
  }

  render = () => {
    const { moviesList } = this.props;

    if (moviesList.length) {
      return (
        <div className="recommended">
          {RECOMMENDED_MOVIES}
          <MoviesList moviesList={moviesList} />
        </div>
      );
    } else return null;
  };
}

const mapDispatchToProps = {
  getRecommendedMovies: actionCreators.getRecommendedMovies
};

const mapStateToProps = state => {
  return {
    moviesList: state.recommendedMovies
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedMovies);
