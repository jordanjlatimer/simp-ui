import * as React from "react";
import "../styles/button.sass";
const Button = ({ onClick, label }) => {
    return (React.createElement("div", { className: "button", onClick: onClick }, label));
};
Button.displayName = "Button";
export { Button };
