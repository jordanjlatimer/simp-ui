import * as React from "react";
var Gridlines = function (_a) {
    var graphHeight = _a.graphHeight, graphWidth = _a.graphWidth, yLines = _a.yLines, xLines = _a.xLines, color = _a.color, width = _a.width, dash = _a.dash;
    var createPath = function () {
        var hSpacing = graphWidth / xLines;
        var vSpacing = graphHeight / (yLines + 1);
        var d = "";
        for (var i = 1; i <= yLines; i++) {
            d += " M0 " + (vSpacing * i).toFixed(2) + " h" + graphWidth;
        }
        for (var i = 1; i <= xLines; i++) {
            d += " M" + (hSpacing * i).toFixed(2) + " 0" + " v" + graphHeight;
        }
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, strokeDasharray: dash, d: createPath() });
};
Gridlines.displayName = "Gridlines";
export { Gridlines };
