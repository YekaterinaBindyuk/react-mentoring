import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFilm, faCalendarAlt, faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import './style/index.css';

library.add(faSearch, faFilm, faCalendarAlt, faStarHalfAlt, faStar);


const rootElement = document.getElementById("root");

ReactDOM.render(<App/>, rootElement);
