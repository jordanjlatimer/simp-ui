import * as React from "react";
import "../styles/container.sass";
export const Container = ({ raised, bordered, margined, clickable, stretchX, flex, wrap, padded, children, column, header, inverted, }) => (React.createElement("div", { className: "container" +
        (raised ? " raised" : "") +
        (bordered ? " bordered" : "") +
        (margined ? " margined" : "") +
        (clickable ? " clickable" : "") +
        (stretchX ? " stretch-x" : "") },
    header && React.createElement("div", { className: "container-header" + (inverted ? " inverted" : "") }, header),
    React.createElement("div", { className: "container-contents" +
            (flex ? " flex" : "") +
            (wrap ? " wrap" : "") +
            (column ? " column" : "") +
            (padded ? " padded" : "") }, children)));
