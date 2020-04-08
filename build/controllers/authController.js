"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _validator = _interopRequireDefault(require("validator"));

var _sendEmail = _interopRequireDefault(require("../utils/sendEmail"));

var _models = _interopRequireDefault(require("../models"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var User = _models["default"].User;
var auth = {
  signUp: function () {
    var _signUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res, next) {
      var _req$body, name, email, password, hash, user, token, id;

      return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
              hash = (0, _utils.hashPassword)(password);
              _context.next = 5;
              return User.create({
                name: name,
                email: email,
                password: hash
              });

            case 5:
              user = _context.sent;
              token = _utils.jwtToken.createToken(user);
              id = user.id;
              return _context.abrupt("return", res.status(201).send({
                token: token,
                user: {
                  id: id,
                  name: name,
                  email: email
                }
              }));

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(new Error(_context.t0)));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    function signUp(_x, _x2, _x3) {
      return _signUp.apply(this, arguments);
    }

    return signUp;
  }(),
  signIn: function () {
    var _signIn = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res, next) {
      var _req$body2, email, password, user, name, id, token;

      return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.next = 4;
              return User.findOne({
                where: {
                  email: email
                }
              });

            case 4:
              user = _context2.sent;

              if (!(user && (0, _utils.comparePassword)(password, user.password))) {
                _context2.next = 9;
                break;
              }

              name = user.name, id = user.id;
              token = _utils.jwtToken.createToken(user);
              return _context2.abrupt("return", res.status(200).send({
                token: token,
                user: {
                  id: id,
                  name: name,
                  email: email
                }
              }));

            case 9:
              return _context2.abrupt("return", res.status(400).send({
                error: 'invalid email/password combination '
              }));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(new Error(_context2.t0)));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    function signIn(_x4, _x5, _x6) {
      return _signIn.apply(this, arguments);
    }

    return signIn;
  }(),
  sendResetLink: function () {
    var _sendResetLink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(req, res, next) {
      var email, user, token, link;
      return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              email = req.body.email;
              _context3.next = 4;
              return User.findOne({
                where: {
                  email: email
                }
              });

            case 4:
              user = _context3.sent;

              if (email) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.status(400).send({
                error: 'Email is required'
              }));

            case 7:
              if (_validator["default"].isEmail(email)) {
                _context3.next = 9;
                break;
              }

              return _context3.abrupt("return", res.status(400).send({
                error: 'Invalid email'
              }));

            case 9:
              if (user) {
                _context3.next = 11;
                break;
              }

              return _context3.abrupt("return", res.status(404).send({
                error: 'User not found'
              }));

            case 11:
              token = _utils.jwtToken.createToken(user); // const link = `${req.protocol}://${req.host}:5000/reset_password/${token}`;

              link = "".concat(req.protocol, "://localhost:5000/reset_password/").concat(token);
              _context3.next = 15;
              return (0, _sendEmail["default"])(email, 'noreply@todo.com', 'Best To Do password reset', "\n        <div>Click the link below to reset your password</div><br/>\n        <div>".concat(link, "</div>\n        "));

            case 15:
              return _context3.abrupt("return", res.status(200).send({
                message: 'Password reset link has been successfully sent to your inbox'
              }));

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(new Error(_context3.t0)));

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 18]]);
    }));

    function sendResetLink(_x7, _x8, _x9) {
      return _sendResetLink.apply(this, arguments);
    }

    return sendResetLink;
  }(),
  resetPassword: function () {
    var _resetPassword = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4(req, res, next) {
      var password, token, decoded, hash, updatedUser, _updatedUser$, id, name, email;

      return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              password = req.body.password;
              token = req.params.token;
              decoded = _utils.jwtToken.verifyToken(token);
              hash = (0, _utils.hashPassword)(password);
              _context4.next = 7;
              return User.update({
                password: hash
              }, {
                where: {
                  id: decoded.userId
                },
                returning: true,
                plain: true
              });

            case 7:
              updatedUser = _context4.sent;
              _updatedUser$ = updatedUser[1], id = _updatedUser$.id, name = _updatedUser$.name, email = _updatedUser$.email;
              return _context4.abrupt("return", res.status(200).send({
                token: token,
                user: {
                  id: id,
                  name: name,
                  email: email
                }
              }));

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", next(new Error(_context4.t0)));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    function resetPassword(_x10, _x11, _x12) {
      return _resetPassword.apply(this, arguments);
    }

    return resetPassword;
  }()
};
var _default = auth;
exports["default"] = _default;