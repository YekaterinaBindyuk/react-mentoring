import React from 'react';

const MovieRating = (props) => {
    const { rating } = props;
    return (
        <div>{rating}</div>
    )
}

export default MovieRating;