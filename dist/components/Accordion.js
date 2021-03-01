import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import * as React from "react";
import { AngleIcon } from "./icons/AngleIcon";
const $control = (override) => (Object.assign({ display: "flex", flexWrap: "wrap", cursor: "pointer", backgroundColor: "lightgray", transition: "all 200ms", zIndex: 1, ":hover": {
        boxShadow: "2px 2px 6px 0px #00000080",
    }, padding: 12 }, override));
const $controlIcon = (open, override) => (Object.assign(Object.assign({ transition: "all 200ms" }, (open && {
    transform: "rotate(180deg)",
})), override));
const $contents = (open, override) => (Object.assign(Object.assign({ transformOrigin: "0% 0%", transform: "scaleY(0)", height: 0, flexBasis: "100%", transition: "all 200ms" }, (open && {
    padding: 8,
    transform: "scaleY(1)",
    height: "initial",
})), override));
export const Accordion = ({ items, multiple, styles }) => {
    const [expanded, setExpanded] = React.useState([]);
    return (_jsx(_Fragment, { children: items === null || items === void 0 ? void 0 : items.map(item => {
            var _a, _b;
            const open = expanded.indexOf(item.label) >= 0;
            return (_jsxs(_Fragment, { children: [_jsxs("div", Object.assign({ css: $control(styles === null || styles === void 0 ? void 0 : styles.control), onClick: () => setExpanded(multiple
                            ? open
                                ? expanded.filter(value => value !== item.label)
                                : [...expanded, item.label]
                            : open
                                ? []
                                : [item.label]) }, { children: [item.label, _jsx(AngleIcon, { styles: { svg: $controlIcon(open, (_a = styles === null || styles === void 0 ? void 0 : styles.controlIcon) === null || _a === void 0 ? void 0 : _a.call(styles, open)) } }, void 0)] }), void 0),
                    _jsx("div", Object.assign({ css: $contents(open, (_b = styles === null || styles === void 0 ? void 0 : styles.contents) === null || _b === void 0 ? void 0 : _b.call(styles, open)) }, { children: item.contents }), void 0)] }, void 0));
        }) }, void 0));
};
