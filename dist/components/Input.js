import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
const $wrapper = (override) => (Object.assign({ fontSize: 16, width: "fit-content", position: "relative" }, override));
const $label = (override) => (Object.assign({ marginBottom: 4 }, override));
const $flag = (visible, override) => (Object.assign(Object.assign({ position: "absolute", top: "calc(100% + 2px)", width: "100%", opacity: 0, zIndex: 0, padding: 8, transition: "all 200ms, z-index 0ms", transform: "scaleY(0)", transformOrigin: "0% 0%", border: "1px solid black" }, (visible && {
    opacity: 1,
    zIndex: 1,
    transform: "scaleY(1)",
})), override));
const $controlWrapper = (override) => (Object.assign({ width: "100%", position: "relative" }, override));
const $control = (override) => (Object.assign({ border: "2px solid black", padding: 8, borderRadius: 2, width: "100%", fontFamily: "Verdana", fontSize: 16, transition: "all 200ms, outline 0ms", "::placeholder": {
        color: "gray",
    } }, override));
export const Input = ({ value, onChange, label, password, placeholder, readOnly, flagged, flaggedMessage, styles, textArea, }) => {
    return (_jsxs("div", Object.assign({ css: $wrapper(styles === null || styles === void 0 ? void 0 : styles.wrapper) }, { children: [label && _jsx("div", Object.assign({ css: $label(styles === null || styles === void 0 ? void 0 : styles.label) }, { children: label }), void 0),
            _jsxs("div", Object.assign({ css: $controlWrapper(styles === null || styles === void 0 ? void 0 : styles.controlWrapper) }, { children: [textArea ? (_jsx("textarea", { css: $control(styles === null || styles === void 0 ? void 0 : styles.control), value: value, placeholder: placeholder, onChange: e => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value), readOnly: readOnly }, void 0)) : (_jsx("input", { css: $control(styles === null || styles === void 0 ? void 0 : styles.control), value: value, type: password ? "password" : "text", placeholder: placeholder, onChange: e => onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value), readOnly: readOnly }, void 0)),
                    _jsx("div", Object.assign({ css: $flag(flagged, styles === null || styles === void 0 ? void 0 : styles.flag) }, { children: flaggedMessage }), void 0)] }), void 0)] }), void 0));
};
