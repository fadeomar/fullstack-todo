"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _authController = _interopRequireDefault(require("../controllers/authController"));

var _todosController = _interopRequireDefault(require("../controllers/todosController"));

var _auth = _interopRequireDefault(require("../middlewares/auth"));

var _authorize = _interopRequireDefault(require("../middlewares/authorize"));

var _todoItemsController = _interopRequireDefault(require("../controllers/todoItemsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/prefer-default-export */
var routes = function routes(app) {
  app.get('/', function (req, res) {
    return res.send({
      message: 'Welcome to Todo API'
    });
  });
  app.post('/api/auth/sign_up', _auth["default"], _authController["default"].signUp);
  app.post('/api/auth/sign_in', _authController["default"].signIn);
  app.post('/api/auth/forgot_password', _authController["default"].sendResetLink);
  app.post('/reset_password/:token', _authController["default"].resetPassword);
  app.post('/api/todos', _authorize["default"], _todosController["default"].create);
  app.get('/api/todos', _authorize["default"], _todosController["default"].fetchAll);
  app.get('/api/todos/:todoId', _authorize["default"], _todosController["default"].fetchOne);
  app.put('/api/todos/:todoId', _authorize["default"], _todosController["default"].update);
  app["delete"]('/api/todos/:todoId', _authorize["default"], _todosController["default"]["delete"]);
  app.post('/api/todoItems', _todoItemsController["default"].create);
  app.get('/api/todos/:todoId/todoItems', _todoItemsController["default"].fetchAll);
  app.get('/api/todoItems/:todoItemId', _todoItemsController["default"].fetchOne);
  app.put('/api/todoItems/:todoItemId', _todoItemsController["default"].update);
  app["delete"]('/api/todoItems/:todoItemId', _todoItemsController["default"]["delete"]);
};

exports.routes = routes;