import * as React from "react";
var YAxis = React.forwardRef(function (_a, ref) {
    var yTicks = _a.yTicks, width = _a.width, height = _a.height, maxY = _a.maxY, minY = _a.minY, prefix = _a.prefix, suffix = _a.suffix, title = _a.title, tickColor = _a.tickColor, tickWidth = _a.tickWidth, titleHeight = _a.titleHeight;
    var tickArray = new Array(yTicks + 2).fill(null);
    return (React.createElement("svg", { ref: ref, className: "line-graph-y-axis" },
        tickArray
            .map(function (j, i) {
            return {
                x: width - 18,
                y: (titleHeight + (i * height) / (yTicks + 1)) + (i === tickArray.length - 1 ? -1.05 : i === 0 ? 1.05 : 0),
                value: Math.floor(maxY - (i * ((maxY - minY) / (yTicks + 1)))),
            };
        })
            .map(function (tick, i) {
            return (React.createElement(React.Fragment, { key: "f" + i },
                React.createElement("text", { key: "k" + i, x: tick.x, y: tick.y, alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "end" }, (prefix ? prefix : "") + tick.value + (suffix ? suffix : "")),
                React.createElement("path", { key: "p" + i, stroke: tickColor, strokeWidth: tickWidth, fill: "transparent", d: "M" + width + " " + tick.y + " h-10" })));
        }),
        title ? (React.createElement("text", { transform: "translate(" + (width - 80) + "," + (titleHeight + (height / 2)) + ") rotate(270)", alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "middle" }, title)) : null));
});
YAxis.displayName = "YAxis";
export { YAxis };
