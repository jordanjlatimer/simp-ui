import * as React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "../../styles/modal.sass";
const Modal = ({ open, callback, children, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return (React.createElement("div", { className: isOpen ? "modal open" : "modal" },
        React.createElement("div", { className: "modal-contents" },
            React.createElement("div", { className: "modal-close", onClick: () => {
                    setIsOpen(false);
                    callback();
                } },
                React.createElement(FaRegWindowClose, null)),
            children)));
};
Modal.displayName = "Modal";
export { Modal };
