/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const prev = document.querySelector(\".prev\"); \nconst next = document.querySelector(\".next\"); \n\nconst innerFrame = document.querySelector(\".inner-frame\"); \n// eslint-disable-next-line prefer-destructuring\nconst children = innerFrame.children;\nconst childrenArray = Array.from(children); \n\nfunction changeSlide(prevOrNext){\n  const currentSlide = childrenArray.find(child => child.classList.contains(\"current\"));\n  currentSlide.classList.remove(\"current\"); \n  currentSlide.classList.add(\"hide\"); \n  let newCurrentSlideID; \n\n  if(prevOrNext.classList.contains(\"prev\")){\n    newCurrentSlideID =  String(Number(currentSlide.id ) - 1);\n    if(Number(newCurrentSlideID) === 0){\n      newCurrentSlideID = \"4\"; \n    }\n    const prevSlide = childrenArray.find(child => child.id === newCurrentSlideID); \n    prevSlide.classList.remove(\"hide\");\n    prevSlide.classList.add(\"current\");\n  }else{\n    newCurrentSlideID = String(Number(currentSlide.id) +1);\n    if(Number(newCurrentSlideID) === 5){\n      newCurrentSlideID = \"1\"; \n    }\n    const nextSlide = childrenArray.find(child => child.id === newCurrentSlideID); \n    nextSlide.classList.remove(\"hide\");\n    nextSlide.classList.add(\"current\");\n  }\n\n}\n\nprev.addEventListener(\"click\", ()=>{\n  changeSlide(prev); \n  \n})\nnext.addEventListener(\"click\", ()=>{\n  changeSlide(next); \n})\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;