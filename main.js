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
  // saves current state of projects/tasks to local storage
  localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList));
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
  // saves current state of projects/tasks to local storage
  localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_2__["default"].projectList));
}

// Edit and remove task functions
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
// All project related functions/methods (left side of app)
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
  // if local storage is empty, generates a sample project with tasks
  if (localStorage.getItem('projects') === null) {
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
  } else {
    // otherwise, loads projects from local storage
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    projectList = storedProjects;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWJsdWUtYmctZGFyazogcmdiYSgwLDMsMzYsMSk7XFxyXFxuICAgIC0tYmx1ZS1iZy1saWdodDogcmdiYSg5LDkwLDEyMSwxKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE1dmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwzLDM2LDEpIDAlLCByZ2JhKDksOTAsMTIxLDEpIDk0JSk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDgydmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuLmxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xcclxcbiAgICBncmlkLXJvdzogMS80O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcclxcbn1cXHJcXG4ucmlnaHR7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdyaWQtcm93OiAxLzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJpZ2h0IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5saXN0SXRlbSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RMaXN0SXRlbXtcXHJcXG4gICAgd2lkdGg6ICAzMHZoO1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDF2aDtcXHJcXG59XFxyXFxuLmNsaWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbn1cXHJcXG4ucHJvamVjdExpc3RJdGVtOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWRkSXRlbSB7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDQvNTtcXHJcXG59XFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcXHJcXG4gICAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgICB3aWR0aDogNDB2aDtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuICAgIGJvdHRvbTogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIHJpZ2h0OiA0MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHotaW5kZXg6IDY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbi5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICB9XFxyXFxuZm9ybSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5mb3JtIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb25JY29uIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uSWNvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRhc2tzIGxpIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHZoO1xcclxcbn1cXHJcXG4uZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG4gICAgcGFkZGluZzogNHZoO1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cXHJcXG4udGFza3MgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTc3KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucmVtb3ZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uaXRlbUluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJ2aDtcXHJcXG59XFxyXFxuLkxvdyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcbi5NZWRpdW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5ZTBiO1xcclxcbn1cXHJcXG4uSGlnaCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTczMTY7XFxyXFxufVxcclxcbi5BU0FQIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG59XFxyXFxuLkxvdywgLk1lZGl1bSwgLkhpZ2gsIC5BU0FQIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5lZGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuLmVkaXQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDdjMGY7XFxyXFxufVxcclxcbi5yZW1vdmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxufVxcclxcbi5jbG9zZU1vZGFsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4uZWRpdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxdmg7XFxyXFxufVxcclxcbi5lZGl0RGVzY3JpcHRpb24ge1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbHVtbi1jb3VudDogaW5pdGlhbDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5uZXdQcm9qZWN0IHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyN3ZoO1xcclxcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsaUNBQWlDO0VBQ25DOztBQUVGO0lBQ0ksU0FBUztJQUNULGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsNEVBQTRFO0lBQzVFLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tYmx1ZS1iZy1kYXJrOiByZ2JhKDAsMywzNiwxKTtcXHJcXG4gICAgLS1ibHVlLWJnLWxpZ2h0OiByZ2JhKDksOTAsMTIxLDEpO1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogMTV2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLDMsMzYsMSkgMCUsIHJnYmEoOSw5MCwxMjEsMSkgOTQlKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGhlaWdodDogODJ2aDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbn1cXHJcXG4ubGVmdCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXFxyXFxuICAgIGdyaWQtcm93OiAxLzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjY7XFxyXFxufVxcclxcbi5yaWdodHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucmlnaHQgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZ2FwOiAxdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmxpc3RJdGVtIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdExpc3RJdGVte1xcclxcbiAgICB3aWR0aDogIDMwdmg7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMXZoO1xcclxcbn1cXHJcXG4uY2xpY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYmctbGlnaHQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcbi5wcm9qZWN0TGlzdEl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hZGRJdGVtIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbn1cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xcclxcbiAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgIHdpZHRoOiA0MHZoO1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgYm90dG9tOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgcmlnaHQ6IDQwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgei1pbmRleDogNjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gIH1cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbmZvcm0gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbkljb24ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDV2aDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb25JY29uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGFza3MgbGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwdmg7XFxyXFxufVxcclxcbi5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICBwYWRkaW5nOiA0dmg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcbi50YXNrcyBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNzcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5yZW1vdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5pdGVtSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnZoO1xcclxcbn1cXHJcXG4uTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuLk1lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XFxyXFxufVxcclxcbi5IaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzMxNjtcXHJcXG59XFxyXFxuLkFTQVAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbn1cXHJcXG4uTG93LCAuTWVkaXVtLCAuSGlnaCwgLkFTQVAge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmVkaXQge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgd2lkdGg6IDV2aDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG4uZWRpdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRkN2MwZjtcXHJcXG59XFxyXFxuLnJlbW92ZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MWMxYztcXHJcXG59XFxyXFxuLmNsb3NlTW9kYWwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxufVxcclxcbi5lZGl0b3Ige1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDF2aDtcXHJcXG59XFxyXFxuLmVkaXREZXNjcmlwdGlvbiB7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgY29sdW1uLWNvdW50OiBpbml0aWFsO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLm5ld1Byb2plY3Qge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI3dmg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHRhc2tzIGZyb20gJy4vdGFza3MnO1xyXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCBjcmVhdGVQYWdlID0gZnVuY3Rpb24gKHByb2plY3RUaXRsZSA9ICdFeGFtcGxlIFByb2plY3QnKSB7XHJcbiAgY29uc3QgaHRtbCA9IGBcclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG48ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PGgxPuKclO+4j1RvRG88L2gxPjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwiYm9keVwiPlxyXG4gICAgPGZvcm0gY2xhc3M9XCJtb2RhbCBoaWRkZW5cIj5cclxuICAgICAgICA8aDE+QWRkIGFuIGl0ZW0gdG8gdGhpcyBUb0RvIGxpc3Q8L2gxPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiZGVzY3JpcHRpb25cIiByZXF1aXJlZD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImR1ZURhdGVcIiBwbGFjZWhvbGRlcj1cImR1ZURhdGVcIiByZXF1aXJlZD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxyXG5cclxuICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eUlucHV0XCIgaWQ9XCJwcmlvcml0eUlucHV0XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFTQVBcIj5BU0FQPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuLXN1Ym1pdFwiPkFkZCBpdGVtPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5ld1Byb2plY3RcIj4gKzwvYnV0dG9uPlxyXG4gICAgPHVsIGNsYXNzPVwicHJvamVjdHNcIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJwcm9qZWN0TGlzdEl0ZW1cIj4ke3Byb2plY3RUaXRsZX08L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiYWRkSXRlbVwiPiArPC9idXR0b24+XHJcbiAgICA8aDE+VGFza3M8L2gxPlxyXG4gICAgPGRpdj5cclxuICAgIDx1bCBjbGFzcz1cInRhc2tzXCI+XHJcbiAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJvdmVybGF5IGhpZGRlblwiPjwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICBib2R5LmlubmVySFRNTCA9IGh0bWw7XHJcbn07XHJcbmNyZWF0ZVBhZ2UoKTtcclxuXHJcbi8vIGFsbCB0aGUgcXVlcnkgc2VsZWN0b3JzIGZvciBoYW5kbGluZyB0aGUgZm9ybSBpbnB1dFxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5jb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcclxuY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUlucHV0Jyk7XHJcbmNvbnN0IHByb2plY3RET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuXHJcbi8vIEFkZCBJdGVtIGJ1dHRvbiwgZXZlbnQgbGlzdGVuZXIgYW5kIGZ1bmNpb24gY2FsbFxyXG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEl0ZW0nKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XHJcblxyXG4vLyBzZWxlY3RvcnMgdG8gY29udHJvbCB0aGUgMiBzaWRlcyBvZiB0aGUgcGFnZVxyXG5jb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0Jyk7XHJcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gMDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBBbGwgdGFzayByZWxhdGVkIGZ1bmN0aW9ucy9tZXRob2RzIChyaWdodCBzaWRlIG9mIGFwcClcclxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufTtcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHByaW9yaXR5SW5wdXQpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICBmb3JtLnJlc2V0KCk7XHJcblxyXG4gIC8vcGFzcyB2YWx1ZXMgaW50byBuZXdJdGVtIG1vZHVsZVxyXG4gIHRhc2tzLm5ld1Rhc2soY3VycmVudFByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIC8vICAgY29uc29sZS5sb2coLi4uaXRlbUxpc3QpO1xyXG4gIGRpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgY2xvc2VNb2RhbCgpO1xyXG59KTtcclxuXHJcbi8vIGRpc3BsYXkgdmFsdWVzIGluIERPTVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xyXG4gIHByb2plY3RET00uaW5uZXJIVE1MID0gJyc7XHJcbiAgY29uc3QgcHJvamVjdHNIdG1sID0gcHJvamVjdHMucHJvamVjdExpc3RcclxuICAgIC5tYXAoKHByb2plY3QsIGkpID0+IHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgPGxpIGNsYXNzPVwicHJvamVjdExpc3RJdGVtXCIgZGF0YV9wcm9qZWN0PVwiJHtpfVwiPiR7cHJvamVjdC50aXRsZX08L2xpPmA7XHJcbiAgICB9KVxyXG4gICAgLmpvaW4oJycpO1xyXG4gIHByb2plY3RET00uaW5uZXJIVE1MID0gcHJvamVjdHNIdG1sO1xyXG4gIC8vIHNhdmVzIGN1cnJlbnQgc3RhdGUgb2YgcHJvamVjdHMvdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLnByb2plY3RMaXN0KSk7XHJcbiAgZGlzcGxheVRhc2tzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdElkID0gMCkge1xyXG4gIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIGNvbnN0IHRhc2tzSHRtbCA9IHByb2plY3RzLnByb2plY3RMaXN0W3Byb2plY3RJZF0udGFza3NcclxuICAgIC5tYXAoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgPGxpPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdEl0ZW0gZGF0YV9pZD1cIiR7aX1cIj4ke2l0ZW0udGl0bGV9PC9kaXY+IDxkaXYgY2xhc3M9XCJpdGVtSW5mb1wiIGRhdGFfaWQ9XCIke2l9XCI+JHtpdGVtLmR1ZURhdGV9IDxzcGFuIGNsYXNzPVwiZWRpdFwiPkVkaXQ8L3NwYW4+PHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvbkljb25cIj5pPC9zcGFuPiA8c3BhbiBjbGFzcz1cIiR7aXRlbS5wcmlvcml0eX1cIj4ke2l0ZW0ucHJpb3JpdHl9PC9zcGFuPjxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5SZW1vdmU8L2Rpdj5cclxuICAgICAgPC9saT5gO1xyXG4gICAgfSlcclxuICAgIC5qb2luKCcnKTtcclxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSB0YXNrc0h0bWw7XHJcbiAgLy8gc2F2ZXMgY3VycmVudCBzdGF0ZSBvZiBwcm9qZWN0cy90YXNrcyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMucHJvamVjdExpc3QpKTtcclxufVxyXG5cclxuLy8gRWRpdCBhbmQgcmVtb3ZlIHRhc2sgZnVuY3Rpb25zXHJcbnRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykpIHtcclxuICAgIHRhc2tzLmRlbGV0ZVRhc2soZSksIGRpc3BsYXlUYXNrcygpO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwdGlvbkljb24nKSkge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGxldCBpdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YV9pZCcpO1xyXG4gICAgbGV0IGh0bWwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZGV0YWlsc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsb3NlTW9kYWxcIj5YPC9kaXY+XHJcbiAgICAgICAgPGRpdj48aDM+VGl0bGU6PC9oMz4gJHtwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3NbaXRlbUlkXS50aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2PjxoMz5EZXNjcmlwdGlvbjo8L2gzPiA8L2Rpdj5cclxuICAgICAgICA8ZGl2PiR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgPGRpdj48aDM+RHVlIERhdGU6PC9oMz4gJHtwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3NbaXRlbUlkXS5kdWVEYXRlfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPlByaW9yaXR5OjwvaDM+ICR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0ucHJpb3JpdHl9PC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcclxuICAgIGNvbnN0IGNsb3NlTW9kYWxXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VNb2RhbCcpO1xyXG4gICAgY2xvc2VNb2RhbFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb25EZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmRldGFpbHMnKTtcclxuICAgICAgZGVzY3JpcHRpb25EZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpKSB7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgbGV0IGl0ZW1JZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhX2lkJyk7XHJcbiAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgPGZvcm0gY2xhc3M9XCJtb2RhbCBlZGl0b3JcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZU1vZGFsXCI+WDwvZGl2PlxyXG4gICAgICAgICAgPGgxPkVkaXQgdGhpcyBUb0RvIGxpc3Q8L2gxPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0aXRsZVwiIHZhbHVlPVwiJHtwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3NbaXRlbUlkXS50aXRsZX1cIj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImVkaXREZXNjcmlwdGlvblwiIHJvd3M9XCIzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIj4ke3Byb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrc1tpdGVtSWRdLmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7cHJvamVjdHMucHJvamVjdExpc3RbY3VycmVudFByb2plY3RdLnRhc2tzW2l0ZW1JZF0uZHVlRGF0ZX1cIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlJbnB1dFwiIGlkPVwicHJpb3JpdHlJbnB1dFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24+JHtwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3NbaXRlbUlkXS5wcmlvcml0eX08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBU0FQXCI+QVNBUDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tc3VibWl0XCI+Q29uZmlybSBFZGl0PC9idXR0b24+XHJcbiAgPC9mb3JtPmA7XHJcbiAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xyXG4gICAgY29uc3QgY2xvc2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZU1vZGFsJyk7XHJcbiAgICBjbG9zZU1vZGFsV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBFZGl0RGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5lZGl0b3InKTtcclxuICAgICAgRWRpdERldGFpbHMucmVtb3ZlKCk7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlZGl0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRvcicpO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXREZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUlucHV0Jyk7XHJcbiAgICBlZGl0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRhc2tzLnVwZGF0ZVRhc2soXHJcbiAgICAgICAgY3VycmVudFByb2plY3QsXHJcbiAgICAgICAgaXRlbUlkLFxyXG4gICAgICAgIHRpdGxlSW5wdXQyLnZhbHVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQyLnZhbHVlLFxyXG4gICAgICAgIGR1ZURhdGVJbnB1dDIudmFsdWUsXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dDIudmFsdWVcclxuICAgICAgKTtcclxuICAgICAgZGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICBlZGl0U3VibWl0LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vaW5pdGlhbGlzZXMgdGhlIGFwcFxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIGRpc3BsYXlQcm9qZWN0cygpO1xyXG4gIGRpc3BsYXlUYXNrcygpO1xyXG59XHJcblxyXG5pbml0KCk7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQWxsIHByb2plY3QgcmVsYXRlZCBmdW5jdGlvbnMvbWV0aG9kcyAobGVmdCBzaWRlIG9mIGFwcClcclxuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qZWN0Jyk7XHJcbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbGV0IGh0bWwgPSBgXHJcbiAgPGZvcm0gY2xhc3M9XCJtb2RhbCBwcm9qZWN0XCI+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cImV4aXRcIj5YPC9idXR0b24+XHJcbiAgPHA+Q3JlYXRlIGEgTmV3IFByb2plY3Q8L3A+XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcyA9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwidGl0bGVcIiByZXF1aXJlZD5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gICAgXHJcbiAgICBgO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcclxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGl0Jyk7XHJcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLnByb2plY3QnKTtcclxuICAgIG5ld1Byb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSk7XHJcbiAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Jyk7XHJcbiAgcHJvamVjdEFkZC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0cy5uZXdQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLnByb2plY3QnKTtcclxuICAgIG5ld1Byb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8gY29udHJvbHMgcHJvamVjdCBidXR0b25zLCBjaGFuZ2VzIHRhc2sgbGlzdCBhbmQgc3R5bGluZ1xyXG5wcm9qZWN0RE9NLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdExpc3RJdGVtJykpIHtcclxuICAgIGxldCBwcm9qZWN0SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGFfcHJvamVjdCcpO1xyXG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0SWQ7XHJcbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RMaXN0SXRlbScpO1xyXG4gICAgcHJvamVjdEJ0bi5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIHByb2plY3RCdG4uZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcclxuICAgICAgZGlzcGxheVRhc2tzKHByb2plY3RJZCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vICBQcm9qZWN0IFtcclxuLy8gIG5hbWVcclxuLy8gIGluZGV4XHJcblxyXG4vLyAge1xyXG4vLyAgdGFza3NcclxuLy8gIG5hbWVcclxuLy8gIGRlc2NyaXB0aW9uXHJcbi8vICBkdWVEYXRlXHJcbi8vICBQcmlvcml0eVxyXG4vLyAgfVxyXG4vLyAgXVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFRPRE9cclxuLy8gY3JlYXRlIHRvZG8gcHJvamVjdCBmdW5jdGlvbmFsaXR5LCBjaGFuZ2UgY29kZSB0byBsaW5rIHRhc2tzIGludG8gcHJvamVjdHMsIHRoZW4geW91J3JlIGRvbmUhXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLic7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9ICgoKSA9PiB7XHJcbiAgbGV0IHByb2plY3RMaXN0ID0gW107XHJcbiAgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gaWYgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSwgZ2VuZXJhdGVzIGEgc2FtcGxlIHByb2plY3Qgd2l0aCB0YXNrc1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSA9PT0gbnVsbCkge1xyXG4gICAgcHJvamVjdExpc3QgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ05ldyBQcm9qZWN0JyxcclxuICAgICAgICB0YXNrczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBhIG5ldyBwcm9qZWN0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICd0aGUgc2FtZSBhcyBhYm92ZSwgYnV0IGEgbGl0dGxlIGJpdCBsb25nZXInLFxyXG4gICAgICAgICAgICBkdWVEYXRlOiAnMjAyMy0xMC0xMCcsXHJcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ05ldyBQcm9qZWN0IHBhcnQgMicsXHJcbiAgICAgICAgdGFza3M6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBZGQgYSBuZXcgcHJvamVjdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICdub3QgdGhlIHNhbWUgYXMgYWJvdmUsIGJ1dCBhbHNvIGEgbGl0dGxlIGJpdCBsb25nZXIgdG9vJyxcclxuICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjItMDEtMTEnLFxyXG4gICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBvdGhlcndpc2UsIGxvYWRzIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcclxuICAgIHByb2plY3RMaXN0ID0gc3RvcmVkUHJvamVjdHM7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld1Byb2plY3QodGl0bGUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xyXG4gICAgZGlzcGxheVByb2plY3RzKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IG5ld1Byb2plY3QsIHByb2plY3RMaXN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzLCBjdXJyZW50UHJvamVjdCB9IGZyb20gJy4nO1xyXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbUxpc3QgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdoZWxsbycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBtb3JlIGRldGFpbGVkIERlc2NyaXB0aW9uJyxcclxuICAgIGR1ZURhdGU6ICcyMDIzLTAyLTIzJyxcclxuICAgIHByaW9yaXR5OiAnSGlnaCcsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgdGFza3MgPSAoKCkgPT4ge1xyXG4gIGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdUYXNrKGN1cnJlbnRQcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICBwcm9qZWN0cy5wcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0udGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XHJcbiAgICBsZXQgaXRlbUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGFfaWQnKTtcclxuICAgIHByb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrcy5zcGxpY2UoaXRlbUlkLCAxKTtcclxuICAgIGRpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVRhc2soXHJcbiAgICBjdXJyZW50UHJvamVjdCxcclxuICAgIGl0ZW1JZCxcclxuICAgIHRpdGxlLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHlcclxuICApIHtcclxuICAgIHByb2plY3RzLnByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XS50YXNrc1tpdGVtSWRdID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5LFxyXG4gICAgfTtcclxuICAgIGRpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IG5ld1Rhc2ssIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2sgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==