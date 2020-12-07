import * as React from "react";
var Points = function (_a) {
    var graphHeight = _a.graphHeight, graphWidth = _a.graphWidth, color = _a.color, fillColor = _a.fillColor, width = _a.width, radius = _a.radius, maxY = _a.maxY, minY = _a.minY, data = _a.data;
    var createPath = function () {
        var d = "";
        var hSpacing = graphWidth / (data.length - 1);
        data.forEach(function (point, i) {
            d += " M" + (i * hSpacing - radius).toFixed(2) + " " + ((graphHeight * (maxY - point.y)) / (maxY - minY)).toFixed(2);
            d += " a" + radius + " " + radius + " 0 1 0 " + radius * 2 + " 0";
            d += " a" + radius + " " + radius + " 0 1 0 -" + radius * 2 + " 0";
        });
        return d;
    };
    return React.createElement("path", { fill: fillColor, stroke: color, strokeWidth: width, d: createPath() });
};
Points.displayName = "Points";
export { Points };
