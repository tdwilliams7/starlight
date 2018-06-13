module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var PayForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PayForm, _Component);

  function PayForm(props) {
    var _this;

    _classCallCheck(this, PayForm);

    _this = _possibleConstructorReturn(this, (PayForm.__proto__ || Object.getPrototypeOf(PayForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "inputChangeHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;

        _this.setState(_defineProperty({}, target.name, target.value));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "submitFormHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var monthlyGross = Math.round(_this.state.annual / 12);
        var tax = 0;

        if (monthlyGross >= 15000) {
          tax = Math.floor((monthlyGross - 15000) * 0.45 + 4519.33);
        } else if (monthlyGross >= 7250 && monthlyGross < 15000) {
          tax = Math.floor((monthlyGross - 7250) * 0.37 + 1652);
        } else if (monthlyGross >= 3083 && monthlyGross < 7250) {
          tax = Math.floor((monthlyGross - 3083) * 0.325 + 298);
        } else if (monthlyGross >= 1517 && monthlyGross < 3083) {
          tax = Math.floor((monthlyGross - 1517) * 0.19);
        }

        _this.setState(_objectSpread({}, _this.state, {
          tax: tax,
          monthlyGross: monthlyGross,
          monthlyNet: monthlyGross - Math.floor(tax),
          bonus: Math.round(monthlyGross * (_this.state.super / 100)),
          payslips: _toConsumableArray(_this.state.payslips).concat([{
            name: "".concat(_this.state.firstName, " ").concat(_this.state.lastName),
            id: _this.state.id
          }])
        }));

        window.localStorage.setItem(_this.state.id, JSON.stringify({
          name: "".concat(_this.state.firstName, " ").concat(_this.state.lastName),
          monthlyGross: monthlyGross,
          monthlyNet: monthlyGross - Math.floor(tax),
          tax: tax,
          super: Math.round(monthlyGross * (_this.state.super / 100)),
          payPeriod: _this.state.payPeriod,
          id: _this.state.id
        }));

        _this.setState({
          id: _this.state.id + 1
        });
      }
    });
    _this.state = {
      firstName: '',
      lastName: '',
      annual: 0,
      super: 0,
      payPeriod: '',
      monthlyGross: 0,
      monthlyNet: 0,
      tax: 0,
      bonus: 0,
      id: 0,
      payslips: []
    };
    return _this;
  }

  _createClass(PayForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      for (var i in window.localStorage) {
        if (Number(i)) {
          this.setState(_objectSpread({}, this.state, {
            payslips: _toConsumableArray(this.state.payslips).concat([JSON.parse(window.localStorage.getItem(i))]),
            id: this.state.id + 1
          }));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'center'
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.submitFormHandler,
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "firstName",
        className: "jsx-34841065"
      }, "First Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "first name",
        id: "firstName",
        name: "firstName",
        onChange: this.inputChangeHandler,
        required: true,
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "lastName",
        className: "jsx-34841065"
      }, "Last Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "last name",
        id: "LastName",
        name: "lastName",
        onChange: this.inputChangeHandler,
        required: true,
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "payPeriod",
        className: "jsx-34841065"
      }, "Pay Period"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "pay period",
        id: "payPeriod",
        name: "payPeriod",
        onChange: this.inputChangeHandler,
        required: true,
        className: "jsx-34841065"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "annualInput",
        className: "jsx-34841065"
      }, "Annual Income"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "annual income",
        id: "annualInput",
        name: "annual",
        onChange: this.inputChangeHandler,
        required: true,
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "superInput",
        className: "jsx-34841065"
      }, "Super"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        id: "superInput",
        name: "super",
        onChange: this.inputChangeHandler,
        required: true,
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "0"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "3"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "4"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "5"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "6"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "7"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "8"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "9"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "11"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        className: "jsx-34841065"
      }, "12")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        className: "jsx-34841065"
      }, "%")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "jsx-34841065"
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginLeft: 50
        },
        className: "jsx-34841065"
      }, this.state.payslips.map(function (payslip, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: i,
          className: "jsx-34841065"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: "/results/".concat(payslip.id)
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "jsx-34841065"
        }, payslip.name)));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "34841065",
        css: ["div.jsx-34841065{margin-top:25px;}"]
      }));
    }
  }]);

  return PayForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PayForm);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PayForm__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_PayForm__["a" /* default */], null);
});

/***/ })
/******/ ]);