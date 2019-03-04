import React from 'react';
import MovieCover from '../../movie/MovieCover';
import MovieTitle from '../../movie/MovieTitle';
import MovieDescription from '../../movie/MovieDescription';
import { MOVIE_LIST_ITEM_COVER } from '../../../environment/const';

class MovieListItem extends React.Component {
    render = () => {
        const { title, releaseDate, description, url } = this.props;

        return (
            <div>
                <MovieCover title={title} type={MOVIE_LIST_ITEM_COVER} url={url}/>
                <MovieTitle title={title} />
                <div>{releaseDate}</div>
                <MovieDescription description={description} />
            </div>
        )
    }
}

export default MovieListItem;