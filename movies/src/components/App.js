import React from "react";
import SearchResults from "./search-results/SearchResults";
import ErrorBoundary from "./ErrorBoundary";
import AppLogo from "./AppLogo";
import Search from "./search/Search";
import MovieView from "./movie/MovieView";

const App = () => {
 
  return (
    <div>
      <ErrorBoundary>
        <AppLogo/>
        <Search/>
        <SearchResults/>
        <MovieView id="348350"/>
        </ErrorBoundary>

    </div>
  );
};

export default App;
