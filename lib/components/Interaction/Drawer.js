import * as React from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, } from "react-icons/fa";
import "../../styles/drawer.sass";
const positionIcons = {
    top: React.createElement(FaAngleUp, null),
    right: React.createElement(FaAngleRight, null),
    bottom: React.createElement(FaAngleDown, null),
    left: React.createElement(FaAngleLeft, null),
};
const Drawer = ({ open, position = "left", callback, children, }) => {
    return (React.createElement("div", { className: "drawer" + (open ? " open" : "") + (" " + position) },
        React.createElement("div", { className: "drawer-close" + (open ? " open" : "") + (" " + position), onClick: callback }, positionIcons[position]),
        children));
};
Drawer.displayName = "Drawer";
export { Drawer };
