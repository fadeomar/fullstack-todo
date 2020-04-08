"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _validator = _interopRequireDefault(require("validator"));

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _models["default"].User;

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, name, email, password, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;

            if (email) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 'email is required'
            }));

          case 3:
            if (_validator["default"].isEmail(email)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 'invalid email address'
            }));

          case 5:
            if (name) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 'name is required'
            }));

          case 7:
            if (password) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              error: 'password is required'
            }));

          case 9:
            _context.next = 11;
            return User.findOne({
              where: {
                email: email
              }
            });

          case 11:
            user = _context.sent;

            if (!user) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(409).send({
              error: 'user exist already'
            }));

          case 14:
            next();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;