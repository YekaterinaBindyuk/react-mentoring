import React from "react";
import MoviesListItem from "./movies-list-item/MoviesListItem";
import "../../style/moviesList.css";

class SearchResults extends React.Component {
  render = () => {
    const {moviesList} = this.props;
    return (
            <div className="movies-list">
              {moviesList.map((item, key) => (
                <MoviesListItem
                  key={key}
                  id={item.id}
                  title={item.title}
                  genres={item.genres}
                  releaseDate={item.releaseDate}
                  description={item.description}
                  rating={item.rating}
                  url={item.url}
                />
              ))}
            </div>
    );
  };
}

export default SearchResults;
