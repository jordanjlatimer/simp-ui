import * as React from "react";
const Legend = React.forwardRef(({ x, y, lines, width, height }, ref) => {
    return (React.createElement("svg", { ref: ref, x: x, y: y, className: "line-graph-legend" }, lines.map((line, i) => {
        const radius = line.options.pointRadius;
        return (React.createElement(React.Fragment, { key: "f" + i },
            React.createElement("path", { key: "l" + i, fill: "transparent", stroke: line.options.lineColor, strokeWidth: line.options.lineWidth, d: "M" + width * 0.2 + " " + (i + 1) * 40 + " h" + width * 0.6 }),
            React.createElement("path", { key: "p" + i, fill: line.options.pointFill, stroke: line.options.lineColor, strokeWidth: line.options.lineWidth, d: "M" +
                    (width / 2 - radius) +
                    " " +
                    (i + 1) * 40 +
                    " a" +
                    radius +
                    " " +
                    radius +
                    " 0 1 0 " +
                    radius * 2 +
                    " 0" +
                    " a" +
                    radius +
                    " " +
                    radius +
                    " 0 1 0 -" +
                    radius * 2 +
                    " 0" }),
            React.createElement("text", { key: "t" + i, x: width / 2, y: (i + 1) * 40 - 10, textAnchor: "middle" }, line.label)));
    })));
});
Legend.displayName = "Legend";
export { Legend };
