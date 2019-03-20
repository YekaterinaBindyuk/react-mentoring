import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faFilm, faCalendarAlt, faStarHalfAlt, faStar, faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons';
import './style/index.css';

library.add(faSearch, faFilm, faCalendarAlt, faStarHalfAlt, faStar, faLongArrowAltLeft);


const rootElement = document.getElementById("root");

ReactDOM.render(<App/>, rootElement);
