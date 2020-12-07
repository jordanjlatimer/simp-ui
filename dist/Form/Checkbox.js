import * as React from "react";
import "../styles/checkbox.sass";
const Checkbox = ({ label, initChecked = false, labelPosition = "right", }) => {
    const [checked, setChecked] = React.useState(initChecked);
    return (React.createElement("div", { className: "checkbox", onClick: () => setChecked(!checked), tabIndex: 0 },
        labelPosition === "left" ? (React.createElement("div", { className: "checkbox-label left" }, label)) : null,
        React.createElement("div", { className: "checkbox-outer" },
            React.createElement("div", { className: "checkbox-inner" + (checked ? " checked" : "") })),
        labelPosition === "left" ? null : (React.createElement("div", { className: "checkbox-label right" }, label))));
};
Checkbox.displayName = "Checkbox";
export { Checkbox };
