import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
const $wrapper = (override) => (Object.assign({ display: "flex", alignItems: "center", height: "fit-content", cursor: "pointer" }, override));
const $label = (override) => (Object.assign({ display: "block", height: "fit-content", marginLeft: 12 }, override));
const $outerBox = (override) => (Object.assign({ display: "flex", width: 20, height: 20, borderRadius: "15%", border: "2px solid black", alignItems: "center", justifyContent: "center" }, override));
const $innnerBox = (checked, override) => (Object.assign(Object.assign({ display: "block", width: "60%", height: "60%", borderRadius: "15%", transition: "all 200ms" }, (checked && {
    backgroundColor: "lightgray",
})), override));
export const Checkbox = ({ label, initChecked, styles }) => {
    var _a;
    const [checked, setChecked] = React.useState(initChecked);
    return (_jsxs("div", Object.assign({ css: $wrapper(styles === null || styles === void 0 ? void 0 : styles.wrapper), onClick: () => setChecked(!checked) }, { children: [_jsx("div", Object.assign({ css: $outerBox(styles === null || styles === void 0 ? void 0 : styles.outerBox) }, { children: _jsx("div", { css: $innnerBox(checked, (_a = styles === null || styles === void 0 ? void 0 : styles.innerBox) === null || _a === void 0 ? void 0 : _a.call(styles, checked)) }, void 0) }), void 0),
            _jsx("div", Object.assign({ css: $label(styles === null || styles === void 0 ? void 0 : styles.label) }, { children: label }), void 0)] }), void 0));
};
