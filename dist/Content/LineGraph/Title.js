import * as React from "react";
var Title = React.forwardRef(function (_a, ref) {
    var x = _a.x, width = _a.width, height = _a.height, title = _a.title;
    return (React.createElement("svg", { x: x, ref: ref, className: "line-graph-title" },
        React.createElement("text", { x: width / 2, y: height / 2, textAnchor: "middle", alignmentBaseline: "middle", dominantBaseline: "middle", style: { fontSize: "150%" } }, title)));
});
Title.displayName = "Title";
export { Title };
