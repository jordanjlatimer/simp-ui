import * as React from "react";
import "../styles/radio-input.sass";
var RadioInput = function (_a) {
    var label = _a.label, segmented = _a.segmented, horizontal = _a.horizontal, options = _a.options, _b = _a.optionLabels, optionLabels = _b === void 0 ? "right" : _b;
    var _c = React.useState(-1), selected = _c[0], setSelected = _c[1];
    return (React.createElement("div", { className: "radio-input" },
        React.createElement("div", { className: "radio-input-label" }, label),
        React.createElement("div", { className: "radio-input-control" +
                (segmented ? " segmented" : "") +
                (horizontal ? " horizontal" : "") }, options.map(function (option, index) {
            return segmented ? (React.createElement("div", { className: "radio-input-option segmented" +
                    (selected === index ? " active" : ""), onClick: function () { return setSelected(index); }, tabIndex: 0 }, option.label)) : (React.createElement("div", { key: option.value, className: "radio-input-option", onClick: function () { return setSelected(index); }, tabIndex: 0 },
                optionLabels === "left" ? (React.createElement("div", { className: "radio-input-option-label left" }, option.label)) : null,
                React.createElement("div", { className: "radio-input-box-outer" },
                    React.createElement("div", { className: "radio-input-box-inner" +
                            (selected === index ? " active" : "") })),
                optionLabels === "right" ? (React.createElement("div", { className: "radio-input-option-label right" }, option.label)) : null));
        }))));
};
RadioInput.displayName = "RadioInput";
export { RadioInput };
