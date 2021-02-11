import * as React from "react";
import "../styles/divider.sass";
export const Divider = ({ margin = "medium" }) => React.createElement("hr", { className: "divider" + " " + margin });
