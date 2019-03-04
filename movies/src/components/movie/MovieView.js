import React from 'react';
import MovieTitle from './MovieTitle';
import MovieCover from './MovieCover';
import MovieDescription from './MovieDescription'
import MovieDetails from './MovieDetails';
import MovieGenres from './MovieDetails';

import { MOVIE_COVER } from '../../environment/const';

class MovieView extends React.Component {
    render = () => {
        const { title, releaseDate, duration, description, genres } = this.props;
        return (
            <div>
                <MovieCover title={title} type={MOVIE_COVER} />
                <MovieTitle title={title} />
                <MovieGenres genres={genres} />
                <MovieDetails releaseDate={releaseDate} duration={duration} />
                <MovieDescription description={description} />
            </div>
        )
    }

}

export default MovieView;