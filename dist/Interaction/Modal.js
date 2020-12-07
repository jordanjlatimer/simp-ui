import * as React from "react";
import { RiCloseFill } from '@meronex/icons/ri';
import "../styles/modal.sass";
const Modal = ({ open, callback, children, }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        setIsOpen(open);
    }, [open]);
    return (React.createElement("div", { className: isOpen ? "modal open" : "modal" },
        React.createElement("div", { className: "modal-contents" },
            React.createElement(RiCloseFill, { className: "modal-close", onClick: () => {
                    setIsOpen(false);
                    callback();
                } }),
            children)));
};
Modal.displayName = "Modal";
export { Modal };
