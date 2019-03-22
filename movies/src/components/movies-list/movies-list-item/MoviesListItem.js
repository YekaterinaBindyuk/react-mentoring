import React from 'react';
import MovieCover from '../../movie/MovieCover';
import MovieTitle from '../../movie/MovieTitle';
import MovieGenres from '../../movie/MovieGenres';
import { MOVIE_LIST_ITEM_COVER } from '../../../environment/const';

class MovieListItem extends React.Component {
    render = () => {
        const {title, releaseDate, genres, url } = this.props;

        return (
            <div className="movies-list-item">
                <MovieCover title={title} type={MOVIE_LIST_ITEM_COVER} url={url}/>
                <MovieTitle title={title} />
                <MovieGenres genres={genres}/>
                <div>{releaseDate}</div>
            </div>
        )
    }
}

export default MovieListItem;