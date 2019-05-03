import React from "react";
import Button from ".././Button";

import {
  GENRE_TYPE_BUTTON,
  TITLE_TYPE_BUTTON,
  SEARCH_TEXT
} from "../../environment/const";
class SearchType extends React.Component {
  render = () => {
    const { onSearchByTitleClick, onSearchByGenreClick } = this.props;
    return (
      <div>
        {SEARCH_TEXT}
        <Button color={'#373E6E'}
          id="search-by-title-btn"
          onClick={onSearchByTitleClick}
          className="btn btn-dark m-1"
        >
          {TITLE_TYPE_BUTTON}
        </Button>
        <Button color={'#373E6E'}
          id="search-by-genre-btn"
          onClick={onSearchByGenreClick}
          className="btn btn-dark"
        >
          {GENRE_TYPE_BUTTON}
        </Button>
      </div>
    );
  };
}

export default SearchType;
