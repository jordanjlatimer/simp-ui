import * as React from "react";
var Border = function (_a) {
    var graphHeight = _a.graphHeight, graphWidth = _a.graphWidth, color = _a.color, width = _a.width;
    var createPath = function () {
        var d = "M" + width / 2 + " " + width / 2 + " h" + Math.abs(graphWidth - width);
        d += " v" + Math.abs(graphHeight - width);
        d += " h-" + Math.abs(graphWidth - width);
        d += " v-" + Math.abs(graphHeight - (width / 2));
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, d: createPath() });
};
Border.displayName = "Border";
export { Border };
