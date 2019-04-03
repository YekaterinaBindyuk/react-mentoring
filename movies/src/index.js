import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers/reducer';
import thunk from 'redux-thunk';

import {
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";
import "./style/index.css";

library.add(
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
);
const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
