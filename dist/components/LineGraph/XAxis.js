import * as React from "react";
export const XAxis = React.forwardRef(({ x, y, xTicks, width, height, tickLabels, title, tickColor, tickWidth, yAxisWidth }, ref) => {
    return (React.createElement("svg", { x: x, y: y, ref: ref, className: "line-graph-x-axis" },
        tickLabels.map((tick, i) => {
            return (React.createElement(React.Fragment, { key: "f" + i },
                React.createElement("text", { key: "l" + i, x: yAxisWidth + i * (width / (xTicks - 1)), y: 24, alignmentBaseline: "hanging", dominantBaseline: "hanging", textAnchor: "middle" }, tick),
                React.createElement("path", { key: "t" + i, stroke: tickColor, strokeWidth: tickWidth, fill: "transparent", d: "M" +
                        (yAxisWidth + i * (width / (xTicks - 1)) + (i === tickLabels.length - 1 ? -1.05 : i === 0 ? 1 : 0)) +
                        " 0 v10" })));
        }),
        title ? (React.createElement("text", { x: yAxisWidth + width / 2, y: 54, textAnchor: "middle" }, title)) : null));
});
