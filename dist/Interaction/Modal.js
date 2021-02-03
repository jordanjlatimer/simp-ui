import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/modal.sass";
export const Modal = ({ open, children, position }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return ReactDOM.createPortal(React.createElement("div", { className: isOpen ? "modal open" : "modal", style: Object.assign({}, position) },
        React.createElement("div", { className: "modal-contents" }, children)), document.body);
};