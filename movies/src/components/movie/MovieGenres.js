import React from 'react';

const MovieGenres = (props) => {
    const {genres} = props;

    return (
        <div className="genres">
        {genres.join(', ')} 
        </div>
    )
}

export default MovieGenres;