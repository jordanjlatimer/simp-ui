import * as React from "react";
export const Line = ({ graphHeight, graphWidth, color, width, maxY, minY, data }) => {
    const createPath = () => {
        let d = "M0 " + ((graphHeight * (maxY - data[0].y)) / (maxY - minY)).toFixed(2);
        const hSpacing = graphWidth / (data.length - 1);
        const stopI = data.length - 1;
        data.forEach((point, i) => {
            if (i !== stopI) {
                const midPoint = ((i + 0.5) * hSpacing).toFixed(2);
                const curY = (graphHeight * (maxY - point.y)) / (maxY - minY);
                const nextY = ((graphHeight * (maxY - data[i + 1].y)) / (maxY - minY)).toFixed(2);
                const nextX = ((i + 1) * hSpacing).toFixed(2);
                d += " C" + midPoint + " " + curY + ", " + midPoint + " " + nextY + ", " + nextX + " " + nextY;
            }
        });
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, d: createPath() });
};
