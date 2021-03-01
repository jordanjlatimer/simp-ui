import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
import { AngleIcon } from "./icons/AngleIcon";
const $wrapper = (disabled, override) => (Object.assign(Object.assign({ height: "fit-contet", fontSize: 16, margin: "16px 16px 0px 0px", position: "relative", width: 200 }, (disabled && {
    opacity: 0.5,
    pointerEvents: "none",
})), override));
const $label = (override) => (Object.assign({ marginBottom: 4 }, override));
const $control = (override) => (Object.assign({ display: "flex", alignItems: "center", cursor: "pointer", borderRadius: 2, border: "2px solid black", transition: "all 200ms", height: 40, ":hover": {
        boxShadow: "2px 2px 6px 0px #00000080",
    } }, override));
const $controlItem = (multiple, override) => (Object.assign(Object.assign({ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", margin: 8 }, (multiple && {
    overflow: "visible",
    borderRadius: 2,
    backgroundColor: "lightgray",
    padding: 4,
    margin: "4px 0px 4px 4px",
})), override));
const $controlIcon = (open, override) => (Object.assign(Object.assign({ margin: "0px 8px 0px auto", transition: "all 200ms, margin 0ms", flexShrink: 0 }, (open && {
    transform: "scaleY(-1)",
})), override));
const $menu = (open, override) => (Object.assign(Object.assign({ width: "100%", maxHeight: "400%", position: "absolute", top: "calc(100% + 2px)", backgroundColor: "white", transformOrigin: "0% 0%", transform: "scaleY(0)", borderRadius: 2, zIndex: 1, transition: "all 200ms", overflowY: "auto", padding: 4, border: "2px solid black" }, (open && {
    transform: "scaleY(1)",
})), override));
const $menuItem = (selected, override) => (Object.assign(Object.assign({ padding: "12px 16px", cursor: "pointer", transition: "all 200ms", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", borderRadius: 2, marginTop: 4, ":hover": {
        backgroundColor: "lightgray",
    }, ":first-of-type": {
        marginTop: 0,
    } }, (selected && {
    backgroundColor: "gray",
})), override));
export const Dropdown = ({ label, multiple, placeholder, options, disabled, value, styles, onChange, }) => {
    var _a, _b, _c, _d, _e, _f;
    const [open, setOpen] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const control = React.useRef(null);
    const menu = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener("click", toggle, false);
        return () => {
            document.removeEventListener("click", toggle);
        };
    }, []);
    React.useLayoutEffect(() => {
        control.current && setOver(control.current.scrollWidth > control.current.clientWidth);
    }, [value]);
    const toggle = (e) => {
        let target = e.target;
        control.current &&
            menu.current &&
            !control.current.contains(target) &&
            !menu.current.contains(target) &&
            setOpen(false);
    };
    return (_jsxs("div", Object.assign({ css: $wrapper(disabled, (_a = styles === null || styles === void 0 ? void 0 : styles.wrapper) === null || _a === void 0 ? void 0 : _a.call(styles, disabled)) }, { children: [label && _jsx("div", Object.assign({ css: $label(styles === null || styles === void 0 ? void 0 : styles.label) }, { children: label }), void 0),
            _jsxs("div", Object.assign({ ref: control, css: $control(styles === null || styles === void 0 ? void 0 : styles.control), onClick: () => setOpen(!open) }, { children: [Array.isArray(value) ? (value.length > 0 ? (over ? (_jsx("div", Object.assign({ css: $controlItem(multiple, (_b = styles === null || styles === void 0 ? void 0 : styles.controlItem) === null || _b === void 0 ? void 0 : _b.call(styles, multiple)) }, { children: (value === null || value === void 0 ? void 0 : value.length) + " Items Selected" }), void 0)) : (value === null || value === void 0 ? void 0 : value.map(selection => {
                        var _a;
                        return (_jsx("div", Object.assign({ css: $controlItem(multiple, (_a = styles === null || styles === void 0 ? void 0 : styles.controlItem) === null || _a === void 0 ? void 0 : _a.call(styles, multiple)) }, { children: selection.label }), selection.value));
                    }))) : (_jsx("div", Object.assign({ css: $controlItem(multiple, (_c = styles === null || styles === void 0 ? void 0 : styles.controlItem) === null || _c === void 0 ? void 0 : _c.call(styles, multiple)) }, { children: placeholder }), void 0))) : (_jsx("div", Object.assign({ css: $controlItem(multiple, (_d = styles === null || styles === void 0 ? void 0 : styles.controlItem) === null || _d === void 0 ? void 0 : _d.call(styles, multiple)) }, { children: value ? value.label : placeholder }), void 0)),
                    _jsx(AngleIcon, { styles: { svg: $controlIcon(open, (_e = styles === null || styles === void 0 ? void 0 : styles.controlIcon) === null || _e === void 0 ? void 0 : _e.call(styles, open)) } }, void 0)] }), void 0),
            _jsx("div", Object.assign({ ref: menu, css: $menu(open, (_f = styles === null || styles === void 0 ? void 0 : styles.menu) === null || _f === void 0 ? void 0 : _f.call(styles, open)) }, { children: options === null || options === void 0 ? void 0 : options.map(option => {
                    var _a;
                    const selected = Array.isArray(value)
                        ? value === null || value === void 0 ? void 0 : value.some(selection => (selection === null || selection === void 0 ? void 0 : selection.value) === (option === null || option === void 0 ? void 0 : option.value)) : (value === null || value === void 0 ? void 0 : value.value) === option.value;
                    return (_jsx("div", Object.assign({ css: $menuItem(selected, (_a = styles === null || styles === void 0 ? void 0 : styles.menuItem) === null || _a === void 0 ? void 0 : _a.call(styles, selected)), onClick: () => {
                            !multiple && setOpen(false);
                            setOver(false);
                            !selected && (onChange === null || onChange === void 0 ? void 0 : onChange(option));
                        } }, { children: option.label }), option.value));
                }) }), void 0)] }), void 0));
};
