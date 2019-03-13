import React from "react";
import { SEARCH_BUTTON } from "../../environment/const";
import SearchType from "./SearchType";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: null, searchType: "title" };
  }

  onSearchByTitleClick = () => {
    this.setState({ searchType: "title" });
  };
  onSearchByGenreClick = () => {
    this.setState({ searchType: "genre" });
  };

  onSearchValueChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  render = () => {
    return (
      <div>
        <input onChange={this.onSearchValueChange} />
        <button>{SEARCH_BUTTON}</button>
        <SearchType
          onSearchByGenreClick={this.onSearchByGenreClick}
          onSearchByTitleClick={this.onSearchByTitleClick}
        />
      </div>
    );
  };
}
export default Search;
