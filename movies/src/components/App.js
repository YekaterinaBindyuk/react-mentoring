import React from "react";
import SearchResults from "./search-results/SearchResults";
import ErrorBoundary from "./ErrorBoundary";
import Search from "./search/Search";

const App = () => {
 
  return (
    <div>
      <ErrorBoundary>
        <Search/>
        <SearchResults/>
        </ErrorBoundary>

    </div>
  );
};

export default App;
