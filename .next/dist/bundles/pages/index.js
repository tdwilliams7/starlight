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
/******/ ({

/***/ "./components/PayForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/troywilliams/Desktop/starlight/components/PayForm.js";



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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.submitFormHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "firstName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-34841065"
      }, "First Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "first name",
        id: "firstName",
        name: "firstName",
        onChange: this.inputChangeHandler,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "lastName",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-34841065"
      }, "Last Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "last name",
        id: "LastName",
        name: "lastName",
        onChange: this.inputChangeHandler,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "payPeriod",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-34841065"
      }, "Pay Period"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "pay period",
        id: "payPeriod",
        name: "payPeriod",
        onChange: this.inputChangeHandler,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-34841065"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "annualInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-34841065"
      }, "Annual Income"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        placeholder: "annual income",
        id: "annualInput",
        name: "annual",
        onChange: this.inputChangeHandler,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-34841065"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        htmlFor: "superInput",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-34841065"
      }, "Super"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("select", {
        id: "superInput",
        name: "super",
        onChange: this.inputChangeHandler,
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-34841065"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-34841065"
      }, "0"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-34841065"
      }, "1"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-34841065"
      }, "2"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-34841065"
      }, "3"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-34841065"
      }, "4"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-34841065"
      }, "5"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-34841065"
      }, "6"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-34841065"
      }, "7"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-34841065"
      }, "8"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-34841065"
      }, "9"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-34841065"
      }, "10"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-34841065"
      }, "11"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-34841065"
      }, "12")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-34841065"
      }, "%")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-34841065"
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        style: {
          marginLeft: 50
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: "jsx-34841065"
      }, this.state.payslips.map(function (payslip, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          className: "jsx-34841065"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: "/results/".concat(payslip.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          className: "jsx-34841065"
        }, payslip.name)));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "34841065",
        css: "div.jsx-34841065{margin-top:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGF5Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpS29CLEFBRzZCLGdCQUNsQiIsImZpbGUiOiJjb21wb25lbnRzL1BheUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Ryb3l3aWxsaWFtcy9EZXNrdG9wL3N0YXJsaWdodCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIFBheUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGFubnVhbDogMCxcbiAgICAgIHN1cGVyOiAwLFxuICAgICAgcGF5UGVyaW9kOiAnJyxcbiAgICAgIG1vbnRobHlHcm9zczogMCxcbiAgICAgIG1vbnRobHlOZXQ6IDAsXG4gICAgICB0YXg6IDAsXG4gICAgICBib251czogMCxcbiAgICAgIGlkOiAwLFxuICAgICAgcGF5c2xpcHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZvciAobGV0IGkgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgaWYgKE51bWJlcihpKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgIHBheXNsaXBzOiBbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBheXNsaXBzLFxuICAgICAgICAgICAgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpXG4gICAgICAgICAgXSxcbiAgICAgICAgICBpZDogdGhpcy5zdGF0ZS5pZCArIDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRDaGFuZ2VIYW5kbGVyID0gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFt0YXJnZXQubmFtZV06IHRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIHN1Ym1pdEZvcm1IYW5kbGVyID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBtb250aGx5R3Jvc3MgPSBNYXRoLnJvdW5kKHRoaXMuc3RhdGUuYW5udWFsIC8gMTIpO1xuICAgIGxldCB0YXggPSAwO1xuICAgIGlmIChtb250aGx5R3Jvc3MgPj0gMTUwMDApIHtcbiAgICAgIHRheCA9IE1hdGguZmxvb3IoKG1vbnRobHlHcm9zcyAtIDE1MDAwKSAqIDAuNDUgKyA0NTE5LjMzKTtcbiAgICB9IGVsc2UgaWYgKG1vbnRobHlHcm9zcyA+PSA3MjUwICYmIG1vbnRobHlHcm9zcyA8IDE1MDAwKSB7XG4gICAgICB0YXggPSBNYXRoLmZsb29yKChtb250aGx5R3Jvc3MgLSA3MjUwKSAqIDAuMzcgKyAxNjUyKTtcbiAgICB9IGVsc2UgaWYgKG1vbnRobHlHcm9zcyA+PSAzMDgzICYmIG1vbnRobHlHcm9zcyA8IDcyNTApIHtcbiAgICAgIHRheCA9IE1hdGguZmxvb3IoKG1vbnRobHlHcm9zcyAtIDMwODMpICogMC4zMjUgKyAyOTgpO1xuICAgIH0gZWxzZSBpZiAobW9udGhseUdyb3NzID49IDE1MTcgJiYgbW9udGhseUdyb3NzIDwgMzA4Mykge1xuICAgICAgdGF4ID0gTWF0aC5mbG9vcigobW9udGhseUdyb3NzIC0gMTUxNykgKiAwLjE5KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgdGF4LFxuICAgICAgbW9udGhseUdyb3NzLFxuICAgICAgbW9udGhseU5ldDogbW9udGhseUdyb3NzIC0gTWF0aC5mbG9vcih0YXgpLFxuICAgICAgYm9udXM6IE1hdGgucm91bmQobW9udGhseUdyb3NzICogKHRoaXMuc3RhdGUuc3VwZXIgLyAxMDApKSxcbiAgICAgIHBheXNsaXBzOiBbXG4gICAgICAgIC4uLnRoaXMuc3RhdGUucGF5c2xpcHMsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgJHt0aGlzLnN0YXRlLmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLmxhc3ROYW1lfWAsXG4gICAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWRcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIHRoaXMuc3RhdGUuaWQsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWU6IGAke3RoaXMuc3RhdGUuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubGFzdE5hbWV9YCxcbiAgICAgICAgbW9udGhseUdyb3NzLFxuICAgICAgICBtb250aGx5TmV0OiBtb250aGx5R3Jvc3MgLSBNYXRoLmZsb29yKHRheCksXG4gICAgICAgIHRheCxcbiAgICAgICAgc3VwZXI6IE1hdGgucm91bmQobW9udGhseUdyb3NzICogKHRoaXMuc3RhdGUuc3VwZXIgLyAxMDApKSxcbiAgICAgICAgcGF5UGVyaW9kOiB0aGlzLnN0YXRlLnBheVBlcmlvZCxcbiAgICAgICAgaWQ6IHRoaXMuc3RhdGUuaWRcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmlkICsgMVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybUhhbmRsZXJ9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZpcnN0IG5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhc3QgbmFtZVwiXG4gICAgICAgICAgICBpZD1cIkxhc3ROYW1lXCJcbiAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pbnB1dENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGF5UGVyaW9kXCI+UGF5IFBlcmlvZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXkgcGVyaW9kXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXlQZXJpb2RcIlxuICAgICAgICAgICAgICBuYW1lPVwicGF5UGVyaW9kXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbm51YWxJbnB1dFwiPkFubnVhbCBJbmNvbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYW5udWFsIGluY29tZVwiXG4gICAgICAgICAgICAgIGlkPVwiYW5udWFsSW5wdXRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYW5udWFsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VwZXJJbnB1dFwiPlN1cGVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJzdXBlcklucHV0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInN1cGVyXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaW5wdXRDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uPjA8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjY8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj43PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+ODwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjk8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbj4xMDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uPjExPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24+MTI8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGxhYmVsPiU8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1MCB9fT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wYXlzbGlwcy5tYXAoKHBheXNsaXAsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jlc3VsdHMvJHtwYXlzbGlwLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgPGE+e3BheXNsaXAubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBheUZvcm07XG4iXX0= */\n/*@ sourceURL=components/PayForm.js */"
      }));
    }
  }]);

  return PayForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PayForm);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_PayForm__ = __webpack_require__("./components/PayForm.js");
var _jsxFileName = "/Users/troywilliams/Desktop/starlight/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_PayForm__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  });
});

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map