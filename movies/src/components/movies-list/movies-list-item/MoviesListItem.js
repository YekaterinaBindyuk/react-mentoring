import React from 'react';
import MovieCover from '../../movie/movie-item/MovieCover';
import MovieTitle from '../../movie/movie-item/MovieTitle';
import MovieGenres from '../../movie/movie-item/MovieGenres';
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