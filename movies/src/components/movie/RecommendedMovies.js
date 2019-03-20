import React from "react";
import MoviesList from "../movies-list/MoviesList";
import { RECOMMENDED_MOVIES } from "../../environment/const";
class RecommendedMovies extends React.Component {
  
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
        title: "Star Wars: The Last Jedi",
        releaseDate: "10.09.1994",
        "rating": "5",
        genres: ["Crime drama", "Fiction"],
        url: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        description:
          "Rey develops her newly discovered abilities with the guidance of Luke Skywalker."
      }];
  
    if(moviesList.length){
      return (
        <div className="recommended">
          {RECOMMENDED_MOVIES}
          <MoviesList moviesList={moviesList}/>
        </div>
      );
    } else return null;
    
  };
}

export default RecommendedMovies;
