module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/bee/bee.tsx":
/*!********************************!*\
  !*** ./components/bee/bee.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/context */ "./context/context.tsx");
/* harmony import */ var graph_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graph/graphql */ "./graph/graphql.tsx");
/* harmony import */ var _install_install__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./install/install */ "./components/bee/install/install.tsx");
/* harmony import */ var types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types/types */ "./types/types.ts");
/* harmony import */ var components_class_loading_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/class/loading/loading */ "./components/class/loading/loading.tsx");
/* harmony import */ var components_class_link_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/class/link/link */ "./components/class/link/link.tsx");
/* harmony import */ var components_class_container_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/class/container/container */ "./components/class/container/container.tsx");
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/bee/bee.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const BeePage = ({
  namespace
}) => {
  const {
    current,
    setCurrent,
    setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_context__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    0: bee,
    1: setBee
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(current);
  const {
    author,
    name
  } = namespace;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTitle(__jsx(components_class_link_link__WEBPACK_IMPORTED_MODULE_6__["NamespaceLink"], {
      namespace: namespace,
      bee: current,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }
    }));
  }, [current]);
  const qVars = {
    token: "fake token",
    author,
    name
  };
  return __jsx(components_class_container_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, !current ? __jsx(graph_graphql__WEBPACK_IMPORTED_MODULE_2__["GetFullBeeComponent"], {
    variables: qVars,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, res => {
    var _res$data;

    if (res.error) return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 35
      }
    }, "error");
    if (res.loading) return __jsx(components_class_loading_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingBox"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 37
      }
    });
    const full = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.GetFullBee;
    return __jsx(Content, {
      Bee: full.Bee,
      Details: full.Details,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 20
      }
    });
  }) : __jsx(graph_graphql__WEBPACK_IMPORTED_MODULE_2__["GetBeeDetailsComponent"], {
    variables: qVars,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, res => {
    var _res$data2;

    if (res.error) return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 35
      }
    }, "error");
    if (res.loading) return __jsx(components_class_loading_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingBox"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 37
      }
    });
    if (!res.data) return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 35
      }
    }, "data undefined");
    const full = {
      Bee: current,
      Details: (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.GetBeeDetails
    };
    return __jsx(Content, {
      Bee: full.Bee,
      Details: full.Details,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 20
      }
    });
  }));
};

const Content = ({
  Bee,
  Details
}) => {
  return __jsx("div", {
    className: "bee",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, Bee.Description), __jsx(_install_install__WEBPACK_IMPORTED_MODULE_3__["default"], {
    namespace: new types_types__WEBPACK_IMPORTED_MODULE_4__["Namespace"](Bee.Author, Bee.Name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, Bee.License));
};

/* harmony default export */ __webpack_exports__["default"] = (BeePage);

/***/ }),

/***/ "./components/bee/install/install.scss":
/*!*********************************************!*\
  !*** ./components/bee/install/install.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer",
	"install": "install",
	"installButton": "installButton",
	"installDone": "installDone",
	"copied": "copied",
	"copy": "copy"
};

/***/ }),

/***/ "./components/bee/install/install.tsx":
/*!********************************************!*\
  !*** ./components/bee/install/install.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "react-syntax-highlighter/dist/cjs/styles/hljs");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ "react-copy-to-clipboard");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _install_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./install.scss */ "./components/bee/install/install.scss");
/* harmony import */ var _install_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_install_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/bee/install/install.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (({
  namespace
}) => {
  const code = `$> hive i ${namespace.getString()}`;
  const {
    0: done,
    1: setDone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let id;
    if (done) id = setTimeout(() => setDone(false), 3000);
    return () => clearTimeout(id);
  }, [done]);
  return __jsx("div", {
    className: _install_scss__WEBPACK_IMPORTED_MODULE_4___default.a.install,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default.a, {
    text: code,
    onCopy: () => setDone(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: done ? _install_scss__WEBPACK_IMPORTED_MODULE_4___default.a.installDone : _install_scss__WEBPACK_IMPORTED_MODULE_4___default.a.installButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__["Prism"], {
    language: "terminal",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__["solarizedDark"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, code))), done ? __jsx("p", {
    className: _install_scss__WEBPACK_IMPORTED_MODULE_4___default.a.copied,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "Copied!") : null);
});

/***/ }),

/***/ "./components/class/container/container.scss":
/*!***************************************************!*\
  !*** ./components/class/container/container.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container",
	"grid": "grid",
	"relaxed": "relaxed",
	"very": "very",
	"text": "text",
	"fluid": "fluid",
	"justified": "justified"
};

/***/ }),

/***/ "./components/class/container/container.tsx":
/*!**************************************************!*\
  !*** ./components/class/container/container.tsx ***!
  \**************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.scss */ "./components/class/container/container.scss");
/* harmony import */ var _container_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_container_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/class/container/container.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Container = ({
  children
}) => __jsx("div", {
  className: _container_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 4
  }
}, children);

/***/ }),

/***/ "./components/class/link/link.scss":
/*!*****************************************!*\
  !*** ./components/class/link/link.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer",
	"link": "link",
	"namespace": "namespace"
};

/***/ }),

/***/ "./components/class/link/link.tsx":
/*!****************************************!*\
  !*** ./components/class/link/link.tsx ***!
  \****************************************/
/*! exports provided: NamespaceLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespaceLink", function() { return NamespaceLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link.scss */ "./components/class/link/link.scss");
/* harmony import */ var _link_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_link_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/context */ "./context/context.tsx");
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/class/link/link.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NamespaceLink = ({
  namespace,
  bee
}) => {
  const {
    setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    author,
    name
  } = namespace;

  const routeToBee = () => {
    if (bee) setCurrent(bee);
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/[author]/[name]", "/" + author + "/" + name);
  };

  return __jsx("div", {
    className: _link_scss__WEBPACK_IMPORTED_MODULE_2___default.a.namespace,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(Link, {
    name: author,
    onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/[author]", "/" + author),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("h2", {
    style: {
      textDecoration: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "/"), __jsx(Link, {
    name: name,
    onClick: e => routeToBee(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }));
};
const Link = ({
  name,
  onClick
}) => __jsx("button", {
  className: _link_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 3
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}, name));

/***/ }),

/***/ "./components/class/loading/loading.tsx":
/*!**********************************************!*\
  !*** ./components/class/loading/loading.tsx ***!
  \**********************************************/
/*! exports provided: LoadingPage, LoadingBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPage", function() { return LoadingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBox", function() { return LoadingBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/class/loading/loading.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const LoadingPage = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 37
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, "Is Loading"));
const LoadingBox = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 36
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, "Is Loading"));

/***/ }),

/***/ "./context/context.tsx":
/*!*****************************!*\
  !*** ./context/context.tsx ***!
  \*****************************/
/*! exports provided: useConstructorContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConstructorContext", function() { return useConstructorContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

let initialContext = {
  title: null,
  setTitle: s => {},
  login: false,
  setLogin: x => {},
  current: null,
  setCurrent: () => {}
};
const useConstructorContext = () => {
  const {
    0: login,
    1: setLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  return {
    title,
    setTitle,
    login,
    setLogin,
    current,
    setCurrent
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialContext));

/***/ }),

/***/ "./graph/graphql.tsx":
/*!***************************!*\
  !*** ./graph/graphql.tsx ***!
  \***************************/
/*! exports provided: GetHomeDocument, GetHomeComponent, withGetHome, GetFullBeeDocument, GetFullBeeComponent, withGetFullBee, GetBeeDetailsDocument, GetBeeDetailsComponent, withGetBeeDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHomeDocument", function() { return GetHomeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetHomeComponent", function() { return GetHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGetHome", function() { return withGetHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFullBeeDocument", function() { return GetFullBeeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFullBeeComponent", function() { return GetFullBeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGetFullBee", function() { return withGetFullBee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBeeDetailsDocument", function() { return GetBeeDetailsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBeeDetailsComponent", function() { return GetBeeDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withGetBeeDetails", function() { return withGetBeeDetails; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-components */ "@apollo/react-components");
/* harmony import */ var _apollo_react_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hoc */ "@apollo/react-hoc");
/* harmony import */ var _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/graph/graphql.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const GetHomeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getHome($token: String!) {
  GetHome(input: {Token: $token}) {
    Bees {
      Author
      Description
      DevLang
      Framework {
        Author
        Name
      }
      Keywords
      License
      Name
      PkgName
      Port
      Repo
      Rpcs {
        Name
        Input
        Output
        Line
      }
    }
    Hives {
      Author
      Name
      Repo
    }
  }
}
    `;
const GetHomeComponent = props => __jsx(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], _extends({
  query: GetHomeDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252,
    columnNumber: 7
  }
}));
function withGetHome(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](GetHomeDocument, _objectSpread({
    alias: 'getHome'
  }, operationOptions));
}
;
const GetFullBeeDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getFullBee($token: String!, $author: String!, $name: String!) {
  GetFullBee(input: {Auth: {Token: $token}, Author: $author, Name: $name}) {
    Bee {
      Author
      Description
      DevLang
      Framework {
        Author
        Name
      }
      Keywords
      License
      Name
      PkgName
      Port
      Repo
      Rpcs {
        Name
        Input
        Output
        Line
      }
    }
    Details {
      Readme
    }
  }
}
    `;
const GetFullBeeComponent = props => __jsx(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], _extends({
  query: GetFullBeeDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300,
    columnNumber: 7
  }
}));
function withGetFullBee(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](GetFullBeeDocument, _objectSpread({
    alias: 'getFullBee'
  }, operationOptions));
}
;
const GetBeeDetailsDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getBeeDetails($token: String!, $author: String!, $name: String!) {
  GetBeeDetails(input: {Auth: {Token: $token}, Author: $author, Name: $name}) {
    Readme
  }
}
    `;
const GetBeeDetailsComponent = props => __jsx(_apollo_react_components__WEBPACK_IMPORTED_MODULE_2__["Query"], _extends({
  query: GetBeeDetailsDocument
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 325,
    columnNumber: 7
  }
}));
function withGetBeeDetails(operationOptions) {
  return _apollo_react_hoc__WEBPACK_IMPORTED_MODULE_3__["withQuery"](GetBeeDetailsDocument, _objectSpread({
    alias: 'getBeeDetails'
  }, operationOptions));
}
;

/***/ }),

/***/ "./pages/[author]/[name].tsx":
/*!***********************************!*\
  !*** ./pages/[author]/[name].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_bee_bee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bee/bee */ "./components/bee/bee.tsx");
/* harmony import */ var components_class_loading_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/class/loading/loading */ "./components/class/loading/loading.tsx");
/* harmony import */ var types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types/types */ "./types/types.ts");
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/pages/[author]/[name].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    author,
    name
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query;
  if (!author || !name) return __jsx(components_class_loading_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingPage"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 34
    }
  });
  return __jsx(components_bee_bee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    namespace: new types_types__WEBPACK_IMPORTED_MODULE_4__["Namespace"](author, name),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  });
});

/***/ }),

/***/ "./types/types.ts":
/*!************************!*\
  !*** ./types/types.ts ***!
  \************************/
/*! exports provided: Namespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Namespace", function() { return Namespace; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Namespace {
  /**
   * getString
   * return the formated string with a slash
   */
  constructor(author, name) {
    _defineProperty(this, "author", void 0);

    _defineProperty(this, "name", void 0);

    this.author = author;
    this.name = name;
  }

  getString() {
    return this.author + "/" + this.name;
  }

  push() {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/[author]/[name]", "/" + this.author + "/" + this.name);
  }

}

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./pages/[author]/[name].tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benka/go/src/github.com/benka-me/laruche-web/pages/[author]/[name].tsx */"./pages/[author]/[name].tsx");


/***/ }),

/***/ "@apollo/react-components":
/*!*******************************************!*\
  !*** external "@apollo/react-components" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-components");

/***/ }),

/***/ "@apollo/react-hoc":
/*!************************************!*\
  !*** external "@apollo/react-hoc" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hoc");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-copy-to-clipboard":
/*!******************************************!*\
  !*** external "react-copy-to-clipboard" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/cjs/styles/hljs":
/*!****************************************************************!*\
  !*** external "react-syntax-highlighter/dist/cjs/styles/hljs" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ })

/******/ });
//# sourceMappingURL=[name].js.map