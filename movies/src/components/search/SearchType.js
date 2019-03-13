import React from "react";
import {GENRE_TYPE_BUTTON, TITLE_TYPE_BUTTON} from '../../environment/const';

class SearchType extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchType: "title" };
  }

  render = () => {
    const {onSearchByTitleClick, onSearchByGenreClick} = this.props;
    return (
      <div>
        <button onClick={onSearchByTitleClick}>{GENRE_TYPE_BUTTON}</button>
        <button onClick={onSearchByGenreClick}>{TITLE_TYPE_BUTTON}</button>
      </div>
    );
  };
}

export default SearchType;
