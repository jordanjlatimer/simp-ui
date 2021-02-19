import * as React from "react";
import "../styles/input.sass";
export const Input = ({ value, changeValidation, onChange, valueValidation, label, valueMask, password, placeholder, prefix, suffix, width = "medium", margined = true, bordered = true, stretchy, changeHighlight, readOnly, blurFunc, }) => {
    const [invalid, setInvalid] = React.useState(false);
    const [invMessage, setInvMessage] = React.useState("");
    const [showMessage, setShowMessage] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [blurred, setBlurred] = React.useState(false);
    const prefixRef = React.useRef(null);
    const suffixRef = React.useRef(null);
    const control = React.useRef(null);
    const onBlur = () => (setShowMessage(false), setBlurred(true), blurFunc && blurFunc());
    const focusFunc = () => (setShowMessage(true), setClicked(true));
    React.useLayoutEffect(() => {
        if (control.current && prefixRef.current) {
            control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
        }
        if (control.current && suffixRef.current) {
            control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
        }
    }, []);
    const changeFunc = (e) => {
        const targetValue = e.target.value;
        if (targetValue.split("").every(char => (changeValidation ? changeValidation(char) : true))) {
            onChange && onChange(targetValue);
        }
        if (valueValidation) {
            let validation = valueValidation(targetValue);
            setInvalid(validation.invalid);
            setInvMessage(validation.message);
        }
    };
    return (React.createElement("div", { className: "input" + (margined ? " margined" : "") + (stretchy ? " stretchy" : "") },
        label && React.createElement("div", { className: "input-label" }, label),
        React.createElement("div", { className: "input-container" },
            React.createElement("input", { className: "input-control" +
                    (invalid ? " invalid" : "") +
                    " " +
                    width +
                    (stretchy ? " stretchy" : "") +
                    (bordered ? " bordered" : "") +
                    (changeHighlight ? " changed" : ""), onBlur: onBlur, value: (valueMask && valueMask(value || "")) || value, onFocus: focusFunc, type: password ? "password" : "text", placeholder: placeholder, ref: control, onChange: changeFunc, readOnly: readOnly }),
            React.createElement("div", { className: "input-prefix", ref: prefixRef }, prefix),
            React.createElement("div", { className: "input-suffix", ref: suffixRef }, suffix),
            React.createElement("div", { className: "input-label-invalid" + (showMessage && invalid && clicked && blurred ? " active" : "") }, invMessage))));
};
