"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = _interopRequireDefault(require("../models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var TodoItem = _models["default"].TodoItem,
    Todo = _models["default"].Todo;
var todoItems = {
  create: function create(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _req$body, text, todoId, item;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, text = _req$body.text, todoId = _req$body.todoId; // Validation

              if (text) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(400).send({
                error: 'Text is required'
              }));

            case 4:
              if (todoId) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).send({
                error: 'todoId is required'
              }));

            case 6:
              _context.next = 8;
              return TodoItem.create({
                text: text,
                todoId: todoId
              });

            case 8:
              item = _context.sent;
              return _context.abrupt("return", res.status(201).send(item));

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", next(new Error(_context.t0)));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }))();
  },
  fetchAll: function fetchAll(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var todoId, items;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              todoId = req.params.todoId; // Validation

              if (todoId) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(400).send({
                error: 'todoId is required'
              }));

            case 4:
              _context2.next = 6;
              return TodoItem.findAll({
                where: {
                  todoId: todoId
                },
                include: [{
                  model: Todo,
                  as: 'todo'
                }]
              });

            case 6:
              items = _context2.sent;
              return _context2.abrupt("return", res.status(200).send(items));

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", next(new Error(_context2.t0)));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }))();
  },
  fetchOne: function fetchOne(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var todoItemId, items;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              todoItemId = req.params.todoItemId; // Validation

              if (todoItemId) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", res.status(400).send({
                error: 'todoItemId is required'
              }));

            case 4:
              _context3.next = 6;
              return TodoItem.findOne({
                where: {
                  id: todoItemId
                },
                include: [{
                  model: Todo,
                  as: 'todo'
                }]
              });

            case 6:
              items = _context3.sent;
              return _context3.abrupt("return", res.status(200).send(items));

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", next(new Error(_context3.t0)));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 10]]);
    }))();
  },
  update: function update(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _req$body2, text, isCompleted, todoItemId, item, updatedItem;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _req$body2 = req.body, text = _req$body2.text, isCompleted = _req$body2.isCompleted;
              todoItemId = req.params.todoItemId; // Validation

              if (todoItemId) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return", res.status(400).send({
                error: 'todoItemId is required'
              }));

            case 5:
              _context4.next = 7;
              return TodoItem.findOne({
                where: {
                  id: todoItemId
                }
              });

            case 7:
              item = _context4.sent;

              if (item) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", res.status(404).send({
                error: 'Item does not exist'
              }));

            case 10:
              _context4.next = 12;
              return TodoItem.update({
                text: text || item.text,
                isCompleted: isCompleted
              }, {
                where: {
                  id: req.params.todoItemId
                },
                returning: true,
                plain: true
              });

            case 12:
              updatedItem = _context4.sent;
              return _context4.abrupt("return", res.status(200).send(updatedItem[1]));

            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              return _context4.abrupt("return", next(new Error(_context4.t0)));

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 16]]);
    }))();
  },
  "delete": function _delete(req, res, next) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var todoItemId, item;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              todoItemId = req.params.todoItemId; // Validation

              if (todoItemId) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(400).send({
                error: 'todoItemId is required'
              }));

            case 4:
              _context5.next = 6;
              return TodoItem.findOne({
                where: {
                  id: todoItemId
                }
              });

            case 6:
              item = _context5.sent;

              if (item) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", res.status(404).send({
                error: 'Item does not exist'
              }));

            case 9:
              _context5.next = 11;
              return item.destroy();

            case 11:
              return _context5.abrupt("return", res.status(200).send({}));

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", next(new Error(_context5.t0)));

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 14]]);
    }))();
  }
};
var _default = todoItems;
exports["default"] = _default;