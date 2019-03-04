import React from "react";
import MoviesList from "./movies-list/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import AppLogo from "./AppLogo";
import Search from "./search/Search";

const App = props => {
  return (
    <div>
      <ErrorBoundary>
        <AppLogo/>
        <Search/>
        <MoviesList/>
      </ErrorBoundary>
    </div>
  );
};

export default App;
