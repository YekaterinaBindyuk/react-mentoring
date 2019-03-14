import React from 'react';
import MovieCover from '../../movie/MovieCover';
import MovieTitle from '../../movie/MovieTitle';
import MovieRating from '../../movie/MovieRating';
import { MOVIE_LIST_ITEM_COVER } from '../../../environment/const';

class MovieListItem extends React.Component {
    render = () => {
        const {title, releaseDate, rating, url } = this.props;

        return (
            <div className="movies-list-item">
                <MovieCover title={title} type={MOVIE_LIST_ITEM_COVER} url={url}/>
                <MovieTitle title={title} />
                <MovieRating rating={rating}/>
                <div>{releaseDate}</div>
            </div>
        )
    }
}

export default MovieListItem;