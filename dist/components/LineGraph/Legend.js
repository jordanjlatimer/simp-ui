import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
export const Legend = React.forwardRef(({ x, y, lines, width }, ref) => {
    return (_jsx("svg", Object.assign({ ref: ref, x: x, y: y, className: "line-graph-legend" }, { children: lines.map((line, i) => {
            const radius = line.options.pointRadius;
            return (_jsxs(React.Fragment, { children: [_jsx("path", { fill: "transparent", stroke: line.options.lineColor, strokeWidth: line.options.lineWidth, d: "M" + width * 0.2 + " " + (i + 1) * 40 + " h" + width * 0.6 }, "l" + i),
                    _jsx("path", { fill: line.options.pointFill, stroke: line.options.lineColor, strokeWidth: line.options.lineWidth, d: "M" +
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
                            " 0" }, "p" + i),
                    _jsx("text", Object.assign({ x: width / 2, y: (i + 1) * 40 - 10, textAnchor: "middle" }, { children: line.label }), "t" + i)] }, "f" + i));
        }) }), void 0));
});
