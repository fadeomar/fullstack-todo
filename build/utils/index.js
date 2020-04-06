"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.comparePassword = exports.hashPassword = exports.jwtToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _dotenv = require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();
var jwtToken = {
  createToken: function createToken(_ref) {
    var id = _ref.id,
        email = _ref.email;
    return _jsonwebtoken["default"].sign({
      userId: id,
      email: email
    }, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });
  },
  verifyToken: function verifyToken(token) {
    var decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, {
      expiresIn: '24h'
    });

    return decoded;
  }
};
exports.jwtToken = jwtToken;

var hashPassword = function hashPassword(password) {
  return _bcryptjs["default"].hashSync(password, 10);
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(password, hash) {
  return _bcryptjs["default"].compareSync(password, hash);
};

exports.comparePassword = comparePassword;