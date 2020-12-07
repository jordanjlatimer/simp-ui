import * as React from "react";
import { RiArrowLeftSLine } from "@meronex/icons/ri";
import "../styles/drawer.sass";
const Drawer = ({ open, position = "left", callback, children, }) => {
    return (React.createElement("div", { className: "drawer" + (open ? " open" : "") + (" " + position) },
        React.createElement("div", { className: "drawer-close" + (open ? " open" : "") + (" " + position), onClick: callback },
            React.createElement(RiArrowLeftSLine, { className: "drawer-close-icon" + (" " + position) })),
        children));
};
Drawer.displayName = "Drawer";
export { Drawer };
