import * as React from "react";
import "../styles/button.sass";
var Button = function (_a) {
    var onClick = _a.onClick, label = _a.label;
    return (React.createElement("div", { className: "button", onClick: onClick }, label));
};
Button.displayName = "Button";
export { Button };
