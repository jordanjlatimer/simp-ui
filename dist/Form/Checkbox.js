import * as React from "react";
import "../styles/checkbox.sass";
var Checkbox = function (_a) {
    var label = _a.label, _b = _a.initChecked, initChecked = _b === void 0 ? false : _b, _c = _a.labelPosition, labelPosition = _c === void 0 ? "right" : _c;
    var _d = React.useState(initChecked), checked = _d[0], setChecked = _d[1];
    return (React.createElement("div", { className: "checkbox", onClick: function () { return setChecked(!checked); }, tabIndex: 0 },
        labelPosition === "left" ? (React.createElement("div", { className: "checkbox-label left" }, label)) : null,
        React.createElement("div", { className: "checkbox-outer" },
            React.createElement("div", { className: "checkbox-inner" + (checked ? " checked" : "") })),
        labelPosition === "left" ? null : (React.createElement("div", { className: "checkbox-label right" }, label))));
};
Checkbox.displayName = "Checkbox";
export { Checkbox };
