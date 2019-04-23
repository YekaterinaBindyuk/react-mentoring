module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "GFNa":
/***/ (function(module, exports) {



/***/ }),

/***/ "JPPj":
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./environment/const.js
var BASE_IMG_CLASSNAME = 'img';
var MOVIE_LIST_ITEM_COVER = 'small';
var MOVIE_COVER = 'large';
var MAIN_LOGO = 'http://localhost:8080/src/images/logo.png';
var SEARCH_BUTTON = 'Search';
var TITLE_TYPE_BUTTON = 'title';
var GENRE_TYPE_BUTTON = 'genre';
var WARNING = 'Something went wrong';
var RATING_TYPE_BUTTON = 'rating';
var RELEASE_TYPE_BUTTON = 'release date';
var SORTING_TEXT = 'Sort by: ';
var SEARCH_TEXT = 'Search by: ';
var NO_FILMS_WARNING = 'No films found';
var MOVIES_COUNT_TEXT = ' films found:';
var RECOMMENDED_MOVIES = 'Recommended movies';
var MAIN_PAGE = '/';
var REST_URL = 'https://reactjs-cdp.herokuapp.com/';
var MOVIES_URL = REST_URL + 'movies';
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./components/search-results/SearchResultsCount.js




var SearchResultsCount_SearchResultsCount = function SearchResultsCount(props) {
  var count = props.count;
  return external_react_default.a.createElement("div", {
    className: "movies-count"
  }, external_react_default.a.createElement("div", {
    className: "badge badge-dark p-2"
  }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
    icon: "film",
    className: "mlr-1"
  }), external_react_default.a.createElement("span", null, MOVIES_COUNT_TEXT, " ", external_react_default.a.createElement("span", {
    className: "badge badge-light"
  }, count))));
};

/* harmony default export */ var search_results_SearchResultsCount = (SearchResultsCount_SearchResultsCount);
// CONCATENATED MODULE: ./components/movie/MovieCover.js



var MovieCover_MovieCover = function MovieCover(props) {
  var title = props.title,
      type = props.type,
      url = props.url;
  return external_react_default.a.createElement("img", {
    src: url,
    alt: title,
    className: "".concat(BASE_IMG_CLASSNAME, "_").concat(type)
  });
};

/* harmony default export */ var movie_MovieCover = (MovieCover_MovieCover);
// CONCATENATED MODULE: ./components/movie/MovieTitle.js


var MovieTitle_MovieTitle = function MovieTitle(props) {
  var title = props.title;
  return external_react_default.a.createElement("h3", {
    className: "title"
  }, title);
};

/* harmony default export */ var movie_MovieTitle = (MovieTitle_MovieTitle);
// CONCATENATED MODULE: ./components/movie/MovieGenres.js


var MovieGenres_MovieGenres = function MovieGenres(props) {
  var genres = props.genres;
  return external_react_default.a.createElement("section", null, genres && external_react_default.a.createElement("div", {
    className: "genres"
  }, genres.join(", ")));
};

/* harmony default export */ var movie_MovieGenres = (MovieGenres_MovieGenres);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// CONCATENATED MODULE: ./components/movies-list/movies-list-item/MoviesListItem.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var MoviesListItem_MovieListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MovieListItem, _React$Component);

  function MovieListItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MovieListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MovieListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          title = _this$props.title,
          releaseDate = _this$props.releaseDate,
          genres = _this$props.genres,
          url = _this$props.url;
      return external_react_default.a.createElement("div", {
        className: "movies-list-item"
      }, external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/movie/".concat(id)
      }, external_react_default.a.createElement(movie_MovieCover, {
        title: title,
        type: MOVIE_LIST_ITEM_COVER,
        url: url
      }), external_react_default.a.createElement(movie_MovieTitle, {
        title: title
      })), external_react_default.a.createElement(movie_MovieGenres, {
        genres: genres
      }), external_react_default.a.createElement("div", null, releaseDate));
    });

    return _this;
  }

  return MovieListItem;
}(external_react_default.a.Component);

/* harmony default export */ var MoviesListItem = (MoviesListItem_MovieListItem);
// EXTERNAL MODULE: ./style/moviesList.css
var style_moviesList = __webpack_require__("uhJL");

// CONCATENATED MODULE: ./components/movies-list/MoviesList.js
function MoviesList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MoviesList_typeof = function _typeof(obj) { return typeof obj; }; } else { MoviesList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MoviesList_typeof(obj); }

function MoviesList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MoviesList_possibleConstructorReturn(self, call) { if (call && (MoviesList_typeof(call) === "object" || typeof call === "function")) { return call; } return MoviesList_assertThisInitialized(self); }

function MoviesList_getPrototypeOf(o) { MoviesList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MoviesList_getPrototypeOf(o); }

function MoviesList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MoviesList_setPrototypeOf(subClass, superClass); }

function MoviesList_setPrototypeOf(o, p) { MoviesList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MoviesList_setPrototypeOf(o, p); }

function MoviesList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MoviesList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MoviesList_MoviesList =
/*#__PURE__*/
function (_React$Component) {
  MoviesList_inherits(MoviesList, _React$Component);

  function MoviesList() {
    var _getPrototypeOf2;

    var _this;

    MoviesList_classCallCheck(this, MoviesList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MoviesList_possibleConstructorReturn(this, (_getPrototypeOf2 = MoviesList_getPrototypeOf(MoviesList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MoviesList_defineProperty(MoviesList_assertThisInitialized(MoviesList_assertThisInitialized(_this)), "render", function () {
      var moviesList = _this.props.moviesList;
      return external_react_default.a.createElement("div", {
        className: "movies-list"
      }, moviesList.map(function (item, key) {
        return external_react_default.a.createElement(MoviesListItem, {
          key: key,
          id: item.id,
          title: item.title,
          genres: item.genres,
          releaseDate: item.release_date,
          description: item.overview,
          rating: item.vote_average,
          url: item.poster_path
        });
      }));
    });

    return _this;
  }

  return MoviesList;
}(external_react_default.a.Component);

/* harmony default export */ var movies_list_MoviesList = (MoviesList_MoviesList);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./redux/services/services.js



var services_getMovies = function getMovies() {
  return external_axios_default.a.get(MOVIES_URL).then(function (_ref) {
    var data = _ref.data;
    return data;
  });
};

var services_getMovie = function getMovie(id) {
  var url = MOVIES_URL + "/" + id;
  return external_axios_default.a.get(url).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  });
};

var services_getRecommendedMovies = function getRecommendedMovies(genres) {
  var url = MOVIES_URL + "?filter=" + genres.join(",");
  return external_axios_default.a.get(url).then(function (_ref3) {
    var data = _ref3.data;
    return data;
  });
};

var services_sortMovies = function sortMovies(sortBy) {
  var url = MOVIES_URL + "?sortBy=" + sortBy + "&sortOrder=desc";
  return external_axios_default.a.get(url).then(function (_ref4) {
    var data = _ref4.data;
    return data;
  });
};

var services_searchMovies = function searchMovies(searchValue, searchBy) {
  var url = MOVIES_URL + "?search=" + searchValue + "&searchBy=" + searchBy;
  return external_axios_default.a.get(url).then(function (_ref5) {
    var data = _ref5.data;
    return data;
  });
};

/* harmony default export */ var services = ({
  getMovies: services_getMovies,
  getMovie: services_getMovie,
  getRecommendedMovies: services_getRecommendedMovies,
  sortMovies: services_sortMovies,
  searchMovies: services_searchMovies
});
// CONCATENATED MODULE: ./redux/actions/actions.js
var GET_MOVIE_LIST = 'GET_MOVIE_LIST';
var GET_MOVIE_LIST_SUCCESS = 'GET_MOVIE_LIST_SUCCESS';
var GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
var GET_RECOMMENDED_MOVIES_SUCCESS = 'GET_RECOMMENDED_MOVIES_SUCCESS';
var SORT_MOVIES_SUCCESS = 'SORT_MOVIES_SUCCESS';
var SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
// CONCATENATED MODULE: ./redux/action-creators/actionCreators.js


function getMovieList() {
  return function (dispatch) {
    return services.getMovies().then(function (res) {
      dispatch(getMovieListSuccess(res.data));
    });
  };
}
function getMovieListSuccess(movies) {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    movies: movies
  };
}
function actionCreators_getMovie(id) {
  return function (dispatch) {
    return services.getMovie(id).then(function (res) {
      dispatch(getMovieSuccess(res));
    });
  };
}
function getMovieSuccess(movie) {
  return {
    type: GET_MOVIE_SUCCESS,
    movie: movie
  };
}
function actionCreators_getRecommendedMovies(genres) {
  return function (dispatch) {
    return services.getRecommendedMovies(genres).then(function (res) {
      dispatch(getRecommendedMoviesSuccess(res.data));
    });
  };
}
function getRecommendedMoviesSuccess(movies) {
  return {
    type: GET_RECOMMENDED_MOVIES_SUCCESS,
    movies: movies
  };
}
function actionCreators_sortMovies(sortBy) {
  return function (dispatch) {
    return services.sortMovies(sortBy).then(function (res) {
      dispatch(sortMoviesSuccess(res.data));
    });
  };
}
function sortMoviesSuccess(movies) {
  return {
    type: SORT_MOVIES_SUCCESS,
    movies: movies
  };
}
function actionCreators_searchMovies(searchValue, searchBy) {
  return function (dispatch) {
    return services.searchMovies(searchValue, searchBy).then(function (res) {
      dispatch(searchMoviesSuccess(res.data));
    });
  };
}
function searchMoviesSuccess(movies) {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    movies: movies
  };
}
/* harmony default export */ var actionCreators = ({
  getMovieList: getMovieList,
  getMovie: actionCreators_getMovie,
  getRecommendedMovies: actionCreators_getRecommendedMovies,
  sortMovies: actionCreators_sortMovies,
  searchMovies: actionCreators_searchMovies
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/sorting/Sorting.js
function Sorting_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sorting_typeof = function _typeof(obj) { return typeof obj; }; } else { Sorting_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sorting_typeof(obj); }

function Sorting_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sorting_possibleConstructorReturn(self, call) { if (call && (Sorting_typeof(call) === "object" || typeof call === "function")) { return call; } return Sorting_assertThisInitialized(self); }

function Sorting_getPrototypeOf(o) { Sorting_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sorting_getPrototypeOf(o); }

function Sorting_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sorting_setPrototypeOf(subClass, superClass); }

function Sorting_setPrototypeOf(o, p) { Sorting_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sorting_setPrototypeOf(o, p); }

function Sorting_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sorting_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Sorting_Sorting =
/*#__PURE__*/
function (_React$Component) {
  Sorting_inherits(Sorting, _React$Component);

  function Sorting(props) {
    var _this;

    Sorting_classCallCheck(this, Sorting);

    _this = Sorting_possibleConstructorReturn(this, Sorting_getPrototypeOf(Sorting).call(this, props));

    Sorting_defineProperty(Sorting_assertThisInitialized(Sorting_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps, prevState) {
      var sortMovies = _this.props.sortMovies;
      var sortingType = _this.state.sortingType;

      if (prevState.sortingType !== sortingType) {
        sortMovies(sortingType);
      }
    });

    Sorting_defineProperty(Sorting_assertThisInitialized(Sorting_assertThisInitialized(_this)), "onSortByReleaseClick", function (e) {
      _this.setState({
        sortingType: "release_date"
      });
    });

    Sorting_defineProperty(Sorting_assertThisInitialized(Sorting_assertThisInitialized(_this)), "onSortByRatingClick", function (e) {
      _this.setState({
        sortingType: "vote_average"
      });
    });

    Sorting_defineProperty(Sorting_assertThisInitialized(Sorting_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "sort"
      }, SORTING_TEXT, external_react_default.a.createElement("button", {
        id: "sort-by-release-btn",
        className: "btn btn-dark m-1",
        onClick: _this.onSortByReleaseClick
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "calendar-alt",
        className: "mr-1"
      }), RELEASE_TYPE_BUTTON), external_react_default.a.createElement("button", {
        id: "sort-by-rating-btn",
        className: "btn btn-dark",
        onClick: _this.onSortByRatingClick
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "star"
      }), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "star"
      }), external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "star-half-alt",
        className: "mr-1"
      }), RATING_TYPE_BUTTON));
    });

    _this.state = {
      sortingType: "release_date"
    };
    return _this;
  }

  return Sorting;
}(external_react_default.a.Component);
var mapDispatchToProps = {
  sortMovies: actionCreators.sortMovies
};
/* harmony default export */ var sorting_Sorting = (Object(external_react_redux_["connect"])(null, mapDispatchToProps)(Sorting_Sorting));
// CONCATENATED MODULE: ./components/search-results/SearchResults.js
function SearchResults_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchResults_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchResults_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchResults_typeof(obj); }

function SearchResults_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchResults_possibleConstructorReturn(self, call) { if (call && (SearchResults_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchResults_assertThisInitialized(self); }

function SearchResults_getPrototypeOf(o) { SearchResults_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchResults_getPrototypeOf(o); }

function SearchResults_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchResults_setPrototypeOf(subClass, superClass); }

function SearchResults_setPrototypeOf(o, p) { SearchResults_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchResults_setPrototypeOf(o, p); }

function SearchResults_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchResults_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SearchResults_SearchResults =
/*#__PURE__*/
function (_React$Component) {
  SearchResults_inherits(SearchResults, _React$Component);

  function SearchResults() {
    var _getPrototypeOf2;

    var _this;

    SearchResults_classCallCheck(this, SearchResults);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SearchResults_possibleConstructorReturn(this, (_getPrototypeOf2 = SearchResults_getPrototypeOf(SearchResults)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SearchResults_defineProperty(SearchResults_assertThisInitialized(SearchResults_assertThisInitialized(_this)), "render", function () {
      var moviesList = _this.props.moviesList;
      return external_react_default.a.createElement("main", null, moviesList.length ? external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "search-results-info"
      }, external_react_default.a.createElement(search_results_SearchResultsCount, {
        count: moviesList.length
      }), external_react_default.a.createElement(sorting_Sorting, null)), external_react_default.a.createElement(movies_list_MoviesList, {
        moviesList: moviesList
      })) : external_react_default.a.createElement("div", null, NO_FILMS_WARNING));
    });

    return _this;
  }

  return SearchResults;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    moviesList: state.movies
  };
};

/* harmony default export */ var search_results_SearchResults = (Object(external_react_redux_["connect"])(mapStateToProps, null)(SearchResults_SearchResults));
// CONCATENATED MODULE: ./components/ErrorBoundary.js
function ErrorBoundary_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ErrorBoundary_typeof = function _typeof(obj) { return typeof obj; }; } else { ErrorBoundary_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ErrorBoundary_typeof(obj); }

function ErrorBoundary_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ErrorBoundary_possibleConstructorReturn(self, call) { if (call && (ErrorBoundary_typeof(call) === "object" || typeof call === "function")) { return call; } return ErrorBoundary_assertThisInitialized(self); }

function ErrorBoundary_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ErrorBoundary_getPrototypeOf(o) { ErrorBoundary_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ErrorBoundary_getPrototypeOf(o); }

function ErrorBoundary_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ErrorBoundary_setPrototypeOf(subClass, superClass); }

function ErrorBoundary_setPrototypeOf(o, p) { ErrorBoundary_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ErrorBoundary_setPrototypeOf(o, p); }




var ErrorBoundary_ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  ErrorBoundary_inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    ErrorBoundary_classCallCheck(this, ErrorBoundary);

    _this = ErrorBoundary_possibleConstructorReturn(this, ErrorBoundary_getPrototypeOf(ErrorBoundary).call(this, props));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      console.log(error, info);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return external_react_default.a.createElement("h1", null, WARNING);
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(external_react_default.a.Component);

/* harmony default export */ var components_ErrorBoundary = (ErrorBoundary_ErrorBoundary);
// CONCATENATED MODULE: ./components/search/SearchType.js
function SearchType_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchType_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchType_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchType_typeof(obj); }

function SearchType_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchType_possibleConstructorReturn(self, call) { if (call && (SearchType_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchType_assertThisInitialized(self); }

function SearchType_getPrototypeOf(o) { SearchType_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchType_getPrototypeOf(o); }

function SearchType_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchType_setPrototypeOf(subClass, superClass); }

function SearchType_setPrototypeOf(o, p) { SearchType_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchType_setPrototypeOf(o, p); }

function SearchType_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchType_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SearchType_SearchType =
/*#__PURE__*/
function (_React$Component) {
  SearchType_inherits(SearchType, _React$Component);

  function SearchType() {
    var _getPrototypeOf2;

    var _this;

    SearchType_classCallCheck(this, SearchType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SearchType_possibleConstructorReturn(this, (_getPrototypeOf2 = SearchType_getPrototypeOf(SearchType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SearchType_defineProperty(SearchType_assertThisInitialized(SearchType_assertThisInitialized(_this)), "render", function () {
      var _this$props = _this.props,
          onSearchByTitleClick = _this$props.onSearchByTitleClick,
          onSearchByGenreClick = _this$props.onSearchByGenreClick;
      return external_react_default.a.createElement("div", null, SEARCH_TEXT, external_react_default.a.createElement("button", {
        id: "search-by-title-btn",
        onClick: onSearchByTitleClick,
        className: "btn btn-dark m-1"
      }, TITLE_TYPE_BUTTON), external_react_default.a.createElement("button", {
        id: "search-by-genre-btn",
        onClick: onSearchByGenreClick,
        className: "btn btn-dark"
      }, GENRE_TYPE_BUTTON));
    });

    return _this;
  }

  return SearchType;
}(external_react_default.a.Component);

/* harmony default export */ var search_SearchType = (SearchType_SearchType);
// CONCATENATED MODULE: ./components/search/Search.js
function Search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Search_Search =
/*#__PURE__*/
function (_React$Component) {
  Search_inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    Search_classCallCheck(this, Search);

    _this = Search_possibleConstructorReturn(this, Search_getPrototypeOf(Search).call(this, props));

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onSearchClick", function () {
      var _this$state = _this.state,
          searchInput = _this$state.searchInput,
          searchType = _this$state.searchType;
      var url = "/search?searchInput=".concat(searchInput, "&searchType=").concat(searchType);

      _this.props.history.push(url);
    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onSearchByTitleClick", function () {
      _this.setState({
        searchType: "title"
      });
    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onSearchByGenreClick", function () {
      _this.setState({
        searchType: "genre"
      });
    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onSearchValueChange", function (e) {
      _this.setState({
        searchInput: e.target.value
      });
    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement("div", {
        className: "search"
      }, external_react_default.a.createElement("input", {
        id: "search-input",
        className: "search-input",
        onChange: _this.onSearchValueChange
      }), external_react_default.a.createElement("button", {
        id: "search-btn",
        className: "btn btn-success m-2 ml-3",
        onClick: _this.onSearchClick
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "search",
        className: "mr-1"
      }), SEARCH_BUTTON), external_react_default.a.createElement("div", {
        className: "search-type"
      }, external_react_default.a.createElement(search_SearchType, {
        onSearchByGenreClick: _this.onSearchByGenreClick,
        onSearchByTitleClick: _this.onSearchByTitleClick
      })));
    });

    _this.state = {
      searchInput: null,
      searchType: "title"
    };
    return _this;
  }

  return Search;
}(external_react_default.a.Component);
/* harmony default export */ var search_Search = (Object(external_react_router_dom_["withRouter"])(Search_Search));
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// CONCATENATED MODULE: ./components/App.js
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    App_classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = App_possibleConstructorReturn(this, (_getPrototypeOf2 = App_getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    App_defineProperty(App_assertThisInitialized(App_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_ErrorBoundary, null, external_react_default.a.createElement(search_Search, null), external_react_default.a.createElement(search_results_SearchResults, null)));
    });

    return _this;
  }

  App_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchMovies = this.props.searchMovies;

      var _queryString$parse = external_query_string_default.a.parse(this.props.location.search),
          searchInput = _queryString$parse.searchInput,
          searchType = _queryString$parse.searchType;

      if (searchInput && searchType) {
        searchMovies(searchInput, searchType);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        var searchMovies = this.props.searchMovies;

        var _queryString$parse2 = external_query_string_default.a.parse(this.props.location.search),
            searchInput = _queryString$parse2.searchInput,
            searchType = _queryString$parse2.searchType;

        if (searchInput && searchType) {
          searchMovies(searchInput, searchType);
        }
      }
    }
  }]);

  return App;
}(external_react_default.a.Component);
var App_mapDispatchToProps = {
  searchMovies: actionCreators.searchMovies
};
/* harmony default export */ var components_App = (Object(external_react_redux_["connect"])(null, App_mapDispatchToProps)(App_App));
// EXTERNAL MODULE: ../node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("Wz0F");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__("JPPj");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__("VNb8");

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__("T8f9");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./redux/reducers/reducer.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initState = {
  movies: [],
  movie: {},
  recommendedMovies: []
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_MOVIE_LIST_SUCCESS:
      return _objectSpread({}, state, {
        movies: action.movies
      });

    case GET_MOVIE_SUCCESS:
      return _objectSpread({}, state, {
        movie: action.movie
      });

    case GET_RECOMMENDED_MOVIES_SUCCESS:
      return _objectSpread({}, state, {
        recommendedMovies: action.movies
      });

    case SORT_MOVIES_SUCCESS:
      return _objectSpread({}, state, {
        movies: action.movies
      });

    case SEARCH_MOVIES_SUCCESS:
      return _objectSpread({}, state, {
        movies: action.movies
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./redux/reducers/configureStore.js


 // defaults to localStorage for web and AsyncStorage for react-native



var persistConfig = {
  key: "root",
  storage: storage_default.a
};
var persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducer);
var store = Object(external_redux_["createStore"])(persistedReducer, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
var persistor = Object(external_redux_persist_["persistStore"])(store);
// CONCATENATED MODULE: ./components/movie/MovieDescription.js


var MovieDescription_MovieDescription = function MovieDescription(props) {
  var description = props.description;
  return external_react_default.a.createElement("div", {
    className: "description"
  }, description);
};

/* harmony default export */ var movie_MovieDescription = (MovieDescription_MovieDescription);
// CONCATENATED MODULE: ./components/movie/MovieDetails.js


var MovieDetails_MovieDetails = function MovieDetails(props) {
  var releaseDate = props.releaseDate,
      duration = props.duration;
  var timeUnit = "min";
  var durationToRender = duration + " " + timeUnit;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("span", {
    className: "mr-5"
  }, "Release date: ", releaseDate), external_react_default.a.createElement("span", {
    className: "ml-5 badge badge-pill badge-dark"
  }, durationToRender));
};

/* harmony default export */ var movie_MovieDetails = (MovieDetails_MovieDetails);
// CONCATENATED MODULE: ./components/movie/MovieRating.js


var MovieRating_MovieRating = function MovieRating(props) {
  var rating = props.rating;
  return external_react_default.a.createElement("div", {
    className: "badge badge-pill badge-success"
  }, rating);
};

/* harmony default export */ var movie_MovieRating = (MovieRating_MovieRating);
// CONCATENATED MODULE: ./components/BackButton.js
function BackButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BackButton_typeof = function _typeof(obj) { return typeof obj; }; } else { BackButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BackButton_typeof(obj); }

function BackButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BackButton_possibleConstructorReturn(self, call) { if (call && (BackButton_typeof(call) === "object" || typeof call === "function")) { return call; } return BackButton_assertThisInitialized(self); }

function BackButton_getPrototypeOf(o) { BackButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BackButton_getPrototypeOf(o); }

function BackButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BackButton_setPrototypeOf(subClass, superClass); }

function BackButton_setPrototypeOf(o, p) { BackButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BackButton_setPrototypeOf(o, p); }

function BackButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BackButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var BackButton_BackButton =
/*#__PURE__*/
function (_React$Component) {
  BackButton_inherits(BackButton, _React$Component);

  function BackButton() {
    var _getPrototypeOf2;

    var _this;

    BackButton_classCallCheck(this, BackButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = BackButton_possibleConstructorReturn(this, (_getPrototypeOf2 = BackButton_getPrototypeOf(BackButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    BackButton_defineProperty(BackButton_assertThisInitialized(BackButton_assertThisInitialized(_this)), "goBack", function () {
      console.log("goBack button clicked");
    });

    BackButton_defineProperty(BackButton_assertThisInitialized(BackButton_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: "/"
      }, external_react_default.a.createElement("button", {
        id: "back-btn",
        onClick: _this.goBack,
        className: "btn btn-dark mb-3 btn-sm"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "long-arrow-alt-left",
        className: "mr-1"
      })));
    });

    return _this;
  }

  return BackButton;
}(external_react_default.a.Component);

/* harmony default export */ var components_BackButton = (BackButton_BackButton);
// EXTERNAL MODULE: ./style/movie.css
var style_movie = __webpack_require__("Yyhn");

// CONCATENATED MODULE: ./components/movie/RecommendedMovies.js
function RecommendedMovies_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { RecommendedMovies_typeof = function _typeof(obj) { return typeof obj; }; } else { RecommendedMovies_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return RecommendedMovies_typeof(obj); }

function RecommendedMovies_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RecommendedMovies_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RecommendedMovies_createClass(Constructor, protoProps, staticProps) { if (protoProps) RecommendedMovies_defineProperties(Constructor.prototype, protoProps); if (staticProps) RecommendedMovies_defineProperties(Constructor, staticProps); return Constructor; }

function RecommendedMovies_possibleConstructorReturn(self, call) { if (call && (RecommendedMovies_typeof(call) === "object" || typeof call === "function")) { return call; } return RecommendedMovies_assertThisInitialized(self); }

function RecommendedMovies_getPrototypeOf(o) { RecommendedMovies_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return RecommendedMovies_getPrototypeOf(o); }

function RecommendedMovies_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) RecommendedMovies_setPrototypeOf(subClass, superClass); }

function RecommendedMovies_setPrototypeOf(o, p) { RecommendedMovies_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return RecommendedMovies_setPrototypeOf(o, p); }

function RecommendedMovies_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function RecommendedMovies_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var RecommendedMovies_RecommendedMovies =
/*#__PURE__*/
function (_React$Component) {
  RecommendedMovies_inherits(RecommendedMovies, _React$Component);

  function RecommendedMovies() {
    var _getPrototypeOf2;

    var _this;

    RecommendedMovies_classCallCheck(this, RecommendedMovies);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = RecommendedMovies_possibleConstructorReturn(this, (_getPrototypeOf2 = RecommendedMovies_getPrototypeOf(RecommendedMovies)).call.apply(_getPrototypeOf2, [this].concat(args)));

    RecommendedMovies_defineProperty(RecommendedMovies_assertThisInitialized(RecommendedMovies_assertThisInitialized(_this)), "render", function () {
      var moviesList = _this.props.moviesList;

      if (moviesList.length) {
        return external_react_default.a.createElement("div", {
          className: "recommended"
        }, RECOMMENDED_MOVIES, external_react_default.a.createElement(movies_list_MoviesList, {
          moviesList: moviesList
        }));
      } else return null;
    });

    return _this;
  }

  RecommendedMovies_createClass(RecommendedMovies, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          getRecommendedMovies = _this$props.getRecommendedMovies,
          genres = _this$props.genres;

      if (genres && this.props.genres !== prevProps.genres) {
        getRecommendedMovies(genres);
      }
    }
  }]);

  return RecommendedMovies;
}(external_react_default.a.Component);
var RecommendedMovies_mapDispatchToProps = {
  getRecommendedMovies: actionCreators.getRecommendedMovies
};

var RecommendedMovies_mapStateToProps = function mapStateToProps(state) {
  return {
    moviesList: state.recommendedMovies
  };
};

/* harmony default export */ var movie_RecommendedMovies = (Object(external_react_redux_["connect"])(RecommendedMovies_mapStateToProps, RecommendedMovies_mapDispatchToProps)(RecommendedMovies_RecommendedMovies));
// CONCATENATED MODULE: ./components/movie/MovieView.js
function MovieView_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MovieView_typeof = function _typeof(obj) { return typeof obj; }; } else { MovieView_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MovieView_typeof(obj); }

function MovieView_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MovieView_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MovieView_createClass(Constructor, protoProps, staticProps) { if (protoProps) MovieView_defineProperties(Constructor.prototype, protoProps); if (staticProps) MovieView_defineProperties(Constructor, staticProps); return Constructor; }

function MovieView_possibleConstructorReturn(self, call) { if (call && (MovieView_typeof(call) === "object" || typeof call === "function")) { return call; } return MovieView_assertThisInitialized(self); }

function MovieView_getPrototypeOf(o) { MovieView_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MovieView_getPrototypeOf(o); }

function MovieView_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MovieView_setPrototypeOf(subClass, superClass); }

function MovieView_setPrototypeOf(o, p) { MovieView_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MovieView_setPrototypeOf(o, p); }

function MovieView_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MovieView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var MovieView_MovieView =
/*#__PURE__*/
function (_React$Component) {
  MovieView_inherits(MovieView, _React$Component);

  function MovieView() {
    var _getPrototypeOf2;

    var _this;

    MovieView_classCallCheck(this, MovieView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MovieView_possibleConstructorReturn(this, (_getPrototypeOf2 = MovieView_getPrototypeOf(MovieView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MovieView_defineProperty(MovieView_assertThisInitialized(MovieView_assertThisInitialized(_this)), "render", function () {
      var _this$props$movie = _this.props.movie,
          title = _this$props$movie.title,
          release_date = _this$props$movie.release_date,
          runtime = _this$props$movie.runtime,
          overview = _this$props$movie.overview,
          genres = _this$props$movie.genres,
          vote_average = _this$props$movie.vote_average,
          poster_path = _this$props$movie.poster_path;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "movie-view"
      }, external_react_default.a.createElement(components_BackButton, null), external_react_default.a.createElement(movie_MovieTitle, {
        title: title
      }), external_react_default.a.createElement("div", {
        className: "movie-details"
      }, external_react_default.a.createElement(movie_MovieCover, {
        title: title,
        type: MOVIE_COVER,
        url: poster_path
      }), external_react_default.a.createElement(movie_MovieGenres, {
        genres: genres
      }), external_react_default.a.createElement(movie_MovieRating, {
        rating: vote_average
      }), external_react_default.a.createElement(movie_MovieDetails, {
        releaseDate: release_date,
        duration: runtime
      })), external_react_default.a.createElement(movie_MovieDescription, {
        description: overview
      })), external_react_default.a.createElement(movie_RecommendedMovies, {
        genres: genres
      }));
    });

    return _this;
  }

  MovieView_createClass(MovieView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var getMovie = this.props.getMovie;
      var id = this.props.match.params.id;
      getMovie(id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        var getMovie = this.props.getMovie;
        var id = this.props.match.params.id;
        getMovie(id);
      }
    }
  }]);

  return MovieView;
}(external_react_default.a.Component);
var MovieView_mapDispatchToProps = {
  getMovie: actionCreators.getMovie
};

var MovieView_mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

/* harmony default export */ var movie_MovieView = (Object(external_react_redux_["connect"])(MovieView_mapStateToProps, MovieView_mapDispatchToProps)(MovieView_MovieView));
// CONCATENATED MODULE: ./components/Page404.js


var Page404_Page404 = function Page404() {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h3", null, "404 page not found"), external_react_default.a.createElement("p", null, "We are sorry but the page you are looking for does not exist."));
};

/* harmony default export */ var components_Page404 = (Page404_Page404);
// CONCATENATED MODULE: ./components/AppLogo.js




var AppLogo_AppLogo = function AppLogo() {
  return external_react_default.a.createElement(external_react_router_dom_["Link"], {
    to: "/about"
  }, external_react_default.a.createElement("img", {
    src: MAIN_LOGO,
    alt: "logo",
    className: "app-logo"
  }));
};

/* harmony default export */ var components_AppLogo = (AppLogo_AppLogo);
// CONCATENATED MODULE: ./components/About.js



var About_About = function About() {
  return external_react_default.a.createElement("main", {
    className: "text-center"
  }, external_react_default.a.createElement("div", null, "This website has been developed for educational purposes. Don't be too judgemental."), external_react_default.a.createElement(components_BackButton, null));
};

/* harmony default export */ var components_About = (About_About);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("GFNa");

// CONCATENATED MODULE: ./pages/index.js















fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faSearch"], free_solid_svg_icons_["faFilm"], free_solid_svg_icons_["faCalendarAlt"], free_solid_svg_icons_["faStarHalfAlt"], free_solid_svg_icons_["faStar"], free_solid_svg_icons_["faLongArrowAltLeft"]);
var rootElement = document.getElementById("root");
external_react_dom_default.a.render(external_react_default.a.createElement(external_react_router_dom_["BrowserRouter"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
  store: store
}, external_react_default.a.createElement(react_["PersistGate"], {
  loading: null,
  persistor: persistor
}, external_react_default.a.createElement(components_AppLogo, null), external_react_default.a.createElement(external_react_router_dom_["Switch"], null, external_react_default.a.createElement(external_react_router_dom_["Route"], {
  path: "/",
  exact: true,
  component: components_App
}), external_react_default.a.createElement(external_react_router_dom_["Route"], {
  path: "/search",
  exact: true,
  component: components_App
}), external_react_default.a.createElement(external_react_router_dom_["Route"], {
  path: "/about",
  component: components_About
}), external_react_default.a.createElement(external_react_router_dom_["Route"], {
  path: "/movie/:id",
  component: movie_MovieView
}), external_react_default.a.createElement(external_react_router_dom_["Route"], {
  path: "*",
  component: components_Page404
}))))), rootElement);

/***/ }),

/***/ "T8f9":
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "VNb8":
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "Wz0F":
/***/ (function(module, exports) {



/***/ }),

/***/ "Yyhn":
/***/ (function(module, exports) {



/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "uhJL":
/***/ (function(module, exports) {



/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });