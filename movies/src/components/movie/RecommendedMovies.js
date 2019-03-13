import React from "react";
import MoviesList from "../movies-list/MoviesList";
import { RECOMMENDED_MOVIES } from "../../environment/const";
class RecommendedMovies extends React.Component {
  render = () => {

    return (
      <div>
        {RECOMMENDED_MOVIES}
        <MoviesList />
      </div>
    );
  };
}

export default RecommendedMovies;
