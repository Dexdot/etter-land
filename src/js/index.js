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

/***/ "./src/js/helpers/detect.js":
/*!**********************************!*\
  !*** ./src/js/helpers/detect.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isMobileDevice = isMobileDevice;\nexports.isMobileSafari = isMobileSafari;\nexports.isSafari = isSafari;\nexports.isMAC = isMAC;\nexports.getIOSVersion = getIOSVersion;\nexports.isIE11 = isIE11;\nfunction isMobileDevice() {\n  var check = false;\n  (function (a) {\n    if (/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4))) check = true;\n  })(navigator.userAgent || navigator.vendor || window.opera);\n  return check;\n}\n\nfunction isMobileSafari() {\n  var ua = window.navigator.userAgent;\n  var iOS = !!ua.match(/iP(ad|hone)/i);\n  var webkit = !!ua.match(/WebKit/i);\n  var iOSSafari = iOS && webkit && !/(Chrome|CriOS|OPiOS)/.test(ua);\n\n  return iOSSafari;\n}\n\nfunction isSafari() {\n  return navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && !isMobileDevice();\n}\n\nfunction isMAC() {\n  return navigator.platform.toUpperCase().indexOf('MAC') >= 0 && !isMobileDevice();\n}\n\nfunction getIOSVersion() {\n  var v = navigator.appVersion.match(/OS (\\d+)_(\\d+)_?(\\d+)?/);\n  return (/iP(hone|od|ad)/.test(navigator.platform) && parseInt(v[1], 10)\n  );\n}\n\nfunction isIE11() {\n  return !!window.MSInputMethodContext && !!document.documentMode;\n}\n\n//# sourceURL=webpack:///./src/js/helpers/detect.js?");

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

/***/ "./src/js/init/scroll.js":
/*!*******************************!*\
  !*** ./src/js/init/scroll.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _detect = __webpack_require__(/*! @/helpers/detect */ \"./src/js/helpers/detect.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar math = {\n  map: function map(x, a, b, c, d) {\n    return (x - a) * (d - c) / (b - a) + c;\n  },\n  lerp: function lerp(a, b, n) {\n    return (1 - n) * a + n * b;\n  },\n  getRandomFloat: function getRandomFloat(min, max) {\n    return (Math.random() * (max - min) + min).toFixed(2);\n  }\n};\n\nvar _document = document,\n    body = _document.body;\n\nvar winsize = void 0;\n\nvar calcWinsize = function calcWinsize() {\n  winsize = {\n    width: window.innerWidth,\n    height: window.innerHeight\n  };\n};\n\ncalcWinsize();\nwindow.addEventListener('resize', calcWinsize);\nvar docScroll = void 0;\nvar lastScroll = void 0;\nvar scrollingSpeed = 0;\n\nvar getPageYScroll = function getPageYScroll() {\n  docScroll = window.pageYOffset || document.documentElement.scrollTop;\n};\n\nwindow.addEventListener('scroll', getPageYScroll);\n\nvar SmoothScroll = function () {\n  function SmoothScroll() {\n    _classCallCheck(this, SmoothScroll);\n\n    this.DOM = {\n      main: document.querySelector('.js-scroll')\n    };\n    this.DOM.scrollable = this.DOM.main.querySelector('.js-scroll-inner');\n    this.renderedStyles = {\n      translationY: {\n        previous: 0,\n        current: 0,\n        ease: 0.05,\n        setValue: function setValue(v) {\n          return v || docScroll;\n        }\n      }\n    };\n    this.isMAC = (0, _detect.isMAC)();\n    this.setSize();\n    this.update();\n    this.style();\n    this.initEvents();\n    requestAnimationFrame(this.render.bind(this));\n  }\n\n  _createClass(SmoothScroll, [{\n    key: 'update',\n    value: function update() {\n      for (var key in this.renderedStyles) {\n        this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();\n      }\n\n      this.layout();\n    }\n  }, {\n    key: 'layout',\n    value: function layout() {\n      if (this.isMAC) {\n        // Top\n        if (this.renderedStyles.translationY.previous <= 0) {\n          this.renderedStyles.translationY.previous = 0;\n        }\n\n        // Bottom\n        if (this.renderedStyles.translationY.previous >= this.DOM.scrollable.scrollHeight - window.innerHeight) {\n          this.renderedStyles.translationY.previous = this.DOM.scrollable.scrollHeight - window.innerHeight;\n        }\n      }\n\n      this.DOM.scrollable.style.transform = 'translate3d(0,'.concat(-1 * this.renderedStyles.translationY.previous, 'px,0)');\n    }\n  }, {\n    key: 'setSize',\n    value: function setSize() {\n      body.style.height = ''.concat(this.DOM.scrollable.scrollHeight, 'px');\n    }\n  }, {\n    key: 'style',\n    value: function style() {\n      this.DOM.main.style.position = 'fixed';\n      this.DOM.main.style.width = this.DOM.main.style.height = '100%';\n      this.DOM.main.style.top = this.DOM.main.style.left = 0;\n      this.DOM.main.style.overflow = 'hidden';\n    }\n  }, {\n    key: 'initEvents',\n    value: function initEvents() {\n      window.addEventListener('resize', this.setSize.bind(this));\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      scrollingSpeed = Math.abs(docScroll - lastScroll);\n      lastScroll = docScroll;\n\n      for (var key in this.renderedStyles) {\n        this.renderedStyles[key].current = this.renderedStyles[key].setValue();\n        this.renderedStyles[key].previous = math.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);\n      }\n\n      this.layout();\n\n      requestAnimationFrame(this.render.bind(this));\n    }\n  }]);\n\n  return SmoothScroll;\n}();\n\n// DOM LOAD\n\n\nwindow.addEventListener('load', function () {\n  if ((0, _detect.isMobileDevice)()) return false;\n\n  getPageYScroll();\n  lastScroll = docScroll;\n  var smoothScroll = new SmoothScroll();\n\n  smoothScroll.setSize();\n});\n\n//# sourceURL=webpack:///./src/js/init/scroll.js?");

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
eval("\n\n__webpack_require__(/*! @/init/css-props */ \"./src/js/init/css-props.js\");\n\n__webpack_require__(/*! @/observer/animate */ \"./src/js/observer/animate.js\");\n\n__webpack_require__(/*! @/observer/bg */ \"./src/js/observer/bg.js\");\n\n__webpack_require__(/*! @/init/scroll */ \"./src/js/init/scroll.js\");\n\n//# sourceURL=webpack:///./src/js/pages/index.js?");

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