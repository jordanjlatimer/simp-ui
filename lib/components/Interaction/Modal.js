"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var React = require("react");
var fa_1 = require("react-icons/fa");
require("../../styles/modal.sass");
var Modal = function (_a) {
    var open = _a.open, callback = _a.callback, children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    React.useEffect(function () {
        setIsOpen(open);
    }, [open]);
    return (React.createElement("div", { className: isOpen ? "modal open" : "modal" },
        React.createElement("div", { className: "modal-contents" },
            React.createElement("div", { className: "modal-close", onClick: function () {
                    setIsOpen(false);
                    callback();
                } },
                React.createElement(fa_1.FaRegWindowClose, null)),
            children)));
};
exports.Modal = Modal;
Modal.displayName = "Modal";
//# sourceMappingURL=Modal.js.map