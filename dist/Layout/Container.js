import * as React from "react";
import "../styles/container.sass";
const Container = ({ raised, bordered, margined, clickable, stretchX, flex, padded, children, column, header, inverted, }) => {
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
