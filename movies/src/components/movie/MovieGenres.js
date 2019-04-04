import React from 'react';

const MovieGenres = (props) => {
    const {genres} = props;

    return (
        <section>
        {genres && <div className="genres">
        {genres.join(', ')} 
        </div>}
        </section>
    )
}

export default MovieGenres;