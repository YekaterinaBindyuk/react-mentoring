import React from "react";
import SearchResultsCount from "./SearchResultsCount";
import MoviesList from "../movies-list/MoviesList";
import Sorting from "../sorting/Sorting";
import { NO_FILMS_WARNING } from "../../environment/const";
import { connect } from "react-redux";
import { sortMovies } from '../../selectors/SortingSelector'

import "../../style/moviesList.css";

export class SearchResults extends React.Component {
  componentDidUpdate = () =>{
console.log('rerender');
  }
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
    moviesList: sortMovies(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
