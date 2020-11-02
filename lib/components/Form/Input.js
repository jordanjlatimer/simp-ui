import * as React from "react";
import "../../styles/input.sass";
const Input = ({ initialValue, changeValidation = (value) => true, onChange = (value) => value, valueValidation = (value) => {
    return { invalid: false, message: "" };
}, label, valueDisplay = (value) => value, password = false, placeholder, prefix, suffix, }) => {
    const [value, setValue] = React.useState(initialValue ? initialValue : "");
    const [invalid, setInvalid] = React.useState(false);
    const [invMessage, setInvMessage] = React.useState("");
    const [showMessage, setShowMessage] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [blurred, setBlurred] = React.useState(false);
    const prefixRef = React.useRef(null);
    const suffixRef = React.useRef(null);
    const control = React.useRef(null);
    const blurFunc = () => {
        setShowMessage(false);
        setBlurred(true);
    };
    const focusFunc = () => {
        setShowMessage(true);
        setClicked(true);
    };
    React.useLayoutEffect(() => {
        if (control.current && prefixRef.current) {
            control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
        }
        if (control.current && suffixRef.current) {
            control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
        }
    }, []);
    const changeFunc = (e) => {
        const target = e.target;
        if (target) {
            if (target.value.split("").every(changeValidation)) {
                setValue(target.value);
                onChange(target.value);
            }
            let validation = valueValidation(target.value);
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
        React.createElement("div", { className: "input-label" }, label),
        React.createElement("div", { className: "input-container" },
            React.createElement("input", { className: "input-control" + (invalid ? " invalid" : ""), onBlur: blurFunc, value: valueDisplay(value), onFocus: focusFunc, type: password ? "password" : "text", placeholder: placeholder, ref: control, onChange: changeFunc }),
            React.createElement("div", { className: "input-prefix", ref: prefixRef }, prefix),
            React.createElement("div", { className: "input-suffix", ref: suffixRef }, suffix),
            React.createElement("div", { className: "input-label-invalid" +
                    (showMessage && invalid && clicked && blurred ? " active" : "") }, invMessage))));
};
Input.displayName = "Input";
export { Input };
