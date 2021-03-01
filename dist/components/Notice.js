import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
const $wrapper = (visible, override) => (Object.assign(Object.assign({ position: "absolute", top: 0, left: 0, right: 0, transform: "translateY(-100%)", opacity: 0, zIndex: -1, transition: "all 600ms, z-index 0ms", display: "flex", justifyContent: "center" }, (visible && {
    transform: "translateY(0px)",
    opacity: 1,
})), override));
const $notice = (override) => (Object.assign({ marginTop: 12, backgroundColor: "lightgray", padding: 20, borderRadius: 4, boxShadow: "2px 2px 6px 0px #00000080", width: "fit-content", zIndex: 2 }, override));
export const Notice = ({ children, linger = 4000, parent, styles }) => {
    var _a;
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        setShow(true);
        window.setTimeout(() => setShow(false), linger);
    }, []);
    return ReactDOM.createPortal(_jsx("div", Object.assign({ css: $wrapper(show, (_a = styles === null || styles === void 0 ? void 0 : styles.wrapper) === null || _a === void 0 ? void 0 : _a.call(styles, show)) }, { children: _jsx("div", Object.assign({ css: $notice(styles === null || styles === void 0 ? void 0 : styles.notice) }, { children: children }), void 0) }), void 0), parent || document.body);
};
