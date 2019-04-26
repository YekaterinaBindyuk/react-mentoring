import React from "react";
import "babel-polyfill";
import SearchResults from "../components/search-results/SearchResults";
import ErrorBoundary from "../components/ErrorBoundary";
import Search from "../components/search/Search";
import actionCreators from "../redux/action-creators/actionCreators";
import { connect } from "react-redux";
import AppLogo from "../components/AppLogo";
import "../style/index.css";

export class Index extends React.Component {
  static async getInitialProps(context) {
    return context.query;
  }

  componentDidMount() {
    const { searchMovies, searchInput, searchType } = this.props;
    if (searchInput && searchType) {
      searchMovies(searchInput, searchType);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { searchMovies, searchInput, searchType } = this.props;
      if (searchInput && searchType) {
        searchMovies(searchInput, searchType);
      }
    }
  }
  render = () => {
    return (
      <div>
        <AppLogo />
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
)(Index);
