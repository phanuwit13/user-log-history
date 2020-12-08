webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-spinners/ClipLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/ClipLoader.js ***!
  \***************************************************/
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
var clip = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"], ["\n  0% {transform: rotate(0deg) scale(1)}\n  50% {transform: rotate(180deg) scale(0.8)}\n  100% {transform: rotate(360deg) scale(1)}\n"])));
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.style = function () {
            var _a = _this.props, size = _a.size, color = _a.color;
            return core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " 0.75s 0s infinite linear;\n      animation-fill-mode: both;\n    "], ["\n      background: transparent !important;\n      width: ", ";\n      height: ", ";\n      border-radius: 100%;\n      border: 2px solid;\n      border-color: ", ";\n      border-bottom-color: transparent;\n      display: inline-block;\n      animation: ", " 0.75s 0s infinite linear;\n      animation-fill-mode: both;\n    "])), helpers_1.cssValue(size), helpers_1.cssValue(size), color, clip);
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? core_1.jsx("div", { css: [this.style(), css] }) : null;
    };
    Loader.defaultProps = helpers_1.sizeDefaults(35);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./node_modules/react-spinners/PulseLoader.js":
false,

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
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-spinners/ClipLoader */ "./node_modules/react-spinners/ClipLoader.js");
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_35__);







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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_35___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWF4V2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIm92ZXJyaWRlIiwiY3NzIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkYXRhIiwic2V0RGF0YSIsImZvcm0iLCJzZXRGb3JtIiwiUmVhY3QiLCJvcGVuIiwic2V0T3BlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9nU3RhdHVzIiwic2V0TG9nIiwic2V0VXNlckRhdGEiLCJlIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzc3dvcmQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsImdldExvZyIsInNldFRva2VuIiwiY29uc29sZSIsImxvZyIsImRhdGFUb2tlbiIsInNldFZhbHVlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsInNlcnZpY2UiLCJ0b1BhdGgiLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbG9zZSIsImVkaXREYXRhIiwic2hvd0NvbmZpcm0iLCJ0aGVuIiwicmVzIiwiaHR0cFBvc3QiLCJzdWNjZXNzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImljb24iLCJzdGF0dXMiLCJjbGVhciIsIm1hcCIsImtleSIsInN0YXR1c05hbWUiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsZ0NBQWdDLHVDQUF1Qyxh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QSxpQ0FDRSxxRUFBQyxnRUFBRDtBQUFVLGdCQUFJLEVBQUVqRCxTQUFoQjtBQUEyQixtQkFBTyxFQUFFOEMsT0FBcEM7QUFBNkMsb0JBQVEsRUFBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWlGRDs7R0F4VFE1RCxLO1VBOENTUixTOzs7S0E5Q1RRLEs7QUEwVE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjliMTAwZTIxYTI4ZTJjZmEwMzBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX21ha2VUZW1wbGF0ZU9iamVjdCA9ICh0aGlzICYmIHRoaXMuX19tYWtlVGVtcGxhdGVPYmplY3QpIHx8IGZ1bmN0aW9uIChjb29rZWQsIHJhdykge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XG4gICAgcmV0dXJuIGNvb2tlZDtcbn07XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKiBAanN4IGpzeCAqL1xudmFyIFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7XG52YXIgaGVscGVyc18xID0gcmVxdWlyZShcIi4vaGVscGVyc1wiKTtcbnZhciBjbGlwID0gY29yZV8xLmtleWZyYW1lcyh0ZW1wbGF0ZU9iamVjdF8xIHx8ICh0ZW1wbGF0ZU9iamVjdF8xID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSl9XFxuICA1MCUge3RyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgc2NhbGUoMC44KX1cXG4gIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSl9XFxuXCJdLCBbXCJcXG4gIDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKX1cXG4gIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgwLjgpfVxcbiAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKX1cXG5cIl0pKSk7XG52YXIgTG9hZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMb2FkZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTG9hZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcywgc2l6ZSA9IF9hLnNpemUsIGNvbG9yID0gX2EuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gY29yZV8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8yIHx8ICh0ZW1wbGF0ZU9iamVjdF8yID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgICAgYm9yZGVyLWNvbG9yOiBcIiwgXCI7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIDAuNzVzIDBzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICAgIGJvcmRlci1jb2xvcjogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiAwLjc1cyAwcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgXCJdKSksIGhlbHBlcnNfMS5jc3NWYWx1ZShzaXplKSwgaGVscGVyc18xLmNzc1ZhbHVlKHNpemUpLCBjb2xvciwgY2xpcCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTG9hZGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBjc3MgPSBfYS5jc3M7XG4gICAgICAgIHJldHVybiBsb2FkaW5nID8gY29yZV8xLmpzeChcImRpdlwiLCB7IGNzczogW3RoaXMuc3R5bGUoKSwgY3NzXSB9KSA6IG51bGw7XG4gICAgfTtcbiAgICBMb2FkZXIuZGVmYXVsdFByb3BzID0gaGVscGVyc18xLnNpemVEZWZhdWx0cygzNSk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzI7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgc2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgd2l0aFByaXZhdGVSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQcml2YXRlUm91dGUnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgQ2xpcExvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvQ2xpcExvYWRlclwiO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXhXaWR0aDogMzYwLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgfSxcbn0pO1xuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG5gO1xuLy8gY29uc3Qgc2V0VXNlckRhdGEgPSAocHJvcHMpID0+IHtcbi8vICAgbGV0IHVzZXJEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdldFVzZXIodGhpcykpXG4vLyAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuLy8gfVxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBmaXJzdG5hbWU6ICcnLFxuICAgIGxhc3RuYW1lOiAnJ1xuICB9KTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBmaXJzdG5hbWU6ICcnLFxuICAgIGxhc3RuYW1lOiAnJ1xuICB9KTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvZ1N0YXR1cywgc2V0TG9nXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzZXRVc2VyRGF0YSA9IChlKSA9PiB7XG4gICAgbGV0IHVzZXJEYXRhID0gW11cbiAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTG9naW5cIikpXG5cbiAgICBzZXREYXRhKHtcbiAgICAgIC4uLmRhdGEsIFsndXNlcm5hbWUnXTogdXNlckRhdGEudXNlcm5hbWUsIFsnZmlyc3RuYW1lJ106IHVzZXJEYXRhLmZpcnN0bmFtZSxcbiAgICAgIFsnbGFzdG5hbWUnXTogdXNlckRhdGEubGFzdG5hbWUsIFsncGFzc3dvcmQnXTogdXNlckRhdGEucGFzc3dvcmRcbiAgICB9KVxuICAgIHNldEZvcm0oe1xuICAgICAgLi4uZm9ybSwgWyd1c2VybmFtZSddOiB1c2VyRGF0YS51c2VybmFtZSwgWydmaXJzdG5hbWUnXTogdXNlckRhdGEuZmlyc3RuYW1lLFxuICAgICAgWydsYXN0bmFtZSddOiB1c2VyRGF0YS5sYXN0bmFtZSwgWydwYXNzd29yZCddOiB1c2VyRGF0YS5wYXNzd29yZCwgWydwYXNzd29yZENvbiddOiB1c2VyRGF0YS5wYXNzd29yZCxcbiAgICAgIFsndG9rZW4nXTogdXNlckRhdGEudG9rZW4sIFsncmVmcmVzaFRva2VuJ106IHVzZXJEYXRhLnJlZnJlc2hUb2tlblxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgZ2V0TG9nKHVzZXJEYXRhKVxuICB9XG5cbiAgY29uc3Qgc2V0VG9rZW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLguYDguIvguYfguJXguYTguKHguYjguYTguJTguYnguKrguLHguIHguJfguLXguKfguLBcIilcbiAgICBsZXQgZGF0YVRva2VuID0gW11cbiAgICBkYXRhVG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTG9naW4nKSlcbiAgICBzZXRGb3JtKHtcbiAgICAgIC4uLmZvcm0sIHRva2VuOiBkYXRhVG9rZW4udG9rZW4sIHJlZnJlc2hUb2tlbjogZGF0YVRva2VuLnJlZnJlc2hUb2tlbixcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2V0VmFsdWUgPSAoZSkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgLy8gY29uc29sZS5sb2coZm9ybSlcbiAgfVxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxvZ2luXCIpKVxuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFVzZXJEYXRhKClcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdFwiKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2VydmljZS5zaG93Q29uZmlybShcIlwiLCBcIuC4ouC4t+C4meC4ouC4seC4meC4geC4suC4o+C5geC4geC5ieC5hOC4guC4guC5ieC4reC4oeC4ueC4pSA/XCIsIFwid2FybmluZ1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgZm9ybSDguIHguYjguK3guJnguKrguYjguIfguYTguJvguILguK0g4Lit4Lix4Lie4LmA4LiU4LiXXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgICAgIHNlcnZpY2UuaHR0cFBvc3QoXCJ1cGRhdGVcIiwgZm9ybSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICBpZiAodmFsdWUuc3VjY2Vzcykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMb2dpbicsIEpTT04uc3RyaW5naWZ5KHZhbHVlLmRhdGEpKTtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlckRhdGEoKVxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgc2VydmljZS5zaG93Q29uZmlybSgnJywgdmFsdWUubWVzc2FnZSArICcg4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4Lit4Lir4Lij4Li34Lit4LmE4Lih4LmIICEnLCAnd2FybmluZycpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHNlcnZpY2UuaHR0cFBvc3QoJ3Rva2VuJywgdXNlckRhdGEpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIOC5g+C4q+C4oeC5iFwiKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YS50b2tlbiA9IHRva2VuLnRva2VuXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhLnJlZnJlc2hUb2tlbiA9IHRva2VuLnJlZnJlc2hUb2tlblxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckxvZ2luJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKVxuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbigpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuC4n+C4reC4o+C5jOC4oVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgICAgICAgICAgICAgICAgICAvLyBlZGl0RGF0YSgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0b2tlbi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfVxuICBjb25zdCBnZXRMb2cgPSBhc3luYyAodXNlckRhdGEpID0+IHtcbiAgICAvLyBsZXQgbG9nID0gW11cbiAgICB2YXIgbG9nID0gYXdhaXQgc2VydmljZS5odHRwUG9zdChcImdldGxvZ1wiLCB1c2VyRGF0YSlcbiAgICBpZiAobG9nLnN1Y2Nlc3MpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhsb2dbJ2RhdGEnXSlcbiAgICAgIGxvZ1snZGF0YSddLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuXG4gICAgICAgIHZhbHVlWydpZCddID0ga2V5ICsgMTtcbiAgICAgICAgdmFsdWVbJ3N0YXR1cyddID0gdmFsdWVbJ3N0YXR1c2xvZ2luJ10uc3RhdHVzTmFtZVxuXG4gICAgICB9KVxuICAgICAgc2V0TG9nKGxvZ1snZGF0YSddKVxuICAgICAgY29uc29sZS5sb2cobG9nU3RhdHVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChsb2cuc3RhdHVzID09IDQwMSkge1xuICAgICAgICBzZXJ2aWNlLnNob3dDb25maXJtKCcnLCBsb2cubWVzc2FnZSArICcg4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4Lit4Lir4Lij4Li34Lit4LmE4Lih4LmIICEnLCAnd2FybmluZycpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHNlcnZpY2UuaHR0cFBvc3QoJ3Rva2VuJywgdXNlckRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgICAgIGlmICh0b2tlbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHVzZXJEYXRhLnRva2VuID0gdG9rZW4udG9rZW5cbiAgICAgICAgICAgICAgdXNlckRhdGEucmVmcmVzaFRva2VuID0gdG9rZW4ucmVmcmVzaFRva2VuXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTG9naW4nLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpXG4gICAgICAgICAgICAgIC8vIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICAgICAgICAgIGdldExvZyh1c2VyRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRva2VuLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgdGV4dDogbG9nLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0ZXh0OiBsb2cubWVzc2FnZSxcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZXJ2aWNlLnRvUGF0aCgnL2xvZ2luJylcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICB9KVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyBmaWVsZDogJ2RhdGVfc3RhbXAnLCBoZWFkZXJOYW1lOiAn4Lin4Lix4LiZ4LiX4Li14LmI4LmB4Lil4Liw4LmA4Lin4Lil4LiyJywgd2lkdGg6IDE1MCB9LFxuICAgIHsgZmllbGQ6ICdzdGF0dXMnLCBoZWFkZXJOYW1lOiAn4Liq4LiW4Liy4LiZ4LiwJywgd2lkdGg6IDE3MCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2VldC1sb2FkaW5nXCI+XG4gICAgICAgIDxDbGlwTG9hZGVyXG4gICAgICAgICAgY3NzPXtvdmVycmlkZX1cbiAgICAgICAgICBzaXplPXs1MH1cbiAgICAgICAgICBjb2xvcj17XCIjMTIzYWJjXCJ9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpYWxvZyBtYXhXaWR0aD1cInhzXCIgb3Blbj17b3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cImZvcm0tZGlhbG9nLXRpdGxlXCI+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImZvcm0tZGlhbG9nLXRpdGxlXCI+4LmB4LiB4LmJ4LmE4LiC4LiC4LmJ4Lit4Lih4Li54LilPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBmdWxsV2lkdGggbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2Zvcm0udXNlcm5hbWUgfHwgJyd9IG9uQ2hhbmdlPXtzZXRWYWx1ZX0gbGFiZWw9XCJVc2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgey8qIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgZnVsbFdpZHRoIG1hcmdpbj1cIm5vcm1hbFwiIG9uQ2hhbmdlPXtzZXRWYWx1ZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29yZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBmdWxsV2lkdGggbWFyZ2luPVwibm9ybWFsXCIgb25DaGFuZ2U9e3NldFZhbHVlfSB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRDb25cIiBsYWJlbD1cIlBhc3N3b3JkIENvbmZpcm1cIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPiAqL31cbiAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIGZ1bGxXaWR0aCBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17Zm9ybS5maXJzdG5hbWUgfHwgJyd9IG9uQ2hhbmdlPXtzZXRWYWx1ZX0gbGFiZWw9XCJGaXJzdG5hbWVcIiBuYW1lPVwiZmlyc3RuYW1lXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIGZ1bGxXaWR0aCBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17Zm9ybS5sYXN0bmFtZSB8fCAnJ30gb25DaGFuZ2U9e3NldFZhbHVlfSBsYWJlbD1cIkxhc3RuYW1lXCIgbmFtZT1cImxhc3RuYW1lXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZWRpdERhdGF9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICAgIDxDYXJkIGhpZGRlbj17bG9hZGluZ30gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgICAgIGFsdD1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMjBcIlxuICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL3czY3NzL2ltZ19hdmF0YXIzLnBuZ1wiXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtkYXRhLnVzZXJuYW1lfSBsYWJlbD1cIlVzZXJuYW1lXCIgZGlzYWJsZWQgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2RhdGEuZmlyc3RuYW1lfSBsYWJlbD1cIkZpcnN0bmFtZVwiIGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtkYXRhLmxhc3RuYW1lfSBsYWJlbD1cIkxhc3RuYW1lXCIgZGlzYWJsZWQgdmFyaWFudD1cIm91dGxpbmVkXCIgLz5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZUNsaWNrT3BlbigpOyB9fT5cbiAgICAgICAgICAgIEVkaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8Q2FyZCBoaWRkZW49e2xvYWRpbmd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIHsvKiA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICAgICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPuC4p+C4seC4meC5geC4peC4sOC5gOC4p+C4peC4sjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiPuC4quC4luC4suC4meC4sDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgICAgICAgIHtsb2dTdGF0dXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmRhdGVfc3RhbXB9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsID57dmFsdWUuc3RhdHVzbG9naW4uc3RhdHVzTmFtZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPiAqL31cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogNTAwLCB3aWR0aDogJzMzMHB4JyB9fT5cbiAgICAgICAgICAgIDxEYXRhR3JpZCByb3dzPXtsb2dTdGF0dXN9IGNvbHVtbnM9e2NvbHVtbnN9IHBhZ2VTaXplPXs3fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkPlxuICAgIDwvTGF5b3V0ID5cblxuICApXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9