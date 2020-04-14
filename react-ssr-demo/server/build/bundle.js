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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Header/style.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_header_2BUhg {\\n  background: yellow;\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"header\": \"style_header_2BUhg\"\n};\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/containers/Home/style.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".style_home_Oc12L {\\n  font-size: 30px;\\n  background: red;\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"home\": \"style_home_Oc12L\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/exenv/index.js":
/*!*************************************!*\
  !*** ./node_modules/exenv/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2015 Jed Watson.\n  Based on code that is Copyright 2013-2015, Facebook, Inc.\n  All rights reserved.\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar canUseDOM = !!(\n\t\ttypeof window !== 'undefined' &&\n\t\twindow.document &&\n\t\twindow.document.createElement\n\t);\n\n\tvar ExecutionEnvironment = {\n\n\t\tcanUseDOM: canUseDOM,\n\n\t\tcanUseWorkers: typeof Worker !== 'undefined',\n\n\t\tcanUseEventListeners:\n\t\t\tcanUseDOM && !!(window.addEventListener || window.attachEvent),\n\n\t\tcanUseViewport: canUseDOM && !!window.screen\n\n\t};\n\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn ExecutionEnvironment;\n\t\t}).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n\n}());\n\n\n//# sourceURL=webpack:///./node_modules/exenv/index.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArray = Array.isArray;\nvar keyList = Object.keys;\nvar hasProp = Object.prototype.hasOwnProperty;\nvar hasElementType = typeof Element !== 'undefined';\n\nfunction equal(a, b) {\n  // fast-deep-equal index.js 2.0.1\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    var arrA = isArray(a)\n      , arrB = isArray(b)\n      , i\n      , length\n      , key;\n\n    if (arrA && arrB) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n    if (arrA != arrB) return false;\n\n    var dateA = a instanceof Date\n      , dateB = b instanceof Date;\n    if (dateA != dateB) return false;\n    if (dateA && dateB) return a.getTime() == b.getTime();\n\n    var regexpA = a instanceof RegExp\n      , regexpB = b instanceof RegExp;\n    if (regexpA != regexpB) return false;\n    if (regexpA && regexpB) return a.toString() == b.toString();\n\n    var keys = keyList(a);\n    length = keys.length;\n\n    if (length !== keyList(b).length)\n      return false;\n\n    for (i = length; i-- !== 0;)\n      if (!hasProp.call(b, keys[i])) return false;\n    // end fast-deep-equal\n\n    // start react-fast-compare\n    // custom handling for DOM elements\n    if (hasElementType && a instanceof Element && b instanceof Element)\n      return a === b;\n\n    // custom handling for React\n    for (i = length; i-- !== 0;) {\n      key = keys[i];\n      if (key === '_owner' && a.$$typeof) {\n        // React-specific: avoid traversing React elements' _owner.\n        //  _owner contains circular references\n        // and is not needed when comparing the actual elements (and not their owners)\n        // .$$typeof and ._store on just reasonable markers of a react element\n        continue;\n      } else {\n        // all other properties should be traversed as usual\n        if (!equal(a[key], b[key])) return false;\n      }\n    }\n    // end react-fast-compare\n\n    // fast-deep-equal index.js 2.0.1\n    return true;\n  }\n\n  return a !== a && b !== b;\n}\n// end fast-deep-equal\n\nmodule.exports = function exportedEqual(a, b) {\n  try {\n    return equal(a, b);\n  } catch (error) {\n    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {\n      // warn on circular references, don't crash\n      // browsers give this different errors name and messages:\n      // chrome/safari: \"RangeError\", \"Maximum call stack size exceeded\"\n      // firefox: \"InternalError\", too much recursion\"\n      // edge: \"Error\", \"Out of stack space\"\n      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);\n      return false;\n    }\n    // some other error. we should definitely know about these\n    throw error;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/react-fast-compare/index.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.__esModule = true;\nexports.Helmet = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSideEffect = __webpack_require__(/*! react-side-effect */ \"./node_modules/react-side-effect/lib/index.js\");\n\nvar _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);\n\nvar _reactFastCompare = __webpack_require__(/*! react-fast-compare */ \"./node_modules/react-fast-compare/index.js\");\n\nvar _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);\n\nvar _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ \"./node_modules/react-helmet/lib/HelmetUtils.js\");\n\nvar _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ \"./node_modules/react-helmet/lib/HelmetConstants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Helmet = function Helmet(Component) {\n    var _class, _temp;\n\n    return _temp = _class = function (_React$Component) {\n        _inherits(HelmetWrapper, _React$Component);\n\n        function HelmetWrapper() {\n            _classCallCheck(this, HelmetWrapper);\n\n            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));\n        }\n\n        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n            return !(0, _reactFastCompare2.default)(this.props, nextProps);\n        };\n\n        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {\n            if (!nestedChildren) {\n                return null;\n            }\n\n            switch (child.type) {\n                case _HelmetConstants.TAG_NAMES.SCRIPT:\n                case _HelmetConstants.TAG_NAMES.NOSCRIPT:\n                    return {\n                        innerHTML: nestedChildren\n                    };\n\n                case _HelmetConstants.TAG_NAMES.STYLE:\n                    return {\n                        cssText: nestedChildren\n                    };\n            }\n\n            throw new Error(\"<\" + child.type + \" /> elements are self-closing and can not contain children. Refer to our API for more information.\");\n        };\n\n        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {\n            var _extends2;\n\n            var child = _ref.child,\n                arrayTypeChildren = _ref.arrayTypeChildren,\n                newChildProps = _ref.newChildProps,\n                nestedChildren = _ref.nestedChildren;\n\n            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));\n        };\n\n        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {\n            var _extends3, _extends4;\n\n            var child = _ref2.child,\n                newProps = _ref2.newProps,\n                newChildProps = _ref2.newChildProps,\n                nestedChildren = _ref2.nestedChildren;\n\n            switch (child.type) {\n                case _HelmetConstants.TAG_NAMES.TITLE:\n                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));\n\n                case _HelmetConstants.TAG_NAMES.BODY:\n                    return _extends({}, newProps, {\n                        bodyAttributes: _extends({}, newChildProps)\n                    });\n\n                case _HelmetConstants.TAG_NAMES.HTML:\n                    return _extends({}, newProps, {\n                        htmlAttributes: _extends({}, newChildProps)\n                    });\n            }\n\n            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));\n        };\n\n        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {\n            var newFlattenedProps = _extends({}, newProps);\n\n            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {\n                var _extends5;\n\n                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));\n            });\n\n            return newFlattenedProps;\n        };\n\n        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {\n            if (true) {\n                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {\n                    return child.type === name;\n                })) {\n                    if (typeof child.type === \"function\") {\n                        return (0, _HelmetUtils.warn)(\"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.\");\n                    }\n\n                    return (0, _HelmetUtils.warn)(\"Only elements types \" + _HelmetConstants.VALID_TAG_NAMES.join(\", \") + \" are allowed. Helmet does not support rendering <\" + child.type + \"> elements. Refer to our API for more information.\");\n                }\n\n                if (nestedChildren && typeof nestedChildren !== \"string\" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {\n                    return typeof nestedChild !== \"string\";\n                }))) {\n                    throw new Error(\"Helmet expects a string as a child of <\" + child.type + \">. Did you forget to wrap your children in braces? ( <\" + child.type + \">{``}</\" + child.type + \"> ) Refer to our API for more information.\");\n                }\n            }\n\n            return true;\n        };\n\n        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {\n            var _this2 = this;\n\n            var arrayTypeChildren = {};\n\n            _react2.default.Children.forEach(children, function (child) {\n                if (!child || !child.props) {\n                    return;\n                }\n\n                var _child$props = child.props,\n                    nestedChildren = _child$props.children,\n                    childProps = _objectWithoutProperties(_child$props, [\"children\"]);\n\n                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);\n\n                _this2.warnOnInvalidChildren(child, nestedChildren);\n\n                switch (child.type) {\n                    case _HelmetConstants.TAG_NAMES.LINK:\n                    case _HelmetConstants.TAG_NAMES.META:\n                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:\n                    case _HelmetConstants.TAG_NAMES.SCRIPT:\n                    case _HelmetConstants.TAG_NAMES.STYLE:\n                        arrayTypeChildren = _this2.flattenArrayTypeChildren({\n                            child: child,\n                            arrayTypeChildren: arrayTypeChildren,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n\n                    default:\n                        newProps = _this2.mapObjectTypeChildren({\n                            child: child,\n                            newProps: newProps,\n                            newChildProps: newChildProps,\n                            nestedChildren: nestedChildren\n                        });\n                        break;\n                }\n            });\n\n            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);\n            return newProps;\n        };\n\n        HelmetWrapper.prototype.render = function render() {\n            var _props = this.props,\n                children = _props.children,\n                props = _objectWithoutProperties(_props, [\"children\"]);\n\n            var newProps = _extends({}, props);\n\n            if (children) {\n                newProps = this.mapChildrenToProps(children, newProps);\n            }\n\n            return _react2.default.createElement(Component, newProps);\n        };\n\n        _createClass(HelmetWrapper, null, [{\n            key: \"canUseDOM\",\n\n\n            // Component.peek comes from react-side-effect:\n            // For testing, you may use a static peek() method available on the returned component.\n            // It lets you get the current state without resetting the mounted instance stack.\n            // Don’t use it for anything other than testing.\n\n            /**\n             * @param {Object} base: {\"target\": \"_blank\", \"href\": \"http://mysite.com/\"}\n             * @param {Object} bodyAttributes: {\"className\": \"root\"}\n             * @param {String} defaultTitle: \"Default Title\"\n             * @param {Boolean} defer: true\n             * @param {Boolean} encodeSpecialCharacters: true\n             * @param {Object} htmlAttributes: {\"lang\": \"en\", \"amp\": undefined}\n             * @param {Array} link: [{\"rel\": \"canonical\", \"href\": \"http://mysite.com/example\"}]\n             * @param {Array} meta: [{\"name\": \"description\", \"content\": \"Test description\"}]\n             * @param {Array} noscript: [{\"innerHTML\": \"<img src='http://mysite.com/js/test.js'\"}]\n             * @param {Function} onChangeClientState: \"(newState) => console.log(newState)\"\n             * @param {Array} script: [{\"type\": \"text/javascript\", \"src\": \"http://mysite.com/js/test.js\"}]\n             * @param {Array} style: [{\"type\": \"text/css\", \"cssText\": \"div { display: block; color: blue; }\"}]\n             * @param {String} title: \"Title\"\n             * @param {Object} titleAttributes: {\"itemprop\": \"name\"}\n             * @param {String} titleTemplate: \"MySite.com - %s\"\n             */\n            set: function set(canUseDOM) {\n                Component.canUseDOM = canUseDOM;\n            }\n        }]);\n\n        return HelmetWrapper;\n    }(_react2.default.Component), _class.propTypes = {\n        base: _propTypes2.default.object,\n        bodyAttributes: _propTypes2.default.object,\n        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),\n        defaultTitle: _propTypes2.default.string,\n        defer: _propTypes2.default.bool,\n        encodeSpecialCharacters: _propTypes2.default.bool,\n        htmlAttributes: _propTypes2.default.object,\n        link: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        onChangeClientState: _propTypes2.default.func,\n        script: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        style: _propTypes2.default.arrayOf(_propTypes2.default.object),\n        title: _propTypes2.default.string,\n        titleAttributes: _propTypes2.default.object,\n        titleTemplate: _propTypes2.default.string\n    }, _class.defaultProps = {\n        defer: true,\n        encodeSpecialCharacters: true\n    }, _class.peek = Component.peek, _class.rewind = function () {\n        var mappedState = Component.rewind();\n        if (!mappedState) {\n            // provide fallback if mappedState is undefined\n            mappedState = (0, _HelmetUtils.mapStateOnServer)({\n                baseTag: [],\n                bodyAttributes: {},\n                encodeSpecialCharacters: true,\n                htmlAttributes: {},\n                linkTags: [],\n                metaTags: [],\n                noscriptTags: [],\n                scriptTags: [],\n                styleTags: [],\n                title: \"\",\n                titleAttributes: {}\n            });\n        }\n\n        return mappedState;\n    }, _temp;\n};\n\nvar NullComponent = function NullComponent() {\n    return null;\n};\n\nvar HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);\n\nvar HelmetExport = Helmet(HelmetSideEffects);\nHelmetExport.renderStatic = HelmetExport.rewind;\n\nexports.Helmet = HelmetExport;\nexports.default = HelmetExport;\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/Helmet.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.__esModule = true;\nvar ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {\n    BODY: \"bodyAttributes\",\n    HTML: \"htmlAttributes\",\n    TITLE: \"titleAttributes\"\n};\n\nvar TAG_NAMES = exports.TAG_NAMES = {\n    BASE: \"base\",\n    BODY: \"body\",\n    HEAD: \"head\",\n    HTML: \"html\",\n    LINK: \"link\",\n    META: \"meta\",\n    NOSCRIPT: \"noscript\",\n    SCRIPT: \"script\",\n    STYLE: \"style\",\n    TITLE: \"title\"\n};\n\nvar VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {\n    return TAG_NAMES[name];\n});\n\nvar TAG_PROPERTIES = exports.TAG_PROPERTIES = {\n    CHARSET: \"charset\",\n    CSS_TEXT: \"cssText\",\n    HREF: \"href\",\n    HTTPEQUIV: \"http-equiv\",\n    INNER_HTML: \"innerHTML\",\n    ITEM_PROP: \"itemprop\",\n    NAME: \"name\",\n    PROPERTY: \"property\",\n    REL: \"rel\",\n    SRC: \"src\"\n};\n\nvar REACT_TAG_MAP = exports.REACT_TAG_MAP = {\n    accesskey: \"accessKey\",\n    charset: \"charSet\",\n    class: \"className\",\n    contenteditable: \"contentEditable\",\n    contextmenu: \"contextMenu\",\n    \"http-equiv\": \"httpEquiv\",\n    itemprop: \"itemProp\",\n    tabindex: \"tabIndex\"\n};\n\nvar HELMET_PROPS = exports.HELMET_PROPS = {\n    DEFAULT_TITLE: \"defaultTitle\",\n    DEFER: \"defer\",\n    ENCODE_SPECIAL_CHARACTERS: \"encodeSpecialCharacters\",\n    ON_CHANGE_CLIENT_STATE: \"onChangeClientState\",\n    TITLE_TEMPLATE: \"titleTemplate\"\n};\n\nvar HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {\n    obj[REACT_TAG_MAP[key]] = key;\n    return obj;\n}, {});\n\nvar SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];\n\nvar HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = \"data-react-helmet\";\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/HelmetConstants.js?");

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports.__esModule = true;\nexports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _objectAssign = __webpack_require__(/*! object-assign */ \"object-assign\");\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ \"./node_modules/react-helmet/lib/HelmetConstants.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar encodeSpecialCharacters = function encodeSpecialCharacters(str) {\n    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n    if (encode === false) {\n        return String(str);\n    }\n\n    return String(str).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#x27;\");\n};\n\nvar getTitleFromPropsList = function getTitleFromPropsList(propsList) {\n    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);\n    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);\n\n    if (innermostTemplate && innermostTitle) {\n        // use function arg to avoid need to escape $ characters\n        return innermostTemplate.replace(/%s/g, function () {\n            return innermostTitle;\n        });\n    }\n\n    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);\n\n    return innermostTitle || innermostDefaultTitle || undefined;\n};\n\nvar getOnChangeClientState = function getOnChangeClientState(propsList) {\n    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};\n};\n\nvar getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[tagType] !== \"undefined\";\n    }).map(function (props) {\n        return props[tagType];\n    }).reduce(function (tagAttrs, current) {\n        return _extends({}, tagAttrs, current);\n    }, {});\n};\n\nvar getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {\n    return propsList.filter(function (props) {\n        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== \"undefined\";\n    }).map(function (props) {\n        return props[_HelmetConstants.TAG_NAMES.BASE];\n    }).reverse().reduce(function (innermostBaseTag, tag) {\n        if (!innermostBaseTag.length) {\n            var keys = Object.keys(tag);\n\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {\n                    return innermostBaseTag.concat(tag);\n                }\n            }\n        }\n\n        return innermostBaseTag;\n    }, []);\n};\n\nvar getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {\n    // Calculate list of tags, giving priority innermost component (end of the propslist)\n    var approvedSeenTags = {};\n\n    return propsList.filter(function (props) {\n        if (Array.isArray(props[tagName])) {\n            return true;\n        }\n        if (typeof props[tagName] !== \"undefined\") {\n            warn(\"Helmet: \" + tagName + \" should be of type \\\"Array\\\". Instead found type \\\"\" + _typeof(props[tagName]) + \"\\\"\");\n        }\n        return false;\n    }).map(function (props) {\n        return props[tagName];\n    }).reverse().reduce(function (approvedTags, instanceTags) {\n        var instanceSeenTags = {};\n\n        instanceTags.filter(function (tag) {\n            var primaryAttributeKey = void 0;\n            var keys = Object.keys(tag);\n            for (var i = 0; i < keys.length; i++) {\n                var attributeKey = keys[i];\n                var lowerCaseAttributeKey = attributeKey.toLowerCase();\n\n                // Special rule with link tags, since rel and href are both primary tags, rel takes priority\n                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === \"canonical\") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === \"stylesheet\")) {\n                    primaryAttributeKey = lowerCaseAttributeKey;\n                }\n                // Special case for innerHTML which doesn't work lowercased\n                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {\n                    primaryAttributeKey = attributeKey;\n                }\n            }\n\n            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {\n                return false;\n            }\n\n            var value = tag[primaryAttributeKey].toLowerCase();\n\n            if (!approvedSeenTags[primaryAttributeKey]) {\n                approvedSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!instanceSeenTags[primaryAttributeKey]) {\n                instanceSeenTags[primaryAttributeKey] = {};\n            }\n\n            if (!approvedSeenTags[primaryAttributeKey][value]) {\n                instanceSeenTags[primaryAttributeKey][value] = true;\n                return true;\n            }\n\n            return false;\n        }).reverse().forEach(function (tag) {\n            return approvedTags.push(tag);\n        });\n\n        // Update seen tags with tags from this instance\n        var keys = Object.keys(instanceSeenTags);\n        for (var i = 0; i < keys.length; i++) {\n            var attributeKey = keys[i];\n            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);\n\n            approvedSeenTags[attributeKey] = tagUnion;\n        }\n\n        return approvedTags;\n    }, []).reverse();\n};\n\nvar getInnermostProperty = function getInnermostProperty(propsList, property) {\n    for (var i = propsList.length - 1; i >= 0; i--) {\n        var props = propsList[i];\n\n        if (props.hasOwnProperty(property)) {\n            return props[property];\n        }\n    }\n\n    return null;\n};\n\nvar reducePropsToState = function reducePropsToState(propsList) {\n    return {\n        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),\n        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),\n        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),\n        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),\n        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),\n        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),\n        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),\n        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),\n        onChangeClientState: getOnChangeClientState(propsList),\n        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),\n        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),\n        title: getTitleFromPropsList(propsList),\n        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)\n    };\n};\n\nvar rafPolyfill = function () {\n    var clock = Date.now();\n\n    return function (callback) {\n        var currentTime = Date.now();\n\n        if (currentTime - clock > 16) {\n            clock = currentTime;\n            callback(currentTime);\n        } else {\n            setTimeout(function () {\n                rafPolyfill(callback);\n            }, 0);\n        }\n    };\n}();\n\nvar cafPolyfill = function cafPolyfill(id) {\n    return clearTimeout(id);\n};\n\nvar requestAnimationFrame = typeof window !== \"undefined\" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;\n\nvar cancelAnimationFrame = typeof window !== \"undefined\" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;\n\nvar warn = function warn(msg) {\n    return console && typeof console.warn === \"function\" && console.warn(msg);\n};\n\nvar _helmetCallback = null;\n\nvar handleClientStateChange = function handleClientStateChange(newState) {\n    if (_helmetCallback) {\n        cancelAnimationFrame(_helmetCallback);\n    }\n\n    if (newState.defer) {\n        _helmetCallback = requestAnimationFrame(function () {\n            commitTagChanges(newState, function () {\n                _helmetCallback = null;\n            });\n        });\n    } else {\n        commitTagChanges(newState);\n        _helmetCallback = null;\n    }\n};\n\nvar commitTagChanges = function commitTagChanges(newState, cb) {\n    var baseTag = newState.baseTag,\n        bodyAttributes = newState.bodyAttributes,\n        htmlAttributes = newState.htmlAttributes,\n        linkTags = newState.linkTags,\n        metaTags = newState.metaTags,\n        noscriptTags = newState.noscriptTags,\n        onChangeClientState = newState.onChangeClientState,\n        scriptTags = newState.scriptTags,\n        styleTags = newState.styleTags,\n        title = newState.title,\n        titleAttributes = newState.titleAttributes;\n\n    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);\n    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);\n\n    updateTitle(title, titleAttributes);\n\n    var tagUpdates = {\n        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),\n        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),\n        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),\n        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),\n        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),\n        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)\n    };\n\n    var addedTags = {};\n    var removedTags = {};\n\n    Object.keys(tagUpdates).forEach(function (tagType) {\n        var _tagUpdates$tagType = tagUpdates[tagType],\n            newTags = _tagUpdates$tagType.newTags,\n            oldTags = _tagUpdates$tagType.oldTags;\n\n\n        if (newTags.length) {\n            addedTags[tagType] = newTags;\n        }\n        if (oldTags.length) {\n            removedTags[tagType] = tagUpdates[tagType].oldTags;\n        }\n    });\n\n    cb && cb();\n\n    onChangeClientState(newState, addedTags, removedTags);\n};\n\nvar flattenArray = function flattenArray(possibleArray) {\n    return Array.isArray(possibleArray) ? possibleArray.join(\"\") : possibleArray;\n};\n\nvar updateTitle = function updateTitle(title, attributes) {\n    if (typeof title !== \"undefined\" && document.title !== title) {\n        document.title = flattenArray(title);\n    }\n\n    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);\n};\n\nvar updateAttributes = function updateAttributes(tagName, attributes) {\n    var elementTag = document.getElementsByTagName(tagName)[0];\n\n    if (!elementTag) {\n        return;\n    }\n\n    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);\n    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(\",\") : [];\n    var attributesToRemove = [].concat(helmetAttributes);\n    var attributeKeys = Object.keys(attributes);\n\n    for (var i = 0; i < attributeKeys.length; i++) {\n        var attribute = attributeKeys[i];\n        var value = attributes[attribute] || \"\";\n\n        if (elementTag.getAttribute(attribute) !== value) {\n            elementTag.setAttribute(attribute, value);\n        }\n\n        if (helmetAttributes.indexOf(attribute) === -1) {\n            helmetAttributes.push(attribute);\n        }\n\n        var indexToSave = attributesToRemove.indexOf(attribute);\n        if (indexToSave !== -1) {\n            attributesToRemove.splice(indexToSave, 1);\n        }\n    }\n\n    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {\n        elementTag.removeAttribute(attributesToRemove[_i]);\n    }\n\n    if (helmetAttributes.length === attributesToRemove.length) {\n        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);\n    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(\",\")) {\n        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(\",\"));\n    }\n};\n\nvar updateTags = function updateTags(type, tags) {\n    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);\n    var tagNodes = headElement.querySelectorAll(type + \"[\" + _HelmetConstants.HELMET_ATTRIBUTE + \"]\");\n    var oldTags = Array.prototype.slice.call(tagNodes);\n    var newTags = [];\n    var indexToDelete = void 0;\n\n    if (tags && tags.length) {\n        tags.forEach(function (tag) {\n            var newElement = document.createElement(type);\n\n            for (var attribute in tag) {\n                if (tag.hasOwnProperty(attribute)) {\n                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {\n                        newElement.innerHTML = tag.innerHTML;\n                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {\n                        if (newElement.styleSheet) {\n                            newElement.styleSheet.cssText = tag.cssText;\n                        } else {\n                            newElement.appendChild(document.createTextNode(tag.cssText));\n                        }\n                    } else {\n                        var value = typeof tag[attribute] === \"undefined\" ? \"\" : tag[attribute];\n                        newElement.setAttribute(attribute, value);\n                    }\n                }\n            }\n\n            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, \"true\");\n\n            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.\n            if (oldTags.some(function (existingTag, index) {\n                indexToDelete = index;\n                return newElement.isEqualNode(existingTag);\n            })) {\n                oldTags.splice(indexToDelete, 1);\n            } else {\n                newTags.push(newElement);\n            }\n        });\n    }\n\n    oldTags.forEach(function (tag) {\n        return tag.parentNode.removeChild(tag);\n    });\n    newTags.forEach(function (tag) {\n        return headElement.appendChild(tag);\n    });\n\n    return {\n        oldTags: oldTags,\n        newTags: newTags\n    };\n};\n\nvar generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {\n    return Object.keys(attributes).reduce(function (str, key) {\n        var attr = typeof attributes[key] !== \"undefined\" ? key + \"=\\\"\" + attributes[key] + \"\\\"\" : \"\" + key;\n        return str ? str + \" \" + attr : attr;\n    }, \"\");\n};\n\nvar generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {\n    var attributeString = generateElementAttributesAsString(attributes);\n    var flattenedTitle = flattenArray(title);\n    return attributeString ? \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeString + \">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\" : \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\">\" + encodeSpecialCharacters(flattenedTitle, encode) + \"</\" + type + \">\";\n};\n\nvar generateTagsAsString = function generateTagsAsString(type, tags, encode) {\n    return tags.reduce(function (str, tag) {\n        var attributeHtml = Object.keys(tag).filter(function (attribute) {\n            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);\n        }).reduce(function (string, attribute) {\n            var attr = typeof tag[attribute] === \"undefined\" ? attribute : attribute + \"=\\\"\" + encodeSpecialCharacters(tag[attribute], encode) + \"\\\"\";\n            return string ? string + \" \" + attr : attr;\n        }, \"\");\n\n        var tagContent = tag.innerHTML || tag.cssText || \"\";\n\n        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;\n\n        return str + \"<\" + type + \" \" + _HelmetConstants.HELMET_ATTRIBUTE + \"=\\\"true\\\" \" + attributeHtml + (isSelfClosing ? \"/>\" : \">\" + tagContent + \"</\" + type + \">\");\n    }, \"\");\n};\n\nvar convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {\n    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(attributes).reduce(function (obj, key) {\n        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];\n        return obj;\n    }, initProps);\n};\n\nvar convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {\n    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    return Object.keys(props).reduce(function (obj, key) {\n        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];\n        return obj;\n    }, initAttributes);\n};\n\nvar generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {\n    var _initProps;\n\n    // assigning into an array to define toString function on it\n    var initProps = (_initProps = {\n        key: title\n    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);\n    var props = convertElementAttributestoReactProps(attributes, initProps);\n\n    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];\n};\n\nvar generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {\n    return tags.map(function (tag, i) {\n        var _mappedTag;\n\n        var mappedTag = (_mappedTag = {\n            key: i\n        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);\n\n        Object.keys(tag).forEach(function (attribute) {\n            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;\n\n            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {\n                var content = tag.innerHTML || tag.cssText;\n                mappedTag.dangerouslySetInnerHTML = { __html: content };\n            } else {\n                mappedTag[mappedAttribute] = tag[attribute];\n            }\n        });\n\n        return _react2.default.createElement(type, mappedTag);\n    });\n};\n\nvar getMethodsForTag = function getMethodsForTag(type, tags, encode) {\n    switch (type) {\n        case _HelmetConstants.TAG_NAMES.TITLE:\n            return {\n                toComponent: function toComponent() {\n                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);\n                },\n                toString: function toString() {\n                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);\n                }\n            };\n        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:\n        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:\n            return {\n                toComponent: function toComponent() {\n                    return convertElementAttributestoReactProps(tags);\n                },\n                toString: function toString() {\n                    return generateElementAttributesAsString(tags);\n                }\n            };\n        default:\n            return {\n                toComponent: function toComponent() {\n                    return generateTagsAsReactComponent(type, tags);\n                },\n                toString: function toString() {\n                    return generateTagsAsString(type, tags, encode);\n                }\n            };\n    }\n};\n\nvar mapStateOnServer = function mapStateOnServer(_ref) {\n    var baseTag = _ref.baseTag,\n        bodyAttributes = _ref.bodyAttributes,\n        encode = _ref.encode,\n        htmlAttributes = _ref.htmlAttributes,\n        linkTags = _ref.linkTags,\n        metaTags = _ref.metaTags,\n        noscriptTags = _ref.noscriptTags,\n        scriptTags = _ref.scriptTags,\n        styleTags = _ref.styleTags,\n        _ref$title = _ref.title,\n        title = _ref$title === undefined ? \"\" : _ref$title,\n        titleAttributes = _ref.titleAttributes;\n    return {\n        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),\n        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),\n        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),\n        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),\n        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),\n        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),\n        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),\n        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),\n        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)\n    };\n};\n\nexports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;\nexports.handleClientStateChange = handleClientStateChange;\nexports.mapStateOnServer = mapStateOnServer;\nexports.reducePropsToState = reducePropsToState;\nexports.requestAnimationFrame = requestAnimationFrame;\nexports.warn = warn;\n\n//# sourceURL=webpack:///./node_modules/react-helmet/lib/HelmetUtils.js?");

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar React = __webpack_require__(/*! react */ \"react\");\nvar React__default = _interopDefault(React);\nvar ExecutionEnvironment = _interopDefault(__webpack_require__(/*! exenv */ \"./node_modules/exenv/index.js\"));\nvar shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ \"./node_modules/shallowequal/index.js\"));\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {\n  if (typeof reducePropsToState !== 'function') {\n    throw new Error('Expected reducePropsToState to be a function.');\n  }\n  if (typeof handleStateChangeOnClient !== 'function') {\n    throw new Error('Expected handleStateChangeOnClient to be a function.');\n  }\n  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {\n    throw new Error('Expected mapStateOnServer to either be undefined or a function.');\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (typeof WrappedComponent !== 'function') {\n      throw new Error('Expected WrappedComponent to be a React component.');\n    }\n\n    var mountedInstances = [];\n    var state = void 0;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n\n      if (SideEffect.canUseDOM) {\n        handleStateChangeOnClient(state);\n      } else if (mapStateOnServer) {\n        state = mapStateOnServer(state);\n      }\n    }\n\n    var SideEffect = function (_Component) {\n      _inherits(SideEffect, _Component);\n\n      function SideEffect() {\n        _classCallCheck(this, SideEffect);\n\n        return _possibleConstructorReturn(this, _Component.apply(this, arguments));\n      }\n\n      // Try to use displayName of wrapped component\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      // Expose canUseDOM so tests can monkeypatch it\n\n\n      SideEffect.rewind = function rewind() {\n        if (SideEffect.canUseDOM) {\n          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');\n        }\n\n        var recordedState = state;\n        state = undefined;\n        mountedInstances = [];\n        return recordedState;\n      };\n\n      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n        return !shallowEqual(nextProps, this.props);\n      };\n\n      SideEffect.prototype.componentWillMount = function componentWillMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      SideEffect.prototype.render = function render() {\n        return React__default.createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(React.Component);\n\n    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';\n    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;\n\n\n    return SideEffect;\n  };\n}\n\nmodule.exports = withSideEffect;\n\n\n//# sourceURL=webpack:///./node_modules/react-side-effect/lib/index.js?");

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n\n  if (ret !== void 0) {\n    return !!ret;\n  }\n\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n\n  // Test for A's keys different from B.\n  for (var idx = 0; idx < keysA.length; idx++) {\n    var key = keysA[idx];\n\n    if (!bHasOwnProperty(key)) {\n      return false;\n    }\n\n    var valueA = objA[key];\n    var valueB = objB[key];\n\n    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n\n    if (ret === false || (ret === void 0 && valueA !== valueB)) {\n      return false;\n    }\n  }\n\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/shallowequal/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header/index */ \"./src/components/Header/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header_store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    staticContext: props.staticContext\n  }), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(props.route.routes));\n};\n\nApp.loadData = function (store) {\n  return store.dispatch(_components_Header_store_index__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].getHeaderInfo());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n/* harmony import */ var _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\n\n\n // export default (\n//   <div>\n//     <Route path=\"/\" exact component={Home}></Route>\n//     <Route path=\"/login\" exact component={Login}></Route>\n//   </div>\n// )\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loadData: _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadData,\n  routes: [{\n    path: '/',\n    component: _containers_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true,\n    key: 'home',\n    loadData: _containers_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData // 服务端提前异步获取数据\n\n  }, {\n    path: '/translation',\n    component: _containers_Translation__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    exact: true,\n    key: 'translation',\n    loadData: _containers_Translation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadData // 服务端提前异步获取数据\n\n  }, {\n    component: _containers_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/WithStyle.js":
/*!**************************!*\
  !*** ./src/WithStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n // 这个函数返回一个组件\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (DecoratedComponent, styles) {\n  // 返回一个高阶组件\n  return (\n    /*#__PURE__*/\n    function (_Component) {\n      _inherits(NewComponent, _Component);\n\n      function NewComponent() {\n        _classCallCheck(this, NewComponent);\n\n        return _possibleConstructorReturn(this, _getPrototypeOf(NewComponent).apply(this, arguments));\n      }\n\n      _createClass(NewComponent, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          if (this.props.staticContext) {\n            this.props.staticContext.css.push(styles._getCss());\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedComponent, this.props);\n        }\n      }]);\n\n      return NewComponent;\n    }(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])\n  );\n});\n\n//# sourceURL=webpack:///./src/WithStyle.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/',\n  params: {\n    secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/index */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _WithStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          login = _this$props.login,\n          handleLogin = _this$props.handleLogin,\n          handleLogout = _this$props.handleLogout; // console.log(login, 'login----------');\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_4___default.a.header\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/\"\n      }, \"\\u9996\\u9875\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), login ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogout\n      }, \"\\u9000\\u51FA\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/translation\"\n      }, \"\\u7FFB\\u8BD1\\u5217\\u8868\")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: handleLogin\n      }, \"\\u767B\\u5F55\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapState = function mapState(state) {\n  return {\n    // login: state.header.login\n    login: false\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    handleLogin: function handleLogin() {\n      // console.log('点击登录');\n      dispatch(_store_index__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].login());\n    },\n    handleLogout: function handleLogout() {\n      dispatch(_store_index__WEBPACK_IMPORTED_MODULE_3__[\"actions\"].logout());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapState, mapDispatch)(Object(_WithStyle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Header, _style_css__WEBPACK_IMPORTED_MODULE_4___default.a)));\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! exports provided: getHeaderInfo, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeaderInfo\", function() { return getHeaderInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logout\", function() { return logout; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"],\n    value: value\n  };\n};\n\nvar getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/isLogin').then(function (res) {\n      // console.log(res);\n      // console.log(res.data.result.loginState);\n      dispatch(changeLogin(res.data.result.loginState));\n    });\n  };\n};\nvar login = function login() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/login').then(function (res) {\n      // console.log(res);\n      console.log(res.data.result, 'login---------25');\n      dispatch(changeLogin(res.data.result.login));\n    });\n  };\n};\nvar logout = function logout() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/logout').then(function (res) {\n      // console.log(res);\n      console.log(res.data.result, 'login---------25');\n      dispatch(changeLogin(res.data.result.logout));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! exports provided: CHANGE_LOGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LOGIN\", function() { return CHANGE_LOGIN; });\nvar CHANGE_LOGIN = 'CHANGE_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! exports provided: reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // 纯函数\n\nvar defaultState = {\n  login: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LOGIN\"]:\n      return _objectSpread({}, state, {\n        // login: false\n        login: action.value\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  secret: 'abcd'\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n/* harmony import */ var _WithStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.css.push(_style_css__WEBPACK_IMPORTED_MODULE_5___default.a._getCss());\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getHomeList(false);\n      }\n    }\n  }, {\n    key: \"getList\",\n    value: function getList() {\n      var list = this.props.list;\n      return list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: item.id\n        }, item.name);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"\\u8FD9\\u662Fssr\\u9996\\u9875\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.home\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u554A\\u54C8\\u54C8\\u54C8\", this.props.name), this.getList(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: function onClick() {\n          alert('啊哈哈333');\n        }\n      }, \"\\u70B9\\u51FB\\u6211\")));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newsList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      console.log('测试代码');\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])());\n    }\n  };\n};\n\nvar ExportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_WithStyle__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Home, _style_css__WEBPACK_IMPORTED_MODULE_5___default.a));\n\nExportHome.loadData = function (store) {\n  // 负责在服务端渲染之前，把这个路由需要的数据提前加载好\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getHomeList\"])(true)); // promise\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExportHome);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! exports provided: getHomeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHomeList\", function() { return getHomeList; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"],\n    list: list\n  };\n};\n\nvar getHomeList = function getHomeList(server) {\n  // http://10.168.99.77/api/car/review/friend/sign/list\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/newsList2').then(function (res) {\n      var list = res.data.result.lists;\n      dispatch(changeList(list));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! exports provided: CHANGE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LIST\", function() { return CHANGE_LIST; });\nvar CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// 负责初始化获取数据，是一个纯函数\n\nvar defaultState = {\n  newsList: [],\n  name: 'homereducer'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"]:\n      return _objectSpread({}, state, {\n        newsList: action.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar NotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotFound, _Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotFound).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      if (this.props.staticContext) {\n        this.props.staticContext.NOT_FOUND = true;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"\\u5144\\u5F1F404\\u4E86\");\n    }\n  }]);\n\n  return NotFound;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Translation =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Translation, _Component);\n\n  function Translation() {\n    _classCallCheck(this, Translation);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Translation).apply(this, arguments));\n  }\n\n  _createClass(Translation, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      if (!this.props.list.length) {\n        this.props.getTranslationList();\n      }\n    }\n  }, {\n    key: \"getList\",\n    value: function getList() {\n      var list = this.props.list;\n      return list.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          key: item.id\n        }, item.title);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      if (this.props.login) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Translation\", this.getList());\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Translation \\u672A\\u767B\\u5F55\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Redirect\"], {\n          to: \"/\"\n        }));\n      }\n    }\n  }]);\n\n  return Translation;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nTranslation.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getTranslationList\"])());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.translation.translationList,\n    login: state.header.login\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getTranslationList: function getTranslationList() {\n      dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getTranslationList\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Translation));\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! exports provided: getTranslationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTranslationList\", function() { return getTranslationList; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"],\n    list: list\n  };\n};\n\nvar getTranslationList = function getTranslationList() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/translationList').then(function (res) {\n      if (Number(res.data.returncode) === 0) {\n        var list = res.data.result.lists;\n        dispatch(changeList(list));\n      } else {\n        var _list = [];\n        dispatch(changeList(_list));\n      }\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! exports provided: CHANGE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LIST\", function() { return CHANGE_LIST; });\nvar CHANGE_LIST = 'TRANSLATION/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  translationList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"]:\n      return _objectSpread({}, state, {\n        translationList: action.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public')); // 静态文件访问\n// 配置中间层代理\n// http://10.168.99.77\n// http://rap2api.taobao.org/app/mock/167389/\n\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_1___default()('rap2api.taobao.org', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    // console.log(req.url, '请求的接口===========');\n    return \"/app/mock/167389/api\".concat(req.url);\n  }\n}));\napp.get('*', function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"getStore\"])(req); // 在这里如果能拿到异步数据并填充到store中\n  // store中填充什么，需要结合当前用户请求地址和路由做判断\n\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path); // 让matchRoutes里面所有的组件，对应的loadData方法执行一次\n\n  var promises = []; // 一个页面要加载 A B C D四个组件， 这个四个组件都需要服务端渲染加载数据\n  //  假设A组件加载数据错误 promises 永远会执行成功\n\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  }); // console.log(promises, 'promises======');\n  // 当所有数据准备好后执行\n\n  Promise.all(promises).then(function () {\n    var context = {\n      css: []\n    };\n    var html = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(store, _Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req, context);\n    console.log(context, 'context');\n\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else {\n      if (context.NOT_FOUND) {\n        res.status(404);\n      } else {}\n\n      res.send(html);\n    }\n  });\n});\napp.listen(3000, function () {\n  console.log('Example app listening on port 3000!');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\n\n\nvar createInstance = function createInstance(req) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n    // baseURL: 'http://10.168.99.77'\n    baseURL: 'http://rap2api.taobao.org/app/mock/167389',\n    headers: {\n      cookie: req.get('cookie') || ''\n    },\n    params: {\n      secret: _config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].secret\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createInstance);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/lib/Helmet.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar render = function render(store, routes, req, context) {\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routes)))));\n  var helmet = react_helmet__WEBPACK_IMPORTED_MODULE_3__[\"Helmet\"].renderStatic();\n  var cssStr = context.css.length ? context.css.join('\\n') : '';\n  return \"<html>\\n      <head>\\n        \".concat(helmet.title.toString(), \"\\n        \").concat(helmet.meta.toString(), \"\\n        <style>\").concat(cssStr, \"</style>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(content, \"</div>\\n        <script>\\n            window.context = {\\n              state: \").concat(JSON.stringify(store.getState()), \"\\n            }\\n        </script>\\n        <script src=\\\"/index.js\\\"></script>\\n      </body>\\n    </html>\");\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n/* harmony import */ var _components_Header_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n/* harmony import */ var _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\n\n\n\n\n\n // const reducer = (state = {name: 'dell'}, action) => {\n//   return state;\n// }\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"],\n  header: _components_Header_store__WEBPACK_IMPORTED_MODULE_3__[\"reducer\"],\n  translation: _containers_Translation_store__WEBPACK_IMPORTED_MODULE_4__[\"reducer\"]\n});\nvar getStore = function getStore(req) {\n  // 服务器端 改变服务端store的内容，那么就一定要使用serverAxios\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(Object(_server_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(req))));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context.state; // 改变客户端store 那么一定要使用clientAxios\n\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])));\n}; // 此处是单例的store\n// const store = createStore(reducer, applyMiddleware(thunk));\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"object-assign\");\n\n//# sourceURL=webpack:///external_%22object-assign%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });