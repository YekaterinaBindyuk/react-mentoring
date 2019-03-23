import React from "react";
import {GENRE_TYPE_BUTTON, TITLE_TYPE_BUTTON, SEARCH_TEXT} from '../../environment/const';
class SearchType extends React.Component {
  render = () => {
    const {onSearchByTitleClick, onSearchByGenreClick} = this.props;
    return (
      <div>{SEARCH_TEXT}
        <button id="search-by-title-btn" onClick={onSearchByTitleClick} className="btn btn-dark m-1">{TITLE_TYPE_BUTTON}</button>
        <button id="search-by-genre-btn" onClick={onSearchByGenreClick} className="btn btn-dark">{GENRE_TYPE_BUTTON}</button>
      </div>
    );
  };
}

export default SearchType;
