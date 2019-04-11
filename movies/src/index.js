import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import reducer from "./redux/reducers/reducer";
//import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/reducers/configureStore";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MovieView from "./components/movie/MovieView";
import Page404 from "./components/Page404";
import AppLogo from "./components/AppLogo";
import About from "./components/About";

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
//const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <AppLogo/>
      <Switch>
      <Route path="/" exact component={App} />
      <Route path="/About" component={About} />
      <Route path="/movie/:id" component={MovieView}/>
      <Route path="*" component={Page404} />
      </Switch>
      </PersistGate>
    </Provider>
  </Router>,
  rootElement
);
