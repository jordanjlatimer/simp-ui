import * as React from "react";
var XAxis = React.forwardRef(function (_a, ref) {
    var x = _a.x, y = _a.y, xTicks = _a.xTicks, width = _a.width, height = _a.height, tickLabels = _a.tickLabels, title = _a.title, tickColor = _a.tickColor, tickWidth = _a.tickWidth, yAxisWidth = _a.yAxisWidth;
    return (React.createElement("svg", { x: x, y: y, ref: ref, className: "line-graph-x-axis" },
        tickLabels.map(function (tick, i) {
            return (React.createElement(React.Fragment, { key: "f" + i },
                React.createElement("text", { key: "l" + i, x: yAxisWidth + i * (width / (xTicks - 1)), y: 24, alignmentBaseline: "hanging", dominantBaseline: "hanging", textAnchor: "middle" }, tick),
                React.createElement("path", { key: "t" + i, stroke: tickColor, strokeWidth: tickWidth, fill: "transparent", d: "M" + (yAxisWidth + i * (width / (xTicks - 1)) + (i === tickLabels.length - 1 ? -1.05 : i === 0 ? 1 : 0)) + " 0 v10" })));
        }),
        title ? (React.createElement("text", { x: yAxisWidth + (width / 2), y: 54, textAnchor: "middle" }, title)) : null));
});
XAxis.displayName = "XAxis";
export { XAxis };
