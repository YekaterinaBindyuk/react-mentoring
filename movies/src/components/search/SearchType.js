import React from "react";
import {GENRE_TYPE_BUTTON, TITLE_TYPE_BUTTON, SEARCH_TEXT} from '../../environment/const';
class SearchType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchType: "title" };
  }

  render = () => {
    const {onSearchByTitleClick, onSearchByGenreClick} = this.props;
    return (
      <div>{SEARCH_TEXT}
        <button onClick={onSearchByTitleClick} className="btn btn-dark m-1">{GENRE_TYPE_BUTTON}</button>
        <button onClick={onSearchByGenreClick} className="btn btn-dark">{TITLE_TYPE_BUTTON}</button>
      </div>
    );
  };
}

export default SearchType;
