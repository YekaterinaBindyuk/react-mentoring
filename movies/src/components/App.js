import React from "react";
import SearchResults from "./search-results/SearchResults";
import ErrorBoundary from "./ErrorBoundary";
import AppLogo from "./AppLogo";
import Search from "./search/Search";

const App = () => {
 
  return (
    <div>
      <ErrorBoundary>
        <AppLogo />
        <Search/>
        <SearchResults/>
        </ErrorBoundary>
    </div>
  );
};

export default App;
