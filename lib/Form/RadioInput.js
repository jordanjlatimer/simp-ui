"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
var React = require("react");
require("../styles/radio-input.sass");
var RadioInput = function (_a) {
    var label = _a.label, segmented = _a.segmented, horizontal = _a.horizontal, options = _a.options, optionLabels = _a.optionLabels;
    var _b = React.useState(-1), selected = _b[0], setSelected = _b[1];
    return (React.createElement("div", { className: "radio-input" },
        React.createElement("p", { className: "radio-input-label" }, label),
        React.createElement("div", { className: "radio-input-control" +
                (segmented ? " segmented" : "") +
                (horizontal ? " horizontal" : "") }, options.map(function (option, index) {
            return segmented ? (React.createElement("div", { className: "radio-input-option segmented" +
                    (selected === index ? " active" : ""), onClick: function () { return setSelected(index); }, tabIndex: 0 }, option.label)) : (React.createElement("div", { className: "radio-input-option", onClick: function () { return setSelected(index); }, tabIndex: 0 },
                optionLabels === "left" ? (React.createElement("p", { className: "radio-input-option-label left" }, option.label)) : null,
                React.createElement("div", { className: "radio-input-box-outer" },
                    React.createElement("div", { className: "radio-input-box-inner" +
                            (selected === index ? " active" : "") })),
                optionLabels === "right" ? (React.createElement("p", { className: "radio-input-option-label right" }, option.label)) : null));
        }))));
};
exports.RadioInput = RadioInput;
RadioInput.displayName = "RadioInput";
//# sourceMappingURL=RadioInput.js.map