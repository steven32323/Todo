/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --blue-bg-dark: rgba(0,3,36,1);\r\n    --blue-bg-light: rgba(9,90,121,1);\r\n  }\r\n\r\nhtml {\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n.header {\r\n    height: 15vh;\r\n    width: 100%;\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n    text-align: center;\r\n    background: linear-gradient(180deg, rgba(0,3,36,1) 0%, rgba(9,90,121,1) 94%);\r\n    color: white;\r\n}\r\n.body {\r\n    display: grid;\r\n    height: 82vh;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n.left {\r\n    height: 100%;\r\n    width: 100%;\r\n    /* border: 1px solid blue; */\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: #f3f4f6;\r\n}\r\n.right{\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n.right ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    gap: 1vh;\r\n    justify-content: space-between;\r\n}\r\n.listItem {\r\n    width: fit-content;\r\n    border-radius: 20px;\r\n}\r\n\r\n.projectListItem{\r\n    width:  30vh;\r\n    height: 5vh;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    list-style: none;\r\n    text-align: center;\r\n    margin-bottom: 2vh;\r\n    padding-top: 1vh;\r\n}\r\n.clicked {\r\n    background-color: var(--blue-bg-light);\r\n    color: white;\r\n\r\n}\r\n.projectListItem:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.addItem {\r\n    height: fit-content;\r\n    width: fit-content;\r\n    grid-column: 4/5;\r\n}\r\n.modal {\r\n    position: absolute;\r\n    background-color: white;\r\n    padding-top: 2vh;\r\n    height: 40vh;\r\n    width: 40vh;\r\n    top: 20%;\r\n    bottom: 40%;\r\n    left: 40%;\r\n    right: 40%;\r\n    border-radius: 10px;\r\n    z-index: 6;\r\n    border: 1px solid black;\r\n}\r\n.hidden {\r\n    display: none;\r\n    background-color: transparent;\r\n}\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    backdrop-filter: blur(3px);\r\n    z-index: 5;\r\n  }\r\nform {\r\n    width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n}\r\nform h1 {\r\n    text-align: center;\r\n}\r\n.descriptionIcon {\r\n    border: 1px solid black;\r\n    width: 5vh;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n.descriptionIcon:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.tasks li {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-right: 20vh;\r\n}\r\n.details {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    padding: 4vh;\r\n    overflow: scroll;\r\n}\r\n.tasks li:hover {\r\n    background-color: rgba(128, 128, 128, 0.177);\r\n    cursor: pointer;\r\n}\r\n.remove {\r\n    background-color: red;\r\n    border-radius: 20px;\r\n}\r\n.itemInfo {\r\n    display: flex;\r\n    gap: 2vh;\r\n}\r\n.Low {\r\n    background-color: #84cc16;\r\n}\r\n.Medium {\r\n    background-color: #f59e0b;\r\n}\r\n.High {\r\n    background-color: #f97316;\r\n}\r\n.ASAP {\r\n    background-color: #dc2626;\r\n}\r\n.Low, .Medium, .High, .ASAP {\r\n    border: 1px solid black;\r\n}\r\n.edit {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    width: 5vh;\r\n    text-align: center;\r\n    background-color: #84cc16;\r\n}\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: #4d7c0f;\r\n}\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: #b91c1c;\r\n}\r\n.closeModal {\r\n    text-align: end;\r\n}\r\n.editor {\r\n    display: flex;\r\n    gap: 1vh;\r\n}\r\n.editDescription {\r\n  line-height: normal;\r\n  width: auto;\r\n  text-align: left;\r\n  column-count: initial;\r\n  overflow-wrap: break-word;\r\n}\r\n.newProject {\r\n    margin-right: 27vh;\r\n    margin-top: 2vh;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,iCAAiC;EACnC;;AAEF;IACI,SAAS;IACT,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,4EAA4E;IAC5E,YAAY;AAChB;AACA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,WAAW;IACX,4BAA4B;IAC5B,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,QAAQ;IACR,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,sCAAsC;IACtC,YAAY;;AAEhB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,QAAQ;IACR,WAAW;IACX,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,0BAA0B;IAC1B,UAAU;EACZ;AACF;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,4CAA4C;IAC5C,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;IACI,kBAAkB;IAClB,eAAe;AACnB","sourcesContent":[":root {\r\n    --blue-bg-dark: rgba(0,3,36,1);\r\n    --blue-bg-light: rgba(9,90,121,1);\r\n  }\r\n\r\nhtml {\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n.header {\r\n    height: 15vh;\r\n    width: 100%;\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n    text-align: center;\r\n    background: linear-gradient(180deg, rgba(0,3,36,1) 0%, rgba(9,90,121,1) 94%);\r\n    color: white;\r\n}\r\n.body {\r\n    display: grid;\r\n    height: 82vh;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n.left {\r\n    height: 100%;\r\n    width: 100%;\r\n    /* border: 1px solid blue; */\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: #f3f4f6;\r\n}\r\n.right{\r\n    height: 100%;\r\n    width: 100%;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n.right ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    gap: 1vh;\r\n    justify-content: space-between;\r\n}\r\n.listItem {\r\n    width: fit-content;\r\n    border-radius: 20px;\r\n}\r\n\r\n.projectListItem{\r\n    width:  30vh;\r\n    height: 5vh;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n    list-style: none;\r\n    text-align: center;\r\n    margin-bottom: 2vh;\r\n    padding-top: 1vh;\r\n}\r\n.clicked {\r\n    background-color: var(--blue-bg-light);\r\n    color: white;\r\n\r\n}\r\n.projectListItem:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.addItem {\r\n    height: fit-content;\r\n    width: fit-content;\r\n    grid-column: 4/5;\r\n}\r\n.modal {\r\n    position: absolute;\r\n    background-color: white;\r\n    padding-top: 2vh;\r\n    height: 40vh;\r\n    width: 40vh;\r\n    top: 20%;\r\n    bottom: 40%;\r\n    left: 40%;\r\n    right: 40%;\r\n    border-radius: 10px;\r\n    z-index: 6;\r\n    border: 1px solid black;\r\n}\r\n.hidden {\r\n    display: none;\r\n    background-color: transparent;\r\n}\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    backdrop-filter: blur(3px);\r\n    z-index: 5;\r\n  }\r\nform {\r\n    width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n}\r\nform h1 {\r\n    text-align: center;\r\n}\r\n.descriptionIcon {\r\n    border: 1px solid black;\r\n    width: 5vh;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n.descriptionIcon:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.tasks li {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-right: 20vh;\r\n}\r\n.details {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    padding: 4vh;\r\n    overflow: scroll;\r\n}\r\n.tasks li:hover {\r\n    background-color: rgba(128, 128, 128, 0.177);\r\n    cursor: pointer;\r\n}\r\n.remove {\r\n    background-color: red;\r\n    border-radius: 20px;\r\n}\r\n.itemInfo {\r\n    display: flex;\r\n    gap: 2vh;\r\n}\r\n.Low {\r\n    background-color: #84cc16;\r\n}\r\n.Medium {\r\n    background-color: #f59e0b;\r\n}\r\n.High {\r\n    background-color: #f97316;\r\n}\r\n.ASAP {\r\n    background-color: #dc2626;\r\n}\r\n.Low, .Medium, .High, .ASAP {\r\n    border: 1px solid black;\r\n}\r\n.edit {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    width: 5vh;\r\n    text-align: center;\r\n    background-color: #84cc16;\r\n}\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: #4d7c0f;\r\n}\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: #b91c1c;\r\n}\r\n.closeModal {\r\n    text-align: end;\r\n}\r\n.editor {\r\n    display: flex;\r\n    gap: 1vh;\r\n}\r\n.editDescription {\r\n  line-height: normal;\r\n  width: auto;\r\n  text-align: left;\r\n  column-count: initial;\r\n  overflow-wrap: break-word;\r\n}\r\n.newProject {\r\n    margin-right: 27vh;\r\n    margin-top: 2vh;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





// import { projectList } from './projects';


const body = document.querySelector('body');
const createPage = function (projectTitle = 'Example Project') {
  const html = `
<div class="container">
<div class="header"><h1>✔️ToDo</h1></div>
<div class="body">
    <form class="modal hidden">
        <h1>Add an item to this ToDo list</h1>
        <input type="text" class="title" placeholder="title" required>
        <input type="text" class="description" placeholder="description" required>
        <input type="date" class="dueDate" placeholder="dueDate" required>
        <label for="priority">Priority:</label>

        <select name="priorityInput" id="priorityInput">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="ASAP">ASAP</option>
        </select>

        <button type="submit" class="btn-submit">Add item</button>
    </form>
    <div class="left">
    <button class="newProject"> +</button>
    <ul class="projects">
        <li class="projectListItem">${projectTitle}</li>
    </ul>
    </div>
    <div class="right">
    <button class="addItem"> +</button>
    <h1>Tasks</h1>
    <div>
    <ul class="tasks">
    </ul>
    </div>
    </div>
</div>
<div class="overlay hidden"></div>
</div>`;

  body.innerHTML = html;
};
createPage();

// all the query selectors for handling the form input
const form = document.querySelector('form');
const titleInput = document.querySelector('.title');
const descriptionInput = document.querySelector('.description');
const dueDateInput = document.querySelector('.dueDate');
const priorityInput = document.querySelector('#priorityInput');
const projectDOM = document.querySelector('.projects');

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');

// selectors to control the 2 sides of the page
const leftSide = document.querySelector('.left');
const taskList = document.querySelector('.tasks');

let currentProject = 0;

//////////////////////////////////////////////////////////////////
// All task related functions/methods (right side of app)
addItem.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  form.classList.remove('hidden');
});
const closeModal = function () {
  overlay.classList.add('hidden');
  form.classList.add('hidden');
};
overlay.addEventListener('click', () => closeModal());

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  //   console.log(priorityInput);
  const priority = priorityInput.value;
  form.reset();

  //pass values into newItem module
  _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].newTask(currentProject, title, description, dueDate, priority);
  //   console.log(...itemList);
  displayTasks(currentProject);
  closeModal();
});

// display values in DOM
function displayProjects() {
  projectDOM.innerHTML = '';
  const projectsHtml = _projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList.map((project, i) => {
      return `
      <li class="projectListItem" data_project="${i}">${project.title}</li>`;
    })
    .join('');
  projectDOM.innerHTML = projectsHtml;
  displayTasks();
}

function displayTasks(projectId = 0) {
  taskList.innerHTML = '';
  const tasksHtml = _projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[projectId].tasks
    .map((item, i) => {
      return `
      <li>
      <div class="listItem data_id="${i}">${item.title}</div> <div class="itemInfo" data_id="${i}">${item.dueDate} <span class="edit">Edit</span><span class="descriptionIcon">i</span> <span class="${item.priority}">${item.priority}</span><button class="remove">Remove</div>
      </li>`;
    })
    .join('');
  taskList.innerHTML = tasksHtml;
}
taskList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(e), displayTasks();
  }
  if (e.target.classList.contains('descriptionIcon')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
    <div class="modal details">
    <div class="closeModal">X</div>
        <div><h3>Title:</h3> ${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].title}</div>
        <div><h3>Description:</h3> </div>
        <div>${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].description}</div>
        <div><h3>Due Date:</h3> ${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].dueDate}</div>
        <div><h3>Priority:</h3> ${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].priority}</div>
    </div>`;
    body.insertAdjacentHTML('afterbegin', html);
    const closeModalWindow = document.querySelector('.closeModal');
    closeModalWindow.addEventListener('click', () => {
      const descriptionDetails = document.querySelector('.modal.details');
      descriptionDetails.remove();
      closeModal();
    });
  }
  if (e.target.classList.contains('edit')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
      <form class="modal editor">
          <div class="closeModal">X</div>
          <h1>Edit this ToDo list</h1>
          <input type="text" class="title" value="${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].title}">
          <textarea class="editDescription" rows="3" style="width: 100%; box-sizing: border-box;">${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].description}</textarea>
          <input type="date" class="dueDate" value="${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].dueDate}">
          <label for="priority">Priority:</label>

          <select name="priorityInput" id="priorityInput">
              <option>${_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList[currentProject].tasks[itemId].priority}</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="ASAP">ASAP</option>
          </select>

          <button type="submit" class="btn-submit">Confirm Edit</button>
  </form>`;
    body.insertAdjacentHTML('afterbegin', html);
    const closeModalWindow = document.querySelector('.closeModal');
    closeModalWindow.addEventListener('click', () => {
      const EditDetails = document.querySelector('.modal.editor');
      EditDetails.remove();
      closeModal();
      return;
    });
    const editSubmit = document.querySelector('.editor');
    const titleInput2 = document.querySelector('.title');
    const descriptionInput2 = document.querySelector('.editDescription');
    const dueDateInput2 = document.querySelector('.dueDate');
    const priorityInput2 = document.querySelector('#priorityInput');
    editSubmit.addEventListener('submit', e => {
      e.preventDefault();
      _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask(
        currentProject,
        itemId,
        titleInput2.value,
        descriptionInput2.value,
        dueDateInput2.value,
        priorityInput2.value
      );
      displayTasks(currentProject);
      closeModal();
      editSubmit.remove();
    });
  }
});

//initialises the app
function init() {
  displayProjects();
  displayTasks();
}

init();
/////////////////////////////////////////////////////////////////////////
// All project related functions/methods (right side of app)
const addProject = document.querySelector('.newProject');
addProject.addEventListener('click', () => {
  let html = `
  <form class="modal project">
  <button class="exit">X</button>
  <p>Create a New Project</p>
    <input type="text" class ="title" placeholder="title" required>
    <button type="submit">Create</button>
  </div>
    
    `;
  overlay.classList.remove('hidden');
  body.insertAdjacentHTML('afterbegin', html);
  const close = document.querySelector('.exit');
  close.addEventListener('click', () => {
    const newProject = document.querySelector('.modal.project');
    newProject.remove();
    closeModal();
  });
  const projectAdd = document.querySelector('.project');
  projectAdd.addEventListener('submit', e => {
    e.preventDefault();
    const projectTitle = document.querySelector('.title');

    console.log(projectTitle.value);
    _projects__WEBPACK_IMPORTED_MODULE_2__["default"].newProject(projectTitle.value);
    const newProject = document.querySelector('.modal.project');
    newProject.remove();
    closeModal();
  });
});

// controls project buttons, changes task list and styling
projectDOM.addEventListener('click', e => {
  if (e.target.classList.contains('projectListItem')) {
    let projectId = e.target.getAttribute('data_project');
    currentProject = projectId;
    const projectBtn = document.querySelectorAll('.projectListItem');
    projectBtn.forEach(button => {
      button.addEventListener('click', e => {
        projectBtn.forEach(b => b.classList.remove('clicked'));
      });
      e.target.classList.add('clicked');
      displayTasks(projectId);
    });
  }
});
////////////////////////////////////////////////////
//  Project [
//  name
//  index

//  {
//  tasks
//  name
//  description
//  dueDate
//  Priority
//  }
//  ]

////////////////////////////////////
// TODO
// create todo project functionality, change code to link tasks into projects, then you're done!


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");




const projects = (() => {
  let projectList = [];
  class Project {
    constructor(title) {
      this.title = title;
      this.tasks = [];
    }
  }
  projectList = [
    {
      title: 'New Project',
      tasks: [
        {
          title: 'Delete a new project',
          description: 'the same as above, but a little bit longer',
          dueDate: '2023-10-10',
          priority: 'High',
        },
      ],
    },
    {
      title: 'New Project part 2',
      tasks: [
        {
          title: 'Add a new project',
          description:
            'not the same as above, but also a little bit longer too',
          dueDate: '2022-01-11',
          priority: 'Low',
        },
      ],
    },
  ];
  function newProject(title) {
    const project = new Project(title);
    projectList.push(project);
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
  }
  return { newProject, projectList };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "itemList": () => (/* binding */ itemList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const itemList = [
  {
    title: 'hello',
    description: 'This is a more detailed Description',
    dueDate: '2023-02-23',
    priority: 'High',
  },
];
const tasks = (() => {
  class Task {
    constructor(title, description, dueDate, priority) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }
  function newTask(currentProject, title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    _projects__WEBPACK_IMPORTED_MODULE_1__["default"].projectList[currentProject].tasks.push(task);
  }
  function deleteTask(e) {
    let itemId = e.target.parentElement.getAttribute('data_id');
    _projects__WEBPACK_IMPORTED_MODULE_1__["default"].projectList[___WEBPACK_IMPORTED_MODULE_0__.currentProject].tasks.splice(itemId, 1);
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayTasks)(___WEBPACK_IMPORTED_MODULE_0__.currentProject);
  }
  function updateTask(
    currentProject,
    itemId,
    title,
    description,
    dueDate,
    priority
  ) {
    _projects__WEBPACK_IMPORTED_MODULE_1__["default"].projectList[currentProject].tasks[itemId] = {
      title,
      description,
      dueDate,
      priority,
    };
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayTasks)(currentProject);
  }
  return { newTask, deleteTask, updateTask };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1ibHVlLWJnLWRhcms6IHJnYmEoMCwzLDM2LDEpO1xcclxcbiAgICAtLWJsdWUtYmctbGlnaHQ6IHJnYmEoOSw5MCwxMjEsMSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsMywzNiwxKSAwJSwgcmdiYSg5LDkwLDEyMSwxKSA5NCUpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiA4MnZoO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcbi5sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cXHJcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXHJcXG59XFxyXFxuLnJpZ2h0e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLXJvdzogMS80O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5yaWdodCB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBnYXA6IDF2aDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubGlzdEl0ZW0ge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TGlzdEl0ZW17XFxyXFxuICAgIHdpZHRoOiAgMzB2aDtcXHJcXG4gICAgaGVpZ2h0OiA1dmg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxdmg7XFxyXFxufVxcclxcbi5jbGlja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZy1saWdodCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuLnByb2plY3RMaXN0SXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFkZEl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxyXFxufVxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAydmg7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgd2lkdGg6IDQwdmg7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBib3R0b206IDQwJTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgICByaWdodDogNDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiA2O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgfVxcclxcbmZvcm0ge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuZm9ybSBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uSWNvbiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbkljb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50YXNrcyBsaSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjB2aDtcXHJcXG59XFxyXFxuLmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIHBhZGRpbmc6IDR2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuLnRhc2tzIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE3Nyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnJlbW92ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLml0ZW1JbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAydmg7XFxyXFxufVxcclxcbi5Mb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG4uTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcXHJcXG59XFxyXFxuLkhpZ2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3MzE2O1xcclxcbn1cXHJcXG4uQVNBUCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxufVxcclxcbi5Mb3csIC5NZWRpdW0sIC5IaWdoLCAuQVNBUCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3YzBmO1xcclxcbn1cXHJcXG4ucmVtb3ZlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbn1cXHJcXG4uY2xvc2VNb2RhbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuLmVkaXRvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbn1cXHJcXG4uZWRpdERlc2NyaXB0aW9uIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2x1bW4tY291bnQ6IGluaXRpYWw7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ubmV3UHJvamVjdCB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjd2aDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGlDQUFpQztFQUNuQzs7QUFFRjtJQUNJLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDRFQUE0RTtJQUM1RSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWJsdWUtYmctZGFyazogcmdiYSgwLDMsMzYsMSk7XFxyXFxuICAgIC0tYmx1ZS1iZy1saWdodDogcmdiYSg5LDkwLDEyMSwxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE1dmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzLDM2LDEpIDAlLCByZ2JhKDksOTAsMTIxLDEpIDk0JSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDgydmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuLmxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgICBncmlkLXJvdzogMS80O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcclxcbn1cXHJcXG4ucmlnaHR7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdyaWQtcm93OiAxLzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJpZ2h0IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5saXN0SXRlbSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0SXRlbXtcXHJcXG4gICAgd2lkdGg6ICAzMHZoO1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDF2aDtcXHJcXG59XFxyXFxuLmNsaWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWRkSXRlbSB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXHJcXG59XFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICB3aWR0aDogNDB2aDtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGJvdHRvbTogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIHJpZ2h0OiA0MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICB9XFxyXFxuZm9ybSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5mb3JtIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb25JY29uIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uSWNvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRhc2tzIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHZoO1xcclxcbn1cXHJcXG4uZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG4gICAgcGFkZGluZzogNHZoO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG4udGFza3MgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTc3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uaXRlbUluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuLkxvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcbi5NZWRpdW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ZTBiO1xcclxcbn1cXHJcXG4uSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTczMTY7XFxyXFxufVxcclxcbi5BU0FQIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG59XFxyXFxuLkxvdywgLk1lZGl1bSwgLkhpZ2gsIC5BU0FQIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5lZGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuLmVkaXQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDdjMGY7XFxyXFxufVxcclxcbi5yZW1vdmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxufVxcclxcbi5jbG9zZU1vZGFsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4uZWRpdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxdmg7XFxyXFxufVxcclxcbi5lZGl0RGVzY3JpcHRpb24ge1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbHVtbi1jb3VudDogaW5pdGlhbDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyN3ZoO1xcclxcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzJztcclxuaW1wb3J0IHsgdXBkYXRlVGFzayB9IGZyb20gJy4vdGFza3MnO1xyXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XHJcbi8vIGltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSAnLi9wcm9qZWN0cyc7XHJcbmltcG9ydCB7IGlzRXhpc3RzIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgY3JlYXRlUGFnZSA9IGZ1bmN0aW9uIChwcm9qZWN0VGl0bGUgPSAnRXhhbXBsZSBQcm9qZWN0Jykge1xyXG4gIGNvbnN0IGh0bWwgPSBgXHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuPGRpdiBjbGFzcz1cImhlYWRlclwiPjxoMT7inJTvuI9Ub0RvPC9oMT48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvZHlcIj5cclxuICAgIDxmb3JtIGNsYXNzPVwibW9kYWwgaGlkZGVuXCI+XHJcbiAgICAgICAgPGgxPkFkZCBhbiBpdGVtIHRvIHRoaXMgVG9EbyBsaXN0PC9oMT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkdWVEYXRlXCIgcGxhY2Vob2xkZXI9XCJkdWVEYXRlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlJbnB1dFwiIGlkPVwicHJpb3JpdHlJbnB1dFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBU0FQXCI+QVNBUDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0bi1zdWJtaXRcIj5BZGQgaXRlbTwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJuZXdQcm9qZWN0XCI+ICs8L2J1dHRvbj5cclxuICAgIDx1bCBjbGFzcz1cInByb2plY3RzXCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdExpc3RJdGVtXCI+JHtwcm9qZWN0VGl0bGV9PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZEl0ZW1cIj4gKzwvYnV0dG9uPlxyXG4gICAgPGgxPlRhc2tzPC9oMT5cclxuICAgIDxkaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJ0YXNrc1wiPlxyXG4gICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwib3ZlcmxheSBoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgYm9keS5pbm5lckhUTUwgPSBodG1sO1xyXG59O1xyXG5jcmVhdGVQYWdlKCk7XHJcblxyXG4vLyBhbGwgdGhlIHF1ZXJ5IHNlbGVjdG9ycyBmb3IgaGFuZGxpbmcgdGhlIGZvcm0gaW5wdXRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XHJcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlJbnB1dCcpO1xyXG5jb25zdCBwcm9qZWN0RE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcblxyXG4vLyBBZGQgSXRlbSBidXR0b24sIGV2ZW50IGxpc3RlbmVyIGFuZCBmdW5jaW9uIGNhbGxcclxuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRJdGVtJyk7XHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xyXG5cclxuLy8gc2VsZWN0b3JzIHRvIGNvbnRyb2wgdGhlIDIgc2lkZXMgb2YgdGhlIHBhZ2VcclxuY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdCcpO1xyXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdCA9IDA7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQWxsIHRhc2sgcmVsYXRlZCBmdW5jdGlvbnMvbWV0aG9kcyAocmlnaHQgc2lkZSBvZiBhcHApXHJcbmFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG59KTtcclxuY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn07XHJcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFsKCkpO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwcmlvcml0eUlucHV0KTtcclxuICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG5cclxuICAvL3Bhc3MgdmFsdWVzIGludG8gbmV3SXRlbSBtb2R1bGVcclxuICB0YXNrcy5uZXdUYXNrKGN1cnJlbnRQcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAvLyAgIGNvbnNvbGUubG9nKC4uLml0ZW1MaXN0KTtcclxuICBkaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xyXG4gIGNsb3NlTW9kYWwoKTtcclxufSk7XHJcblxyXG4vLyBkaXNwbGF5IHZhbHVlcyBpbiBET01cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cygpIHtcclxuICBwcm9qZWN0RE9NLmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IHByb2plY3RzSHRtbCA9IHByb2plY3RzLnByb2plY3RMaXN0XHJcbiAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgIDxsaSBjbGFzcz1cInByb2plY3RMaXN0SXRlbVwiIGRhdGFfcHJvamVjdD1cIiR7aX1cIj4ke3Byb2plY3QudGl0bGV9PC9saT5gO1xyXG4gICAgfSlcclxuICAgIC5qb2luKCcnKTtcclxuICBwcm9qZWN0RE9NLmlubmVySFRNTCA9IHByb2plY3RzSHRtbDtcclxuICBkaXNwbGF5VGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0SWQgPSAwKSB7XHJcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgdGFza3NIdG1sID0gcHJvamVjdHMucHJvamVjdExpc3RbcHJvamVjdElkXS50YXNrc1xyXG4gICAgLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICByZXR1cm4gYFxyXG4gICAgICA8bGk+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbSBkYXRhX2lkPVwiJHtpfVwiPiR7aXRlbS50aXRsZX08L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1JbmZvXCIgZGF0YV9pZD1cIiR7aX1cIj4ke2l0ZW0uZHVlRGF0ZX0gPHNwYW4gY2xhc3M9XCJlZGl0XCI+RWRpdDwvc3Bhbj48c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uSWNvblwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVwiJHtpdGVtLnByaW9yaXR5fVwiPiR7aXRlbS5wcmlvcml0eX08L3NwYW4+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPlJlbW92ZTwvZGl2PlxyXG4gICAgICA8L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJycpO1xyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9IHRhc2tzSHRtbDtcclxufVxyXG50YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKSB7XHJcbiAgICB0YXNrcy5kZWxldGVUYXNrKGUpLCBkaXNwbGF5VGFza3MoKTtcclxuICB9XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVzY3JpcHRpb25JY29uJykpIHtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBsZXQgaXRlbUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGFfaWQnKTtcclxuICAgIGxldCBodG1sID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsIGRldGFpbHNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjbG9zZU1vZGFsXCI+WDwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPlRpdGxlOjwvaDM+ICR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdj48aDM+RGVzY3JpcHRpb246PC9oMz4gPC9kaXY+XHJcbiAgICAgICAgPGRpdj4ke3Byb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrc1tpdGVtSWRdLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPkR1ZSBEYXRlOjwvaDM+ICR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0uZHVlRGF0ZX08L2Rpdj5cclxuICAgICAgICA8ZGl2PjxoMz5Qcmlvcml0eTo8L2gzPiAke3Byb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrc1tpdGVtSWRdLnByaW9yaXR5fTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XHJcbiAgICBjb25zdCBjbG9zZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlTW9kYWwnKTtcclxuICAgIGNsb3NlTW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5kZXRhaWxzJyk7XHJcbiAgICAgIGRlc2NyaXB0aW9uRGV0YWlscy5yZW1vdmUoKTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSkge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGxldCBpdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YV9pZCcpO1xyXG4gICAgbGV0IGh0bWwgPSBgXHJcbiAgICAgIDxmb3JtIGNsYXNzPVwibW9kYWwgZWRpdG9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VNb2RhbFwiPlg8L2Rpdj5cclxuICAgICAgICAgIDxoMT5FZGl0IHRoaXMgVG9EbyBsaXN0PC9oMT5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGl0bGVcIiB2YWx1ZT1cIiR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0udGl0bGV9XCI+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJlZGl0RGVzY3JpcHRpb25cIiByb3dzPVwiM1wiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7XCI+JHtwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3NbaXRlbUlkXS5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkdWVEYXRlXCIgdmFsdWU9XCIke3Byb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrc1tpdGVtSWRdLmR1ZURhdGV9XCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5SW5wdXRcIiBpZD1cInByaW9yaXR5SW5wdXRcIj5cclxuICAgICAgICAgICAgICA8b3B0aW9uPiR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0ucHJpb3JpdHl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVNBUFwiPkFTQVA8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuLXN1Ym1pdFwiPkNvbmZpcm0gRWRpdDwvYnV0dG9uPlxyXG4gIDwvZm9ybT5gO1xyXG4gICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcclxuICAgIGNvbnN0IGNsb3NlTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VNb2RhbCcpO1xyXG4gICAgY2xvc2VNb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgRWRpdERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZWRpdG9yJyk7XHJcbiAgICAgIEVkaXREZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZWRpdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3InKTtcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0RGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlJbnB1dCcpO1xyXG4gICAgZWRpdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0YXNrcy51cGRhdGVUYXNrKFxyXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxyXG4gICAgICAgIGl0ZW1JZCxcclxuICAgICAgICB0aXRsZUlucHV0Mi52YWx1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0Mi52YWx1ZSxcclxuICAgICAgICBkdWVEYXRlSW5wdXQyLnZhbHVlLFxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQyLnZhbHVlXHJcbiAgICAgICk7XHJcbiAgICAgIGRpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgZWRpdFN1Ym1pdC5yZW1vdmUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG4vL2luaXRpYWxpc2VzIHRoZSBhcHBcclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICBkaXNwbGF5VGFza3MoKTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEFsbCBwcm9qZWN0IHJlbGF0ZWQgZnVuY3Rpb25zL21ldGhvZHMgKHJpZ2h0IHNpZGUgb2YgYXBwKVxyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKTtcclxuYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBsZXQgaHRtbCA9IGBcclxuICA8Zm9ybSBjbGFzcz1cIm1vZGFsIHByb2plY3RcIj5cclxuICA8YnV0dG9uIGNsYXNzPVwiZXhpdFwiPlg8L2J1dHRvbj5cclxuICA8cD5DcmVhdGUgYSBOZXcgUHJvamVjdDwvcD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzID1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgICBcclxuICAgIGA7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xyXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQnKTtcclxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwucHJvamVjdCcpO1xyXG4gICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9KTtcclxuICBjb25zdCBwcm9qZWN0QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKTtcclxuICBwcm9qZWN0QWRkLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdFRpdGxlLnZhbHVlKTtcclxuICAgIHByb2plY3RzLm5ld1Byb2plY3QocHJvamVjdFRpdGxlLnZhbHVlKTtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwucHJvamVjdCcpO1xyXG4gICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcclxuICAgIGNsb3NlTW9kYWwoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyBjb250cm9scyBwcm9qZWN0IGJ1dHRvbnMsIGNoYW5nZXMgdGFzayBsaXN0IGFuZCBzdHlsaW5nXHJcbnByb2plY3RET00uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0TGlzdEl0ZW0nKSkge1xyXG4gICAgbGV0IHByb2plY3RJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YV9wcm9qZWN0Jyk7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJZDtcclxuICAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdExpc3RJdGVtJyk7XHJcbiAgICBwcm9qZWN0QnRuLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgcHJvamVjdEJ0bi5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJykpO1xyXG4gICAgICB9KTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xyXG4gICAgICBkaXNwbGF5VGFza3MocHJvamVjdElkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gIFByb2plY3QgW1xyXG4vLyAgbmFtZVxyXG4vLyAgaW5kZXhcclxuXHJcbi8vICB7XHJcbi8vICB0YXNrc1xyXG4vLyAgbmFtZVxyXG4vLyAgZGVzY3JpcHRpb25cclxuLy8gIGR1ZURhdGVcclxuLy8gIFByaW9yaXR5XHJcbi8vICB9XHJcbi8vICBdXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gVE9ET1xyXG4vLyBjcmVhdGUgdG9kbyBwcm9qZWN0IGZ1bmN0aW9uYWxpdHksIGNoYW5nZSBjb2RlIHRvIGxpbmsgdGFza3MgaW50byBwcm9qZWN0cywgdGhlbiB5b3UncmUgZG9uZSFcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheVRhc2tzLCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuJztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcclxuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcclxuICBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm9qZWN0TGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdOZXcgUHJvamVjdCcsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdEZWxldGUgYSBuZXcgcHJvamVjdCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzYW1lIGFzIGFib3ZlLCBidXQgYSBsaXR0bGUgYml0IGxvbmdlcicsXHJcbiAgICAgICAgICBkdWVEYXRlOiAnMjAyMy0xMC0xMCcsXHJcbiAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ05ldyBQcm9qZWN0IHBhcnQgMicsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBZGQgYSBuZXcgcHJvamVjdCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ25vdCB0aGUgc2FtZSBhcyBhYm92ZSwgYnV0IGFsc28gYSBsaXR0bGUgYml0IGxvbmdlciB0b28nLFxyXG4gICAgICAgICAgZHVlRGF0ZTogJzIwMjItMDEtMTEnLFxyXG4gICAgICAgICAgcHJpb3JpdHk6ICdMb3cnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgZnVuY3Rpb24gbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgbmV3UHJvamVjdCwgcHJvamVjdExpc3QgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xyXG4iLCJpbXBvcnQgeyBkaXNwbGF5VGFza3MsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSAnLic7XHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtTGlzdCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ2hlbGxvJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIG1vcmUgZGV0YWlsZWQgRGVzY3JpcHRpb24nLFxyXG4gICAgZHVlRGF0ZTogJzIwMjMtMDItMjMnLFxyXG4gICAgcHJpb3JpdHk6ICdIaWdoJyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCB0YXNrcyA9ICgoKSA9PiB7XHJcbiAgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld1Rhc2soY3VycmVudFByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgIHByb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrcy5wdXNoKHRhc2spO1xyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuICAgIGxldCBpdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YV9pZCcpO1xyXG4gICAgcHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzLnNwbGljZShpdGVtSWQsIDEpO1xyXG4gICAgZGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gdXBkYXRlVGFzayhcclxuICAgIGN1cnJlbnRQcm9qZWN0LFxyXG4gICAgaXRlbUlkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eVxyXG4gICkge1xyXG4gICAgcHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0gPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHksXHJcbiAgICB9O1xyXG4gICAgZGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICB9XHJcbiAgcmV0dXJuIHsgbmV3VGFzaywgZGVsZXRlVGFzaywgdXBkYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9