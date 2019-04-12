import React from "react";
import MoviesListItem from "./movies-list-item/MoviesListItem";
import "../../style/moviesList.css";

class SearchResults extends React.Component {
  render = () => {
    const { moviesList } = this.props;
    return (
      <div className="movies-list">
        {moviesList.map((item, key) => (
          <MoviesListItem
            key={key}
            id={item.id}
            title={item.title}
            genres={item.genres}
            releaseDate={item.release_date}
            description={item.overview}
            rating={item.vote_average}
            url={item.poster_path}
          />
        ))}
      </div>
    );
  };
}

export default SearchResults;
