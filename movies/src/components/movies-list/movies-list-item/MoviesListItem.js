import React from "react";
import MovieCover from "../../movie/MovieCover";
import MovieTitle from "../../movie/MovieTitle";
import MovieGenres from "../../movie/MovieGenres";
import { MOVIE_LIST_ITEM_COVER } from "../../../environment/const";
import { Link } from "react-router-dom";

class MovieListItem extends React.Component {
  render = () => {
    const {id, title, releaseDate, genres, url } = this.props;

    return (
      <div className="movies-list-item">
        <Link to = {`/movie/${id}`}>
          <MovieCover title={title} type={MOVIE_LIST_ITEM_COVER} url={url} />
          <MovieTitle title={title} />
        </Link>
        <MovieGenres genres={genres} />
        <div>{releaseDate}</div>
      </div>
    );
  };
}

export default MovieListItem;
