import * as React from "react";
import "../styles/radio-input.sass";
export const RadioInput = ({ label, segmented, horizontal, options, optionLabels = "right", onChange, }) => {
    const [selected, setSelected] = React.useState(undefined);
    return (React.createElement("div", { className: "radio-input" },
        label && React.createElement("div", { className: "radio-input-label" }, label),
        React.createElement("div", { className: "radio-input-control" + (segmented ? " segmented" : "") + (horizontal ? " horizontal" : "") }, options === null || options === void 0 ? void 0 : options.map(option => {
            return segmented ? (React.createElement("div", { className: "radio-input-option segmented" + (selected === option.value ? " active" : ""), onClick: () => (setSelected(option.value), onChange && onChange(option.value)), tabIndex: 0 }, option.label)) : (React.createElement("div", { className: "radio-input-option", onClick: () => (setSelected(option.value), onChange && onChange(option.value)), tabIndex: 0 },
                optionLabels === "left" && React.createElement("div", { className: "radio-input-option-label left" }, option.label),
                React.createElement("div", { className: "radio-input-box-outer" },
                    React.createElement("div", { className: "radio-input-box-inner" + (selected === option.value ? " active" : "") })),
                optionLabels === "right" && React.createElement("div", { className: "radio-input-option-label right" }, option.label)));
        }))));
};
