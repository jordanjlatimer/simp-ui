import * as React from "react";
const Border = ({ graphHeight, graphWidth, color, width }) => {
    const createPath = () => {
        let d = "M" + width / 2 + " " + width / 2 + " h" + Math.abs(graphWidth - width);
        d += " v" + Math.abs(graphHeight - width);
        d += " h-" + Math.abs(graphWidth - width);
        d += " v-" + Math.abs(graphHeight - (width / 2));
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, d: createPath() });
};
Border.displayName = "Border";
export { Border };
