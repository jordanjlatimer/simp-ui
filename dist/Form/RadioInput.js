import * as React from "react";
import "../styles/radio-input.sass";
const RadioInput = ({ label, segmented, horizontal, options, optionLabels = "right", }) => {
    const [selected, setSelected] = React.useState(-1);
    return (React.createElement("div", { className: "radio-input" },
        React.createElement("div", { className: "radio-input-label" }, label),
        React.createElement("div", { className: "radio-input-control" +
                (segmented ? " segmented" : "") +
                (horizontal ? " horizontal" : "") }, options.map((option, index) => {
            return segmented ? (React.createElement("div", { className: "radio-input-option segmented" +
                    (selected === index ? " active" : ""), onClick: () => setSelected(index), tabIndex: 0 }, option.label)) : (React.createElement("div", { key: option.value, className: "radio-input-option", onClick: () => setSelected(index), tabIndex: 0 },
                optionLabels === "left" ? (React.createElement("div", { className: "radio-input-option-label left" }, option.label)) : null,
                React.createElement("div", { className: "radio-input-box-outer" },
                    React.createElement("div", { className: "radio-input-box-inner" +
                            (selected === index ? " active" : "") })),
                optionLabels === "right" ? (React.createElement("div", { className: "radio-input-option-label right" }, option.label)) : null));
        }))));
};
RadioInput.displayName = "RadioInput";
export { RadioInput };
