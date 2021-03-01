import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import * as React from "react";
export const YAxis = React.forwardRef(({ yTicks, width, height, maxY, minY, prefix, suffix, title, tickColor, tickWidth, titleHeight }, ref) => {
    const tickArray = new Array(yTicks + 2).fill(null);
    return (_jsxs("svg", Object.assign({ ref: ref, className: "line-graph-y-axis" }, { children: [tickArray
                .map((j, i) => {
                return {
                    x: width - 18,
                    y: titleHeight + (i * height) / (yTicks + 1) + (i === tickArray.length - 1 ? -1.05 : i === 0 ? 1.05 : 0),
                    value: Math.floor(maxY - i * ((maxY - minY) / (yTicks + 1))),
                    j: j
                };
            })
                .map((tick, i) => {
                return (_jsxs(React.Fragment, { children: [_jsx("text", Object.assign({ x: tick.x, y: tick.y, alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "end" }, { children: (prefix ? prefix : "") + tick.value + (suffix ? suffix : "") }), "k" + i),
                        _jsx("path", { stroke: tickColor, strokeWidth: tickWidth, fill: "transparent", d: "M" + width + " " + tick.y + " h-10" }, "p" + i)] }, "f" + i));
            }),
            title ? (_jsx("text", Object.assign({ transform: "translate(" + (width - 80) + "," + (titleHeight + height / 2) + ") rotate(270)", alignmentBaseline: "middle", dominantBaseline: "middle", textAnchor: "middle" }, { children: title }), void 0)) : null] }), void 0));
});
