import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
const $wrapper = (override) => (Object.assign({ width: "fit-content" }, override));
const $label = (override) => (Object.assign({ marginBottom: 4 }, override));
const $optionsWrapper = (override) => (Object.assign({ display: "flex", flexDirection: "column", borderRadius: 2, width: "fit-content", transition: "all 200ms", border: "2px solid black" }, override));
const $option = (active, override) => (Object.assign(Object.assign({ display: "flex", alignItems: "center", height: "fit-content", padding: 10, cursor: "pointer", transition: "all 200ms, z-index 0ms", textAlign: "center", ":hover": {
        backgroundColor: "lightgray",
        boxShadow: "2px 2px 6px 0px #00000080",
        zIndex: 2,
    } }, (active && {
    backgroundColor: "gray",
})), override));
export const SegmentedControl = ({ label, options, onChange, styles }) => {
    const [active, setActive] = React.useState(undefined);
    return (_jsxs("div", Object.assign({ css: $wrapper(styles === null || styles === void 0 ? void 0 : styles.wrapper) }, { children: [label && _jsx("div", Object.assign({ css: $label(styles === null || styles === void 0 ? void 0 : styles.label) }, { children: label }), void 0),
            _jsx("div", Object.assign({ css: $optionsWrapper(styles === null || styles === void 0 ? void 0 : styles.optionsWrapper) }, { children: options === null || options === void 0 ? void 0 : options.map(option => {
                    return (_jsx("div", Object.assign({ css: $option(option.value === active), onClick: () => (setActive(option.value), onChange && onChange(option.value)) }, { children: option.label }), void 0));
                }) }), void 0)] }), void 0));
};
