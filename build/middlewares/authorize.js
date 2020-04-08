"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = require("dotenv");

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _models["default"].User;
(0, _dotenv.config)();

var _default = function _default(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send({
      error: 'Unauthorized'
    });
  }

  var token = req.headers.authorization.split(' ')[1];
  return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, {
    expiresIn: '24h'
  }, function (error, decoded) {
    if (error) {
      return res.status(401).send({
        error: error
      });
    }

    req.decoded = decoded;
    return User.findByPk(decoded.userId).then(function (user) {
      if (!user) {
        return res.status(401).send({
          error: 'User does not exist'
        });
      }

      return next();
    });
  });
};

exports["default"] = _default;