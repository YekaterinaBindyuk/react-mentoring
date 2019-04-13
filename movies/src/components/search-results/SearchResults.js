import React from "react";
import SearchResultsCount from "./SearchResultsCount";
import MoviesList from "../movies-list/MoviesList";
import Sorting from "../sorting/Sorting";
import { NO_FILMS_WARNING } from "../../environment/const";
import { connect } from "react-redux";

import "../../style/moviesList.css";

export class SearchResults extends React.Component {
  render = () => {
    const { moviesList } = this.props;
    return (
      <main>
        {moviesList.length ? (
          <div>
            <div className="search-results-info">
              <SearchResultsCount count={moviesList.length} />
              <Sorting />
            </div>
            <MoviesList moviesList={moviesList} />
          </div>
        ) : (
          <div>{NO_FILMS_WARNING}</div>
        )}
      </main>
    );
  };
}


const mapStateToProps = state => {
  return {
    moviesList: state.movies
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
