import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const $svg = (override) => (Object.assign({ width: 12, height: 12 }, override));
const $path = (override) => (Object.assign({ stroke: "black", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "10", fill: "none" }, override));
export const AngleIcon = ({ styles }) => {
    return (_jsx("svg", Object.assign({ viewBox: "0 0 72.7 52.3", xmlns: "http://www.w3.org/2000/svg", css: $svg(styles === null || styles === void 0 ? void 0 : styles.svg) }, { children: _jsx("path", { d: "M4.67 5.02l31.8 42.3 31.7-42.3", css: $path(styles === null || styles === void 0 ? void 0 : styles.path) }, void 0) }), void 0));
};
