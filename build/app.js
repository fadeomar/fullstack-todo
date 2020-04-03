/* eslint-disable */

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.get('/', function (erq, res) {
  res.send({
    message: 'welcome to Todo FullStack'
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("server is ready at http://localhost:".concat(port));
});