import * as React from "react";
import { RiCloseFill } from '@meronex/icons/ri';
import "../styles/modal.sass";
var Modal = function (_a) {
    var open = _a.open, callback = _a.callback, children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    React.useEffect(function () {
        setIsOpen(open);
    }, [open]);
    return (React.createElement("div", { className: isOpen ? "modal open" : "modal" },
        React.createElement("div", { className: "modal-contents" },
            React.createElement(RiCloseFill, { className: "modal-close", onClick: function () {
                    setIsOpen(false);
                    callback();
                } }),
            children)));
};
Modal.displayName = "Modal";
export { Modal };
