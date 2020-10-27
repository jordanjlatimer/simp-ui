"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
var React = require("react");
require("../styles/input.sass");
var fa_1 = require("react-icons/fa");
var Input = function (_a) {
    var initialValue = _a.initialValue, _b = _a.changeValidation, changeValidation = _b === void 0 ? function (value) { return true; } : _b, _c = _a.onChange, onChange = _c === void 0 ? function (value) { return value; } : _c, _d = _a.valueValidation, valueValidation = _d === void 0 ? function (value) {
        return { invalid: false, message: "" };
    } : _d, label = _a.label, _e = _a.valueDisplay, valueDisplay = _e === void 0 ? function (value) { return value; } : _e, _f = _a.password, password = _f === void 0 ? false : _f, placeholder = _a.placeholder, prefix = _a.prefix, suffix = _a.suffix;
    var _g = React.useState(initialValue ? initialValue : ""), value = _g[0], setValue = _g[1];
    var _h = React.useState(false), invalid = _h[0], setInvalid = _h[1];
    var _j = React.useState(""), invMessage = _j[0], setInvMessage = _j[1];
    var _k = React.useState(false), showMessage = _k[0], setShowMessage = _k[1];
    var _l = React.useState(false), clicked = _l[0], setClicked = _l[1];
    var _m = React.useState(false), blurred = _m[0], setBlurred = _m[1];
    var prefixRef = React.useRef(null);
    var suffixRef = React.useRef(null);
    var control = React.useRef(null);
    var blurFunc = function () {
        setShowMessage(false);
        setBlurred(true);
    };
    var focusFunc = function () {
        setShowMessage(true);
        setClicked(true);
    };
    React.useLayoutEffect(function () {
        if (control.current && prefixRef.current) {
            control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
        }
        if (control.current && suffixRef.current) {
            control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
        }
    }, []);
    var changeFunc = function (e) {
        var target = e.target;
        if (target) {
            if (target.value.split("").every(changeValidation)) {
                setValue(target.value);
                onChange(target.value);
            }
            var validation = valueValidation(target.value);
            if (validation.invalid) {
                setInvalid(true);
                setInvMessage(validation.message);
            }
            else {
                setInvalid(false);
            }
        }
    };
    return (React.createElement("div", { className: "input" },
        React.createElement("div", { className: "input-label" },
            label,
            React.createElement(fa_1.FaExclamationCircle, { className: "input-label-icon" +
                    (invalid && clicked && blurred ? " active" : "") })),
        React.createElement("div", { className: "input-container" },
            React.createElement("input", { className: "input-control" + (invalid ? " invalid" : ""), onBlur: blurFunc, value: valueDisplay(value), onFocus: focusFunc, type: password ? "password" : "text", placeholder: placeholder, ref: control, onChange: changeFunc }),
            React.createElement("div", { className: "input-prefix", ref: prefixRef }, prefix),
            React.createElement("div", { className: "input-suffix", ref: suffixRef }, suffix),
            React.createElement("div", { className: "input-label-invalid" +
                    (showMessage && invalid && clicked && blurred ? " active" : "") }, invMessage))));
};
exports.Input = Input;
Input.displayName = "Input";
//# sourceMappingURL=Input.js.map