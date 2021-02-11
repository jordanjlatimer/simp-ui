import * as React from "react";
import "../styles/checkbox.sass";
export const Checkbox = ({ label, initChecked, labelPosition = "right" }) => {
    const [checked, setChecked] = React.useState(initChecked);
    return (React.createElement("div", { className: "checkbox", onClick: () => setChecked(!checked), tabIndex: 0 },
        labelPosition === "left" && React.createElement("div", { className: "checkbox-label left" }, label),
        React.createElement("div", { className: "checkbox-outer" },
            React.createElement("div", { className: "checkbox-inner" + (checked ? " checked" : "") })),
        labelPosition === "right" && React.createElement("div", { className: "checkbox-label right" }, label)));
};
