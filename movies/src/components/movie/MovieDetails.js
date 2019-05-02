import React from "react";

const MovieDetails = props => {
  const { releaseDate, duration } = props;
  const durationToRender = (duration: number, timeUnit: string): string => {return duration + " " + timeUnit};
  return (
    <div>
      <span className="mr-5">Release date: {releaseDate}</span>
      <span className="ml-5 badge badge-pill badge-dark">
        {durationToRender(duration, "min")}
      </span>
    </div>
  );
};

export default MovieDetails;
