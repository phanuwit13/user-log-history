webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/react-spinners/ClipLoader.js":
false,

/***/ "./node_modules/react-spinners/HashLoader.js":
/*!***************************************************!*\
  !*** ./node_modules/react-spinners/HashLoader.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var index_1 = __webpack_require__(/*! ./helpers/index */ "./node_modules/react-spinners/helpers/index.js");
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.thickness = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return value / 5;
        };
        _this.lat = function () {
            var size = _this.props.size;
            var value = index_1.parseLengthAndUnit(size).value;
            return (value - _this.thickness()) / 2;
        };
        _this.offset = function () { return _this.lat() - _this.thickness(); };
        _this.color = function () {
            var color = _this.props.color;
            return index_1.calculateRgba(color, 0.75);
        };
        _this.before = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {width: ", ";box-shadow: 0 ", "px ", ", 0 ", "px ", "}\n      70% {width: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, lat, -offset, color, -lat, offset, color, index_1.cssValue(size), -offset, color, offset, color, thickness, -lat, -offset, color, lat, offset, color, lat, -offset, color, -lat, offset, color);
        };
        _this.after = function () {
            var size = _this.props.size;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "], ["\n      0% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      35% {height: ", ";box-shadow: ", "px 0 ", ", ", "px 0 ", "}\n      70% {height: ", "px;box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n      100% {box-shadow: ", "px ", "px ", ", ", "px ", "px ", "}\n    "])), thickness, offset, lat, color, -offset, -lat, color, index_1.cssValue(size), offset, color, -offset, color, thickness, offset, -lat, color, -offset, lat, color, offset, lat, color, -offset, -lat, color);
        };
        _this.style = function (i) {
            var size = _this.props.size;
            var _a = index_1.parseLengthAndUnit(size), value = _a.value, unit = _a.unit;
            return core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " 2s infinite;\n    "], ["\n      position: absolute;\n      content: \"\";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ", ";\n      height: ", ";\n      border-radius: ", ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ", " 2s infinite;\n    "])), "" + value / 5 + unit, "" + value / 5 + unit, "" + value / 10 + unit, i === 1 ? _this.before() : _this.after());
        };
        _this.wrapper = function () {
            var size = _this.props.size;
            return core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "], ["\n      position: relative;\n      width: ", ";\n      height: ", ";\n      transform: rotate(165deg);\n    "])), index_1.cssValue(size), index_1.cssValue(size));
        };
        return _this;
    }
    Loader.prototype.render = function () {
        var _a = this.props, loading = _a.loading, css = _a.css;
        return loading ? (core_1.jsx("div", { css: [this.wrapper(), css] },
            core_1.jsx("div", { css: this.style(1) }),
            core_1.jsx("div", { css: this.style(2) }))) : null;
    };
    Loader.defaultProps = index_1.sizeDefaults(50);
    return Loader;
}(React.PureComponent));
exports.default = Loader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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
/* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-spinners/HashLoader */ "./node_modules/react-spinners/HashLoader.js");
/* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_35__);







var _jsxFileName = "C:\\project\\projectDigio\\digio-user\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(C_project_projectDigio_digio_user_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  display: block;\n  margin: 0 auto;\n  \n"]);

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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_35___default.a, {
        css: override,
        size: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5uZXJzL0hhc2hMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWF4V2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsIm92ZXJyaWRlIiwiY3NzIiwiSW5kZXgiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJkYXRhIiwic2V0RGF0YSIsImZvcm0iLCJzZXRGb3JtIiwiUmVhY3QiLCJvcGVuIiwic2V0T3BlbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9nU3RhdHVzIiwic2V0TG9nIiwic2V0VXNlckRhdGEiLCJlIiwidXNlckRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzc3dvcmQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsImdldExvZyIsInNldFRva2VuIiwiY29uc29sZSIsImxvZyIsImRhdGFUb2tlbiIsInNldFZhbHVlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsInNlcnZpY2UiLCJ0b1BhdGgiLCJoYW5kbGVDbGlja09wZW4iLCJoYW5kbGVDbG9zZSIsImVkaXREYXRhIiwic2hvd0NvbmZpcm0iLCJ0aGVuIiwicmVzIiwiaHR0cFBvc3QiLCJzdWNjZXNzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwibWVzc2FnZSIsImljb24iLCJzdGF0dXMiLCJjbGVhciIsIm1hcCIsImtleSIsInN0YXR1c05hbWUiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNB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a0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBZUUscUVBQUMsc0VBQUQ7QUFBQSwrQkFDRSxxRUFBQyxpRUFBRDtBQUFRLGNBQUksRUFBQyxPQUFiO0FBQXFCLGVBQUssRUFBQyxTQUEzQjtBQUFxQyxpQkFBTyxFQUFFLG1CQUFNO0FBQUVtQywyQkFBZTtBQUFLLFdBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCRixlQWdERSxxRUFBQyw4REFBRDtBQUFNLFlBQU0sRUFBRTNCLE9BQWQ7QUFBdUIsZUFBUyxFQUFFdUIsT0FBTyxDQUFDekMsSUFBMUM7QUFBQSw2QkFDRSxxRUFBQyxzRUFBRDtBQUFBLCtCQXFCRTtBQUFLLGVBQUssRUFBRTtBQUFFc0Usa0JBQU0sRUFBRSxHQUFWO0FBQWVELGlCQUFLLEVBQUU7QUFBdEIsV0FBWjtBQUFBLGlDQUNFLHFFQUFDLGdFQUFEO0FBQVUsZ0JBQUksRUFBRWpELFNBQWhCO0FBQTJCLG1CQUFPLEVBQUU4QyxPQUFwQztBQUE2QyxvQkFBUSxFQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBaUZEOztHQXhUUTVELEs7VUE4Q1NSLFM7OztLQTlDVFEsSztBQTBUTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTk1M2MwOTA4M2E5YWZlZWExNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19tYWtlVGVtcGxhdGVPYmplY3QgPSAodGhpcyAmJiB0aGlzLl9fbWFrZVRlbXBsYXRlT2JqZWN0KSB8fCBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICAgIHJldHVybiBjb29rZWQ7XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBqc3gganN4ICovXG52YXIgUmVhY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaGVscGVycy9pbmRleFwiKTtcbnZhciBMb2FkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExvYWRlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50aGlja25lc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbmRleF8xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKS52YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmxhdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGluZGV4XzEucGFyc2VMZW5ndGhBbmRVbml0KHNpemUpLnZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSAtIF90aGlzLnRoaWNrbmVzcygpKSAvIDI7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9mZnNldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmxhdCgpIC0gX3RoaXMudGhpY2tuZXNzKCk7IH07XG4gICAgICAgIF90aGlzLmNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMucHJvcHMuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXhfMS5jYWxjdWxhdGVSZ2JhKGNvbG9yLCAwLjc1KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmVmb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpemUgPSBfdGhpcy5wcm9wcy5zaXplO1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gX3RoaXMuY29sb3IoKTtcbiAgICAgICAgICAgIHZhciBsYXQgPSBfdGhpcy5sYXQoKTtcbiAgICAgICAgICAgIHZhciB0aGlja25lc3MgPSBfdGhpcy50aGlja25lc3MoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBfdGhpcy5vZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiBjb3JlXzEua2V5ZnJhbWVzKHRlbXBsYXRlT2JqZWN0XzEgfHwgKHRlbXBsYXRlT2JqZWN0XzEgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICAwJSB7d2lkdGg6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDM1JSB7d2lkdGg6IFwiLCBcIjtib3gtc2hhZG93OiAwIFwiLCBcInB4IFwiLCBcIiwgMCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgNzAlIHt3aWR0aDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMTAwJSB7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgIFwiXSwgW1wiXFxuICAgICAgMCUge3dpZHRoOiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAzNSUge3dpZHRoOiBcIiwgXCI7Ym94LXNoYWRvdzogMCBcIiwgXCJweCBcIiwgXCIsIDAgXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDcwJSB7d2lkdGg6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDEwMCUge2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICBcIl0pKSwgdGhpY2tuZXNzLCBsYXQsIC1vZmZzZXQsIGNvbG9yLCAtbGF0LCBvZmZzZXQsIGNvbG9yLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpLCAtb2Zmc2V0LCBjb2xvciwgb2Zmc2V0LCBjb2xvciwgdGhpY2tuZXNzLCAtbGF0LCAtb2Zmc2V0LCBjb2xvciwgbGF0LCBvZmZzZXQsIGNvbG9yLCBsYXQsIC1vZmZzZXQsIGNvbG9yLCAtbGF0LCBvZmZzZXQsIGNvbG9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWZ0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgY29sb3IgPSBfdGhpcy5jb2xvcigpO1xuICAgICAgICAgICAgdmFyIGxhdCA9IF90aGlzLmxhdCgpO1xuICAgICAgICAgICAgdmFyIHRoaWNrbmVzcyA9IF90aGlzLnRoaWNrbmVzcygpO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IF90aGlzLm9mZnNldCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNvcmVfMS5rZXlmcmFtZXModGVtcGxhdGVPYmplY3RfMiB8fCAodGVtcGxhdGVPYmplY3RfMiA9IF9fbWFrZVRlbXBsYXRlT2JqZWN0KFtcIlxcbiAgICAgIDAlIHtoZWlnaHQ6IFwiLCBcInB4O2JveC1zaGFkb3c6IFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIiwgXCIsIFwicHggXCIsIFwicHggXCIsIFwifVxcbiAgICAgIDM1JSB7aGVpZ2h0OiBcIiwgXCI7Ym94LXNoYWRvdzogXCIsIFwicHggMCBcIiwgXCIsIFwiLCBcInB4IDAgXCIsIFwifVxcbiAgICAgIDcwJSB7aGVpZ2h0OiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAxMDAlIHtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgXCJdLCBbXCJcXG4gICAgICAwJSB7aGVpZ2h0OiBcIiwgXCJweDtib3gtc2hhZG93OiBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCIsIFwiLCBcInB4IFwiLCBcInB4IFwiLCBcIn1cXG4gICAgICAzNSUge2hlaWdodDogXCIsIFwiO2JveC1zaGFkb3c6IFwiLCBcInB4IDAgXCIsIFwiLCBcIiwgXCJweCAwIFwiLCBcIn1cXG4gICAgICA3MCUge2hlaWdodDogXCIsIFwicHg7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgICAgMTAwJSB7Ym94LXNoYWRvdzogXCIsIFwicHggXCIsIFwicHggXCIsIFwiLCBcIiwgXCJweCBcIiwgXCJweCBcIiwgXCJ9XFxuICAgIFwiXSkpLCB0aGlja25lc3MsIG9mZnNldCwgbGF0LCBjb2xvciwgLW9mZnNldCwgLWxhdCwgY29sb3IsIGluZGV4XzEuY3NzVmFsdWUoc2l6ZSksIG9mZnNldCwgY29sb3IsIC1vZmZzZXQsIGNvbG9yLCB0aGlja25lc3MsIG9mZnNldCwgLWxhdCwgY29sb3IsIC1vZmZzZXQsIGxhdCwgY29sb3IsIG9mZnNldCwgbGF0LCBjb2xvciwgLW9mZnNldCwgLWxhdCwgY29sb3IpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdHlsZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF90aGlzLnByb3BzLnNpemU7XG4gICAgICAgICAgICB2YXIgX2EgPSBpbmRleF8xLnBhcnNlTGVuZ3RoQW5kVW5pdChzaXplKSwgdmFsdWUgPSBfYS52YWx1ZSwgdW5pdCA9IF9hLnVuaXQ7XG4gICAgICAgICAgICByZXR1cm4gY29yZV8xLmNzcyh0ZW1wbGF0ZU9iamVjdF8zIHx8ICh0ZW1wbGF0ZU9iamVjdF8zID0gX19tYWtlVGVtcGxhdGVPYmplY3QoW1wiXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHRvcDogNTAlO1xcbiAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBub25lO1xcbiAgICAgIGFuaW1hdGlvbjogXCIsIFwiIDJzIGluZmluaXRlO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBcIiwgXCI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogbm9uZTtcXG4gICAgICBhbmltYXRpb246IFwiLCBcIiAycyBpbmZpbml0ZTtcXG4gICAgXCJdKSksIFwiXCIgKyB2YWx1ZSAvIDUgKyB1bml0LCBcIlwiICsgdmFsdWUgLyA1ICsgdW5pdCwgXCJcIiArIHZhbHVlIC8gMTAgKyB1bml0LCBpID09PSAxID8gX3RoaXMuYmVmb3JlKCkgOiBfdGhpcy5hZnRlcigpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaXplID0gX3RoaXMucHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBjb3JlXzEuY3NzKHRlbXBsYXRlT2JqZWN0XzQgfHwgKHRlbXBsYXRlT2JqZWN0XzQgPSBfX21ha2VUZW1wbGF0ZU9iamVjdChbXCJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgd2lkdGg6IFwiLCBcIjtcXG4gICAgICBoZWlnaHQ6IFwiLCBcIjtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjVkZWcpO1xcbiAgICBcIl0sIFtcIlxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogXCIsIFwiO1xcbiAgICAgIGhlaWdodDogXCIsIFwiO1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE2NWRlZyk7XFxuICAgIFwiXSkpLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpLCBpbmRleF8xLmNzc1ZhbHVlKHNpemUpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBMb2FkZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbG9hZGluZyA9IF9hLmxvYWRpbmcsIGNzcyA9IF9hLmNzcztcbiAgICAgICAgcmV0dXJuIGxvYWRpbmcgPyAoY29yZV8xLmpzeChcImRpdlwiLCB7IGNzczogW3RoaXMud3JhcHBlcigpLCBjc3NdIH0sXG4gICAgICAgICAgICBjb3JlXzEuanN4KFwiZGl2XCIsIHsgY3NzOiB0aGlzLnN0eWxlKDEpIH0pLFxuICAgICAgICAgICAgY29yZV8xLmpzeChcImRpdlwiLCB7IGNzczogdGhpcy5zdHlsZSgyKSB9KSkpIDogbnVsbDtcbiAgICB9O1xuICAgIExvYWRlci5kZWZhdWx0UHJvcHMgPSBpbmRleF8xLnNpemVEZWZhdWx0cyg1MCk7XG4gICAgcmV0dXJuIExvYWRlcjtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gTG9hZGVyO1xudmFyIHRlbXBsYXRlT2JqZWN0XzEsIHRlbXBsYXRlT2JqZWN0XzIsIHRlbXBsYXRlT2JqZWN0XzMsIHRlbXBsYXRlT2JqZWN0XzQ7XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgc2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2aWNlcydcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuaW1wb3J0IFRhYmxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2RhdGEtZ3JpZCc7XG5pbXBvcnQgd2l0aFByaXZhdGVSb3V0ZSBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhQcml2YXRlUm91dGUnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgSGFzaExvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvSGFzaExvYWRlclwiO1xuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXhXaWR0aDogMzYwLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgfSxcbn0pO1xuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgXG5gO1xuLy8gY29uc3Qgc2V0VXNlckRhdGEgPSAocHJvcHMpID0+IHtcbi8vICAgbGV0IHVzZXJEYXRhID0gSlNPTi5wYXJzZSh0aGlzLmdldFVzZXIodGhpcykpXG4vLyAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuLy8gfVxuXG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBmaXJzdG5hbWU6ICcnLFxuICAgIGxhc3RuYW1lOiAnJ1xuICB9KTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBmaXJzdG5hbWU6ICcnLFxuICAgIGxhc3RuYW1lOiAnJ1xuICB9KTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvZ1N0YXR1cywgc2V0TG9nXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBzZXRVc2VyRGF0YSA9IChlKSA9PiB7XG4gICAgbGV0IHVzZXJEYXRhID0gW11cbiAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTG9naW5cIikpXG5cbiAgICBzZXREYXRhKHtcbiAgICAgIC4uLmRhdGEsIFsndXNlcm5hbWUnXTogdXNlckRhdGEudXNlcm5hbWUsIFsnZmlyc3RuYW1lJ106IHVzZXJEYXRhLmZpcnN0bmFtZSxcbiAgICAgIFsnbGFzdG5hbWUnXTogdXNlckRhdGEubGFzdG5hbWUsIFsncGFzc3dvcmQnXTogdXNlckRhdGEucGFzc3dvcmRcbiAgICB9KVxuICAgIHNldEZvcm0oe1xuICAgICAgLi4uZm9ybSwgWyd1c2VybmFtZSddOiB1c2VyRGF0YS51c2VybmFtZSwgWydmaXJzdG5hbWUnXTogdXNlckRhdGEuZmlyc3RuYW1lLFxuICAgICAgWydsYXN0bmFtZSddOiB1c2VyRGF0YS5sYXN0bmFtZSwgWydwYXNzd29yZCddOiB1c2VyRGF0YS5wYXNzd29yZCwgWydwYXNzd29yZENvbiddOiB1c2VyRGF0YS5wYXNzd29yZCxcbiAgICAgIFsndG9rZW4nXTogdXNlckRhdGEudG9rZW4sIFsncmVmcmVzaFRva2VuJ106IHVzZXJEYXRhLnJlZnJlc2hUb2tlblxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgZ2V0TG9nKHVzZXJEYXRhKVxuICB9XG5cbiAgY29uc3Qgc2V0VG9rZW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLguYDguIvguYfguJXguYTguKHguYjguYTguJTguYnguKrguLHguIHguJfguLXguKfguLBcIilcbiAgICBsZXQgZGF0YVRva2VuID0gW11cbiAgICBkYXRhVG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyTG9naW4nKSlcbiAgICBzZXRGb3JtKHtcbiAgICAgIC4uLmZvcm0sIHRva2VuOiBkYXRhVG9rZW4udG9rZW4sIHJlZnJlc2hUb2tlbjogZGF0YVRva2VuLnJlZnJlc2hUb2tlbixcbiAgICB9KVxuICB9XG5cbiAgY29uc3Qgc2V0VmFsdWUgPSAoZSkgPT4ge1xuICAgIHNldEZvcm0oeyAuLi5mb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgLy8gY29uc29sZS5sb2coZm9ybSlcbiAgfVxuXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckxvZ2luXCIpKVxuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldFVzZXJEYXRhKClcblxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdFwiKTtcbiAgICBjb25zb2xlLmxvZyhmb3JtKVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKCkgPT4ge1xuICAgIHNldE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2VydmljZS5zaG93Q29uZmlybShcIlwiLCBcIuC4ouC4t+C4meC4ouC4seC4meC4geC4suC4o+C5geC4geC5ieC5hOC4guC4guC5ieC4reC4oeC4ueC4pSA/XCIsIFwid2FybmluZ1wiKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgZm9ybSDguIHguYjguK3guJnguKrguYjguIfguYTguJvguILguK0g4Lit4Lix4Lie4LmA4LiU4LiXXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgICAgIHNlcnZpY2UuaHR0cFBvc3QoXCJ1cGRhdGVcIiwgZm9ybSkudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgICBpZiAodmFsdWUuc3VjY2Vzcykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJMb2dpbicsIEpTT04uc3RyaW5naWZ5KHZhbHVlLmRhdGEpKTtcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlckRhdGEoKVxuICAgICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgICAgc2VydmljZS5zaG93Q29uZmlybSgnJywgdmFsdWUubWVzc2FnZSArICcg4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4Lit4Lir4Lij4Li34Lit4LmE4Lih4LmIICEnLCAnd2FybmluZycpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHNlcnZpY2UuaHR0cFBvc3QoJ3Rva2VuJywgdXNlckRhdGEpXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuIOC5g+C4q+C4oeC5iFwiKVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9rZW4pXG4gICAgICAgICAgICAgICAgICBpZiAodG9rZW4uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YS50b2tlbiA9IHRva2VuLnRva2VuXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhLnJlZnJlc2hUb2tlbiA9IHRva2VuLnJlZnJlc2hUb2tlblxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckxvZ2luJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKVxuICAgICAgICAgICAgICAgICAgICBzZXRUb2tlbigpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuC4n+C4reC4o+C5jOC4oVwiKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtKVxuICAgICAgICAgICAgICAgICAgICAvLyBlZGl0RGF0YSgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0b2tlbi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHZhbHVlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiB2YWx1ZS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UudG9QYXRoKCcvbG9naW4nKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgIH1cblxuICAgIH0pXG5cbiAgfVxuICBjb25zdCBnZXRMb2cgPSBhc3luYyAodXNlckRhdGEpID0+IHtcbiAgICAvLyBsZXQgbG9nID0gW11cbiAgICB2YXIgbG9nID0gYXdhaXQgc2VydmljZS5odHRwUG9zdChcImdldGxvZ1wiLCB1c2VyRGF0YSlcbiAgICBpZiAobG9nLnN1Y2Nlc3MpIHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBjb25zb2xlLmxvZyhsb2dbJ2RhdGEnXSlcbiAgICAgIGxvZ1snZGF0YSddLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuXG4gICAgICAgIHZhbHVlWydpZCddID0ga2V5ICsgMTtcbiAgICAgICAgdmFsdWVbJ3N0YXR1cyddID0gdmFsdWVbJ3N0YXR1c2xvZ2luJ10uc3RhdHVzTmFtZVxuXG4gICAgICB9KVxuICAgICAgc2V0TG9nKGxvZ1snZGF0YSddKVxuICAgICAgY29uc29sZS5sb2cobG9nU3RhdHVzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChsb2cuc3RhdHVzID09IDQwMSkge1xuICAgICAgICBzZXJ2aWNlLnNob3dDb25maXJtKCcnLCBsb2cubWVzc2FnZSArICcg4LiV4LmJ4Lit4LiH4LiB4Liy4Lij4LiU4Liz4LmA4LiZ4Li04LiZ4LiB4Liy4Lij4LiV4LmI4Lit4Lir4Lij4Li34Lit4LmE4Lih4LmIICEnLCAnd2FybmluZycpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IGF3YWl0IHNlcnZpY2UuaHR0cFBvc3QoJ3Rva2VuJywgdXNlckRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbilcbiAgICAgICAgICAgIGlmICh0b2tlbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgIHVzZXJEYXRhLnRva2VuID0gdG9rZW4udG9rZW5cbiAgICAgICAgICAgICAgdXNlckRhdGEucmVmcmVzaFRva2VuID0gdG9rZW4ucmVmcmVzaFRva2VuXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTG9naW4nLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpXG4gICAgICAgICAgICAgIC8vIGxldCB1c2VyRGF0YSA9IGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJMb2dpbicpKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICAgICAgICAgIGdldExvZyh1c2VyRGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRva2VuLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgdGV4dDogbG9nLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgc2VydmljZS50b1BhdGgoJy9sb2dpbicpXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB0ZXh0OiBsb2cubWVzc2FnZSxcbiAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZXJ2aWNlLnRvUGF0aCgnL2xvZ2luJylcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICB9KVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnMgPSBbXG4gICAgeyBmaWVsZDogJ2RhdGVfc3RhbXAnLCBoZWFkZXJOYW1lOiAn4Lin4Lix4LiZ4LiX4Li14LmI4LmB4Lil4Liw4LmA4Lin4Lil4LiyJywgd2lkdGg6IDE1MCB9LFxuICAgIHsgZmllbGQ6ICdzdGF0dXMnLCBoZWFkZXJOYW1lOiAn4Liq4LiW4Liy4LiZ4LiwJywgd2lkdGg6IDE3MCB9LFxuICBdO1xuXG4gIHJldHVybiAoXG5cbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2VldC1sb2FkaW5nXCI+XG4gICAgICAgIDxIYXNoTG9hZGVyXG4gICAgICAgICAgY3NzPXtvdmVycmlkZX1cbiAgICAgICAgICBzaXplPXsxNX1cblxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEaWFsb2cgbWF4V2lkdGg9XCJ4c1wiIG9wZW49e29wZW59IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJmb3JtLWRpYWxvZy10aXRsZVwiPlxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJmb3JtLWRpYWxvZy10aXRsZVwiPuC5geC4geC5ieC5hOC4guC4guC5ieC4reC4oeC4ueC4pTwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgZnVsbFdpZHRoIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtmb3JtLnVzZXJuYW1lIHx8ICcnfSBvbkNoYW5nZT17c2V0VmFsdWV9IGxhYmVsPVwiVXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgIHsvKiA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIGZ1bGxXaWR0aCBtYXJnaW49XCJub3JtYWxcIiBvbkNoYW5nZT17c2V0VmFsdWV9IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc3dvcmRcIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgIDxUZXh0RmllbGQgc2l6ZT1cInNtYWxsXCIgZnVsbFdpZHRoIG1hcmdpbj1cIm5vcm1hbFwiIG9uQ2hhbmdlPXtzZXRWYWx1ZX0gdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkQ29uXCIgbGFiZWw9XCJQYXNzd29yZCBDb25maXJtXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgLz4gKi99XG4gICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBmdWxsV2lkdGggbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2Zvcm0uZmlyc3RuYW1lIHx8ICcnfSBvbkNoYW5nZT17c2V0VmFsdWV9IGxhYmVsPVwiRmlyc3RuYW1lXCIgbmFtZT1cImZpcnN0bmFtZVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBmdWxsV2lkdGggbWFyZ2luPVwibm9ybWFsXCIgdmFsdWU9e2Zvcm0ubGFzdG5hbWUgfHwgJyd9IG9uQ2hhbmdlPXtzZXRWYWx1ZX0gbGFiZWw9XCJMYXN0bmFtZVwiIG5hbWU9XCJsYXN0bmFtZVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VkaXREYXRhfSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgICA8Q2FyZCBoaWRkZW49e2xvYWRpbmd9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICAgICBhbHQ9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMzIwXCJcbiAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS93M2Nzcy9pbWdfYXZhdGFyMy5wbmdcIlxuICAgICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17ZGF0YS51c2VybmFtZX0gbGFiZWw9XCJVc2VybmFtZVwiIGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIHNpemU9XCJzbWFsbFwiIG1hcmdpbj1cIm5vcm1hbFwiIHZhbHVlPXtkYXRhLmZpcnN0bmFtZX0gbGFiZWw9XCJGaXJzdG5hbWVcIiBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBzaXplPVwic21hbGxcIiBtYXJnaW49XCJub3JtYWxcIiB2YWx1ZT17ZGF0YS5sYXN0bmFtZX0gbGFiZWw9XCJMYXN0bmFtZVwiIGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4geyBoYW5kbGVDbGlja09wZW4oKTsgfX0+XG4gICAgICAgICAgICBFZGl0XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQgaGlkZGVuPXtsb2FkaW5nfSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICB7LyogPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxuICAgICAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiPlxuICAgICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj7guKfguLHguJnguYHguKXguLDguYDguKfguKXguLI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIj7guKrguJbguLLguJnguLA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgICAgICB7bG9nU3RhdHVzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5kYXRlX3N0YW1wfVxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCA+e3ZhbHVlLnN0YXR1c2xvZ2luLnN0YXR1c05hbWV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj4gKi99XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDUwMCwgd2lkdGg6ICczMzBweCcgfX0+XG4gICAgICAgICAgICA8RGF0YUdyaWQgcm93cz17bG9nU3RhdHVzfSBjb2x1bW5zPXtjb2x1bW5zfSBwYWdlU2l6ZT17N30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xheW91dCA+XG5cbiAgKVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==