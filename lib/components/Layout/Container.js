"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var React = require("react");
require("../../styles/container.sass");
var Container = function (_a) {
    var raised = _a.raised, bordered = _a.bordered, margined = _a.margined, clickable = _a.clickable, stretchX = _a.stretchX, flex = _a.flex, padded = _a.padded, children = _a.children, column = _a.column, header = _a.header, inverted = _a.inverted;
    return (React.createElement("div", { className: "container" +
            (raised ? " raised" : "") +
            (bordered ? " bordered" : "") +
            (margined ? " margined" : "") +
            (clickable ? " clickable" : "") +
            (stretchX ? " stretch-x" : "") },
        header ? (React.createElement("div", { className: "container-header" + (inverted ? " inverted" : "") }, header)) : null,
        React.createElement("div", { className: "container-contents" +
                (flex ? " flex" : "") +
                (column ? " column" : "") +
                (padded ? " padded" : "") }, children)));
};
exports.Container = Container;
Container.displayName = "Container";
//# sourceMappingURL=Container.js.map