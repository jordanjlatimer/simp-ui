import * as React from "react";
var Line = function (_a) {
    var graphHeight = _a.graphHeight, graphWidth = _a.graphWidth, color = _a.color, width = _a.width, maxY = _a.maxY, minY = _a.minY, data = _a.data;
    var createPath = function () {
        var d = "M0 " + ((graphHeight * (maxY - data[0].y)) / (maxY - minY)).toFixed(2);
        var hSpacing = graphWidth / (data.length - 1);
        var stopI = data.length - 1;
        data.forEach(function (point, i) {
            if (i !== stopI) {
                var midPoint = ((i + 0.5) * hSpacing).toFixed(2);
                var curY = (graphHeight * (maxY - point.y)) / (maxY - minY);
                var nextY = ((graphHeight * (maxY - data[i + 1].y)) / (maxY - minY)).toFixed(2);
                var nextX = ((i + 1) * hSpacing).toFixed(2);
                d += " C" + midPoint + " " + curY + ", " + midPoint + " " + nextY + ", " + nextX + " " + nextY;
            }
        });
        return d;
    };
    return React.createElement("path", { fill: "transparent", stroke: color, strokeWidth: width, d: createPath() });
};
Line.displayName = "Line";
export { Line };
