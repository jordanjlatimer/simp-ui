"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var React = require("react");
require("../styles/button.sass");
var Button = function (_a) {
    var onClick = _a.onClick, label = _a.label;
    return (React.createElement("div", { className: "button", onClick: onClick },
        React.createElement("p", null, label)));
};
exports.Button = Button;
Button.displayName = "Button";
//# sourceMappingURL=Button.js.map