import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
const $button = (disabled, override) => (Object.assign(Object.assign({ padding: 12, borderRadius: 4, boxShadow: "2px 2px 6px 0px #00000080", transition: "all 200ms, zIndex 0ms", cursor: "pointer", display: "flex", alignContent: "center", width: "fit-content", backgroundColor: "lightgray", ":hover": {
        boxShadow: "0px 2px 4px 2px #00000080",
        transform: "translate(-1px, -1px)",
    }, svg: {
        marginRight: 8,
    } }, (disabled && {
    opacity: 0.5,
    pointerEvents: "none",
})), override));
export const Button = ({ text, icon, disabled, styles, onClick }) => (_jsxs("button", Object.assign({ css: $button(disabled, styles === null || styles === void 0 ? void 0 : styles(disabled)), onClick: onClick }, { children: [icon, text] }), void 0));
