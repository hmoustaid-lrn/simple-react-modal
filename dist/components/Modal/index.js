"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = props => {
  const handleToggle = () => {
    props.toggleModal(!props.showingModal);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.showingModal && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal show",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body text-center"
  }, /*#__PURE__*/_react.default.createElement("h4", null, props.text)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleToggle
  }, "Close")))))));
};
var _default = Modal;
exports.default = _default;