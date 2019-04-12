import React from "react";

const MovieDescription = props => {
  const { description } = props;
  return <div className="description">{description}</div>;
};

export default MovieDescription;
