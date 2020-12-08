webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-spinners/HashLoader.js":
false,

/***/ "./node_modules/react-spinners/PulseLoader.js":
/*!****************************************************!*\
  !*** ./node_modules/react-spinners/PulseLoader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var core_1 = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/react-spinners/helpers/index.js");
var pulse = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"], ["\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function (i) {
            var _a = _this.props, color = _a.color, size = _a.size, margin = _a.margin;
            return core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " 0.75s ", "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "], ["\n      background-color: ", ";\n      width: ", ";\n      height: ", ";\n      margin: ", ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ", " 0.75s ", "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "])), color, helpers_1.cssValue(size), helpers_1.cssValue(size), helpers_1.cssValue(margin), pulse, i * 0.12);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (core_1.jsx("div", { css: [css] },
            core_1.jsx("div", { css: this.style(1) }),
            core_1.jsx("div", { css: this.style(2) }),
            core_1.jsx("div", { css: this.style(3) }))) : null;
    };
    Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../services/services */ "./services/services.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/data-grid */ "./node_modules/@material-ui/data-grid/dist/index-esm.js");
/* harmony import */ var _components_withPrivateRoute__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../components/withPrivateRoute */ "./components/withPrivateRoute.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_35__);







var _jsxFileName = "C:\\project\\projectDigio\\digio-user\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}































var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])({
  root: {
    maxWidth: 360,
    "float": 'left',
    marginRight: '20px',
    marginTop: '10px'
  }
});
var override = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_34__["css"])(_templateObject()); // const setUserData = (props) => {
//   let userData = JSON.parse(this.getUser(this))
//   console.log(userData)
// }

function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    username: '',
    firstname: '',
    lastname: ''
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    username: '',
    firstname: '',
    lastname: ''
  }),
      form = _useState2[0],
      setForm = _useState2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false),
      _React$useState2 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(true),
      _React$useState4 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      loading = _React$useState4[0],
      setLoading = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState([]),
      _React$useState6 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      logStatus = _React$useState6[0],
      setLog = _React$useState6[1];

  var setUserData = function setUserData(e) {
    var _objectSpread2, _objectSpread3;

    var userData = [];
    userData = JSON.parse(localStorage.getItem("userLogin"));
    setData(_objectSpread(_objectSpread({}, data), {}, (_objectSpread2 = {}, Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'username', userData.username), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'firstname', userData.firstname), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'lastname', userData.lastname), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread2, 'password', userData.password), _objectSpread2)));
    setForm(_objectSpread(_objectSpread({}, form), {}, (_objectSpread3 = {}, Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'username', userData.username), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'firstname', userData.firstname), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'lastname', userData.lastname), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'password', userData.password), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'passwordCon', userData.password), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'token', userData.token), Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread3, 'refreshToken', userData.refreshToken), _objectSpread3))); // console.log(userData)

    getLog(userData);
  };

  var setToken = function setToken() {
    console.log("เซ็ตไม่ได้สักทีวะ");
    var dataToken = [];
    dataToken = JSON.parse(localStorage.getItem('userLogin'));
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      token: dataToken.token,
      refreshToken: dataToken.refreshToken
    }));
  };

  var setValue = function setValue(e) {
    setForm(_objectSpread(_objectSpread({}, form), {}, Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value))); // console.log(form)
  };

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    var data = JSON.parse(localStorage.getItem("userLogin"));

    if (data == null) {
      _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
    } else {
      setUserData();
    }

    console.log("useEffect");
    console.log(form);
  }, []);

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose() {
    setOpen(false);
  };

  var editData = /*#__PURE__*/function () {
    var _ref = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].showConfirm("", "ยืนยันการแก้ไขข้อมูล ?", "warning").then( /*#__PURE__*/function () {
                var _ref2 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(res) {
                  return C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (res) {
                            console.log(" form ก่อนส่งไปขอ อัพเดท");
                            console.log(form);
                            _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].httpPost("update", form).then(function (value) {
                              console.log(value);

                              if (value.success) {
                                localStorage.setItem('userLogin', JSON.stringify(value.data));
                                sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                  title: "",
                                  text: value.message,
                                  icon: 'success'
                                }).then(function () {
                                  setUserData();
                                  setOpen(false);
                                });
                              } else {
                                if (value.status == 401) {
                                  _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].showConfirm('', value.message + ' ต้องการดำเนินการต่อหรือไม่ !', 'warning').then( /*#__PURE__*/function () {
                                    var _ref3 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
                                      var userData, token;
                                      return C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              if (!res) {
                                                _context.next = 12;
                                                break;
                                              }

                                              _context.next = 3;
                                              return JSON.parse(localStorage.getItem('userLogin'));

                                            case 3:
                                              userData = _context.sent;
                                              _context.next = 6;
                                              return _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].httpPost('token', userData);

                                            case 6:
                                              token = _context.sent;
                                              console.log("token ใหม่");
                                              console.log(token);

                                              if (token.success) {
                                                userData.token = token.token;
                                                userData.refreshToken = token.refreshToken;
                                                localStorage.setItem('userLogin', JSON.stringify(userData));
                                                setToken();
                                                console.log(userData);
                                                console.log("ฟอร์ม");
                                                console.log(form); // editData()
                                              } else {
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                                  title: "",
                                                  text: token.message,
                                                  icon: 'error'
                                                }).then(function () {
                                                  _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                                                  localStorage.clear();
                                                });
                                              }

                                              _context.next = 13;
                                              break;

                                            case 12:
                                              sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                                title: "",
                                                text: value.message,
                                                icon: 'error'
                                              }).then(function () {
                                                _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                                                localStorage.clear();
                                              });

                                            case 13:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    }));

                                    return function (_x2) {
                                      return _ref3.apply(this, arguments);
                                    };
                                  }());
                                } else {
                                  sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                    title: "",
                                    text: value.message,
                                    icon: 'error'
                                  }).then(function () {
                                    _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                                    localStorage.clear();
                                  });
                                }
                              }
                            });
                          } else {}

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function editData() {
      return _ref.apply(this, arguments);
    };
  }();

  var getLog = /*#__PURE__*/function () {
    var _ref4 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(userData) {
      var log;
      return C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].httpPost("getlog", userData);

            case 2:
              log = _context5.sent;

              if (log.success) {
                setLoading(false);
                console.log(log['data']);
                log['data'].map(function (value, key) {
                  value['id'] = key + 1;
                  value['status'] = value['statuslogin'].statusName;
                });
                setLog(log['data']);
                console.log(logStatus);
              } else {
                if (log.status == 401) {
                  _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].showConfirm('', log.message + ' ต้องการดำเนินการต่อหรือไม่ !', 'warning').then( /*#__PURE__*/function () {
                    var _ref5 = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(res) {
                      var _userData, token;

                      return C_project_projectDigio_digio_user_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              if (!res) {
                                _context4.next = 11;
                                break;
                              }

                              _context4.next = 3;
                              return JSON.parse(localStorage.getItem('userLogin'));

                            case 3:
                              _userData = _context4.sent;
                              _context4.next = 6;
                              return _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].httpPost('token', _userData);

                            case 6:
                              token = _context4.sent;
                              console.log(token);

                              if (token.success) {
                                _userData.token = token.token;
                                _userData.refreshToken = token.refreshToken;
                                localStorage.setItem('userLogin', JSON.stringify(_userData)); // let userData = await JSON.parse(localStorage.getItem('userLogin'));

                                console.log(_userData);
                                getLog(_userData);
                              } else {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                  title: "",
                                  text: token.message,
                                  icon: 'error'
                                }).then(function () {
                                  _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                                  localStorage.clear();
                                });
                              }

                              _context4.next = 12;
                              break;

                            case 11:
                              sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                                title: "",
                                text: log.message,
                                icon: 'error'
                              }).then(function () {
                                _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                                localStorage.clear();
                              });

                            case 12:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x4) {
                      return _ref5.apply(this, arguments);
                    };
                  }());
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_23___default.a.fire({
                    title: "",
                    text: log.message,
                    icon: 'error'
                  }).then(function () {
                    _services_services__WEBPACK_IMPORTED_MODULE_22__["default"].toPath('/login');
                    localStorage.clear();
                  });
                }
              }

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getLog(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var columns = [{
    field: 'date_stamp',
    headerName: 'วันที่และเวลา',
    width: 150
  }, {
    field: 'status',
    headerName: 'สถานะ',
    width: 170
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "sweet-loading",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_35___default.a, {
        css: override,
        size: 50,
        color: "#123abc",
        loading: loading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_17__["default"], {
      maxWidth: "xs",
      open: open,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_21__["default"], {
        id: "form-dialog-title",
        children: "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          size: "small",
          fullWidth: true,
          margin: "normal",
          value: form.username || '',
          onChange: setValue,
          label: "Username",
          name: "username",
          disabled: true,
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          size: "small",
          fullWidth: true,
          margin: "normal",
          value: form.firstname || '',
          onChange: setValue,
          label: "Firstname",
          name: "firstname",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
          size: "small",
          fullWidth: true,
          margin: "normal",
          value: form.lastname || '',
          onChange: setValue,
          label: "Lastname",
          name: "lastname",
          variant: "outlined"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_18__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onClick: handleClose,
          color: "primary",
          children: "Cancel"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onClick: editData,
          color: "primary",
          children: "Confirm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hidden: loading,
      className: classes.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_13__["default"], {
          component: "img",
          alt: "Contemplative Reptile",
          height: "320",
          image: "https://www.w3schools.com/w3css/img_avatar3.png",
          title: "Contemplative Reptile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: "small",
            margin: "normal",
            value: data.username,
            label: "Username",
            disabled: true,
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: "small",
            margin: "normal",
            value: data.firstname,
            label: "Firstname",
            disabled: true,
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
            size: "small",
            margin: "normal",
            value: data.lastname,
            label: "Lastname",
            disabled: true,
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          size: "small",
          color: "primary",
          onClick: function onClick() {
            handleClickOpen();
          },
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hidden: loading,
      className: classes.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          style: {
            height: 500,
            width: '330px'
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_31__["DataGrid"], {
            rows: logStatus,
            columns: columns,
            pageSize: 7
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 282,
    columnNumber: 5
  }, this);
}

_s(Index, "HtIf4Mgqpjup+5BRX+ZHjRfqsxc=", false, function () {
  return [useStyles];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Ub3AiLCJvdmVycmlkZSIsImNzcyIsIkluZGV4IiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZGF0YSIsInNldERhdGEiLCJmb3JtIiwic2V0Rm9ybSIsIlJlYWN0Iiwib3BlbiIsInNldE9wZW4iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvZ1N0YXR1cyIsInNldExvZyIsInNldFVzZXJEYXRhIiwiZSIsInVzZXJEYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3N3b3JkIiwidG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJnZXRMb2ciLCJzZXRUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhVG9rZW4iLCJzZXRWYWx1ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNsYXNzZXMiLCJ1c2VFZmZlY3QiLCJzZXJ2aWNlIiwidG9QYXRoIiwiaGFuZGxlQ2xpY2tPcGVuIiwiaGFuZGxlQ2xvc2UiLCJlZGl0RGF0YSIsInNob3dDb25maXJtIiwidGhlbiIsInJlcyIsImh0dHBQb3N0Iiwic3VjY2VzcyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsIm1lc3NhZ2UiLCJpY29uIiwic3RhdHVzIiwiY2xlYXIiLCJtYXAiLCJrZXkiLCJzdGF0dXNOYW1lIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLGdDQUFnQyx1Q0FB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SyxFQUFFO0FBQUVzRSxrQkFBTSxFQUFFLEdBQVY7QUFBZUQsaUJBQUssRUFBRTtBQUF0QixXQUFaO0FBQUEsaUNBQ0UscUVBQUMsZ0VBQUQ7QUFBVSxnQkFBSSxFQUFFakQsU0FBaEI7QUFBMkIsbUJBQU8sRUFBRThDLE9BQXBDO0FBQTZDLG9CQUFRLEVBQUU7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFpRkQ7O0dBeFRRNUQsSztVQThDU1IsUzs7O0tBOUNUUSxLO0FBMFRNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOGEyMGFjYjRhZjRlODdiYTVhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiogQGpzeCBqc3ggKi9cbnZhciBSZWFjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpO1xudmFyIGhlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL2hlbHBlcnNcIik7XG52YXIgcHVsc2UgPSBjb3JlXzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpO29wYWNpdHk6IDF9XFxuICA0NSUge3RyYW5zZm9ybTogc2NhbGUoMC4xKTtvcGFjaXR5OiAwLjd9XFxuICA4MCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG5cIl0sIFtcIlxcbiAgMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7b3BhY2l0eTogMX1cXG4gIDQ1JSB7dHJhbnNmb3JtOiBzY2FsZSgwLjEpO29wYWNpdHk6IDAuN31cXG4gIDgwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTtvcGFjaXR5OiAxfVxcblwiXSkpKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgY29sb3IgPSBfYS5jb2xvciwgc2l6ZSA9IF9hLnNpemUsIG1hcmdpbiA9IF9hLm1hcmdpbjtcbiAgICAgICAgICAgIHJldHVybiBjb3JlXzEuY3NzKHRlbXBsYXRlT2JqZWN0XzIgfHwgKHRlbXBsYXRlT2JqZWN0XzIgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBtYXJnaW46IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiAwLjc1cyBcIiwgXCJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIsIDAuNjgsIDAuMTgsIDEuMDgpO1xcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XFxuICAgIFwiXSwgW1wiXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIsIFwiO1xcbiAgICAgIHdpZHRoOiBcIiwgXCI7XFxuICAgICAgaGVpZ2h0OiBcIiwgXCI7XFxuICAgICAgbWFyZ2luOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYW5pbWF0aW9uOiBcIiwgXCIgMC43NXMgXCIsIFwicyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4yLCAwLjY4LCAwLjE4LCAxLjA4KTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0pKSwgY29sb3IsIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBoZWxwZXJzXzEuY3NzVmFsdWUobWFyZ2luKSwgcHVsc2UsIGkgKiAwLjEyKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAoY29yZV8xLmpzeChcImRpdlwiLCB7IGNzczogW2Nzc10gfSxcbiAgICAgICAgICAgIGNvcmVfMS5qc3goXCJkaXZcIiwgeyBjc3M6IHRoaXMuc3R5bGUoMSkgfSksXG4gICAgICAgICAgICBjb3JlXzEuanN4KFwiZGl2XCIsIHsgY3NzOiB0aGlzLnN0eWxlKDIpIH0pLFxuICAgICAgICAgICAgY29yZV8xLmpzeChcImRpdlwiLCB7IGNzczogdGhpcy5zdHlsZSgzKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBoZWxwZXJzXzEuc2l6ZU1hcmdpbkRlZmF1bHRzKDE1KTtcbiAgICByZXR1cm4gTG9hZGVyO1xufShSZWFjdC5QdXJlQ29tcG9uZW50KSk7XG5leHBvcnRzLmRlZmF1bHQgPSBMb2FkZXI7XG52YXIgdGVtcGxhdGVPYmplY3RfMSwgdGVtcGxhdGVPYmplY3RfMjtcbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgRGlhbG9nQ29udGVudFRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBzZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3NlcnZpY2VzJ1xuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvZGF0YS1ncmlkJztcbmltcG9ydCB3aXRoUHJpdmF0ZVJvdXRlIGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aFByaXZhdGVSb3V0ZSc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBQdWxzZUxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXJcIjtcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDM2MCxcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gIH0sXG59KTtcbmNvbnN0IG92ZXJyaWRlID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuYDtcbi8vIGNvbnN0IHNldFVzZXJEYXRhID0gKHByb3BzKSA9PiB7XG4vLyAgIGxldCB1c2VyRGF0YSA9IEpTT04ucGFyc2UodGhpcy5nZXRVc2VyKHRoaXMpKVxuLy8gICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbi8vIH1cblxuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZmlyc3RuYW1lOiAnJyxcbiAgICBsYXN0bmFtZTogJydcbiAgfSk7XG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VybmFtZTogJycsXG4gICAgZmlyc3RuYW1lOiAnJyxcbiAgICBsYXN0bmFtZTogJydcbiAgfSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2dTdGF0dXMsIHNldExvZ10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc2V0VXNlckRhdGEgPSAoZSkgPT4ge1xuICAgIGxldCB1c2VyRGF0YSA9IFtdXG4gICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxvZ2luXCIpKVxuXG4gICAgc2V0RGF0YSh7XG4gICAgICAuLi5kYXRhLCBbJ3VzZXJuYW1lJ106IHVzZXJEYXRhLnVzZXJuYW1lLCBbJ2ZpcnN0bmFtZSddOiB1c2VyRGF0YS5maXJzdG5hbWUsXG4gICAgICBbJ2xhc3RuYW1lJ106IHVzZXJEYXRhLmxhc3RuYW1lLCBbJ3Bhc3N3b3JkJ106IHVzZXJEYXRhLnBhc3N3b3JkXG4gICAgfSlcbiAgICBzZXRGb3JtKHtcbiAgICAgIC4uLmZvcm0sIFsndXNlcm5hbWUnXTogdXNlckRhdGEudXNlcm5hbWUsIFsnZmlyc3RuYW1lJ106IHVzZXJEYXRhLmZpcnN0bmFtZSxcbiAgICAgIFsnbGFzdG5hbWUnXTogdXNlckRhdGEubGFzdG5hbWUsIFsncGFzc3dvcmQnXTogdXNlckRhdGEucGFzc3dvcmQsIFsncGFzc3dvcmRDb24nXTogdXNlckRhdGEucGFzc3dvcmQsXG4gICAgICBbJ3Rva2VuJ106IHVzZXJEYXRhLnRva2VuLCBbJ3JlZnJlc2hUb2tlbiddOiB1c2VyRGF0YS5yZWZyZXNoVG9rZW5cbiAgICB9KVxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgIGdldExvZyh1c2VyRGF0YSlcbiAgfVxuXG4gIGNvbnN0IHNldFRva2VuID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi4LmA4LiL4LmH4LiV4LmE4Lih4LmI4LmE4LiU4LmJ4Liq4Lix4LiB4LiX4Li14Lin4LiwXCIpXG4gICAgbGV0IGRhdGFUb2tlbiA9IFtdXG4gICAgZGF0YVRva2VuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckxvZ2luJykpXG4gICAgc2V0Rm9ybSh7XG4gICAgICAuLi5mb3JtLCB0b2tlbjogZGF0YVRva2VuLnRva2VuLCByZWZyZXNoVG9rZW46IGRhdGFUb2tlbi5yZWZyZXNoVG9rZW4sXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNldFZhbHVlID0gKGUpID0+IHtcbiAgICBzZXRGb3JtKHsgLi4uZm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pXG4gIH1cblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJMb2dpblwiKSlcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICBzZXJ2aWNlLnRvUGF0aCgnL2xvZ2luJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRVc2VyRGF0YSgpXG5cbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJ1c2VFZmZlY3RcIik7XG4gICAgY29uc29sZS5sb2coZm9ybSlcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldE9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHNlcnZpY2Uuc2hvd0NvbmZpcm0oXCJcIiwgXCLguKLguLfguJnguKLguLHguJnguIHguLLguKPguYHguIHguYnguYTguILguILguYnguK3guKHguLnguKUgP1wiLCBcIndhcm5pbmdcIikudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiIGZvcm0g4LiB4LmI4Lit4LiZ4Liq4LmI4LiH4LmE4Lib4LiC4LitIOC4reC4seC4nuC5gOC4lOC4l1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgICAgICBzZXJ2aWNlLmh0dHBQb3N0KFwidXBkYXRlXCIsIGZvcm0pLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgaWYgKHZhbHVlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTG9naW4nLCBKU09OLnN0cmluZ2lmeSh2YWx1ZS5kYXRhKSk7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgdGV4dDogdmFsdWUubWVzc2FnZSxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZXJEYXRhKClcbiAgICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICAgIHNlcnZpY2Uuc2hvd0NvbmZpcm0oJycsIHZhbHVlLm1lc3NhZ2UgKyAnIOC4leC5ieC4reC4h+C4geC4suC4o+C4lOC4s+C5gOC4meC4tOC4meC4geC4suC4o+C4leC5iOC4reC4q+C4o+C4t+C4reC5hOC4oeC5iCAhJywgJ3dhcm5pbmcnKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgdXNlckRhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTG9naW4nKSk7XG4gICAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCBzZXJ2aWNlLmh0dHBQb3N0KCd0b2tlbicsIHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbiDguYPguKvguKHguYhcIilcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEudG9rZW4gPSB0b2tlbi50b2tlblxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YS5yZWZyZXNoVG9rZW4gPSB0b2tlbi5yZWZyZXNoVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMb2dpbicsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLguJ/guK3guKPguYzguKFcIilcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgLy8gZWRpdERhdGEoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogdG9rZW4ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnRvUGF0aCgnL2xvZ2luJylcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogdmFsdWUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLnRvUGF0aCgnL2xvZ2luJylcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICB9XG5cbiAgICB9KVxuXG4gIH1cbiAgY29uc3QgZ2V0TG9nID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XG4gICAgLy8gbGV0IGxvZyA9IFtdXG4gICAgdmFyIGxvZyA9IGF3YWl0IHNlcnZpY2UuaHR0cFBvc3QoXCJnZXRsb2dcIiwgdXNlckRhdGEpXG4gICAgaWYgKGxvZy5zdWNjZXNzKSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgY29uc29sZS5sb2cobG9nWydkYXRhJ10pXG4gICAgICBsb2dbJ2RhdGEnXS5tYXAoKHZhbHVlLCBrZXkpID0+IHtcblxuICAgICAgICB2YWx1ZVsnaWQnXSA9IGtleSArIDE7XG4gICAgICAgIHZhbHVlWydzdGF0dXMnXSA9IHZhbHVlWydzdGF0dXNsb2dpbiddLnN0YXR1c05hbWVcblxuICAgICAgfSlcbiAgICAgIHNldExvZyhsb2dbJ2RhdGEnXSlcbiAgICAgIGNvbnNvbGUubG9nKGxvZ1N0YXR1cylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAobG9nLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgc2VydmljZS5zaG93Q29uZmlybSgnJywgbG9nLm1lc3NhZ2UgKyAnIOC4leC5ieC4reC4h+C4geC4suC4o+C4lOC4s+C5gOC4meC4tOC4meC4geC4suC4o+C4leC5iOC4reC4q+C4o+C4t+C4reC5hOC4oeC5iCAhJywgJ3dhcm5pbmcnKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBsZXQgdXNlckRhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTG9naW4nKSk7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSBhd2FpdCBzZXJ2aWNlLmh0dHBQb3N0KCd0b2tlbicsIHVzZXJEYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICAgICAgICBpZiAodG9rZW4uc3VjY2Vzcykge1xuICAgICAgICAgICAgICB1c2VyRGF0YS50b2tlbiA9IHRva2VuLnRva2VuXG4gICAgICAgICAgICAgIHVzZXJEYXRhLnJlZnJlc2hUb2tlbiA9IHRva2VuLnJlZnJlc2hUb2tlblxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckxvZ2luJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKVxuICAgICAgICAgICAgICAvLyBsZXQgdXNlckRhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTG9naW4nKSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgICAgICAgICBnZXRMb2codXNlckRhdGEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiB0b2tlbi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgIHRleHQ6IGxvZy5tZXNzYWdlLFxuICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdGV4dDogbG9nLm1lc3NhZ2UsXG4gICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgfSlcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHsgZmllbGQ6ICdkYXRlX3N0YW1wJywgaGVhZGVyTmFtZTogJ+C4p+C4seC4meC4l+C4teC5iOC5geC4peC4sOC5gOC4p+C4peC4sicsIHdpZHRoOiAxNTAgfSxcbiAgICB7IGZpZWxkOiAnc3RhdHVzJywgaGVhZGVyTmFtZTogJ+C4quC4luC4suC4meC4sCcsIHdpZHRoOiAxNzAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dlZXQtbG9hZGluZ1wiPlxuICAgICAgICA8UHVsc2VMb2FkZXJcbiAgICAgICAgICBjc3M9e292ZXJyaWRlfVxuICAgICAgICAgIHNpemU9ezUwfVxuICAgICAgICAgIGNvbG9yPXtcIiMxMjNhYmNcIn1cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8RGlhbG9nIG1heFdpZHRoPVwieHNcIiBvcGVuPXtvcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwiZm9ybS1kaWFsb2ctdGl0bGVcIj5cbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiZm9ybS1kaWFsb2ctdGl0bGVcIj7guYHguIHguYnguYTguILguILguYnguK3guKHguLnguKU8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIGZ1bGxXaWR0aCBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17Zm9ybS51c2VybmFtZSB8fCAnJ30gb25DaGFuZ2U9e3NldFZhbHVlfSBsYWJlbD1cIlVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgZGlzYWJsZWQgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICB7LyogPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBmdWxsV2lkdGggbWFyZ2luPVwibm9ybWFsXCIgb25DaGFuZ2U9e3NldFZhbHVlfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIGZ1bGxXaWR0aCBtYXJnaW49XCJub3JtYWxcIiBvbkNoYW5nZT17c2V0VmFsdWV9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZENvblwiIGxhYmVsPVwiUGFzc3dvcmQgQ29uZmlybVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+ICovfVxuICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgZnVsbFdpZHRoIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtmb3JtLmZpcnN0bmFtZSB8fCAnJ30gb25DaGFuZ2U9e3NldFZhbHVlfSBsYWJlbD1cIkZpcnN0bmFtZVwiIG5hbWU9XCJmaXJzdG5hbWVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgZnVsbFdpZHRoIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtmb3JtLmxhc3RuYW1lIHx8ICcnfSBvbkNoYW5nZT17c2V0VmFsdWV9IGxhYmVsPVwiTGFzdG5hbWVcIiBuYW1lPVwibGFzdG5hbWVcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtlZGl0RGF0YX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgICAgPENhcmQgaGlkZGVuPXtsb2FkaW5nfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICAgYWx0PVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMyMFwiXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vdzNjc3MvaW1nX2F2YXRhcjMucG5nXCJcbiAgICAgICAgICAgIHRpdGxlPVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2RhdGEudXNlcm5hbWV9IGxhYmVsPVwiVXNlcm5hbWVcIiBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17ZGF0YS5maXJzdG5hbWV9IGxhYmVsPVwiRmlyc3RuYW1lXCIgZGlzYWJsZWQgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2RhdGEubGFzdG5hbWV9IGxhYmVsPVwiTGFzdG5hbWVcIiBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHsgaGFuZGxlQ2xpY2tPcGVuKCk7IH19PlxuICAgICAgICAgICAgRWRpdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxDYXJkIGhpZGRlbj17bG9hZGluZ30gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgey8qIDxUYWJsZUNvbnRhaW5lciBjb21wb25lbnQ9e1BhcGVyfT5cbiAgICAgICAgICAgIDxUYWJsZSBjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9IGFyaWEtbGFiZWw9XCJzaW1wbGUgdGFibGVcIj5cbiAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+4Lin4Lix4LiZ4LmB4Lil4Liw4LmA4Lin4Lil4LiyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCI+4Liq4LiW4Liy4LiZ4LiwPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICAgICAge2xvZ1N0YXR1cy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuZGF0ZV9zdGFtcH1cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgPnt2YWx1ZS5zdGF0dXNsb2dpbi5zdGF0dXNOYW1lfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgIDwvVGFibGVDb250YWluZXI+ICovfVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiA1MDAsIHdpZHRoOiAnMzMwcHgnIH19PlxuICAgICAgICAgICAgPERhdGFHcmlkIHJvd3M9e2xvZ1N0YXR1c30gY29sdW1ucz17Y29sdW1uc30gcGFnZVNpemU9ezd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9MYXlvdXQgPlxuXG4gIClcblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=