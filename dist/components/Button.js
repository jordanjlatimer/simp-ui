import * as React from "react";
import "../styles/button.sass";
export const Button = ({ text, color = "green", icon, marginRight, floatRight, disabled, onClick, }) => (React.createElement("div", { className: "button" +
        " " +
        color +
        (marginRight ? " m-right" : "") +
        (floatRight ? " f-right" : "") +
        (disabled ? " disabled" : ""), onClick: onClick },
    icon,
    text));
