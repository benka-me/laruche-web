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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app/app.scss":
/*!*********************************!*\
  !*** ./components/app/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer"
};

/***/ }),

/***/ "./components/app/app.tsx":
/*!********************************!*\
  !*** ./components/app/app.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context/context */ "./context/context.tsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graph_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graph/apollo-client */ "./graph/apollo-client.tsx");
/* harmony import */ var components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/navigation/navigation */ "./components/navigation/navigation.tsx");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.scss */ "./components/app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/app/app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(context_context__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
  value: Object(context_context__WEBPACK_IMPORTED_MODULE_1__["useConstructorContext"])(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
  client: Object(graph_apollo_client__WEBPACK_IMPORTED_MODULE_3__["default"])(null, true),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, __jsx(components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("div", {
  className: _app_scss__WEBPACK_IMPORTED_MODULE_5__["main"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}, children))));

/***/ }),

/***/ "./components/class/button/Button.tsx":
/*!********************************************!*\
  !*** ./components/class/button/Button.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.scss */ "./components/class/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/class/button/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const none = "";

String.prototype.spaced = function () {
  return this + " ";
};

/* harmony default export */ __webpack_exports__["default"] = (props => {
  const className = props.className + " " + _button_scss__WEBPACK_IMPORTED_MODULE_1___default.a.btn.spaced() + (props.circular ? _button_scss__WEBPACK_IMPORTED_MODULE_1___default.a.circular.spaced() : none) + (props.color ? props.color.spaced() : none) + (props.design ? props.design.spaced() : none) + (props.fluid ? _button_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fluid.spaced() : none);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("button", {
    disabled: props.disabled,
    style: props.style,
    onClick: props.onClick,
    className: className,
    type: props.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, props.children));
});

/***/ }),

/***/ "./components/class/button/button.scss":
/*!*********************************************!*\
  !*** ./components/class/button/button.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer",
	"tab": "tab",
	"btn": "btn",
	"fluid": "fluid",
	"circular": "circular",
	"red": "red",
	"warning": "warning",
	"error": "error",
	"info": "info",
	"blue": "blue",
	"rounded": "rounded",
	"background": "background"
};

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

/***/ "./components/navigation/navigation-desktop.scss":
/*!*******************************************************!*\
  !*** ./components/navigation/navigation-desktop.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer",
	"tab": "tab",
	"menu": "menu",
	"menuRight": "menuRight",
	"btn": "btn",
	"fluid": "fluid",
	"circular": "circular",
	"red": "red",
	"warning": "warning",
	"error": "error",
	"info": "info",
	"blue": "blue",
	"rounded": "rounded",
	"background": "background",
	"navbar": "navbar",
	"menuLeft": "menuLeft"
};

/***/ }),

/***/ "./components/navigation/navigation-mobile.scss":
/*!******************************************************!*\
  !*** ./components/navigation/navigation-mobile.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "main",
	"title": "title",
	"project-board": "project-board",
	"footer": "footer",
	"mobile": "mobile",
	"back": "back",
	"bm-burger-button": "bm-burger-button",
	"bm-burger-bars": "bm-burger-bars",
	"bm-burger-bars-hover": "bm-burger-bars-hover",
	"bm-cross-button": "bm-cross-button",
	"bm-cross": "bm-cross",
	"bm-menu-wrap": "bm-menu-wrap",
	"bm-menu": "bm-menu",
	"bm-morph-shape": "bm-morph-shape",
	"bm-item-list": "bm-item-list",
	"list-lang": "list-lang",
	"bm-item": "bm-item",
	"fluid": "fluid",
	"button": "button",
	"circular": "circular",
	"selected": "selected",
	"bm-overlay": "bm-overlay"
};

/***/ }),

/***/ "./components/navigation/navigation.tsx":
/*!**********************************************!*\
  !*** ./components/navigation/navigation.tsx ***!
  \**********************************************/
/*! exports provided: default, BurgerItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerItem", function() { return BurgerItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/utils */ "./utils/utils.ts");
/* harmony import */ var context_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/context */ "./context/context.tsx");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var i18n_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! i18n/i18n */ "./i18n/i18n.ts");
/* harmony import */ var _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation-desktop.scss */ "./components/navigation/navigation-desktop.scss");
/* harmony import */ var _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-mobile.scss */ "./components/navigation/navigation-mobile.scss");
/* harmony import */ var _navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_class_container_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/class/container/container */ "./components/class/container/container.tsx");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_class_button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/class/button/Button */ "./components/class/button/Button.tsx");
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/components/navigation/navigation.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const links = [{
  name: i18n_i18n__WEBPACK_IMPORTED_MODULE_6__["Messages"].contact,
  onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/contact", "/contact")
}, {
  name: "Get Started",
  onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/get-started", "/get-started")
}];
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    login,
    setLogin,
    title
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_context__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Mobile, {
    login: login,
    setLogin: setLogin,
    title: title,
    t: t,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(Desktop, {
    login: login,
    setLogin: setLogin,
    title: title,
    t: t,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }));
});

const Desktop = ({
  setLogin,
  title,
  login,
  t
}) => __jsx("div", {
  className: _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7___default.a.navbar,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 3
  }
}, __jsx(components_class_container_container__WEBPACK_IMPORTED_MODULE_9__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, __jsx("div", {
  className: _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menu,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }
}, __jsx("div", {
  className: _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuLeft,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 9
  }
}, __jsx("button", {
  onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/"),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 11
  }
}, __jsx(react_icons_gi__WEBPACK_IMPORTED_MODULE_10__["GiBee"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }
})), title), __jsx("div", {
  className: _navigation_desktop_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuRight,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
}, login ? __jsx(DesktopItem, {
  link: {
    name: i18n_i18n__WEBPACK_IMPORTED_MODULE_6__["Messages"].logout,
    onClick: e => Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["logout"])(e, setLogin)
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 13
  }
}) : null, links.map((link, i) => __jsx(DesktopItem, {
  key: i,
  link: link,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 13
  }
}))))));

const Mobile = ({
  setLogin,
  title,
  login,
  t
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const closeBurger = () => setOpen(false);

  return __jsx("div", {
    className: _navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.mobile,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.back,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _navigation_mobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, title)), __jsx(Menu, {
    setOpen: setOpen,
    open: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(BurgerItem, {
    link: {
      name: i18n_i18n__WEBPACK_IMPORTED_MODULE_6__["Messages"].home,
      onClick: e => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/")
    },
    closeBurger: closeBurger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, links.map((link, i) => __jsx(BurgerItem, {
    link: link,
    key: i,
    closeBurger: closeBurger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }))), login ? __jsx(BurgerItem, {
    link: {
      name: i18n_i18n__WEBPACK_IMPORTED_MODULE_6__["Messages"].logout,
      onClick: e => Object(utils_utils__WEBPACK_IMPORTED_MODULE_2__["logout"])(e, setLogin)
    },
    closeBurger: closeBurger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }) : null));
};

const Menu = ({
  setOpen,
  open,
  children
}) => __jsx(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["slide"], {
  right: true,
  width: "100%",
  isOpen: open,
  onStateChange: s => {
    setOpen(s.isOpen);
    document.body.style.setProperty("overflow", s.isOpen ? "hidden" : "scroll");
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 3
  }
}, children);

const BurgerItem = ({
  link,
  closeBurger
}) => {
  const {
    t
  } = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])();
  return __jsx(components_class_button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      marginBottom: "10px"
    },
    color: "info",
    fluid: true,
    circular: true,
    design: "background",
    onClick: e => {
      link.onClick(e);
      closeBurger();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, t(link.name).toUpperCase());
};

const DesktopItem = ({
  link
}) => __jsx("button", {
  onClick: link.onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 3
  }
}, link.name);

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

/***/ "./graph/apollo-client.tsx":
/*!*********************************!*\
  !*** ./graph/apollo-client.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);




function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: true,
    link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
      uri: 'http://192.168.1.96:8088',
      // Server URL (must be absolute)
      credentials: 'same-origin',
      // Additional fetch() options like `credentials` or `headers`
      fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default())
    }),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "./i18n/i18n.ts":
/*!**********************!*\
  !*** ./i18n/i18n.ts ***!
  \**********************/
/*! exports provided: Messages, fr, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return fr; });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "i18next");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);

 // the translations
// (tip move them in a JSON file and import them)

const Messages = {
  mailSent: 'mail-sand',
  difficulties: 'difficulties',
  job: 'job',
  usedStack: 'used-stack',
  submit: 'submit',
  home: 'home',
  yourMessage: 'your-message',
  yourEmail: 'your-email',
  yourName: 'your-name',
  contact: "contact",
  availableNow: "available-now",
  notAvailable: "not available",
  favourite: "favourite",
  exp: "exp",
  welcome: "welcome",
  login: "login",
  logout: "logout",
  french: "french",
  english: "english",
  projects: "projects",
  stack: "stack"
};
const fr = {
  translation: {
    [Messages.mailSent]: "Votre message vient d'être envoyé",
    [Messages.usedStack]: 'La stack utilisé',
    [Messages.job]: 'Mon rôle',
    [Messages.difficulties]: 'Les challenges',
    [Messages.home]: 'Accueil',
    [Messages.submit]: 'Soumettre',
    [Messages.yourName]: "Votre nom",
    [Messages.yourEmail]: "Votre email",
    [Messages.yourMessage]: "Écrivez moi",
    [Messages.contact]: "Contact",
    [Messages.availableNow]: "Disponible immédiatement",
    [Messages.notAvailable]: "Disponible prochainement",
    [Messages.exp]: "Junior",
    [Messages.favourite]: "Go / grpc / React...",
    [Messages.stack]: "Ma stack",
    [Messages.projects]: "Mes dernières expériences",
    [Messages.welcome]: "Devellopeur FullStack",
    [Messages.login]: "Connexion",
    [Messages.logout]: "Deconnexion",
    [Messages.french]: "Français",
    [Messages.english]: "Anglais"
  }
};
const us = {
  translation: {
    [Messages.mailSent]: "Your message has been sent",
    [Messages.usedStack]: 'Stack used',
    [Messages.job]: 'My job',
    [Messages.difficulties]: 'Difficulties',
    [Messages.home]: 'Home',
    [Messages.submit]: 'Submit',
    [Messages.yourName]: "Your name",
    [Messages.yourEmail]: "Your email",
    [Messages.yourMessage]: "Write a message",
    [Messages.contact]: "Contact",
    [Messages.availableNow]: "Available immediately",
    [Messages.notAvailable]: "Available soon",
    [Messages.exp]: "Junior",
    [Messages.favourite]: "Go / grpc / React...",
    [Messages.stack]: "My stack",
    [Messages.projects]: "My last projects",
    [Messages.welcome]: "FullStack developer",
    [Messages.login]: "Login",
    [Messages.logout]: "Logout",
    [Messages.french]: "French",
    [Messages.english]: "English"
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0___default.a.use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]) // passes i18n down to react-i18next
.init({
  resources: {
    us,
    fr
  },
  lng: "fr",
  keySeparator: false,
  // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss

  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/app/app */ "./components/app/app.tsx");
var _jsxFileName = "/Users/benka/go/src/github.com/benka-me/laruche-web/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class Wrapper extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, "hive of service"))), __jsx(components_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: getAge, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAge", function() { return getAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
const getAge = iso => {
  const dateold = new Date(iso);
  const datenew = new Date();
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = ynew - yold;
  if (mold > mnew) diff--;else {
    if (mold === mnew) {
      if (dold > dnew) diff--;
    }
  }
  return diff;
};
const logout = (e, setLogin) => {
  localStorage.removeItem(process.env.TOKEN_KEY);
  setLogin(false);
};

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "i18next":
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

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
//# sourceMappingURL=_app.js.map