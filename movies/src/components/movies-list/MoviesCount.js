import React from 'react';

const MoviesCount = (props) => {
    const {count} = props;
    return(
        <div>({count})</div>
    )
}

export default MoviesCount;