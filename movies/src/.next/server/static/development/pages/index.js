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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/AppLogo.js":
/*!*******************************!*\
  !*** ./components/AppLogo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment/const */ "./environment/const.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var AppLogo = function AppLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _environment_const__WEBPACK_IMPORTED_MODULE_1__["MAIN_LOGO"],
    alt: "logo",
    className: "app-logo"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLogo);

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject(), function (props) {
  return props.color;
});
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./components/ErrorBoundary.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment/const */ "./environment/const.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBoundary).call(this, props));
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, _environment_const__WEBPACK_IMPORTED_MODULE_1__["WARNING"]);
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./components/movie/MovieCover.js":
/*!****************************************!*\
  !*** ./components/movie/MovieCover.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\nheight: ", ";\nwidth: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Image = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject(), function (props) {
  return props.size === 'large' ? '500px' : '400px';
}, function (props) {
  return props.size === 'large' ? '400px' : '300px';
});

var MovieCover = function MovieCover(props) {
  var title = props.title,
      url = props.url,
      type = props.type;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: url,
    alt: title,
    size: type
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MovieCover);

/***/ }),

/***/ "./components/movie/MovieGenres.js":
/*!*****************************************!*\
  !*** ./components/movie/MovieGenres.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MovieGenres = function MovieGenres(props) {
  var genres = props.genres;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, genres && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "genres"
  }, genres.join(", ")));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieGenres);

/***/ }),

/***/ "./components/movie/MovieTitle.js":
/*!****************************************!*\
  !*** ./components/movie/MovieTitle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var MovieTitle = function MovieTitle(props) {
  var title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title"
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (MovieTitle);

/***/ }),

/***/ "./components/movies-list/MoviesList.js":
/*!**********************************************!*\
  !*** ./components/movies-list/MoviesList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movies_list_item_MoviesListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-list-item/MoviesListItem */ "./components/movies-list/movies-list-item/MoviesListItem.js");
/* harmony import */ var _style_moviesList_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/moviesList.css */ "./style/moviesList.css");
/* harmony import */ var _style_moviesList_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_moviesList_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MoviesList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MoviesList, _React$Component);

  function MoviesList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MoviesList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoviesList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var moviesList = _this.props.moviesList;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "movies-list"
      }, moviesList.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movies_list_item_MoviesListItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MoviesList);

/***/ }),

/***/ "./components/movies-list/movies-list-item/MoviesListItem.js":
/*!*******************************************************************!*\
  !*** ./components/movies-list/movies-list-item/MoviesListItem.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _movie_MovieCover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movie/MovieCover */ "./components/movie/MovieCover.js");
/* harmony import */ var _movie_MovieTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../movie/MovieTitle */ "./components/movie/MovieTitle.js");
/* harmony import */ var _movie_MovieGenres__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movie/MovieGenres */ "./components/movie/MovieGenres.js");
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environment/const */ "./environment/const.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var MovieListItem =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "movies-list-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        as: "/movie/".concat(id),
        href: "/movieView?id=".concat(id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/movieView?id=".concat(id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movie_MovieCover__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: title,
        type: _environment_const__WEBPACK_IMPORTED_MODULE_4__["MOVIE_LIST_ITEM_COVER"],
        url: url
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movie_MovieTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: title
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movie_MovieGenres__WEBPACK_IMPORTED_MODULE_3__["default"], {
        genres: genres
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, releaseDate));
    });

    return _this;
  }

  return MovieListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MovieListItem);

/***/ }),

/***/ "./components/search-results/SearchResults.js":
/*!****************************************************!*\
  !*** ./components/search-results/SearchResults.js ***!
  \****************************************************/
/*! exports provided: SearchResults, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchResultsCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResultsCount */ "./components/search-results/SearchResultsCount.js");
/* harmony import */ var _movies_list_MoviesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies-list/MoviesList */ "./components/movies-list/MoviesList.js");
/* harmony import */ var _sorting_Sorting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sorting/Sorting */ "./components/sorting/Sorting.js");
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _selectors_SortingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../selectors/SortingSelector */ "./selectors/SortingSelector.js");
/* harmony import */ var _style_moviesList_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../style/moviesList.css */ "./style/moviesList.css");
/* harmony import */ var _style_moviesList_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_moviesList_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var SearchResults =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResults, _React$Component);

  function SearchResults() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchResults);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchResults)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var moviesList = _this.props.moviesList;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, moviesList.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-results-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchResultsCount__WEBPACK_IMPORTED_MODULE_1__["default"], {
        count: moviesList.length
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sorting_Sorting__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_movies_list_MoviesList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        moviesList: moviesList
      })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _environment_const__WEBPACK_IMPORTED_MODULE_4__["NO_FILMS_WARNING"]));
    });

    return _this;
  }

  return SearchResults;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    moviesList: Object(_selectors_SortingSelector__WEBPACK_IMPORTED_MODULE_6__["sortMovies"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, null)(SearchResults));

/***/ }),

/***/ "./components/search-results/SearchResultsCount.js":
/*!*********************************************************!*\
  !*** ./components/search-results/SearchResultsCount.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);




var SearchResultsCount = function SearchResultsCount(props) {
  var count = props.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "movies-count"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "badge badge-dark p-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "film",
    className: "mlr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_COUNT_TEXT"], " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-light"
  }, count))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResultsCount);

/***/ }),

/***/ "./components/search/Search.js":
/*!*************************************!*\
  !*** ./components/search/Search.js ***!
  \*************************************/
/*! exports provided: Search, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");
/* harmony import */ var _SearchType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchType */ "./components/search/SearchType.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././Button */ "./components/Button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchClick", function () {
      var _this$state = _this.state,
          searchInput = _this$state.searchInput,
          searchType = _this$state.searchType;
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: "/index",
        query: {
          searchInput: searchInput,
          searchType: searchType
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchByTitleClick", function () {
      _this.setState({
        searchType: "title"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchByGenreClick", function () {
      _this.setState({
        searchType: "genre"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchValueChange", function (e) {
      _this.setState({
        searchInput: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "search-input",
        className: "search-input",
        onChange: _this.onSearchValueChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: 'green',
        id: "search-btn",
        className: "btn btn-success m-2 ml-3",
        onClick: _this.onSearchClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: "search",
        className: "mr-1"
      }), _environment_const__WEBPACK_IMPORTED_MODULE_1__["SEARCH_BUTTON"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-type"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchType__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/search/SearchType.js":
/*!*****************************************!*\
  !*** ./components/search/SearchType.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .././Button */ "./components/Button.js");
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var SearchType =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchType, _React$Component);

  function SearchType() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchType);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchType)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var _this$props = _this.props,
          onSearchByTitleClick = _this$props.onSearchByTitleClick,
          onSearchByGenreClick = _this$props.onSearchByGenreClick;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _environment_const__WEBPACK_IMPORTED_MODULE_2__["SEARCH_TEXT"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: '#373E6E',
        id: "search-by-title-btn",
        onClick: onSearchByTitleClick,
        className: "btn btn-dark m-1"
      }, _environment_const__WEBPACK_IMPORTED_MODULE_2__["TITLE_TYPE_BUTTON"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        color: '#373E6E',
        id: "search-by-genre-btn",
        onClick: onSearchByGenreClick,
        className: "btn btn-dark"
      }, _environment_const__WEBPACK_IMPORTED_MODULE_2__["GENRE_TYPE_BUTTON"]));
    });

    return _this;
  }

  return SearchType;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SearchType);

/***/ }),

/***/ "./components/sorting/Sorting.js":
/*!***************************************!*\
  !*** ./components/sorting/Sorting.js ***!
  \***************************************/
/*! exports provided: Sorting, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorting", function() { return Sorting; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_action_creators_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/action-creators/actionCreators */ "./redux/action-creators/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .././Button */ "./components/Button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Sorting =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sorting, _React$Component);

  function Sorting(props) {
    var _this;

    _classCallCheck(this, Sorting);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sorting).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidUpdate", function (prevProps, prevState) {
      var sortMovies = _this.props.sortMovies;
      var sortingType = _this.state.sortingType;

      if (prevState.sortingType !== sortingType) {
        sortMovies(sortingType);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSortByReleaseClick", function (e) {
      _this.setState({
        sortingType: "release_date"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSortByRatingClick", function (e) {
      _this.setState({
        sortingType: "vote_average"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sort"
      }, _environment_const__WEBPACK_IMPORTED_MODULE_1__["SORTING_TEXT"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: '#373E6E',
        id: "sort-by-release-btn",
        className: "btn btn-dark m-1",
        onClick: _this.onSortByReleaseClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: "calendar-alt",
        className: "mr-1"
      }), _environment_const__WEBPACK_IMPORTED_MODULE_1__["RELEASE_TYPE_BUTTON"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: '#373E6E',
        id: "sort-by-rating-btn",
        className: "btn btn-dark",
        onClick: _this.onSortByRatingClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: "star"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: "star"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: "star-half-alt",
        className: "mr-1"
      }), _environment_const__WEBPACK_IMPORTED_MODULE_1__["RATING_TYPE_BUTTON"]));
    });

    _this.state = {
      sortingType: "release_date"
    };
    return _this;
  }

  return Sorting;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var mapDispatchToProps = {
  sortMovies: _redux_action_creators_actionCreators__WEBPACK_IMPORTED_MODULE_3__["default"].sortMovies
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(Sorting));

/***/ }),

/***/ "./environment/const.js":
/*!******************************!*\
  !*** ./environment/const.js ***!
  \******************************/
/*! exports provided: BASE_IMG_CLASSNAME, MOVIE_LIST_ITEM_COVER, MOVIE_COVER, MAIN_LOGO, SEARCH_BUTTON, TITLE_TYPE_BUTTON, GENRE_TYPE_BUTTON, WARNING, RATING_TYPE_BUTTON, RELEASE_TYPE_BUTTON, SORTING_TEXT, SEARCH_TEXT, NO_FILMS_WARNING, MOVIES_COUNT_TEXT, RECOMMENDED_MOVIES, MAIN_PAGE, REST_URL, MOVIES_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_IMG_CLASSNAME", function() { return BASE_IMG_CLASSNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_LIST_ITEM_COVER", function() { return MOVIE_LIST_ITEM_COVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_COVER", function() { return MOVIE_COVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_LOGO", function() { return MAIN_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_BUTTON", function() { return SEARCH_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_TYPE_BUTTON", function() { return TITLE_TYPE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRE_TYPE_BUTTON", function() { return GENRE_TYPE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WARNING", function() { return WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_TYPE_BUTTON", function() { return RATING_TYPE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELEASE_TYPE_BUTTON", function() { return RELEASE_TYPE_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORTING_TEXT", function() { return SORTING_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_TEXT", function() { return SEARCH_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_FILMS_WARNING", function() { return NO_FILMS_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES_COUNT_TEXT", function() { return MOVIES_COUNT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECOMMENDED_MOVIES", function() { return RECOMMENDED_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_PAGE", function() { return MAIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REST_URL", function() { return REST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES_URL", function() { return MOVIES_URL; });
var BASE_IMG_CLASSNAME = 'img';
var MOVIE_LIST_ITEM_COVER = 'small';
var MOVIE_COVER = 'large';
var MAIN_LOGO = '/static/images/logo.png';
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-polyfill */ "babel-polyfill");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_search_results_SearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/search-results/SearchResults */ "./components/search-results/SearchResults.js");
/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ErrorBoundary */ "./components/ErrorBoundary.js");
/* harmony import */ var _components_search_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/search/Search */ "./components/search/Search.js");
/* harmony import */ var _redux_action_creators_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/action-creators/actionCreators */ "./redux/action-creators/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AppLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppLogo */ "./components/AppLogo.js");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../style/index.css */ "./style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppLogo__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search_Search__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search_results_SearchResults__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          searchMovies = _this$props.searchMovies,
          searchInput = _this$props.searchInput,
          searchType = _this$props.searchType;

      if (searchInput && searchType) {
        searchMovies(searchInput, searchType);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          searchMovies = _this$props2.searchMovies,
          searchInput = _this$props2.searchInput,
          searchType = _this$props2.searchType;

      if (prevProps.searchInput !== searchInput || prevProps.searchType !== searchType) {
        if (searchInput && searchType) {
          searchMovies(searchInput, searchType);
        }
      }
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(context) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", context.query);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var mapDispatchToProps = {
  searchMovies: _redux_action_creators_actionCreators__WEBPACK_IMPORTED_MODULE_5__["default"].searchMovies
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(Index));

/***/ }),

/***/ "./redux/action-creators/actionCreators.js":
/*!*************************************************!*\
  !*** ./redux/action-creators/actionCreators.js ***!
  \*************************************************/
/*! exports provided: getMovieList, getMovieListSuccess, getMovie, getMovieSuccess, getRecommendedMovies, getRecommendedMoviesSuccess, sortMoviesSuccess, sortMovies, searchMovies, searchMoviesSuccess, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieList", function() { return getMovieList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieListSuccess", function() { return getMovieListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovie", function() { return getMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieSuccess", function() { return getMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendedMovies", function() { return getRecommendedMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecommendedMoviesSuccess", function() { return getRecommendedMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMoviesSuccess", function() { return sortMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMovies", function() { return sortMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMovies", function() { return searchMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchMoviesSuccess", function() { return searchMoviesSuccess; });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./redux/services/services.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions */ "./redux/actions/actions.js");


function getMovieList() {
  return function (dispatch) {
    return _services_services__WEBPACK_IMPORTED_MODULE_0__["default"].getMovies().then(function (res) {
      dispatch(getMovieListSuccess(res.data));
    });
  };
}
function getMovieListSuccess(movies) {
  return {
    type: _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE_LIST_SUCCESS"],
    movies: movies
  };
}
function getMovie(id) {
  return function (dispatch) {
    return _services_services__WEBPACK_IMPORTED_MODULE_0__["default"].getMovie(id).then(function (res) {
      dispatch(getMovieSuccess(res));
    });
  };
}
function getMovieSuccess(movie) {
  return {
    type: _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE_SUCCESS"],
    movie: movie
  };
}
function getRecommendedMovies(genres) {
  return function (dispatch) {
    return _services_services__WEBPACK_IMPORTED_MODULE_0__["default"].getRecommendedMovies(genres).then(function (res) {
      dispatch(getRecommendedMoviesSuccess(res.data));
    });
  };
}
function getRecommendedMoviesSuccess(movies) {
  return {
    type: _actions_actions__WEBPACK_IMPORTED_MODULE_1__["GET_RECOMMENDED_MOVIES_SUCCESS"],
    movies: movies
  };
}
function sortMoviesSuccess(sortBy) {
  return {
    type: _actions_actions__WEBPACK_IMPORTED_MODULE_1__["SORT_MOVIES_SUCCESS"],
    sortingType: sortBy
  };
}
function sortMovies(sortBy) {
  return function (dispatch) {
    return dispatch(sortMoviesSuccess(sortBy));
  };
}
function searchMovies(searchValue, searchBy) {
  return function (dispatch) {
    return _services_services__WEBPACK_IMPORTED_MODULE_0__["default"].searchMovies(searchValue, searchBy).then(function (res) {
      dispatch(searchMoviesSuccess(res.data));
    });
  };
}
function searchMoviesSuccess(movies) {
  return {
    type: _actions_actions__WEBPACK_IMPORTED_MODULE_1__["SEARCH_MOVIES_SUCCESS"],
    movies: movies
  };
}
/* harmony default export */ __webpack_exports__["default"] = ({
  getMovieList: getMovieList,
  getMovie: getMovie,
  getRecommendedMovies: getRecommendedMovies,
  sortMovies: sortMovies,
  searchMovies: searchMovies
});

/***/ }),

/***/ "./redux/actions/actions.js":
/*!**********************************!*\
  !*** ./redux/actions/actions.js ***!
  \**********************************/
/*! exports provided: GET_MOVIE_LIST, GET_MOVIE_LIST_SUCCESS, GET_MOVIE_SUCCESS, GET_RECOMMENDED_MOVIES_SUCCESS, SORT_MOVIES_SUCCESS, SORT_MOVIES, SEARCH_MOVIES_SUCCESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_LIST", function() { return GET_MOVIE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_LIST_SUCCESS", function() { return GET_MOVIE_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_SUCCESS", function() { return GET_MOVIE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECOMMENDED_MOVIES_SUCCESS", function() { return GET_RECOMMENDED_MOVIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_MOVIES_SUCCESS", function() { return SORT_MOVIES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_MOVIES", function() { return SORT_MOVIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_MOVIES_SUCCESS", function() { return SEARCH_MOVIES_SUCCESS; });
var GET_MOVIE_LIST = 'GET_MOVIE_LIST';
var GET_MOVIE_LIST_SUCCESS = 'GET_MOVIE_LIST_SUCCESS';
var GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
var GET_RECOMMENDED_MOVIES_SUCCESS = 'GET_RECOMMENDED_MOVIES_SUCCESS';
var SORT_MOVIES_SUCCESS = 'SORT_MOVIES_SUCCESS';
var SORT_MOVIES = 'SORT_MOVIES';
var SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';

/***/ }),

/***/ "./redux/services/services.js":
/*!************************************!*\
  !*** ./redux/services/services.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environment_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/const */ "./environment/const.js");



var getMovies = function getMovies() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_URL"]).then(function (_ref) {
    var data = _ref.data;
    return data;
  });
};

var getMovie = function getMovie(id) {
  var url = _environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_URL"] + "/" + id;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref2) {
    var data = _ref2.data;
    return data;
  });
};

var getRecommendedMovies = function getRecommendedMovies(genres) {
  var url = _environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_URL"] + "?filter=" + genres.join(",");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref3) {
    var data = _ref3.data;
    return data;
  });
};

var sortMovies = function sortMovies(sortBy) {
  var url = _environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_URL"] + "?sortBy=" + sortBy + "&sortOrder=desc";
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref4) {
    var data = _ref4.data;
    return data;
  });
};

var searchMovies = function searchMovies(searchValue, searchBy) {
  var url = _environment_const__WEBPACK_IMPORTED_MODULE_1__["MOVIES_URL"] + "?search=" + searchValue + "&searchBy=" + searchBy;
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (_ref5) {
    var data = _ref5.data;
    return data;
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getMovies: getMovies,
  getMovie: getMovie,
  getRecommendedMovies: getRecommendedMovies,
  sortMovies: sortMovies,
  searchMovies: searchMovies
});

/***/ }),

/***/ "./selectors/SortingSelector.js":
/*!**************************************!*\
  !*** ./selectors/SortingSelector.js ***!
  \**************************************/
/*! exports provided: sortMovies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMovies", function() { return sortMovies; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "reselect");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



var getMovies = function getMovies(state) {
  return state.movies;
};

var getSortingType = function getSortingType(state) {
  return state.sortingType;
};

var sortByRatingCallback = function sortByRatingCallback(movie1, movie2) {
  if (movie1.title <= movie2.title) {
    return 1;
  } else {
    return -1;
  }
};

var sortByReleaseDateCallback = function sortByReleaseDateCallback(movie1, movie2) {
  if (moment__WEBPACK_IMPORTED_MODULE_1___default()(movie1.vote_count).isSameOrBefore(moment__WEBPACK_IMPORTED_MODULE_1___default()(movie2.vote_count))) {
    return 1;
  } else {
    return -1;
  }
};

var sortMovies = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])([getMovies, getSortingType], function (movies, sortingType) {
  return movies.slice(0, movies.length).sort(sortingType === 'vote_average' ? sortByRatingCallback : sortByReleaseDateCallback);
});

/***/ }),

/***/ "./style/index.css":
/*!*************************!*\
  !*** ./style/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./style/moviesList.css":
/*!******************************!*\
  !*** ./style/moviesList.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MENTORING\movies-repo\ReactMentoringApp\movies\src\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map