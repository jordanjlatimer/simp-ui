import * as React from "react";
export const Points = ({ graphHeight, graphWidth, color, fillColor, width, radius, maxY, minY, data, }) => {
    const createPath = () => {
        let d = "";
        const hSpacing = graphWidth / (data.length - 1);
        data.forEach((point, i) => {
            d +=
                " M" + (i * hSpacing - radius).toFixed(2) + " " + ((graphHeight * (maxY - point.y)) / (maxY - minY)).toFixed(2);
            d += " a" + radius + " " + radius + " 0 1 0 " + radius * 2 + " 0";
            d += " a" + radius + " " + radius + " 0 1 0 -" + radius * 2 + " 0";
        });
        return d;
    };
    return React.createElement("path", { fill: fillColor, stroke: color, strokeWidth: width, d: createPath() });
};
