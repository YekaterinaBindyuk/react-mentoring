import React from "react";
import "babel-polyfill";
import SearchResults from "../components/search-results/SearchResults";
import ErrorBoundary from "../components/ErrorBoundary";
import Search from "../components/search/Search";
import queryString from "query-string";
import actionCreators from "../redux/action-creators/actionCreators";
import { connect } from "react-redux";

export class App extends React.Component {

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  handleRouteChange (url) {
    console.log('App is changing to: ', url);
  };

  componentDidMount() {
      // const { searchMovies } = this.props;
      // const { searchInput, searchType } = queryString.parse(
      //   this.props.location.search
      // );
      // if (searchInput && searchType) {
      //   searchMovies(searchInput, searchType);
      // }
  }

  componentDidUpdate(prevProps) {
    // if (prevProps !== this.props) {
    //   const { searchMovies } = this.props;
    //   const { searchInput, searchType } = queryString.parse(
    //     this.props.location.search
    //   );
    //   if (searchInput && searchType) {
    //     searchMovies(searchInput, searchType);
    //   }
    // }
  }
  render = () => {
    return (
      <div>
        {/* <ErrorBoundary>
          <Search />
          <SearchResults />
        </ErrorBoundary> */}
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
