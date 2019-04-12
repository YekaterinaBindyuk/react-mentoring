import React from "react";
import SearchResults from "./search-results/SearchResults";
import ErrorBoundary from "./ErrorBoundary";
import Search from "./search/Search";
import queryString from "query-string";
import actionCreators from "../redux/action-creators/actionCreators";
import { connect } from "react-redux";

export class App extends React.Component {

  render = () => {
    const { searchMovies } = this.props;
    const { searchInput, searchType } = queryString.parse(this.props.location.search);
    if (searchInput && searchType) {
      searchMovies(searchInput, searchType);
    }
    return (
      <div>
        <ErrorBoundary>
          <Search />
          <SearchResults />
        </ErrorBoundary>
      </div>
    );
  };
}

const mapDispatchToProps = {
  searchMovies: actionCreators.searchMovies
};

export default connect(
  null,
  mapDispatchToProps
)(App);
