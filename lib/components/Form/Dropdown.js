"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
var React = require("react");
require("../../styles/dropdown.sass");
var fa_1 = require("react-icons/fa");
var Dropdown = function (_a) {
    var label = _a.label, _b = _a.multiple, multiple = _b === void 0 ? false : _b, placeholder = _a.placeholder, options = _a.options;
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState([]), value = _d[0], setValue = _d[1];
    var _e = React.useState(false), over = _e[0], setOver = _e[1];
    var control = React.useRef(null);
    var menu = React.useRef(null);
    React.useEffect(function () {
        document.addEventListener("mousedown", toggle, false);
        return function () {
            document.removeEventListener("mousedown", toggle);
        };
    }, []);
    React.useLayoutEffect(function () {
        if (control.current) {
            control.current.scrollWidth > control.current.clientWidth
                ? setOver(true)
                : setOver(false);
        }
    }, [value]);
    var toggle = function (e) {
        if (control.current && menu.current) {
            if (!control.current.contains(e.target) &&
                !menu.current.contains(e.target)) {
                setOpen(false);
            }
        }
    };
    return (React.createElement("div", { className: "dropdown" },
        React.createElement("p", { className: "dropdown-label" }, label),
        React.createElement("div", { ref: control, className: "dropdown-control" +
                (open ? " open" : "") +
                (multiple && value.length > 0 ? " multiple" : ""), onClick: function () { return setOpen(!open); }, tabIndex: 0 },
            multiple ? (value.length > 0 ? (over ? (React.createElement("div", { className: "dropdown-value-multiple" }, value.length + " Items Selected")) : (value.map(function (selection) { return (React.createElement("div", { key: selection.value, className: "dropdown-value-multiple" }, selection.label)); }))) : (React.createElement("div", { className: "dropdown-value" }, placeholder))) : (React.createElement("div", { className: "dropdown-value" }, value[0] ? value[0].label : placeholder)),
            React.createElement(fa_1.FaAngleDown, { className: "dropdown-icon" + (open ? " open" : "") })),
        React.createElement("div", { ref: menu, className: "dropdown-menu" + (open ? " open" : "") }, options.map(function (option) {
            return (React.createElement("div", { className: "dropdown-item" +
                    (value.some(function (selection) { return selection.value === option.value; })
                        ? " selected"
                        : ""), onClick: function () {
                    setValue(multiple
                        ? value.every(function (selection) { return selection.value !== option.value; })
                            ? __spreadArrays(value, [{ label: option.label, value: option.value }]) : __spreadArrays(value.filter(function (selection) { return selection.value !== option.value; }))
                        : [{ label: option.label, value: option.value }]);
                    setOpen(multiple ? true : false);
                    setOver(false);
                }, key: option.value }, option.label));
        }))));
};
exports.Dropdown = Dropdown;
Dropdown.displayName = "Dropdown";
//# sourceMappingURL=Dropdown.js.map