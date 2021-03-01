import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
const $wrapper = (override) => (Object.assign({ width: "fit-content" }, override));
const $label = (override) => (Object.assign({ marginBottom: 4 }, override));
const $optionsWrapper = (override) => (Object.assign({ display: "flex", flexDirection: "column", borderRadius: 2, width: "fit-content", transition: "all 200ms" }, override));
const $option = (override) => (Object.assign({ display: "flex", alignItems: "center", height: "fit-content", padding: 10, cursor: "pointer", transition: "all 200ms, z-index 0ms" }, override));
const $optionLabel = (override) => (Object.assign({ display: "block", height: "fit-content" }, override));
const $controlOuter = (override) => (Object.assign({ display: "flex", width: 20, height: 20, borderRadius: "50%", border: "2px solid black", alignItems: "center", justifyContent: "center" }, override));
const $controlInner = (active, override) => (Object.assign(Object.assign({ display: "block", width: "60%", height: "60%", borderRadius: "50%", transition: "all 200ms" }, (active && {
    backgroundColor: "black",
})), override));
export const RadioInput = ({ label, options, onChange, styles, }) => {
    const [active, setActive] = React.useState(undefined);
    return (_jsxs("div", Object.assign({ css: $wrapper(styles === null || styles === void 0 ? void 0 : styles.wrapper) }, { children: [label && _jsx("div", Object.assign({ css: $label(styles === null || styles === void 0 ? void 0 : styles.label) }, { children: label }), void 0),
            _jsx("div", Object.assign({ css: $optionsWrapper(styles === null || styles === void 0 ? void 0 : styles.optionsWrapper) }, { children: options === null || options === void 0 ? void 0 : options.map(option => {
                    var _a;
                    const isActive = option.value === active;
                    return (_jsxs("div", Object.assign({ css: $option(styles === null || styles === void 0 ? void 0 : styles.option), onClick: () => (setActive(option.value), onChange && onChange(option.value)) }, { children: [_jsx("div", Object.assign({ css: $controlOuter(styles === null || styles === void 0 ? void 0 : styles.controlOuter) }, { children: _jsx("div", { css: $controlInner(isActive, (_a = styles === null || styles === void 0 ? void 0 : styles.controlInner) === null || _a === void 0 ? void 0 : _a.call(styles, isActive)) }, void 0) }), void 0),
                            _jsx("div", Object.assign({ css: $optionLabel(styles === null || styles === void 0 ? void 0 : styles.optionLabel) }, { children: option.label }), void 0)] }), void 0));
                }) }), void 0)] }), void 0));
};
