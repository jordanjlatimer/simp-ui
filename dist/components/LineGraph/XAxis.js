import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
export const XAxis = React.forwardRef(({ x, y, xTicks, width, tickLabels, title, tickColor, tickWidth, yAxisWidth }, ref) => {
    return (_jsxs("svg", Object.assign({ x: x, y: y, ref: ref, className: "line-graph-x-axis" }, { children: [tickLabels.map((tick, i) => {
                return (_jsxs(React.Fragment, { children: [_jsx("text", Object.assign({ x: yAxisWidth + i * (width / (xTicks - 1)), y: 24, alignmentBaseline: "hanging", dominantBaseline: "hanging", textAnchor: "middle" }, { children: tick }), "l" + i),
                        _jsx("path", { stroke: tickColor, strokeWidth: tickWidth, fill: "transparent", d: "M" +
                                (yAxisWidth + i * (width / (xTicks - 1)) + (i === tickLabels.length - 1 ? -1.05 : i === 0 ? 1 : 0)) +
                                " 0 v10" }, "t" + i)] }, "f" + i));
            }),
            title ? (_jsx("text", Object.assign({ x: yAxisWidth + width / 2, y: 54, textAnchor: "middle" }, { children: title }), void 0)) : null] }), void 0));
});
