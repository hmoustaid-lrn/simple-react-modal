"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    text,
    handleClick,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-backdrop show"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal show",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body text-center"
  }, /*#__PURE__*/_react.default.createElement("h4", null, text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer d-flex justify-content-center",
    style: {
      border: 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleClick
  }, buttonText)))))));
};
var _default = Modal;
exports.default = _default;