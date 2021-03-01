import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import * as React from "react";
export const Title = React.forwardRef(({ x, width, height, title }, ref) => {
    return (_jsx("svg", Object.assign({ x: x, ref: ref, className: "line-graph-title" }, { children: _jsx("text", Object.assign({ x: width / 2, y: height / 2, textAnchor: "middle", alignmentBaseline: "middle", dominantBaseline: "middle", style: { fontSize: "150%" } }, { children: title }), void 0) }), void 0));
});
