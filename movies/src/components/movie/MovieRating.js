import React from "react";

const MovieRating = props => {
  const { rating } = props;
  return <div className="badge badge-pill badge-success">{rating}</div>;
};

export default MovieRating;
