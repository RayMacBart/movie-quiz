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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("\n\nclass App {\n  constructor() {\n    console.log('hello world');\n    console.log('hello you too!');\n    axios.get('https://api.themoviedb.org/3/search/movie?query=Terminator&include_adult=false&language=en-US&page=1', {\n      'headers': {\n        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWY4YTZmYzk4OGMwMGYzNzNjNmE2ZmU0NDhkZmNhZSIsInN1YiI6IjY1MDRmNGVjMzczYWMyMDBhY2Q1YTU4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a4Ij4SnA99006RBmzHg3fCH7J_SOVaGNvFZVLrY1Gw4'\n      }\n    }).then(result => console.log(result));\n  }\n}\nnew App();\n\n//# sourceURL=webpack://movie-quiz/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;