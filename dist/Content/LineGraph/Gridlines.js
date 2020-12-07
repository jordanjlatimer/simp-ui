import * as React from "react";
const Gridlines = ({ graphHeight, graphWidth, yLines, xLines, color, width, dash }) => {
    const createPath = () => {
        const hSpacing = graphWidth / xLines;
        const vSpacing = graphHeight / (yLines + 1);
        let d = "";
        for (let i = 1; i <= yLines; i++) {
            d += " M0 " + (vSpacing * i).toFixed(2) + " h" + graphWidth;
        }
        for (let i = 1; i <= xLines; i++) {
            d += " M" + (hSpacing * i).toFixed(2) + " 0" + " v" + graphHeight;
        }
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, strokeDasharray: dash, d: createPath() });
};
Gridlines.displayName = "Gridlines";
export { Gridlines };
