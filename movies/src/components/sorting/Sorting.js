import React from "react";
import {SORTING_TEXT, RATING_TYPE_BUTTON, RELEASE_TYPE_BUTTON} from '../../environment/const';

class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortingType: "release" };
  }

  onSortByReleaseClick = e => {
    this.setState({ sortingType: "release" });
  };
  onSortByRatingClick = e => {
    this.setState({ sortingType: "rating" });
  };
  render = () => {
    return (
      <div> {SORTING_TEXT}
        <button onClick={this.onSearchByTitleClick}>{RELEASE_TYPE_BUTTON}</button>
        <button onClick={this.onSearchByGenreClick}>{RATING_TYPE_BUTTON}</button>
      </div>
    );
  };
}

export default Sorting;
