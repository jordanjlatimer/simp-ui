import * as React from "react";
import "../styles/drawer.sass";
export const Drawer = ({ open, position = "left", callback, children }) => (React.createElement("div", { className: "drawer" + (open ? " open" : "") + (" " + position) },
    React.createElement("div", { className: "drawer-close" + (open ? " open" : "") + (" " + position), onClick: callback }),
    children));
