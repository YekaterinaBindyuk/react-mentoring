import React from "react";
import {
  SORTING_TEXT,
  RATING_TYPE_BUTTON,
  RELEASE_TYPE_BUTTON
} from "../../environment/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import actionCreators from "../../redux/action-creators/actionCreators";
import { connect } from "react-redux";
import { createSelector } from 'reselect';
import Button from ".././Button";

const getMovies = movies => movies;

const sortByRating = createSelector(
  getMovies,
  (movies, sortingType) => (console.log('calculate'), movies.sort())
);

const sortByReleaseDate = createSelector(
  getMovies,
  (movies, sortingType) => (console.log('calculate'), movies.sort())
);

export class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortingType: "release_date" };
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { sortMovies } = this.props;
    const { sortingType } = this.state;
    if (prevState.sortingType !== sortingType) {
      sortMovies(sortingType);
    }
  };

  onSortByReleaseClick = e => {
    this.setState({ sortingType: "release_date" });
  };

  onSortByRatingClick = e => {
    this.setState({ sortingType: "vote_average" });
  };

  render = () => {
    return (
      <div className="sort">
        {SORTING_TEXT}
        <Button color={'#373E6E'}
          id="sort-by-release-btn"
          className="btn btn-dark m-1"
          onClick={this.onSortByReleaseClick}
        >
          <FontAwesomeIcon icon="calendar-alt" className="mr-1" />
          {RELEASE_TYPE_BUTTON}
        </Button>
        <Button color={'#373E6E'}
          id="sort-by-rating-btn"
          className="btn btn-dark"
          onClick={this.onSortByRatingClick}
        >
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star-half-alt" className="mr-1" />
          {RATING_TYPE_BUTTON}
        </Button>
      </div>
    );
  };
}

const mapDispatchToProps = {
  sortMovies: actionCreators.sortMovies
};

export default connect(
  null,
  mapDispatchToProps
)(Sorting);
