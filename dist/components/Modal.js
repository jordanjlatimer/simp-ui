import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import * as ReactDOM from "react-dom";
const $backdrop = (open, override) => (Object.assign(Object.assign({ position: "absolute", top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "#00000080", backdropFilter: "blur(10px)", transition: "all 200ms, z-index 0ms 200ms", opacity: 0, zIndex: -1 }, (open && {
    opacity: 1,
    zIndex: 2,
    transition: "all 200ms, z-index 0ms 0ms",
})), override));
const $contents = (override) => (Object.assign({ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: 20, borderRadius: 2 }, override));
export const Modal = ({ open = false, children, parent, styles }) => {
    var _a;
    return ReactDOM.createPortal(_jsx("div", Object.assign({ css: $backdrop(open, (_a = styles === null || styles === void 0 ? void 0 : styles.backdrop) === null || _a === void 0 ? void 0 : _a.call(styles, open)) }, { children: _jsx("div", Object.assign({ css: $contents(styles === null || styles === void 0 ? void 0 : styles.contents) }, { children: children }), void 0) }), void 0), parent || document.body);
};
