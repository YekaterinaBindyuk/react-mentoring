import React from "react";
import {GENRE_TYPE_BUTTON, TITLE_TYPE_BUTTON} from '../../environment/const';

class SearchType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchType: "title" };
  }

  onSearchByTitleClick = e => {
    this.setState({ searchType: "title" });
  };
  onSearchByGenreClick = e => {
    this.setState({ searchType: "genre" });
  };
  render = () => {
    return (
      <div>
        <button onClick={this.onSearchByTitleClick}>{GENRE_TYPE_BUTTON}</button>
        <button onClick={this.onSearchByGenreClick}>{TITLE_TYPE_BUTTON}</button>
      </div>
    );
  };
}

export default SearchType;
