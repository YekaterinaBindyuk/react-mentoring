import React from "react";
import App from "../components/App";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/reducers/configureStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieView from "../components/movie/MovieView";
import Page404 from "../components/Page404";
import AppLogo from "../components/AppLogo";
import About from "../components/About";
import { hot } from 'react-hot-loader';

import {
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";
import "../style/index.css";

library.add(
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
);

const Root = () => {

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppLogo />
          {/* <Switch>
            <Route path="/" exact component={App} />
            <Route path="/search" exact component={App} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={MovieView} />
            <Route path="*" component={Page404} />
          </Switch> */}
        </PersistGate>
      </Provider>
  );
}

export default hot(module)(Root);
