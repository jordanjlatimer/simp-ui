import * as React from "react";
import "../styles/range-input.sass";
export const RangeInput = ({ initial = 0, label, prefix = "", suffix = "", min, max, step = 1, onChange, }) => {
    const [value, setValue] = React.useState(initial);
    return (React.createElement("div", { className: "range-input" },
        label && React.createElement("div", { className: "range-input-label" }, label),
        React.createElement("div", { className: "range-input-value" }, prefix + value + suffix),
        React.createElement("input", { className: "range-input-slider", type: "range", min: min, max: max, step: step, value: value, onChange: (e) => {
                const value = e.target.value;
                setValue(parseInt(value));
                onChange && onChange(value);
            } })));
};
