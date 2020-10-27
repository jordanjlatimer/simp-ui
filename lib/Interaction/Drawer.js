"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
var React = require("react");
var fa_1 = require("react-icons/fa");
require("../styles/drawer.sass");
var positionIcons = {
    top: React.createElement(fa_1.FaAngleUp, null),
    right: React.createElement(fa_1.FaAngleRight, null),
    bottom: React.createElement(fa_1.FaAngleDown, null),
    left: React.createElement(fa_1.FaAngleLeft, null),
};
var Drawer = function (_a) {
    var open = _a.open, _b = _a.position, position = _b === void 0 ? "left" : _b, callback = _a.callback, children = _a.children;
    return (React.createElement("div", { className: "drawer" + (open ? " open" : "") + (" " + position) },
        React.createElement("div", { className: "drawer-close" + (open ? " open" : "") + (" " + position), onClick: callback }, positionIcons[position]),
        children));
};
exports.Drawer = Drawer;
Drawer.displayName = "Drawer";
//# sourceMappingURL=Drawer.js.map