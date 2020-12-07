import * as React from "react";
import "../styles/container.sass";
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
Container.displayName = "Container";
export { Container };
