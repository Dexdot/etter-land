/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/js/components/rail.js":
/*!***********************************!*\
  !*** ./src/js/components/rail.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Rail = function () {\n  function Rail(el) {\n    _classCallCheck(this, Rail);\n\n    this.DOM = { el: el };\n    this.containerWidth = 0;\n\n    this.init();\n\n    this.requestAnimation = null;\n\n    this.translation = 0;\n\n    this.grabbed = false;\n    this.preventClick = false;\n\n    this.originalVelocity = 2;\n    this.velocity = this.originalVelocity;\n  }\n\n  _createClass(Rail, [{\n    key: 'init',\n    value: function init() {\n      this.initializeElements();\n      this.update();\n    }\n  }, {\n    key: 'initializeElements',\n    value: function initializeElements() {\n      this.DOM.railContainer = $.qs('.rail__container', this.DOM.el);\n      this.getBCR();\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      if (!this.grabbed) {\n        this.translation -= this.velocity;\n      }\n\n      var t = this.translation > 0 ? -this.containerWidth + this.translation % this.containerWidth : this.translation % this.containerWidth;\n\n      this.DOM.railContainer.style.transform = 'translateX(' + t / 2 + 'px)';\n\n      this.requestAnimation = window.requestAnimationFrame(this.update.bind(this));\n    }\n  }, {\n    key: 'getBCR',\n    value: function getBCR() {\n      this.railContainerBCR = this.DOM.railContainer.getBoundingClientRect();\n      this.containerWidth = this.railContainerBCR.width;\n    }\n  }]);\n\n  return Rail;\n}();\n\nexports.default = Rail;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! utils */ \"./src/js/helpers/utils.js\")))\n\n//# sourceURL=webpack:///./src/js/components/rail.js?");

/***/ }),

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar qs = exports.qs = function qs(selector) {\n  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return ctx.querySelector(selector);\n};\n\nvar qsa = exports.qsa = function qsa(selector) {\n  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;\n  return Array.from(ctx.querySelectorAll(selector));\n};\n\nvar each = exports.each = function each(selector, cb) {\n  var elements = qsa(selector);\n\n  if (elements.length <= 0) return false;\n\n  elements.forEach(function (el, i) {\n    cb(el, i);\n  });\n};\n\nvar delegate = exports.delegate = function delegate(selector, cb) {\n  var ev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';\n\n  document.addEventListener(ev, function (e) {\n    var el = e.target.closest(selector);\n    if (el) {\n      cb(e, el);\n    }\n  }, false);\n};\n\n//# sourceURL=webpack:///./src/js/helpers/utils.js?");

/***/ }),

/***/ "./src/js/init/css-props.js":
/*!**********************************!*\
  !*** ./src/js/init/css-props.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar set = function set() {\n  // Viewport height\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', vh + 'px');\n};\n\nwindow.addEventListener('DOMContentLoaded', set);\nwindow.addEventListener('resize', set);\n\n//# sourceURL=webpack:///./src/js/init/css-props.js?");

/***/ }),

/***/ "./src/js/init/rail.js":
/*!*****************************!*\
  !*** ./src/js/init/rail.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _rail = __webpack_require__(/*! @/components/rail */ \"./src/js/components/rail.js\");\n\nvar _rail2 = _interopRequireDefault(_rail);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar initRail = function initRail() {\n  $.each('.js-rail', function (el) {\n    var railContainer = $.qs('.rail__container', el);\n    var trackContainer = $.qs('.rail__track-container', el);\n    var track = $.qs('.rail__track', el);\n\n    trackContainer.append(track.cloneNode(true));\n    railContainer.append(trackContainer.cloneNode(true));\n\n    var rail = new _rail2.default(el);\n  });\n};\n\nwindow.addEventListener('DOMContentLoaded', initRail);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! utils */ \"./src/js/helpers/utils.js\")))\n\n//# sourceURL=webpack:///./src/js/init/rail.js?");

/***/ }),

/***/ "./src/js/observer/animate.js":
/*!************************************!*\
  !*** ./src/js/observer/animate.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Options\nvar options = {\n  threshold: [0, 0.25, 0.5, 0.75, 1]\n};\n\nvar animateItem = function animateItem(item) {\n  return item.target.classList.add('visible');\n};\n\n// Create observer\nvar observer = new IntersectionObserver(function (items) {\n  items.forEach(function (item) {\n    if (item.isIntersecting) {\n      animateItem(item);\n    }\n  });\n}, options);\n\n// Start observe\nvar elements = document.querySelectorAll('.js-observe');\n\nelements.forEach(function (el) {\n  observer.observe(el);\n});\n\n//# sourceURL=webpack:///./src/js/observer/animate.js?");

/***/ }),

/***/ "./src/js/observer/bg.js":
/*!*******************************!*\
  !*** ./src/js/observer/bg.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Options\nvar options = {\n  threshold: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]\n};\n\n// Create observer\nvar observer = new IntersectionObserver(function (items) {\n  items.forEach(function (item) {\n    if (item.isIntersecting && item.intersectionRatio >= 0.2) {\n      document.documentElement.style.setProperty('--bg', item.target.dataset.bg);\n    }\n  });\n}, options);\n\nvar init = function init() {\n  if (window.innerWidth <= 500) return false;\n\n  // Start observe\n  var elements = document.querySelectorAll('[data-bg]');\n\n  elements.forEach(function (el) {\n    observer.observe(el);\n  });\n};\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n//# sourceURL=webpack:///./src/js/observer/bg.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! @/init/css-props */ \"./src/js/init/css-props.js\");\n\n__webpack_require__(/*! @/observer/animate */ \"./src/js/observer/animate.js\");\n\n__webpack_require__(/*! @/observer/bg */ \"./src/js/observer/bg.js\");\n\n__webpack_require__(/*! @/init/rail */ \"./src/js/init/rail.js\");\n\n//# sourceURL=webpack:///./src/js/pages/index.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/dexdot/Sites/etter/src/js/pages/index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/pages/index.js?");

/***/ })

/******/ });