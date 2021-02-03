import * as React from "react";
export const Title = React.forwardRef(({ x, width, height, title }, ref) => {
    return (React.createElement("svg", { x: x, ref: ref, className: "line-graph-title" },
        React.createElement("text", { x: width / 2, y: height / 2, textAnchor: "middle", alignmentBaseline: "middle", dominantBaseline: "middle", style: { fontSize: "150%" } }, title)));
});
