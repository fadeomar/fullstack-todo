"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Todo = _models["default"].Todo,
    TodoItem = _models["default"].TodoItem;
var todos = {
  create: function create(_ref, res, next) {
    var body = _ref.body,
        decoded = _ref.decoded;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var title, userId, todo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              title = body.title;
              userId = decoded.userId;
              _context.next = 5;
              return Todo.create({
                title: title,
                userId: userId
              });

            case 5:
              todo = _context.sent;
              return _context.abrupt("return", res.status(201).send(todo));

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(new Error(_context.t0)));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }))();
  },
  fetchAll: function fetchAll(_ref2, res, next) {
    var decoded = _ref2.decoded;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var myTodos;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Todo.findAll({
                where: {
                  userId: decoded.userId
                },
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              myTodos = _context2.sent;
              return _context2.abrupt("return", res.status(200).send(myTodos));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(new Error(_context2.t0)));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }))();
  },
  fetchOne: function fetchOne(_ref3, res, next) {
    var params = _ref3.params,
        decoded = _ref3.decoded;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var myTodo;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Todo.findOne({
                where: {
                  id: params.todoId,
                  userId: decoded.userId
                },
                include: [{
                  model: TodoItem,
                  as: 'todoItems'
                }]
              });

            case 3:
              myTodo = _context3.sent;

              if (myTodo) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(404).send({
                error: 'Todo not found'
              }));

            case 6:
              return _context3.abrupt("return", res.status(200).send(myTodo));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(new Error(_context3.t0)));

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }))();
  },
  update: function update(_ref4, res, next) {
    var body = _ref4.body,
        decoded = _ref4.decoded,
        params = _ref4.params;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var todo, updatedTodo;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return Todo.findOne({
                where: {
                  id: params.todoId,
                  userId: decoded.userId
                }
              });

            case 3:
              todo = _context4.sent;

              if (todo) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(400).send({
                error: 'Wrong todo id'
              }));

            case 6:
              _context4.next = 8;
              return Todo.update({
                title: body.title || todo.title
              }, {
                where: {
                  id: todo.id
                },
                returning: true,
                plain: true
              });

            case 8:
              updatedTodo = _context4.sent;
              return _context4.abrupt("return", res.status(200).send(updatedTodo[1]));

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
    }))();
  },
  "delete": function _delete(_ref5, res, next) {
    var params = _ref5.params,
        decoded = _ref5.decoded;
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var todo;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return Todo.findOne({
                where: {
                  id: params.todoId,
                  userId: decoded.userId
                }
              });

            case 3:
              todo = _context5.sent;

              if (todo) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", res.status(400).send({
                error: 'Wrong todo id'
              }));

            case 6:
              _context5.next = 8;
              return todo.destroy();

            case 8:
              return _context5.abrupt("return", res.status(200).send({}));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", next(new Error(_context5.t0)));

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 11]]);
    }))();
  }
};
var _default = todos;
exports["default"] = _default;