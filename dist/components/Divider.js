import * as React from "react";
import "../styles/divider.sass";
export const Divider = ({ margin = "medium" }) => {
    return React.createElement("hr", { className: "divider" + " " + margin });
};
