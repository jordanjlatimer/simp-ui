"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var React = require("react");
require("../../styles/checkbox.sass");
var Checkbox = function (_a) {
    var label = _a.label, _b = _a.initChecked, initChecked = _b === void 0 ? false : _b, _c = _a.labelPosition, labelPosition = _c === void 0 ? "right" : _c;
    var _d = React.useState(initChecked), checked = _d[0], setChecked = _d[1];
    return (React.createElement("div", { className: "checkbox", onClick: function () { return setChecked(!checked); }, tabIndex: 0 },
        labelPosition === "left" ? (React.createElement("div", { className: "checkbox-label left" }, label)) : null,
        React.createElement("div", { className: "checkbox-outer" },
            React.createElement("div", { className: "checkbox-inner" + (checked ? " checked" : "") })),
        labelPosition === "left" ? null : (React.createElement("div", { className: "checkbox-label right" }, label))));
};
exports.Checkbox = Checkbox;
Checkbox.displayName = "Checkbox";
//# sourceMappingURL=Checkbox.js.map