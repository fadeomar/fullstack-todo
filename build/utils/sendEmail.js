"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenv.config)();

_mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

var sendEmail = function sendEmail(receiver, source, subject, content) {
  try {
    var data = {
      to: receiver,
      from: source,
      subject: subject,
      html: content
    };
    return _mail["default"].send(data);
  } catch (e) {
    return new Error(e);
  }
};

var _default = sendEmail;
exports["default"] = _default;