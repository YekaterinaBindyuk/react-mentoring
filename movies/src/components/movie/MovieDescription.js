import React from 'react';

const MovieDescription = (props) => {
    const { description } = props;
    return (
        <div>{description}</div>
    )
}

export default MovieDescription;