import React from "react";
import {
  SORTING_TEXT,
  RATING_TYPE_BUTTON,
  RELEASE_TYPE_BUTTON
} from "../../environment/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="sort">
        {SORTING_TEXT}
        <button
          className="btn btn-dark m-1"
          onClick={this.onSearchByTitleClick}
        >
          <FontAwesomeIcon icon="calendar-alt" className="mr-1" />
          {RELEASE_TYPE_BUTTON}
        </button>
        <button
          className="btn btn-dark"
          onClick={this.onSearchByGenreClick}
        >
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star-half-alt" className="mr-1" />
          {RATING_TYPE_BUTTON}
        </button>
      </div>
    );
  };
}

export default Sorting;
