import React from 'react';

const MovieGenres = (props) => {
    const {genres} = props;
    return (
        <div>
        {genres.map((genre) => <li>{genre}</li>)} 
        </div>
    )
}

export default MovieGenres;