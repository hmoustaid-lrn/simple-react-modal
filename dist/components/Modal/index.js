"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
const MyModal = props => {
  const handleToggle = () => {
    props.toggleModal(!props.showingModal);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.showingModal && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "modal show",
    tabIndex: "-1",
    role: "dialog",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body text-center"
  }, /*#__PURE__*/React.createElement("h4", null, props.text)), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer d-flex justify-content-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-primary",
    onClick: handleToggle
  }, "Close")))))));
};
var _default = MyModal;
exports.default = _default;