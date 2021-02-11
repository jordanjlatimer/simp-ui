import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/notice.sass";
export const Notice = ({ text, icon, linger = 4000, parent }) => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        setShow(true);
        window.setTimeout(() => setShow(false), linger);
    }, []);
    return ReactDOM.createPortal(React.createElement("div", { className: "notice" + (show ? " show" : "") },
        React.createElement("div", { className: "notice-wrapper" },
            icon,
            text)), parent || document.body);
};
