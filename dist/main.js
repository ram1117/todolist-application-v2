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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  width: 80%;\\n  margin: 5% auto;\\n  font-family: Lato, sans-serif;\\n  color: rgb(59, 57, 57);\\n}\\n\\n.todo-list {\\n  display: flex;\\n  flex-direction: column;\\n  list-style: none;\\n  box-shadow: 2px 2px 2px 2px rgb(129, 125, 125);\\n}\\n\\n.todo-list-item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0% 5%;\\n  font-size: 1.2em;\\n  text-decoration: none;\\n  border-bottom: solid 0.5px rgb(129, 125, 125);\\n}\\n\\n#todolist-header {\\n  font-size: 1.2em;\\n  font-weight: 700;\\n  padding: 5% 0;\\n}\\n\\n#todolist-input,\\n.task-details {\\n  padding: 5% 0;\\n  border: none;\\n  outline: none;\\n}\\n\\n.task-details {\\n  width: 90%;\\n  margin: 5% 0;\\n  padding: 0 5%;\\n  text-align: left;\\n  height: 100%;\\n  font-size: 1em;\\n}\\n\\n.button-clear {\\n  text-align: center;\\n  font-size: 1.2em;\\n  background-color: rgb(228, 226, 226);\\n  padding: 5%;\\n}\\n\\n.button-clear:hover,\\n.button-delete:hover,\\n#enter-button {\\n  cursor: pointer;\\n}\\n\\n.button-more:hover {\\n  cursor: move;\\n}\\n\\n.strike-through {\\n  text-decoration: line-through;\\n  text-decoration-thickness: 2px;\\n}\\n\\n.help-menu {\\n  margin: 10% auto;\\n  padding: 5% 5%;\\n  box-shadow: 2px 2px 2px 2px rgb(129, 125, 125);\\n}\\n\\n.help-menu > h3 {\\n  font-size: 1.5em;\\n  font-weight: 800;\\n}\\n\\n.help-menu > ul {\\n  font-size: 1.2em;\\n  padding: 5% 5%;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  body {\\n    width: 40%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist-application-v2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/long-press-event/dist/long-press-event.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/long-press-event/dist/long-press-event.min.js ***!
  \********************************************************************/
/***/ (() => {

eval("/*!\n * long-press-event - v2.4.4\n * Pure JavaScript long-press-event\n * https://github.com/john-doherty/long-press-event\n * @author John Doherty <www.johndoherty.info>\n * @license MIT\n */\n!function(e,t){\"use strict\";var n=null,a=\"PointerEvent\"in e||e.navigator&&\"msPointerEnabled\"in e.navigator,i=\"ontouchstart\"in e||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,o=a?\"pointerdown\":i?\"touchstart\":\"mousedown\",r=a?\"pointerup\":i?\"touchend\":\"mouseup\",m=a?\"pointermove\":i?\"touchmove\":\"mousemove\",u=0,s=0,c=10,l=10;function v(e){f(),e=function(e){if(void 0!==e.changedTouches)return e.changedTouches[0];return e}(e),this.dispatchEvent(new CustomEvent(\"long-press\",{bubbles:!0,cancelable:!0,detail:{clientX:e.clientX,clientY:e.clientY},clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}))||t.addEventListener(\"click\",function e(n){t.removeEventListener(\"click\",e,!0),function(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}(n)},!0)}function d(a){f(a);var i=a.target,o=parseInt(function(e,n,a){for(;e&&e!==t.documentElement;){var i=e.getAttribute(n);if(i)return i;e=e.parentNode}return a}(i,\"data-long-press-delay\",\"1500\"),10);n=function(t,n){if(!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame&&e.mozCancelRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame))return e.setTimeout(t,n);var a=(new Date).getTime(),i={},o=function(){(new Date).getTime()-a>=n?t.call():i.value=requestAnimFrame(o)};return i.value=requestAnimFrame(o),i}(v.bind(i,a),o)}function f(t){var a;(a=n)&&(e.cancelAnimationFrame?e.cancelAnimationFrame(a.value):e.webkitCancelAnimationFrame?e.webkitCancelAnimationFrame(a.value):e.webkitCancelRequestAnimationFrame?e.webkitCancelRequestAnimationFrame(a.value):e.mozCancelRequestAnimationFrame?e.mozCancelRequestAnimationFrame(a.value):e.oCancelRequestAnimationFrame?e.oCancelRequestAnimationFrame(a.value):e.msCancelRequestAnimationFrame?e.msCancelRequestAnimationFrame(a.value):clearTimeout(a)),n=null}\"function\"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=t.createEvent(\"CustomEvent\");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a},e.CustomEvent.prototype=e.Event.prototype),e.requestAnimFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},t.addEventListener(r,f,!0),t.addEventListener(m,function(e){var t=Math.abs(u-e.clientX),n=Math.abs(s-e.clientY);(t>=c||n>=l)&&f()},!0),t.addEventListener(\"wheel\",f,!0),t.addEventListener(\"scroll\",f,!0),t.addEventListener(o,function(e){u=e.clientX,s=e.clientY,d(e)},!0)}(window,document);\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/long-press-event/dist/long-press-event.min.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist-application-v2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist-application-v2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_taskInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskInterface.js */ \"./src/modules/taskInterface.js\");\n/* harmony import */ var _modules_dragdropinterface_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dragdropinterface.js */ \"./src/modules/dragdropinterface.js\");\n\n\n\n\nwindow.onload = () => {\n  (0,_modules_taskInterface_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_dragdropinterface_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n\n//# sourceURL=webpack://todolist-application-v2/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkRemoveTasks.js":
/*!*****************************************!*\
  !*** ./src/modules/checkRemoveTasks.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeCompleted\": () => (/* binding */ removeCompleted),\n/* harmony export */   \"updateTaskStatus\": () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCRUD.js */ \"./src/modules/taskCRUD.js\");\n\n\n\nconst updateTaskStatus = (checkBoxElement) => {\n  const index = parseInt(checkBoxElement.parentNode.id, 10) - 1;\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  arr[index].completed = checkBoxElement.checked;\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr);\n  checkBoxElement.nextSibling.classList.toggle('strike-through');\n};\n\nconst removeCompleted = () => {\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr.filter((task) => task.completed !== true));\n  (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskIDs)();\n  (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.loadTaskList)();\n};\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/checkRemoveTasks.js?");

/***/ }),

/***/ "./src/modules/dragdropinterface.js":
/*!******************************************!*\
  !*** ./src/modules/dragdropinterface.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst container = document.querySelector('.todo-list');\nlet dragged = null;\nlet target = null;\nlet draggables = null;\n\nconst updateContainerDetails = () => {\n  draggables = document.querySelectorAll('.todo-list-task');\n  for (let i = 0; i < draggables.length; i += 1) {\n    draggables[i].id = i + 1;\n  }\n};\n\nconst draginit = () => {\n  draggables = document.querySelectorAll('.todo-list-task');\n  draggables.forEach((tasktile) => {\n    tasktile.addEventListener('dragstart', (event) => {\n      dragged = event.target;\n    });\n\n    tasktile.addEventListener('dragover', (event) => {\n      event.preventDefault();\n      const node = event.target.parentNode;\n      if (node.tagName === 'LI' && node.classList.contains('todo-list-task')) {\n        target = node;\n      }\n    });\n  });\n  container.addEventListener('drop', (event) => {\n    event.preventDefault();\n    if (target !== null && dragged !== null) {\n      const dragId = parseInt(dragged.id, 10);\n      const targetId = parseInt(target.id, 10);\n      if (dragId < targetId) {\n        container.removeChild(dragged);\n        container.insertBefore(dragged, target.nextSibling);\n      } else if (dragId === targetId) {\n        updateContainerDetails();\n      } else {\n        container.removeChild(dragged);\n        container.insertBefore(dragged, target);\n      }\n      updateContainerDetails();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (draginit);\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/dragdropinterface.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\nclass Storage {\n  static getTaskArray() {\n    const array = JSON.parse(localStorage.getItem('task-array'));\n    return array === null ? [] : array;\n  }\n\n  static setTaskArray(arr) {\n    localStorage.setItem('task-array', JSON.stringify(arr));\n  }\n}\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(id, details, completed = false) {\n    this.id = id;\n    this.details = details;\n    this.completed = completed;\n  }\n}\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskCRUD.js":
/*!*********************************!*\
  !*** ./src/modules/taskCRUD.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewTask\": () => (/* binding */ addNewTask),\n/* harmony export */   \"createTaskTile\": () => (/* binding */ createTaskTile),\n/* harmony export */   \"deleteSelectedTask\": () => (/* binding */ deleteSelectedTask),\n/* harmony export */   \"loadTaskList\": () => (/* binding */ loadTaskList),\n/* harmony export */   \"updateTaskDetails\": () => (/* binding */ updateTaskDetails),\n/* harmony export */   \"updateTaskIDs\": () => (/* binding */ updateTaskIDs)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\n\nconst taskContainer = document.querySelector('.todo-list');\n\nconst createTaskTile = (task) => {\n  const listItem = document.createElement('li');\n  listItem.classList.add('todo-list-item', 'todo-list-task');\n  listItem.id = task.id;\n  listItem.draggable = 'true';\n\n  const checkBox = document.createElement('input');\n  checkBox.type = 'checkbox';\n  checkBox.classList.add('task-status-checkbox');\n  checkBox.checked = task.completed;\n\n  const taskDetail = document.createElement('input');\n  taskDetail.type = 'text';\n  taskDetail.classList.add('task-details');\n  if (task.completed) {\n    taskDetail.classList.add('strike-through');\n  }\n  taskDetail.value = task.details;\n  taskDetail.setAttribute('readonly', true);\n\n  const buttonDelete = document.createElement('span');\n  buttonDelete.classList.add('material-icons', 'button-delete');\n  buttonDelete.textContent = 'delete';\n  buttonDelete.style.display = 'none';\n\n  const iconSpan = document.createElement('span');\n  iconSpan.classList.add('material-icons', 'button-more');\n  iconSpan.textContent = 'more_vert';\n\n  listItem.appendChild(checkBox);\n  listItem.appendChild(taskDetail);\n  listItem.appendChild(buttonDelete);\n  listItem.appendChild(iconSpan);\n  return listItem;\n};\n\nconst addNewTask = (text) => {\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](arr.length + 1, text);\n  arr.push(task);\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr);\n  taskContainer.insertBefore(createTaskTile(task), taskContainer.lastElementChild);\n};\n\nconst loadTaskList = () => {\n  const taskElements = document.querySelectorAll('.todo-list-task');\n  for (let i = 0; i < taskElements.length; i += 1) {\n    taskContainer.removeChild(taskElements[i]);\n  }\n\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray().forEach((task) => {\n    taskContainer.insertBefore(createTaskTile(task), taskContainer.lastElementChild);\n  });\n};\n\nconst updateTaskDetails = (index, newText) => {\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  arr[index].details = newText;\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr);\n};\n\nconst updateTaskIDs = () => {\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  for (let i = 0; i < arr.length; i += 1) {\n    arr[i].id = i + 1;\n  }\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr);\n};\n\nconst deleteSelectedTask = (taskElement) => {\n  const taskId = parseInt(taskElement.id, 10);\n  const arr = _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskArray();\n  _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setTaskArray(arr.filter((task) => task.id !== taskId));\n  updateTaskIDs();\n  loadTaskList();\n};\n\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/taskCRUD.js?");

/***/ }),

/***/ "./src/modules/taskInterface.js":
/*!**************************************!*\
  !*** ./src/modules/taskInterface.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkRemoveTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkRemoveTasks.js */ \"./src/modules/checkRemoveTasks.js\");\n/* harmony import */ var _taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCRUD.js */ \"./src/modules/taskCRUD.js\");\n\n\n\nconst taskContainer = document.querySelector('.todo-list');\nconst taskInputField = document.querySelector('#todolist-input');\nconst enterButton = document.querySelector('#enter-button');\nconst removeCompleteButton = document.querySelector('#button-clear');\nlet editTaskElement = null;\n\nconst resetEditWindow = (taskElement) => {\n  taskElement.style.background = '#fff';\n  taskElement.lastElementChild.style.display = 'inline';\n  const taskElementInput = taskElement.querySelector('.task-details');\n  taskElementInput.setAttribute('readonly', true);\n  taskElementInput.style.background = '#fff';\n  const listItemDelButton = taskElement.querySelector('.button-delete');\n  listItemDelButton.style.display = 'none';\n  // eslint-disable-next-line no-use-before-define\n  document.body.removeEventListener('click', addBodyClickListener);\n};\n\nconst addBodyClickListener = (event) => {\n  const editField = editTaskElement.querySelector('.task-details');\n\n  if (event.target !== editTaskElement) {\n    if (event.target !== editField) {\n      resetEditWindow(editTaskElement);\n    }\n  }\n};\n\nconst createEditWindow = (taskElement) => {\n  taskElement.style.background = '#e6ffe6';\n  taskElement.lastElementChild.style.display = 'none';\n  const taskElementInput = taskElement.querySelector('.task-details');\n  taskElementInput.removeAttribute('readonly');\n  taskElementInput.focus();\n  taskElementInput.style.background = '#e6ffe6';\n  const listItemDelButton = taskElement.querySelector('.button-delete');\n  listItemDelButton.style.display = 'inline';\n  document.body.addEventListener('click', addBodyClickListener);\n};\n\nconst initListeners = () => {\n  (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.loadTaskList)();\n  taskInputField.onkeyup = (event) => {\n    if (event.key === 'Enter' && taskInputField.value !== '') {\n      (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(taskInputField.value);\n      taskInputField.value = '';\n    }\n  };\n  enterButton.onclick = () => {\n    if (taskInputField.value !== '') {\n      (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(taskInputField.value);\n      taskInputField.value = '';\n    }\n  };\n\n  taskContainer.addEventListener('long-press', (event) => {\n    if (event.target.classList.contains('button-more')) {\n      editTaskElement = event.target.parentNode;\n      createEditWindow(editTaskElement);\n      editTaskElement.onkeyup = (event) => {\n        if (event.key === 'Enter') {\n          const inputField = editTaskElement.querySelector('.task-details');\n          (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskDetails)(parseInt(editTaskElement.id, 10) - 1, inputField.value);\n          resetEditWindow(editTaskElement);\n        }\n      };\n      const deleteBtn = editTaskElement.querySelector('.button-delete');\n      deleteBtn.onclick = () => {\n        (0,_taskCRUD_js__WEBPACK_IMPORTED_MODULE_1__.deleteSelectedTask)(editTaskElement);\n      };\n    }\n  });\n\n  document.body.onkeyup = (event) => {\n    if (event.key === 'Escape' && editTaskElement !== null) {\n      resetEditWindow(editTaskElement);\n    }\n  };\n\n  taskContainer.onclick = (event) => {\n    if (event.target.type === 'checkbox') {\n      (0,_checkRemoveTasks_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(event.target);\n    }\n  };\n\n  removeCompleteButton.onclick = () => {\n    (0,_checkRemoveTasks_js__WEBPACK_IMPORTED_MODULE_0__.removeCompleted)();\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initListeners);\n\n//# sourceURL=webpack://todolist-application-v2/./src/modules/taskInterface.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/long-press-event/dist/long-press-event.min.js");
/******/ 	
/******/ })()
;