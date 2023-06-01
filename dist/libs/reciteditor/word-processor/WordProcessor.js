"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordProcessor = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
var _RecitEditor = require("../RecitEditor");
require("codemirror/lib/codemirror.css");
var _langHtml = require("@codemirror/lang-html");
require("codemirror/theme/material.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } } /**
                                                                                                                                                                                                                                                                                                                                           * Atto HTML editor
                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                           * @package    atto_reciteditor
                                                                                                                                                                                                                                                                                                                                           * @copyright  2019 RECIT
                                                                                                                                                                                                                                                                                                                                           * @license    {@link http://www.gnu.org/licenses/gpl-3.0.html} GNU GPL v3 or later
                                                                                                                                                                                                                                                                                                                                           */
var beautifyingHTML = require("pretty");
var WordProcessor = function (_Component) {
  (0, _inherits2["default"])(WordProcessor, _Component);
  var _super = _createSuper(WordProcessor);
  function WordProcessor(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, WordProcessor);
    _this = _super.call(this, props);
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAfterSelection = _this.onAfterSelection.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onTextAreaDidMount = _this.onTextAreaDidMount.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChangeTmpContent = _this.onChangeTmpContent.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSetFlag = _this.onSetFlag.bind((0, _assertThisInitialized2["default"])(_this));
    _this.updateHistory = _this.updateHistory.bind((0, _assertThisInitialized2["default"])(_this));
    _this.undoHistory = _this.undoHistory.bind((0, _assertThisInitialized2["default"])(_this));
    _this.redoHistory = _this.redoHistory.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onCodeSource = _this.onCodeSource.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddImage = _this.onAddImage.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      selection: null,
      history: {
        undo: [],
        redo: []
      },
      flags: {
        codeSource: false,
        highlighter: false,
        mathFormula: false,
        myScript: false
      },
      tmpContent: ""
    };
    _this.editorRef = null;
    return _this;
  }
  (0, _createClass2["default"])(WordProcessor, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "onAddImage",
    value: function onAddImage(src) {
      var img = document.createElement("img");
      img.src = src;
      this.insertElementAfterCaret(img);
    }
  }, {
    key: "insertElementAfterCaret",
    value: function insertElementAfterCaret(el) {
      document.execCommand('insertHTML', false, el.outerHTML);
    }
  }, {
    key: "onTextAreaDidMount",
    value: function onTextAreaDidMount(editorRef) {
      this.editorRef = editorRef;
      document.body.onkeydown = this.onKeyDown.bind(this);
      document.body.onkeyup = this.onKeyUp.bind(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.onkeydown = null;
      document.body.onkeyup = null;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      if (e.keyCode == 17 || e.keyCode == 91) {
        this.ctrlDown = false;
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.keyCode == 17 || e.keyCode == 91) {
        this.ctrlDown = true;
      }
      if (this.ctrlDown && e.key == 'z') {
        e.preventDefault();
        this.undoHistory();
        return false;
      }
      if (this.ctrlDown && e.key == 'y') {
        e.preventDefault();
        this.redoHistory();
        return false;
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(selection, clearSelection) {
      clearSelection = typeof clearSelection === "undefined" ? false : clearSelection;
      if (clearSelection) {
        this.clearSelection();
      }
      this.setState({
        selection: selection
      }, this.onAfterSelection);
    }
  }, {
    key: "onAfterSelection",
    value: function onAfterSelection() {
      this.onUserHighlight();
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        window.getSelection().removeAllRanges();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(content, forceUpdate) {
      var contentHasChanged = this.state.tmpContent !== content;
      if (this.props.onChange && (contentHasChanged || forceUpdate)) {
        if (this.editorRef.current) {
          var elements = this.editorRef.current.querySelectorAll('div, p, span, strong');
          var _iterator = _createForOfIteratorHelper(elements),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var el = _step.value;
              if (el.innerHTML === '&nbsp;' || el.innerHTML === '') {
                if (el instanceof HTMLDivElement && !el.hasAttribute('style') && el.attributes.length === 0) {
                  el.parentNode.removeChild(el);
                } else {
                  el.parentNode.removeChild(el);
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        this.updateHistory(content);
        this.props.onChange(content, forceUpdate);
      }
    }
  }, {
    key: "updateHistory",
    value: function updateHistory(content) {
      var history = this.state.history;
      if (history.undo.length === 0) {
        history.undo.push("");
      }
      if (history.undo.length > 15) {
        history.undo.unshift();
      }
      if (history.undo[history.undo.length - 1] !== content) {
        history.undo.push(this.state.tmpContent);
      }
      this.setState({
        history: history,
        tmpContent: content
      });
    }
  }, {
    key: "undoHistory",
    value: function undoHistory() {
      var history = this.state.history;
      var content = history.undo.pop() || "";
      if (content) {
        history.redo.push(this.editorRef.current.innerHTML);
        this.editorRef.current.innerHTML = content;
        if (history.redo.length > 15) {
          history.redo.unshift();
        }
      }
      this.setState({
        history: history,
        tmpContent: this.editorRef.current.innerHTML
      });
    }
  }, {
    key: "redoHistory",
    value: function redoHistory() {
      var history = this.state.history;
      var content = history.redo.pop();
      if (content) {
        history.undo.push(this.editorRef.current.innerHTML);
        this.editorRef.current.innerHTML = content;
        if (history.undo.length > 15) {
          history.undo.unshift();
        }
      }
      this.setState({
        history: history,
        tmpContent: this.editorRef.current.innerHTML
      });
    }
  }, {
    key: "onSetFlag",
    value: function onSetFlag(flag) {
      var tmp = this.state.flags;
      tmp[flag] = !this.state.flags[flag];
      this.setState({
        flags: tmp
      });
    }
  }, {
    key: "onUserHighlight",
    value: function onUserHighlight() {
      if (this.state.flags.highlighter) {
        var sel = this.state.selection;
        var backgroundColor = 'rgb(255, 193, 7)';
        if (sel === null) {
          return;
        }
        if (sel.sel.isCollapsed) {
          return;
        }
        if (sel.node.style.backgroundColor === backgroundColor) {
          sel.node.insertAdjacentHTML("beforebegin", sel.node.innerHTML);
          sel.node.remove();
        } else if (sel.isNodeRoot) {
          var newNode = document.createElement("span");
          newNode.appendChild(sel.range.extractContents());
          newNode.style.backgroundColor = backgroundColor;
          sel.range.insertNode(newNode);
        } else if (sel.subSelection) {
          var _newNode = document.createElement("span");
          _newNode.appendChild(sel.range.extractContents());
          _newNode.style.backgroundColor = backgroundColor;
          sel.range.insertNode(_newNode);
        } else {
          sel.node.style.backgroundColor = backgroundColor;
        }
      }
    }
  }, {
    key: "onCodeSource",
    value: function onCodeSource() {
      var _this2 = this;
      if (this.state.flags.codeSource) {
        var tmp = this.state.flags;
        tmp.codeSource = !this.state.flags.codeSource;
        this.setState({
          flags: tmp
        }, function () {
          return _this2.onChange(_this2.state.tmpContent, true);
        });
      } else {
        var tmpContent = this.editorRef.current.innerHTML;
        tmpContent = beautifyingHTML(tmpContent, {
          ocd: true
        });
        var _tmp = this.state.flags;
        _tmp.codeSource = !this.state.flags.codeSource;
        this.setState({
          flags: _tmp,
          tmpContent: tmpContent
        });
      }
    }
  }, {
    key: "getWorkArea",
    value: function getWorkArea() {
      var _this3 = this;
      var result = null;
      var textArea = _react["default"].createElement(TextArea, {
        onComponentDidMount: this.onTextAreaDidMount,
        value: this.props.content,
        onChange: this.onChange,
        onSelect: this.onSelect
      });
      if (this.state.flags.codeSource) {
        result = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
          style: {
            display: 'none'
          }
        }, textArea), _react["default"].createElement(_reactCodemirror["default"], {
          value: this.state.tmpContent,
          theme: "dark",
          extensions: [(0, _langHtml.html)()],
          maxHeight: "80vh",
          onChange: function onChange(editor, data, value) {
            return _this3.onChangeTmpContent(value);
          }
        }));
      } else {
        result = textArea;
      }
      return result;
    }
  }, {
    key: "onChangeTmpContent",
    value: function onChangeTmpContent(value) {
      this.setState({
        tmpContent: value
      });
    }
  }]);
  return WordProcessor;
}(_react.Component);
exports.WordProcessor = WordProcessor;
WordProcessor.defaultProps = {
  content: "",
  onSelectBuilder: null,
  onChange: null,
  options: {}
};
WordProcessor.Assets = {
  highlighter: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYRJREFUOE+dkz1Lw1AUhpvvpCGKcQhIEOnk4KyD6FInJ4WuDoIudRbFD6qzu7iI9mc4O7sodlcEQbFgBXGw1ucmQWtrPpoXHs7Jzb3vPffcpJBDMpQMwyiFjzmlquq8JEnX0FAUpRwNDybLsqYxuCf9gg75ja7rk8HLjFLZfYmFL+Sdbhg7JVqQLk3TVgmP8McEXmVZXieqEK9arSbTk03SJvSaiGpOiEVIlMHEA+I79Jq0qeTS8zybPFFFJu4S36DPhA0uaPwYebwcxxmlsWek/1UijtOgZ1PkEsSL61wmtKDPBNpsskhMNqGxs7ANWzz2XnWTStaI6eKzn6D0KzinRxsMPYEwafFcJWqQrsjolvSTWOcYh+QfxDox9Zp/xK7iwxNNfsboTlTFMauu6w4FEzLIpJoyC/fZ/ZjFczBDT1bEu3BKulQMdqjgwTRNsdAJhwMl3063fN+3bNte4NorGI0zJI6Rld+fFROPivao6GhQaEMlsgmkwDCM5CD7TWZTofANbolfjJl6AqYAAAAASUVORK5CYII=",
  brand: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB0CAMAAABnsTYoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAABpvwJqvyp9vwRrwAZswAduwAhtwQhuwQtvwgtwwQ5wwQ1wwg5xww9ywxBywxJ0wxN0xBd1whR1xBZ2xBl2wRh3xRp4xR95wR56xR56xh97xyJ8xyV8wiR9xyV+yCZ/yTKBvz+HvSeAySiAySyCyi6Dyy+Eyi+EyzCFyzKGyzaIzDeJzTiJzTiKzTuMzj2MzkGGu2WTr3KVpkCOz0KQz0OR0ESQ0EaS0EeS0UmT0UqU0UyV0kyW0U2W0k6X01KZ01Oa01Oa1FWa1Fid1Vqd1lqe1Vue1l6g1l+h12Ki12Sj2Gak2Gqn2Wqn2muo2Wuo2m2o2m6q2nGq23Ks23St3Hau3Hev3Xiv3Xqw3Xux3n6y3n+03rugbPGgL/qiKvmiK/qjLPqjLfqjLvqkL/qnNfqoOPmqP8efXtqfSMOfYcKfZNegS9GgVdWgUNupX9eoYeGgQvqrQPqsQvquR/qvSPqvSfqwS/qzUfqzUvuzVPu1V/u2V/u2WPu4Xfu5X/u6YPu6Yvu+a/u+bPvEePvEefvGfPzEePzEeZacjJychZidjKGvroC034O24Ia34Ie44Ie44Ym64Yy74o284o+945C945C+45TA5JfB5ZfC5JjC5JrC5ZrE5ZvE5pzF5p/G56DH5qDG56HI56PJ6KTJ6KXK6KjM6arN6qzO6q/Q6q/Q67DQ6rLR67PS7LTT7LbU7LjV7brW7bzX7r3Y7r7Z77/a7/vHgPzIgvzJhPzJhfzKhfzKhvzKh/zLiPzLivzOj/zPk/zQk/zQlPzRlf3ZqP3brv3guf3iu/3hvP3ivMDa78Pb8MPc8Mbd8Mfe8Mje8cvg8szg8s7i89Ll89Lk9NTm89bm9Nno9dvq9d3q9t7s9v7kwP3nyf3oy/7r0v7s0/7t1v7t1/7w3eHt9+Pu+OTv+OXw+Obw+ejx+eny+erz+uz0+u71+/7y4/705fD2+/L3/PP4/PT5/Pb6/f/58v/68//89/j7/fr8/v/8+f/9/P/+/P3+/v7+/wAAAFY5PcMAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGHRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjVlhTJlAAAGpklEQVRoQ+2Zd3gURRiHb2MiERIDEj0NEVBaIBpOBSOgB4ooiVgIRTHqKdh7B+wtiiWKiBIQLKBobCiCimADGwlqJCgQxI5SFWJUojLnlN9e9mZ3Lsu5k3sen7z8wXxl92Vv2+zgCzfOOzdfOSbkLY1q3zwXnZ7SiPbts9DnMbG1V6HLc2JqR6PJe2Jp0aKDGNoz0aIDtfYcdGhBqb0VDXpQalHXhEo7HnVNqLQo60KhXYiyLhTasSjrQqFFVRvNWgqq2mjWUlDVhqQd1rdbFmWfveNl3/0PvvcC7DsGVm3fJMMb9rv7DOxeRYO2G7bxhD3viT1JMLVD0O8ZB10BgyPQdkezh+xxPhROCG02Wj2l1YVwOMC1XdCoJCUA2iPhilaXQmKHaQeiTc1AIqjrjIQ7dlFe0EyLphi8CO1JiN1yCCw2qNaPHjVt6oV1DmLXJF8MjQzVoiUGJwrrxkzErsgvLSsrvQ8aGV/YxemqEtrDEbqiVGzzATwSPhcH20HsYRpCd2wUG/3p/KXqRiv+4StSEboijW9Dcf5W9fVDXwxeYZuv27lHip87KZiDvr54CecmEfpc7O0xuvX8dghckiqkhJwnPGGES0Toa4G+GKQWDs3F0D0/Cs3mS4RH1qLLc4qE5v6LhKeptEbO0AceHJZnnC48jWkzggMC0bOMzB6B/ED3tojstM4NDgj26aK40BXaNRzzYZv7xG+09jQiw+hR+kmt6Ccbnitw2POhM2pQ37FySh6SVhRaEW1lz72Wx1WLaJjYwjjicxGbbBmZggo4ZiUq4NMACkZ6MbgsFLq6ZMIdv6KjouSuCRNKSqAls42uZdswJh35lhnPI7Sw3Pre8M9H1sIknKB2iMm4UKgEQwumlizH35Q1fEP/KoRR1DR4O65DLoqnRNGt1kIZ2y5N+v1MqszrbXfHfxYhp/JqHNog2+5JBDbME1+GWKaev9J2XrudXbC5COjVNqOgd4/ehTPrEG8S13O7HYhtPMvLCNxr57LNXkJAprVkIcX/GTIFPJyIiGwv65W1W3r74HR26zHq2S2+M9rK4d0zjL3Ydew3j2USd3AycQeLqY15u26LPK7br0dqMA1ca7c/aplnYBpDNlufELNErpZdVJ3EmJDhosY4EqmpdGzV3rL044rfEf6wtGJpRUVFRDsn6g1YjuzjiDmDkGTT6gKM69JFjbNV5ObRoVXL+B7hYhFGtOyXaQCvLRL1aZSD5FF0PAXj+aIkqBS5L+hQpY1+OErayEu6FxKcDCSH0vEcjCeKkqDwYU4xHcal7YgkyUGCsyuSbLfmw0T1pShrv0MYUxtAkowcbAVJdnVvxpg/WhyI62jzkXTmIdqBIYm8ciTi0gaRdIb+yOkYuta6+pH7IOlMPFpXN1Dk3Doy4j9o3V1SjhTp0nZFkgRzHGij60fORDL6vrWCOslHLBPX0SYhSQ5AwsYmNByNWCYurbEB2f4iBPiR2SzTfErRy6uBEdXV1XT2u5IO49MuQ9acwXBSkDyZjs1pwExREswUuZ/pUKV9T4QKrTlRmoWYY348nkDH5htotSgJ5opcrKN9X4QK7RBk1yPm9EOSvfjM5zOxrN8l4YRX0bFK+5EIFdpsZIn1q3s6cuzyxsICIeWixjAfqS/Qsaz9BuHft/NQoTW+RHoVvUlBFywT1SWzKDJLZmeak2lOrybTQNZ+hZCQX75eu3atSjsKaVIzkFvosfyEzMs8xEoM5bVjO7f2d+o/yXwX8ptK1i5BCFTa9MgHEdk2b3bZ1HJTSsgg3uDHsdupz6BlWXsjQqDSGqchb6MGRz8ZsY1nWFXWhr5FLFBqU/DRaeMwNLQ0T7/EFr64YtPe8A8SHKXWyHL8oLM8lrJXIxXF1p68aNOGFiHBUWuNLKz5WakrRJHR1pw+WliG6bZdG3rjL6QoMbRG8vHSx+aOcmkVKyidiarIjM5BG7r2wz+QDPuKgPOKZ17xq+aXTW3lKIels56PrMDnUm1lsWUVPg27LbocTs6Y6267c9Fb9I+LBaLU7JwDA13Vi7qpnQPB/DzVqjSWTCT0rUuBZm1obGK0CxKjDSdEe01itOGEaMclRDs6nBAt+8/MptcuSIh2IbM2tfZsLm1q7Y2wNql2PJyUptKOvv5dGDnatfBINGs9BR6JZq2XpMEjoVvbBx4J3VpoZP6f2iA0Mpq1sNjQqx0Miw2tWj8kdnRqk+FwQKM2CQon9GlTYXBEm7YDBM5o0rYoxv4VaNG2HYm9K/Fam5LV6xTsWk04/C+LOCax9YczEgAAAABJRU5ErkJggg=="
};
var EditorFrame = function (_Component2) {
  (0, _inherits2["default"])(EditorFrame, _Component2);
  var _super2 = _createSuper(EditorFrame);
  function EditorFrame() {
    (0, _classCallCheck2["default"])(this, EditorFrame);
    return _super2.apply(this, arguments);
  }
  (0, _createClass2["default"])(EditorFrame, [{
    key: "render",
    value: function render() {
      var style = {
        backgroundColor: "#f7f7f7",
        border: "1px solid #dfdfdf",
        borderRadius: "4px"
      };
      var main = _react["default"].createElement("div", {
        className: "recitricheditor",
        style: {
          border: style.border,
          cursor: this.props.flags.highlighter ? "url(".concat(WordProcessor.Assets.highlighter, "),  auto") : 'inherit'
        }
      }, this.props.buttonsBar, this.props.workArea, this.props.footerBar, this.props.children);
      return main;
    }
  }]);
  return EditorFrame;
}(_react.Component);
EditorFrame.defaultProps = {
  buttonsBar: null,
  workArea: null,
  footerBar: null,
  flags: null,
  children: null
};
var TextArea = function (_Component3) {
  (0, _inherits2["default"])(TextArea, _Component3);
  var _super3 = _createSuper(TextArea);
  function TextArea(props) {
    var _this4;
    (0, _classCallCheck2["default"])(this, TextArea);
    _this4 = _super3.call(this, props);
    _this4.onMouseMove = _this4.onMouseMove.bind((0, _assertThisInitialized2["default"])(_this4));
    _this4.onKeyUp = _this4.onKeyUp.bind((0, _assertThisInitialized2["default"])(_this4));
    _this4.onClick = _this4.onClick.bind((0, _assertThisInitialized2["default"])(_this4));
    _this4.setCurrentSelection = _this4.setCurrentSelection.bind((0, _assertThisInitialized2["default"])(_this4));
    _this4.editorRef = _react["default"].createRef();
    _this4.state = {
      selection: null
    };
    return _this4;
  }
  (0, _createClass2["default"])(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.editorRef.current.innerHTML = this.props.value;
      this.props.onComponentDidMount(this.editorRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.editorRef.current.innerHTML = this.props.value;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var main = _react["default"].createElement("div", {
        ref: this.editorRef,
        contentEditable: true,
        style: {
          backgroundColor: "#FFF",
          minHeight: 300,
          maxHeight: "90vh",
          padding: "1rem",
          resize: 'vertical',
          overflow: 'auto'
        },
        onKeyUp: this.onKeyUp,
        onClick: this.onClick,
        onMouseLeave: this.onMouseMove,
        "data-recit-rich-editor": "content"
      });
      return main;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      switch (event.type) {
        case 'mouseleave':
          break;
      }
      this.setCurrentSelection(event);
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      if (this.props.onChange && this.props.value !== this.editorRef.current.innerHTML) {
        this.props.onChange(this.editorRef.current.innerHTML);
      }
      this.setCurrentSelection(event);
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onChange && this.props.value !== this.editorRef.current.innerHTML) {
        this.props.onChange(this.editorRef.current.innerHTML);
      }
      this.setCurrentSelection(event);
    }
  }, {
    key: "setCurrentSelection",
    value: function setCurrentSelection(event) {
      var _this5 = this;
      var result = _RecitEditor.UtilsHTML.getCurrentSelection(this.editorRef, this.setCurrentSelection);
      if (!_RecitEditor.JsNx.compare(result, this.state.selection)) {
        this.setState({
          selection: result
        }, function () {
          return _this5.props.onSelect(result);
        });
      }
    }
  }]);
  return TextArea;
}(_react.Component);
TextArea.defaultProps = {
  value: "",
  onChange: null,
  onSelect: null,
  onComponentDidMount: null
};
var StatusBar = function (_Component4) {
  (0, _inherits2["default"])(StatusBar, _Component4);
  var _super4 = _createSuper(StatusBar);
  function StatusBar(props) {
    var _this6;
    (0, _classCallCheck2["default"])(this, StatusBar);
    _this6 = _super4.call(this, props);
    _this6.getStatusDesc = _this6.getStatusDesc.bind((0, _assertThisInitialized2["default"])(_this6));
    _this6.state = {
      statusBar: ""
    };
    return _this6;
  }
  (0, _createClass2["default"])(StatusBar, [{
    key: "render",
    value: function render() {
      var style = {
        backgroundColor: "#f7f7f7",
        border: "1px solid #dfdfdf",
        borderRadius: "4px"
      };
      var selectionDesc = this.props.selection !== null ? "".concat(this.props.selection.selectedText, " (").concat(this.props.selection.sel.type, ")") : "";
      selectionDesc = selectionDesc.length > 100 ? selectionDesc.substr(0, 100) + "..." : selectionDesc;
      var main = _react["default"].createElement("div", {
        style: {
          minHeight: 30,
          borderTop: style.border,
          backgroundColor: style.backgroundColor,
          padding: ".5rem",
          display: "flex"
        }
      }, _react["default"].createElement("div", null, _react["default"].createElement("b", null, "HTML: "), this.getStatusDesc(), " | ", _react["default"].createElement("b", null, "S\xE9lection: "), selectionDesc), _react["default"].createElement("div", {
        style: {
          marginLeft: "auto"
        }
      }, _react["default"].createElement("img", {
        src: WordProcessor.Assets.brand,
        width: "20",
        height: "20"
      })));
      return main;
    }
  }, {
    key: "getStatusDesc",
    value: function getStatusDesc() {
      var sel = this.props.selection;
      if (sel === null) return "";
      if (sel.isNodeRoot) return "";
      var node = sel.node;
      if (!sel.editorRef.current) return "";
      if (!sel.editorRef.current.contains(node)) return "";
      var result = [node.nodeName.toLowerCase()];
      while (node.getAttribute('data-recit-rich-editor') !== 'content') {
        node = node.parentElement;
        if (node === null) {
          break;
        }
        if (node === null) {
          break;
        }
        result.push(node.nodeName.toLowerCase());
      }
      return result.reverse().join(" / ");
    }
  }]);
  return StatusBar;
}(_react.Component);
StatusBar.defaultProps = {
  selection: null
};