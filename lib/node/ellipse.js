"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("./path"));

var _document = _interopRequireDefault(require("../document"));

var _ellipse = _interopRequireDefault(require("../attribute/ellipse"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Ellipse =
/*#__PURE__*/
function (_Path) {
  (0, _inherits2.default)(Ellipse, _Path);

  function Ellipse() {
    (0, _classCallCheck2.default)(this, Ellipse);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ellipse).apply(this, arguments));
  }

  (0, _createClass2.default)(Ellipse, [{
    key: "isVisible",

    /* override */
    get: function get() {
      var _this$attributes = this.attributes,
          radiusX = _this$attributes.radiusX,
          radiusY = _this$attributes.radiusY,
          startAngle = _this$attributes.startAngle,
          endAngle = _this$attributes.endAngle;
      return radiusX > 0 && radiusY > 0 && startAngle !== endAngle && (0, _get2.default)((0, _getPrototypeOf2.default)(Ellipse.prototype), "isVisible", this);
    }
  }]);
  return Ellipse;
}(_path.default);

exports.default = Ellipse;
(0, _defineProperty2.default)(Ellipse, "Attr", _ellipse.default);

_document.default.registerNode(Ellipse, 'ellipse');