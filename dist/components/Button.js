import * as React from "react";
import "../styles/button.sass";
export const Button = ({ text, color = "green", icon, marginRight, floatRight, onClick }) => (React.createElement("div", { className: "button" + " " + color + (marginRight ? " m-right" : "") + (floatRight ? " f-right" : ""), onClick: onClick },
    icon,
    text));
