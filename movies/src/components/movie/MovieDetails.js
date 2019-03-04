import React from 'react';

const MovieDetails = (props) => {
    const { releaseDate, duration } = props;
    const timeUnit = 'min';
    const durationToRender = duration +" " + timeUnit;
    return (
        <div>{releaseDate}{` `}{durationToRender} </div>
    )
}

export default MovieDetails;