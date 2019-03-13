import React from 'react';
import MoviesListItem from './movies-list-item/MoviesListItem';
import MoviesCount from './MoviesCount';
import Sorting from '../sorting/Sorting';
import {NO_FILMS_WARNING} from '../../environment/const';
class MoviesList extends React.Component {
    render = () => {
        const moviesList = [{
            id: 1, title: 'Star Wars: The Last Jedi', releaseDate: '10.09.1994', genres: ['Crime drama', 'Fiction'], url: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
            description: 'Rey develops her newly discovered abilities with the guidance of Luke Skywalker.'
        },
        {
            id: 2, title: 'Black Panther', releaseDate: '09.12.1995', genres: ['Comedy', 'Crime'], url: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
            description: 'Four interlocking tales that take place in a fading hotel on New Years Eve'
        }];
        return (
             <main>
            {moviesList.length ?
                <div>       
                <MoviesCount count={moviesList.length}/>
                <Sorting/>
                {moviesList.map((item, key) => (<MoviesListItem key={key} id={item.id} title={item.title}
                    releaseDate={item.releaseDate} description={item.description} url={item.url}/>))}           
                </div>
                :<div>{NO_FILMS_WARNING}</div>
                }
            </main>
            
        )
    }
}

export default MoviesList;