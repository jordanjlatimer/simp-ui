import * as React from "react";
import "../styles/textarea.sass";
export const TextArea = ({ initialValue, onChange, valueValidation, label, placeholder, width = "medium", height = "medium", }) => {
    const [value, setValue] = React.useState(initialValue || "");
    const [invalid, setInvalid] = React.useState(false);
    const [invMessage, setInvMessage] = React.useState("");
    const [showMessage, setShowMessage] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [blurred, setBlurred] = React.useState(false);
    const control = React.useRef(null);
    const blurFunc = () => {
        setShowMessage(false);
        setBlurred(true);
    };
    const focusFunc = () => {
        setShowMessage(true);
        setClicked(true);
    };
    const changeFunc = (e) => {
        const targetValue = e.target.value;
        setValue(targetValue);
        if (valueValidation) {
            let validation = valueValidation(targetValue);
            setInvalid(validation && validation.invalid);
            setInvMessage(validation.message);
        }
        onChange && onChange(targetValue);
    };
    return (React.createElement("div", { className: "textarea" },
        label && React.createElement("div", { className: "textarea-label" }, label),
        React.createElement("div", { className: "textarea-container" },
            React.createElement("textarea", { className: "textarea-control" + (invalid ? " invalid" : "") + " w-" + width + " h-" + height, onBlur: blurFunc, value: value, onFocus: focusFunc, placeholder: placeholder, ref: control, onChange: changeFunc }),
            React.createElement("div", { className: "textarea-label-invalid" + (showMessage && invalid && clicked && blurred ? " active" : "") }, invMessage))));
};
