import * as React from "react";
import { RiArrowLeftSLine } from "@meronex/icons/ri";
import "../styles/drawer.sass";
var Drawer = function (_a) {
    var open = _a.open, _b = _a.position, position = _b === void 0 ? "left" : _b, callback = _a.callback, children = _a.children;
    return (React.createElement("div", { className: "drawer" + (open ? " open" : "") + (" " + position) },
        React.createElement("div", { className: "drawer-close" + (open ? " open" : "") + (" " + position), onClick: callback },
            React.createElement(RiArrowLeftSLine, { className: "drawer-close-icon" + (" " + position) })),
        children));
};
Drawer.displayName = "Drawer";
export { Drawer };
