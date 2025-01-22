"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenCapture = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _html2canvas = _interopRequireDefault(require("html2canvas"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
 * Atto HTML editor
 *
 * @package    atto_reciteditor
 * @copyright  2019 RECIT
 * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
 */
var ScreenCapture = function (_Component) {
  (0, _inherits2["default"])(ScreenCapture, _Component);
  var _super = _createSuper(ScreenCapture);
  function ScreenCapture() {
    var _this;
    (0, _classCallCheck2["default"])(this, ScreenCapture);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      on: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      crossHairsTop: 0,
      crossHairsLeft: 0,
      isMouseDown: false,
      windowWidth: 0,
      windowHeight: 0,
      borderWidth: 0,
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 0,
      cropHeigth: 0,
      imageURL: ''
    };
    _this.componentDidMount = function () {
      _this.handleWindowResize();
      window.addEventListener('resize', _this.handleWindowResize);
      window.addEventListener('mousemove', _this.handleMouseMove);
      window.addEventListener('mouseup', _this.handleMouseUp);
      window.addEventListener('mousedown', _this.handleMouseDown);
    };
    _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.handleWindowResize);
      window.removeEventListener('mousemove', _this.handleMouseMove);
      window.removeEventListener('mouseup', _this.handleMouseUp);
      window.removeEventListener('mousedown', _this.handleMouseDown);
    };
    _this.handleWindowResize = function () {
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      _this.setState({
        windowWidth: windowWidth,
        windowHeight: windowHeight
      });
    };
    _this.handStartCapture = function () {
      return _this.setState({
        on: true
      });
    };
    _this.handleMouseMove = function (e) {
      var _this$state = _this.state,
        isMouseDown = _this$state.isMouseDown,
        windowWidth = _this$state.windowWidth,
        windowHeight = _this$state.windowHeight,
        startX = _this$state.startX,
        startY = _this$state.startY,
        borderWidth = _this$state.borderWidth;
      var cropPositionTop = startY;
      var cropPositionLeft = startX;
      var endX = e.clientX;
      var endY = e.clientY;
      var isStartTop = endY >= startY;
      var isStartBottom = endY <= startY;
      var isStartLeft = endX >= startX;
      var isStartRight = endX <= startX;
      var isStartTopLeft = isStartTop && isStartLeft;
      var isStartTopRight = isStartTop && isStartRight;
      var isStartBottomLeft = isStartBottom && isStartLeft;
      var isStartBottomRight = isStartBottom && isStartRight;
      var newBorderWidth = borderWidth;
      var cropWidth = 0;
      var cropHeigth = 0;
      if (isMouseDown) {
        if (isStartTopLeft) {
          newBorderWidth = "".concat(startY, "px ").concat(windowWidth - endX, "px ").concat(windowHeight - endY, "px ").concat(startX, "px");
          cropWidth = endX - startX;
          cropHeigth = endY - startY;
        }
        if (isStartTopRight) {
          newBorderWidth = "".concat(startY, "px ").concat(windowWidth - startX, "px ").concat(windowHeight - endY, "px ").concat(endX, "px");
          cropWidth = startX - endX;
          cropHeigth = endY - startY;
          cropPositionLeft = endX;
        }
        if (isStartBottomLeft) {
          newBorderWidth = "".concat(endY, "px ").concat(windowWidth - endX, "px ").concat(windowHeight - startY, "px ").concat(startX, "px");
          cropWidth = endX - startX;
          cropHeigth = startY - endY;
          cropPositionTop = endY;
        }
        if (isStartBottomRight) {
          newBorderWidth = "".concat(endY, "px ").concat(windowWidth - startX, "px ").concat(windowHeight - startY, "px ").concat(endX, "px");
          cropWidth = startX - endX;
          cropHeigth = startY - endY;
          cropPositionLeft = endX;
          cropPositionTop = endY;
        }
      }
      _this.setState({
        crossHairsLeft: e.clientX,
        crossHairsTop: e.clientY,
        borderWidth: newBorderWidth,
        cropWidth: cropWidth,
        cropHeigth: cropHeigth,
        cropPositionTop: cropPositionTop,
        cropPositionLeft: cropPositionLeft
      });
    };
    _this.handleMouseDown = function (e) {
      if (!_this.state.on) return;
      var startX = e.clientX;
      var startY = e.clientY;
      _this.setState(function (prevState) {
        return {
          startX: startX,
          startY: startY,
          cropPositionTop: startY,
          cropPositionLeft: startX,
          isMouseDown: true,
          borderWidth: "".concat(prevState.windowWidth, "px ").concat(prevState.windowHeight, "px")
        };
      });
    };
    _this.handleMouseUp = function (e) {
      if (!_this.state.on) return;
      _this.handleClickTakeScreenShot();
      _this.setState({
        on: false,
        isMouseDown: false,
        borderWidth: 0
      });
    };
    _this.handleClickTakeScreenShot = function () {
      var _this$state2 = _this.state,
        cropPositionTop = _this$state2.cropPositionTop,
        cropPositionLeft = _this$state2.cropPositionLeft,
        cropWidth = _this$state2.cropWidth,
        cropHeigth = _this$state2.cropHeigth;
      var body = document.querySelector('body');
      (0, _html2canvas["default"])(body).then(function (canvas) {
        var croppedCanvas = document.createElement('canvas');
        var croppedCanvasContext = croppedCanvas.getContext('2d');
        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeigth;
        croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop, cropWidth, cropHeigth, 0, 0, cropWidth, cropHeigth);
        _this.props.onEndCapture(croppedCanvas.toDataURL());
      });
    };
    _this.renderChild = function () {
      var children = _this.props.children;
      var props = {
        onStartCapture: _this.handStartCapture
      };
      if (typeof children === 'function') return children(props);
      return children;
    };
    return _this;
  }
  (0, _createClass2["default"])(ScreenCapture, [{
    key: "render",
    value: function render() {
      if (!this.state.on) return this.renderChild();
      return _react["default"].createElement("div", null, this.renderChild(), _react["default"].createElement("div", {
        className: "overlay ".concat(this.state.isMouseDown && 'highlighting'),
        style: {
          borderWidth: this.state.borderWidth
        }
      }), _react["default"].createElement("div", {
        className: "crosshairs",
        style: {
          left: this.state.crossHairsLeft + 'px',
          top: this.state.crossHairsTop + 'px',
          position: 'fixed'
        }
      }));
    }
  }]);
  return ScreenCapture;
}(_react.Component);
exports.ScreenCapture = ScreenCapture;
ScreenCapture.defaultProps = {
  onStartCapture: function onStartCapture() {
    return null;
  },
  onEndCapture: function onEndCapture() {
    return null;
  }
};