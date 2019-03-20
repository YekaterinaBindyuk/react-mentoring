import React from "react";
import SearchResultsCount from "./SearchResultsCount";
import MoviesList from "../movies-list/MoviesList";
import Sorting from "../sorting/Sorting";
import { NO_FILMS_WARNING } from "../../environment/const";
import "../../style/moviesList.css";

class SearchResults extends React.Component {
  render = () => {
    const moviesList = [
      {
        id: 1,
        title: "Star Wars: The Last Jedi",
        releaseDate: "10.09.1994",
        genres: ["Crime drama", "Fiction"],
        "rating": "5",
        url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        description:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker."
      },
      {
        id: 2,
        title: "Black Panther",
        releaseDate: "09.12.1995",
        genres: ["Comedy", "Crime"],
        "rating": "5",
        url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description:
          "Four interlocking tales that take place in a fading hotel on New Years Eve"
      },
      {
        id: 3,
        title: "Star Wars: The Last Jedi",
        releaseDate: "10.09.1994",
        "rating": "5",
        genres: ["Crime drama", "Fiction"],
        url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        description:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker."
      },
      {
        id: 4,
        title: "Black Panther",
        releaseDate: "09.12.1995",
        "rating": "5",
        genres: ["Comedy", "Crime"],
        url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description:
          "Four interlocking tales that take place in a fading hotel on New Years Eve"
      },
      {
        id: 5,
        title: "Star Wars: The Last Jedi",
        releaseDate: "10.09.1994",
        "rating": "5",
        genres: ["Crime drama", "Fiction"],
        url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        description:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker."
      },
      {
        id: 6,
        title: "Black Panther",
        releaseDate: "09.12.1995",
        "rating": "5",
        genres: ["Comedy", "Crime"],
        url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description:
          "Four interlocking tales that take place in a fading hotel on New Years Eve"
      },
      {
        id: 7,
        title: "Star Wars: The Last Jedi",
        releaseDate: "10.09.1994",
        genres: ["Crime drama", "Fiction"],
        "rating": "5",
        url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        description:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker."
      },
      {
        id: 8,
        title: "Black Panther",
        releaseDate: "09.12.1995",
        genres: ["Comedy", "Crime"],
        "rating": "5",
        url: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        description:
          "Four interlocking tales that take place in a fading hotel on New Years Eve"
      }
    ];
    return (
      <main>
        {moviesList.length ? (
          <div>
            <div className="search-results-info">
              <SearchResultsCount count={moviesList.length} />
              <Sorting />
            </div>
            <MoviesList moviesList={moviesList} />
          </div>
        ) : (
          <div>{NO_FILMS_WARNING}</div>
        )}
      </main>
    );
  };
}

export default SearchResults;
