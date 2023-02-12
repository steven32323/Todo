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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n    margin: 0;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n.header {\r\n    height: 15vh;\r\n    width: 100%;\r\n    border: 1px solid black;\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n    text-align: left;\r\n}\r\n.body {\r\n    display: grid;\r\n    height: 82vh;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n.left {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid blue;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.right{\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid red;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n.right ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    gap: 1vh;\r\n    justify-content: space-between;\r\n}\r\n.listItem {\r\n    width: fit-content;\r\n    border-radius: 20px;\r\n}\r\n.clicked {\r\n    text-decoration: line-through;\r\n}\r\n.projectListItem{\r\n    width: 100%;\r\n    height: 5vh;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n.addItem {\r\n    height: fit-content;\r\n    width: fit-content;\r\n    grid-column: 4/5;\r\n}\r\n.modal {\r\n    position: absolute;\r\n    background-color: white;\r\n    padding-top: 2vh;\r\n    height: 40vh;\r\n    width: 40vh;\r\n    top: 20%;\r\n    bottom: 40%;\r\n    left: 40%;\r\n    right: 40%;\r\n    border-radius: 10px;\r\n    z-index: 6;\r\n    border: 1px solid black;\r\n}\r\n.hidden {\r\n    display: none;\r\n    background-color: transparent;\r\n}\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    backdrop-filter: blur(3px);\r\n    z-index: 5;\r\n  }\r\nform {\r\n    width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n}\r\nform h1 {\r\n    text-align: center;\r\n}\r\n.descriptionIcon {\r\n    border: 1px solid black;\r\n    width: 5vh;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n.descriptionIcon:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.tasks li {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-right: 20vh;\r\n}\r\n.details {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    padding: 4vh;\r\n    overflow: scroll;\r\n}\r\n.tasks li:hover {\r\n    background-color: rgba(128, 128, 128, 0.177);\r\n    cursor: pointer;\r\n}\r\n.remove {\r\n    background-color: red;\r\n    border-radius: 20px;\r\n}\r\n.itemInfo {\r\n    display: flex;\r\n    gap: 2vh;\r\n}\r\n.Low {\r\n    background-color: #84cc16;\r\n}\r\n.Medium {\r\n    background-color: #f59e0b;\r\n}\r\n.High {\r\n    background-color: #f97316;\r\n}\r\n.ASAP {\r\n    background-color: #dc2626;\r\n}\r\n.edit {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    width: 5vh;\r\n    text-align: center;\r\n    background-color: #84cc16;\r\n}\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: #4d7c0f;\r\n}\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: #b91c1c;\r\n}\r\n.closeModal {\r\n    text-align: end;\r\n}\r\n.editor {\r\n    display: flex;\r\n    gap: 1vh;\r\n}\r\n.editDescription {\r\n  line-height: normal;\r\n  width: auto;\r\n  text-align: left;\r\n  column-count: initial;\r\n  overflow-wrap: break-word;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,YAAY;IACZ,8BAA8B;IAC9B,kCAAkC;AACtC;AACA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,QAAQ;IACR,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,QAAQ;IACR,WAAW;IACX,SAAS;IACT,UAAU;IACV,mBAAmB;IACnB,UAAU;IACV,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,0BAA0B;IAC1B,UAAU;EACZ;AACF;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,UAAU;IACV,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;AACpB;AACA;IACI,4CAA4C;IAC5C,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,QAAQ;AACZ;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,qBAAqB;EACrB,yBAAyB;AAC3B","sourcesContent":["html {\r\n    margin: 0;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr;\r\n}\r\n.header {\r\n    height: 15vh;\r\n    width: 100%;\r\n    border: 1px solid black;\r\n    grid-column: 1/3;\r\n    grid-row: 1/2;\r\n    text-align: left;\r\n}\r\n.body {\r\n    display: grid;\r\n    height: 82vh;\r\n    grid-template-columns: 1fr 4fr;\r\n    grid-template-rows: repeat(3, 1fr);\r\n}\r\n.left {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid blue;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.right{\r\n    height: 100%;\r\n    width: 100%;\r\n    border: 1px solid red;\r\n    grid-row: 1/4;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n.right ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    list-style: none;\r\n    gap: 1vh;\r\n    justify-content: space-between;\r\n}\r\n.listItem {\r\n    width: fit-content;\r\n    border-radius: 20px;\r\n}\r\n.clicked {\r\n    text-decoration: line-through;\r\n}\r\n.projectListItem{\r\n    width: 100%;\r\n    height: 5vh;\r\n    border: 1px solid black;\r\n    background-color: white;\r\n    border-radius: 20px;\r\n}\r\n.addItem {\r\n    height: fit-content;\r\n    width: fit-content;\r\n    grid-column: 4/5;\r\n}\r\n.modal {\r\n    position: absolute;\r\n    background-color: white;\r\n    padding-top: 2vh;\r\n    height: 40vh;\r\n    width: 40vh;\r\n    top: 20%;\r\n    bottom: 40%;\r\n    left: 40%;\r\n    right: 40%;\r\n    border-radius: 10px;\r\n    z-index: 6;\r\n    border: 1px solid black;\r\n}\r\n.hidden {\r\n    display: none;\r\n    background-color: transparent;\r\n}\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    backdrop-filter: blur(3px);\r\n    z-index: 5;\r\n  }\r\nform {\r\n    width: fit-content;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n}\r\nform h1 {\r\n    text-align: center;\r\n}\r\n.descriptionIcon {\r\n    border: 1px solid black;\r\n    width: 5vh;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n}\r\n.descriptionIcon:hover {\r\n    background-color: black;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.tasks li {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-right: 20vh;\r\n}\r\n.details {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    padding: 4vh;\r\n    overflow: scroll;\r\n}\r\n.tasks li:hover {\r\n    background-color: rgba(128, 128, 128, 0.177);\r\n    cursor: pointer;\r\n}\r\n.remove {\r\n    background-color: red;\r\n    border-radius: 20px;\r\n}\r\n.itemInfo {\r\n    display: flex;\r\n    gap: 2vh;\r\n}\r\n.Low {\r\n    background-color: #84cc16;\r\n}\r\n.Medium {\r\n    background-color: #f59e0b;\r\n}\r\n.High {\r\n    background-color: #f97316;\r\n}\r\n.ASAP {\r\n    background-color: #dc2626;\r\n}\r\n.edit {\r\n    border: 1px solid black;\r\n    border-radius: 20px;\r\n    width: 5vh;\r\n    text-align: center;\r\n    background-color: #84cc16;\r\n}\r\n.edit:hover {\r\n    cursor: pointer;\r\n    background-color: #4d7c0f;\r\n}\r\n.remove:hover {\r\n    cursor: pointer;\r\n    background-color: #b91c1c;\r\n}\r\n.closeModal {\r\n    text-align: end;\r\n}\r\n.editor {\r\n    display: flex;\r\n    gap: 1vh;\r\n}\r\n.editDescription {\r\n  line-height: normal;\r\n  width: auto;\r\n  text-align: left;\r\n  column-count: initial;\r\n  overflow-wrap: break-word;\r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "displayList": () => (/* binding */ displayList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");








const body = document.querySelector('body');
const createPage = function (projectTitle = 'Example Project') {
  const html = `
<div class="container">
<div class="header"><h1>Shit List</h1></div>
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
        <button class="projectListItem">${projectTitle}</button>
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

// Add Item button, event listener and funcion call
const addItem = document.querySelector('.addItem');
const overlay = document.querySelector('.overlay');

// selectors to control the 2 sides of the page
const leftSide = document.querySelector('.left');
const taskList = document.querySelector('.tasks');

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
  _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].newTask(title, description, dueDate, priority);
  //   console.log(...itemList);
  displayList();
  closeModal();
});

// display values in DOM
function displayList() {
  taskList.innerHTML = '';
  _tasks__WEBPACK_IMPORTED_MODULE_1__.itemList.forEach((item, i) => {
    const html = `
      <li>
      <div class="listItem data_id="${i}">${item.title}</div> <div class="itemInfo" data_id="${i}">${item.dueDate} <span class="edit">Edit</span><span class="descriptionIcon">i</span> <span class="${item.priority}">${item.priority}</span><button class="remove">Remove</div>
      </li> 
      </div>`;
    taskList.innerHTML += html;
  });
}

taskList.addEventListener('click', e => {
  if (e.target.classList.contains('remove')) {
    _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(e), displayList();
  }
  if (e.target.classList.contains('descriptionIcon')) {
    overlay.classList.remove('hidden');
    let itemId = e.target.parentElement.getAttribute('data_id');
    let html = `
    <div class="modal details">
    <div class="closeModal">X</div>
        <div><h3>Title:</h3> ${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].title}</div>
        <div><h3>Description:</h3> </div>
        <div>${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].description}</div>
        <div><h3>Due Date:</h3> ${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].dueDate}</div>
        <div><h3>Priority:</h3> ${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].priority}</div>
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
        <input type="text" class="title" value="${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].title}">
        <textarea class="editDescription" rows="3" style="width: 100%; box-sizing: border-box;">${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].description}</textarea>
        <input type="date" class="dueDate" value="${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].dueDate}">
        <label for="priority">Priority:</label>

        <select name="priorityInput" id="priorityInput">
            <option value="default">${_tasks__WEBPACK_IMPORTED_MODULE_1__.itemList[itemId].priority}</option>
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
        itemId,
        titleInput2.value,
        descriptionInput2.value,
        dueDateInput2.value,
        priorityInput2.value
      );
      displayList();
      closeModal();
      editSubmit.remove();
    });
  }
});

displayList();

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
          title: 'Add a new project',
          description: 'the same as above, but a little bit longer',
          dueDate: '2023-10-10',
          priority: 'High',
        },
      ],
    },
  ];
  function newProject(title) {
    const project = new Project(title);
    projectList.push(project);
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayList)();
  }
  return { newProject };
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
  function newTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    itemList.push(task);
  }
  function deleteTask(e) {
    let itemId = e.target.parentElement.getAttribute('data_id');
    itemList.splice(itemId, 1);
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayList)();
  }
  function updateTask(itemId, title, description, dueDate, priority) {
    itemList[itemId] = { title, description, dueDate, priority };
    (0,___WEBPACK_IMPORTED_MODULE_0__.displayList)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxNXZoO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcbi5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgaGVpZ2h0OiA4MnZoO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcbi5sZWZ0IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJpZ2h0e1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIGdyaWQtcm93OiAxLzQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnJpZ2h0IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5saXN0SXRlbSB7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLmNsaWNrZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnByb2plY3RMaXN0SXRlbXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5hZGRJdGVtIHtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbn1cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMnZoO1xcclxcbiAgICBoZWlnaHQ6IDQwdmg7XFxyXFxuICAgIHdpZHRoOiA0MHZoO1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgYm90dG9tOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgcmlnaHQ6IDQwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgei1pbmRleDogNjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gIH1cXHJcXG5mb3JtIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbmZvcm0gaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbkljb24ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgd2lkdGg6IDV2aDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uZGVzY3JpcHRpb25JY29uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGFza3MgbGkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwdmg7XFxyXFxufVxcclxcbi5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcclxcbiAgICBwYWRkaW5nOiA0dmg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVxcclxcbi50YXNrcyBsaTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNzcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5yZW1vdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbi5pdGVtSW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnZoO1xcclxcbn1cXHJcXG4uTG93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuLk1lZGl1bSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTllMGI7XFxyXFxufVxcclxcbi5IaWdoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5NzMxNjtcXHJcXG59XFxyXFxuLkFTQVAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbn1cXHJcXG4uZWRpdCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcbi5lZGl0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ3YzBmO1xcclxcbn1cXHJcXG4ucmVtb3ZlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcclxcbn1cXHJcXG4uY2xvc2VNb2RhbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuLmVkaXRvciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXZoO1xcclxcbn1cXHJcXG4uZWRpdERlc2NyaXB0aW9uIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBjb2x1bW4tY291bnQ6IGluaXRpYWw7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDE1dmg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuLmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBoZWlnaHQ6IDgydmg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuLmxlZnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcclxcbiAgICBncmlkLXJvdzogMS80O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucmlnaHR7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucmlnaHQgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZ2FwOiAxdmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLmxpc3RJdGVtIHtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uY2xpY2tlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG4ucHJvamVjdExpc3RJdGVte1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA1dmg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLmFkZEl0ZW0ge1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiA0LzU7XFxyXFxufVxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAydmg7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG4gICAgd2lkdGg6IDQwdmg7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcbiAgICBib3R0b206IDQwJTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgICByaWdodDogNDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB6LWluZGV4OiA2O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgfVxcclxcbmZvcm0ge1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuZm9ybSBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmRlc2NyaXB0aW9uSWNvbiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5kZXNjcmlwdGlvbkljb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50YXNrcyBsaSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjB2aDtcXHJcXG59XFxyXFxuLmRldGFpbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxyXFxuICAgIHBhZGRpbmc6IDR2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG59XFxyXFxuLnRhc2tzIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE3Nyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnJlbW92ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuLml0ZW1JbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAydmg7XFxyXFxufVxcclxcbi5Mb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG4uTWVkaXVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OWUwYjtcXHJcXG59XFxyXFxuLkhpZ2gge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk3MzE2O1xcclxcbn1cXHJcXG4uQVNBUCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxufVxcclxcbi5lZGl0IHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuLmVkaXQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDdjMGY7XFxyXFxufVxcclxcbi5yZW1vdmU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOTFjMWM7XFxyXFxufVxcclxcbi5jbG9zZU1vZGFsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG4uZWRpdG9yIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxdmg7XFxyXFxufVxcclxcbi5lZGl0RGVzY3JpcHRpb24ge1xcclxcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGNvbHVtbi1jb3VudDogaW5pdGlhbDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzJztcclxuaW1wb3J0IHsgaXRlbUxpc3QsIHVwZGF0ZVRhc2sgfSBmcm9tICcuL3Rhc2tzJztcclxuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gJy4vcHJvamVjdHMnO1xyXG5pbXBvcnQgeyBpc0V4aXN0cyB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmNvbnN0IGNyZWF0ZVBhZ2UgPSBmdW5jdGlvbiAocHJvamVjdFRpdGxlID0gJ0V4YW1wbGUgUHJvamVjdCcpIHtcclxuICBjb25zdCBodG1sID0gYFxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbjxkaXYgY2xhc3M9XCJoZWFkZXJcIj48aDE+U2hpdCBMaXN0PC9oMT48L2Rpdj5cclxuPGRpdiBjbGFzcz1cImJvZHlcIj5cclxuICAgIDxmb3JtIGNsYXNzPVwibW9kYWwgaGlkZGVuXCI+XHJcbiAgICAgICAgPGgxPkFkZCBhbiBpdGVtIHRvIHRoaXMgVG9EbyBsaXN0PC9oMT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCJ0aXRsZVwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cImRlc2NyaXB0aW9uXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkdWVEYXRlXCIgcGxhY2Vob2xkZXI9XCJkdWVEYXRlXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cclxuXHJcbiAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlJbnB1dFwiIGlkPVwicHJpb3JpdHlJbnB1dFwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBU0FQXCI+QVNBUDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0bi1zdWJtaXRcIj5BZGQgaXRlbTwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJuZXdQcm9qZWN0XCI+ICs8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdExpc3RJdGVtXCI+JHtwcm9qZWN0VGl0bGV9PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImFkZEl0ZW1cIj4gKzwvYnV0dG9uPlxyXG4gICAgPGgxPlRhc2tzPC9oMT5cclxuICAgIDxkaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJ0YXNrc1wiPlxyXG4gICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwib3ZlcmxheSBoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgYm9keS5pbm5lckhUTUwgPSBodG1sO1xyXG59O1xyXG5jcmVhdGVQYWdlKCk7XHJcblxyXG4vLyBhbGwgdGhlIHF1ZXJ5IHNlbGVjdG9ycyBmb3IgaGFuZGxpbmcgdGhlIGZvcm0gaW5wdXRcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJyk7XHJcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlJbnB1dCcpO1xyXG5cclxuLy8gQWRkIEl0ZW0gYnV0dG9uLCBldmVudCBsaXN0ZW5lciBhbmQgZnVuY2lvbiBjYWxsXHJcbmNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkSXRlbScpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcclxuXHJcbi8vIHNlbGVjdG9ycyB0byBjb250cm9sIHRoZSAyIHNpZGVzIG9mIHRoZSBwYWdlXHJcbmNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKTtcclxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBBbGwgdGFzayByZWxhdGVkIGZ1bmN0aW9ucy9tZXRob2RzIChyaWdodCBzaWRlIG9mIGFwcClcclxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5jb25zdCBjbG9zZU1vZGFsID0gZnVuY3Rpb24gKCkge1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufTtcclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlTW9kYWwoKSk7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHByaW9yaXR5SW5wdXQpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcclxuICBmb3JtLnJlc2V0KCk7XHJcblxyXG4gIC8vcGFzcyB2YWx1ZXMgaW50byBuZXdJdGVtIG1vZHVsZVxyXG4gIHRhc2tzLm5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyguLi5pdGVtTGlzdCk7XHJcbiAgZGlzcGxheUxpc3QoKTtcclxuICBjbG9zZU1vZGFsKCk7XHJcbn0pO1xyXG5cclxuLy8gZGlzcGxheSB2YWx1ZXMgaW4gRE9NXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TGlzdCgpIHtcclxuICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcclxuICBpdGVtTGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICA8bGk+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0SXRlbSBkYXRhX2lkPVwiJHtpfVwiPiR7aXRlbS50aXRsZX08L2Rpdj4gPGRpdiBjbGFzcz1cIml0ZW1JbmZvXCIgZGF0YV9pZD1cIiR7aX1cIj4ke2l0ZW0uZHVlRGF0ZX0gPHNwYW4gY2xhc3M9XCJlZGl0XCI+RWRpdDwvc3Bhbj48c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uSWNvblwiPmk8L3NwYW4+IDxzcGFuIGNsYXNzPVwiJHtpdGVtLnByaW9yaXR5fVwiPiR7aXRlbS5wcmlvcml0eX08L3NwYW4+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPlJlbW92ZTwvZGl2PlxyXG4gICAgICA8L2xpPiBcclxuICAgICAgPC9kaXY+YDtcclxuICAgIHRhc2tMaXN0LmlubmVySFRNTCArPSBodG1sO1xyXG4gIH0pO1xyXG59XHJcblxyXG50YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZScpKSB7XHJcbiAgICB0YXNrcy5kZWxldGVUYXNrKGUpLCBkaXNwbGF5TGlzdCgpO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwdGlvbkljb24nKSkge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGxldCBpdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YV9pZCcpO1xyXG4gICAgbGV0IGh0bWwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwgZGV0YWlsc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsb3NlTW9kYWxcIj5YPC9kaXY+XHJcbiAgICAgICAgPGRpdj48aDM+VGl0bGU6PC9oMz4gJHtpdGVtTGlzdFtpdGVtSWRdLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPkRlc2NyaXB0aW9uOjwvaDM+IDwvZGl2PlxyXG4gICAgICAgIDxkaXY+JHtpdGVtTGlzdFtpdGVtSWRdLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPkR1ZSBEYXRlOjwvaDM+ICR7aXRlbUxpc3RbaXRlbUlkXS5kdWVEYXRlfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+PGgzPlByaW9yaXR5OjwvaDM+ICR7aXRlbUxpc3RbaXRlbUlkXS5wcmlvcml0eX08L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xyXG4gICAgY29uc3QgY2xvc2VNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZU1vZGFsJyk7XHJcbiAgICBjbG9zZU1vZGFsV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbkRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwuZGV0YWlscycpO1xyXG4gICAgICBkZXNjcmlwdGlvbkRldGFpbHMucmVtb3ZlKCk7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykpIHtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBsZXQgaXRlbUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGFfaWQnKTtcclxuICAgIGxldCBodG1sID0gYFxyXG4gICAgPGZvcm0gY2xhc3M9XCJtb2RhbCBlZGl0b3JcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2xvc2VNb2RhbFwiPlg8L2Rpdj5cclxuICAgICAgICA8aDE+RWRpdCB0aGlzIFRvRG8gbGlzdDwvaDE+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0aXRsZVwiIHZhbHVlPVwiJHtpdGVtTGlzdFtpdGVtSWRdLnRpdGxlfVwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImVkaXREZXNjcmlwdGlvblwiIHJvd3M9XCIzXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgYm94LXNpemluZzogYm9yZGVyLWJveDtcIj4ke2l0ZW1MaXN0W2l0ZW1JZF0uZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBjbGFzcz1cImR1ZURhdGVcIiB2YWx1ZT1cIiR7aXRlbUxpc3RbaXRlbUlkXS5kdWVEYXRlfVwiPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5SW5wdXRcIiBpZD1cInByaW9yaXR5SW5wdXRcIj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj4ke2l0ZW1MaXN0W2l0ZW1JZF0ucHJpb3JpdHl9PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFTQVBcIj5BU0FQPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuLXN1Ym1pdFwiPkNvbmZpcm0gRWRpdDwvYnV0dG9uPlxyXG48L2Zvcm0+YDtcclxuICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XHJcbiAgICBjb25zdCBjbG9zZU1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlTW9kYWwnKTtcclxuICAgIGNsb3NlTW9kYWxXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IEVkaXREZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLmVkaXRvcicpO1xyXG4gICAgICBFZGl0RGV0YWlscy5yZW1vdmUoKTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGVkaXRTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yJyk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdERlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5SW5wdXQnKTtcclxuICAgIGVkaXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGFza3MudXBkYXRlVGFzayhcclxuICAgICAgICBpdGVtSWQsXHJcbiAgICAgICAgdGl0bGVJbnB1dDIudmFsdWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dDIudmFsdWUsXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0Mi52YWx1ZSxcclxuICAgICAgICBwcmlvcml0eUlucHV0Mi52YWx1ZVxyXG4gICAgICApO1xyXG4gICAgICBkaXNwbGF5TGlzdCgpO1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgIGVkaXRTdWJtaXQucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZGlzcGxheUxpc3QoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQWxsIHByb2plY3QgcmVsYXRlZCBmdW5jdGlvbnMvbWV0aG9kcyAocmlnaHQgc2lkZSBvZiBhcHApXHJcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdCcpO1xyXG5hZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGxldCBodG1sID0gYFxyXG4gIDxmb3JtIGNsYXNzPVwibW9kYWwgcHJvamVjdFwiPlxyXG4gIDxidXR0b24gY2xhc3M9XCJleGl0XCI+WDwvYnV0dG9uPlxyXG4gIDxwPkNyZWF0ZSBhIE5ldyBQcm9qZWN0PC9wPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3MgPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cInRpdGxlXCIgcmVxdWlyZWQ+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGU8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuICAgIFxyXG4gICAgYDtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XHJcbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhpdCcpO1xyXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC5wcm9qZWN0Jyk7XHJcbiAgICBuZXdQcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpO1xyXG4gIHByb2plY3RBZGQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBwcm9qZWN0cy5uZXdQcm9qZWN0KHByb2plY3RUaXRsZS52YWx1ZSk7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLnByb2plY3QnKTtcclxuICAgIG5ld1Byb2plY3QucmVtb3ZlKCk7XHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAgUHJvamVjdCBbXHJcbi8vICBuYW1lXHJcbi8vICBpbmRleFxyXG5cclxuLy8gIHtcclxuLy8gIHRhc2tzXHJcbi8vICBuYW1lXHJcbi8vICBkZXNjcmlwdGlvblxyXG4vLyAgZHVlRGF0ZVxyXG4vLyAgUHJpb3JpdHlcclxuLy8gIH1cclxuLy8gIF1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuJztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcclxuICBsZXQgcHJvamVjdExpc3QgPSBbXTtcclxuICBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcm9qZWN0TGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdOZXcgUHJvamVjdCcsXHJcbiAgICAgIHRhc2tzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGl0bGU6ICdBZGQgYSBuZXcgcHJvamVjdCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ3RoZSBzYW1lIGFzIGFib3ZlLCBidXQgYSBsaXR0bGUgYml0IGxvbmdlcicsXHJcbiAgICAgICAgICBkdWVEYXRlOiAnMjAyMy0xMC0xMCcsXHJcbiAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgZnVuY3Rpb24gbmV3UHJvamVjdCh0aXRsZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICBkaXNwbGF5TGlzdCgpO1xyXG4gIH1cclxuICByZXR1cm4geyBuZXdQcm9qZWN0IH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuJztcclxuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1MaXN0ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnaGVsbG8nLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgbW9yZSBkZXRhaWxlZCBEZXNjcmlwdGlvbicsXHJcbiAgICBkdWVEYXRlOiAnMjAyMy0wMi0yMycsXHJcbiAgICBwcmlvcml0eTogJ0hpZ2gnLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IHRhc2tzID0gKCgpID0+IHtcclxuICBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICBpdGVtTGlzdC5wdXNoKHRhc2spO1xyXG4gIH1cclxuICBmdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcclxuICAgIGxldCBpdGVtSWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YV9pZCcpO1xyXG4gICAgaXRlbUxpc3Quc3BsaWNlKGl0ZW1JZCwgMSk7XHJcbiAgICBkaXNwbGF5TGlzdCgpO1xyXG4gIH1cclxuICBmdW5jdGlvbiB1cGRhdGVUYXNrKGl0ZW1JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgaXRlbUxpc3RbaXRlbUlkXSA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xyXG4gICAgZGlzcGxheUxpc3QoKTtcclxuICB9XHJcbiAgcmV0dXJuIHsgbmV3VGFzaywgZGVsZXRlVGFzaywgdXBkYXRlVGFzayB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza3M7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9