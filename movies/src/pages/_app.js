import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/reducers/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.css";


import {
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSearch,
  faFilm,
  faCalendarAlt,
  faStarHalfAlt,
  faStar,
  faLongArrowAltLeft
);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
