import React from "react";

const MovieTitle = props => {
  const { title } = props;
  return <h3 className="title">{title}</h3>;
};

export default MovieTitle;
