import React from "react";
import { SEARCH_BUTTON } from "../../environment/const";
import SearchType from "./SearchType";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <div className="search">
        <input className="search-input" onChange={this.onSearchValueChange} />
        <button className="btn btn-success m-2 ml-3"><FontAwesomeIcon icon="search" className="mr-1"/>{SEARCH_BUTTON}</button>
        <div className="search-type">
        <SearchType
          onSearchByGenreClick={this.onSearchByGenreClick}
          onSearchByTitleClick={this.onSearchByTitleClick}
        />
        </div>
      </div>
    );
  };
}
export default Search;
