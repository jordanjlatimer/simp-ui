import * as React from "react";
import { RiMenuFill } from "@meronex/icons/ri";
import "../styles/menu.sass";
var Menu = function (_a) {
    var children = _a.children, _b = _a.inverted, inverted = _b === void 0 ? false : _b, _c = _a.hideable, hideable = _c === void 0 ? false : _c, _d = _a.startOpen, startOpen = _d === void 0 ? true : _d;
    var _e = React.useState(startOpen), open = _e[0], setOpen = _e[1];
    return (React.createElement("div", { className: "menu" + (open ? " open" : "") + (inverted ? " inverted" : "") },
        hideable ?
            React.createElement("div", { className: "menu-toggle" + (open ? " open" : "") + (inverted ? " inverted" : ""), onClick: function () { return setOpen(!open); } },
                React.createElement(RiMenuFill, { className: "menu-close-icon" + (inverted ? " inverted" : "") }))
            : null,
        children));
};
Menu.displayName = "Menu";
export { Menu };
