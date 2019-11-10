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

/***/ "./src/js/init/css-props.js":
/*!**********************************!*\
  !*** ./src/js/init/css-props.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar set = function set() {\n  // Viewport height\n  var vh = window.innerHeight * 0.01;\n  document.documentElement.style.setProperty('--vh', vh + 'px');\n};\n\nwindow.addEventListener('DOMContentLoaded', set);\nwindow.addEventListener('resize', set);\n\n//# sourceURL=webpack:///./src/js/init/css-props.js?");

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
eval("\n\n// Options\nvar options = {\n  threshold: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]\n};\n\n// Create observer\nvar observer = new IntersectionObserver(function (items) {\n  items.forEach(function (item) {\n    if (item.isIntersecting && item.intersectionRatio >= 0.6) {\n      document.documentElement.style.setProperty('--bg', item.target.dataset.bg);\n    }\n  });\n}, options);\n\n// Start observe\nvar elements = document.querySelectorAll('[data-bg]');\n\nelements.forEach(function (el) {\n  observer.observe(el);\n});\n\n//# sourceURL=webpack:///./src/js/observer/bg.js?");

/***/ }),

/***/ "./src/js/pages/index.js":
/*!*******************************!*\
  !*** ./src/js/pages/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! @/init/css-props */ \"./src/js/init/css-props.js\");\n\n__webpack_require__(/*! @/observer/animate */ \"./src/js/observer/animate.js\");\n\n__webpack_require__(/*! @/observer/bg */ \"./src/js/observer/bg.js\");\n\n//# sourceURL=webpack:///./src/js/pages/index.js?");

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/js/pages/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Dexdot\\Desktop\\projects\\personal\\etter\\src\\js\\pages\\index.js */\"./src/js/pages/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/pages/index.js?");

/***/ })

/******/ });