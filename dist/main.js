/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _images_spring_sergey_shmidt_koy6FlCCy5s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg */ \"./src/images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg\");\n/* harmony import */ var _images_summer_mike_swigunski_ueBmz9K8zTg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg */ \"./src/images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg\");\n/* harmony import */ var _images_fall_johannes_plenio_RwHv7LgeC7s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg */ \"./src/images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg\");\n/* harmony import */ var _images_winter_adam_chang_IWenq_4JHqo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg */ \"./src/images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg\");\n\n\n\n\n\n\nconst slideContent = [\n   {\n    slideNum: \"1/4\",\n    slideImgSrc: _images_spring_sergey_shmidt_koy6FlCCy5s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__, \n    slideImgAlt: \"field of yellow tulips -1\",\n    slideText: `Spring: Photo by Sergey Shmidt on Unsplashed`, \n    navDotClass: \"one\"\n  },\n  {\n    slideNum: \"2/4\",\n    slideImgSrc: _images_summer_mike_swigunski_ueBmz9K8zTg_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__, \n    slideImgAlt: \"sandy beach with palm trees\",\n    slideText: \"Summer: Photo by Mike Swigunski on Unsplash\", \n    navDotClass: \"two\",\n  },\n  {\n    slideNum: \"3/4\",\n    slideImgSrc: _images_fall_johannes_plenio_RwHv7LgeC7s_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    slideImgAlt: \"autumn trees in a forest\",\n    slideText: \"Fall: Photo by Johannes Plenio on Unsplash \", \n    navDotClass: \"three\",\n  },\n  {\n    slideNum: \"4/4\",\n    slideImgSrc: _images_winter_adam_chang_IWenq_4JHqo_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__, \n    slideImgAlt: \"lake surrounded by snow\",\n    slideText: \"Winter: Photo by Adam Chang on Unsplash\", \n    navDotClass: \"four\",\n  }\n]\ndocument.addEventListener(\"DOMContentLoaded\", ()=>{\n  const innerFrame = document.querySelector(\".inner-frame\"); \n  const next = document.querySelector(\".next\"); \n  const slider = new _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"](slideContent, innerFrame);\n  const slidesArray = slider.createSlides();\n  slider.eListeners(slidesArray); \n  setInterval(()=>{\n    slider.changeSlide(next,slidesArray); \n  }, 3000); \n \n})\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\n// import prevLeft from \"./images/chevron_left_FILL0_wght400_GRAD0_opsz24.svg\"; \n\nclass Slider{\n  /**\n   * \n   * @param {Object[Object{}]} slideContent \n   * @param {Element} frame \n   */\n  constructor(slideContent, frame){\n    this.slideContent = slideContent; \n    this.frame = frame; \n    this.dotsElem = document.querySelector('.nav-dots');\n  }\n\n  createSlide(slide){\n    const season = this.slideContent[slide-1]; \n    const pElem = document.createElement(\"div\");\n    const numElem = document.createElement(\"div\");\n    const imgElem = new Image(); \n    const textElem = document.createElement(\"div\"); \n  \n    pElem.classList.add(\"slide\");\n    pElem.classList.add(season.navDotClass); \n    pElem.id = String(slide);\n  \n    numElem.classList.add(\"slide-number\");\n    numElem.textContent = season.slideNum; \n  \n    imgElem.src = season.slideImgSrc; \n    imgElem.alt = season.slideImgAlt; \n  \n    textElem.classList.add(\"slide-text\");\n    textElem.textContent = season.slideText; \n\n  \n    pElem.appendChild(numElem);\n    pElem.appendChild(imgElem);\n    pElem.appendChild(textElem); \n    \n    return pElem; \n  }\n\n  setDot(seasonElem){\n    const dotClass = seasonElem.classList; \n    const childrenDots = Array.from(this.dotsElem.children); \n    for(const dot of childrenDots){\n      if(dot.classList.contains(\"active-dot\")){\n        dot.classList.remove(\"active-dot\");\n        dot.classList.add(\"inactive-dot\"); \n      }\n    }\n    const dot = childrenDots.find(child => child.classList.contains(dotClass[1]));\n    dot.classList.remove(\"inactive-dot\");\n    dot.classList.add(\"active-dot\");\n  }\n\n  createSlides(){\n    const spring = this.createSlide(1); \n    const summer = this.createSlide(2);\n    const fall = this.createSlide(3); \n    const winter = this.createSlide(4); \n\n    this.setDot(spring); \n\n    spring.classList.add(\"current\"); \n    summer.classList.add(\"hide\");\n    fall.classList.add(\"hide\");\n    winter.classList.add(\"hide\"); \n  \n    this.frame.appendChild(spring);\n    this.frame.appendChild(summer);\n    this.frame.appendChild(fall);\n    this.frame.appendChild(winter);\n\n    return [spring,summer,fall,winter] \n  }\n\n  changeSlide(elemRequesting, slidesArray){\n    const currentSlide = slidesArray.find(child => child.classList.contains(\"current\"));\n    currentSlide.classList.remove(\"current\"); \n    currentSlide.classList.add(\"hide\"); \n    let newCurrentSlideID; \n    let iteratorSlide; \n  \n    if(elemRequesting.classList.contains(\"prev\") ||elemRequesting.classList.contains(\"next\")){\n      if(elemRequesting.classList.contains(\"prev\")){\n        newCurrentSlideID =  String(Number(currentSlide.id ) - 1);\n        if(Number(newCurrentSlideID) === 0){\n          newCurrentSlideID = \"4\"; \n        }\n      }else{\n        newCurrentSlideID = String(Number(currentSlide.id) +1);\n        if(Number(newCurrentSlideID) === 5){\n          newCurrentSlideID = \"1\"; \n        }\n      }\n       iteratorSlide = slidesArray.find(child => child.id === newCurrentSlideID); \n      \n    }if(elemRequesting.classList.contains(\"inactive-dot\") || elemRequesting.classList.contains(\"active-dot\")){\n      if(elemRequesting.classList.contains(\"active-dot\")){\n        return alert(\"already viewing\");\n      }\n      const elemRequestingClass = Array.from(elemRequesting.classList).find(classItem => classItem !== \"inactive-dot\"); \n      iteratorSlide = slidesArray.find(slide => slide.classList.contains(elemRequestingClass));\n    }\n    this.setDot(iteratorSlide)\n    iteratorSlide.classList.remove(\"hide\");\n    iteratorSlide.classList.add(\"current\");\n  }\n\n  eListeners(slidesArray){\n    const prev = document.querySelector(\".prev\"); \n    const next = document.querySelector(\".next\"); \n    const childrenDots = Array.from(this.dotsElem.children); \n    for(const dot of childrenDots){\n      dot.addEventListener(\"click\", ()=>{\n        this.changeSlide(dot, slidesArray)\n      })\n    }\n    prev.addEventListener(\"click\", ()=>{\n      this.changeSlide(prev,slidesArray); \n      \n    })\n    next.addEventListener(\"click\", ()=>{\n      this.changeSlide(next,slidesArray); \n    });\n  }\n}\n\n\n//# sourceURL=webpack://image-slider/./src/slider.js?");

/***/ }),

/***/ "./src/images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1affabb78f0d79ce0ca0.jpg\";\n\n//# sourceURL=webpack://image-slider/./src/images/fall_johannes-plenio-RwHv7LgeC7s-unsplash.jpg?");

/***/ }),

/***/ "./src/images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/1f0f4c1fb57b101fb77e.jpg\";\n\n//# sourceURL=webpack://image-slider/./src/images/spring_sergey-shmidt-koy6FlCCy5s-unsplash.jpg?");

/***/ }),

/***/ "./src/images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/353424cf7dde8ed6bff2.jpg\";\n\n//# sourceURL=webpack://image-slider/./src/images/summer_mike-swigunski-ueBmz9K8zTg-unsplash.jpg?");

/***/ }),

/***/ "./src/images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/3aec4c6739aa23ec88b8.jpg\";\n\n//# sourceURL=webpack://image-slider/./src/images/winter_adam-chang-IWenq-4JHqo-unsplash.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;