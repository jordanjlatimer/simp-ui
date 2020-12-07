import * as React from "react";
import { Gridlines } from "./Gridlines";
import { Line } from "./Line";
import { Points } from "./Points";
import { Border } from "./Border";
import { Title } from "./Title";
import { YAxis } from "./YAxis";
import { Legend } from "./Legend";
import { XAxis } from "./XAxis";
import "../../styles/line-graph.sass";
var LineGraph = function (_a) {
    var lines = _a.lines, _b = _a.borderColor, borderColor = _b === void 0 ? "gray" : _b, _c = _a.borderWidth, borderWidth = _c === void 0 ? 2 : _c, _d = _a.gridLineColor, gridLineColor = _d === void 0 ? "rgba(128, 128, 128, 0.5" : _d, _e = _a.gridLineWidth, gridLineWidth = _e === void 0 ? 1 : _e, _f = _a.gridLineDash, gridLineDash = _f === void 0 ? "8,4" : _f, _g = _a.legend, legend = _g === void 0 ? false : _g, _h = _a.maxY, maxY = _h === void 0 ? Math.ceil(Math.max.apply(Math, lines.map(function (line) { return Math.max.apply(Math, line.data.map(function (point) { return point.y; })); })) / 100) * 100 : _h, _j = _a.minY, minY = _j === void 0 ? Math.floor(Math.min.apply(Math, lines.map(function (line) { return Math.min.apply(Math, line.data.map(function (point) { return point.y; })); })) / 100) * 100 : _j, title = _a.title, _k = _a.xGridLines, xGridLines = _k === void 0 ? false : _k, xAxisTitle = _a.xAxisTitle, _l = _a.yGridLines, yGridLines = _l === void 0 ? true : _l, yAxisTitle = _a.yAxisTitle, _m = _a.yTicks, yTicks = _m === void 0 ? 5 : _m, _o = _a.yPrefix, yPrefix = _o === void 0 ? "" : _o, _p = _a.ySuffix, ySuffix = _p === void 0 ? "" : _p;
    var _q = React.useState({ width: 0, height: 0 }), canvDim = _q[0], setCanvDim = _q[1];
    var _r = React.useState(10), titleHeight = _r[0], setTitleHeight = _r[1];
    var _s = React.useState(0), yAxWidth = _s[0], setYAxWidth = _s[1];
    var _t = React.useState({ width: 0, height: 0 }), graphDim = _t[0], setGraphDim = _t[1];
    var _u = React.useState({ width: 0, height: 0 }), legDim = _u[0], setLegDim = _u[1];
    var _v = React.useState(0), xAxHeight = _v[0], setXAxHeight = _v[1];
    var canvRef = React.useRef(null);
    var titleRef = React.useRef(null);
    var yAxRef = React.useRef(null);
    var legRef = React.useRef(null);
    var xAxRef = React.useRef(null);
    var xTicks = lines[0].data.length;
    React.useEffect(function () {
        window.addEventListener("resize", resize);
        resize();
        return function () {
            window.removeEventListener("resize", resize);
        };
    }, []);
    var resize = function () {
        if (canvRef.current) {
            setCanvDim({ height: canvRef.current.offsetHeight, width: canvRef.current.offsetWidth });
        }
    };
    React.useEffect(function () {
        setGraphDim({ height: canvDim.height - titleHeight - xAxHeight, width: canvDim.width - yAxWidth - legDim.width });
        if (titleRef.current) {
            setTitleHeight(titleRef.current.getBoundingClientRect().height * 1.5);
        }
        if (yAxRef.current) {
            setYAxWidth(yAxRef.current.getBoundingClientRect().width * 1.5);
        }
        if (legRef.current) {
            setLegDim({ width: legRef.current.getBoundingClientRect().width * 1.5, height: legRef.current.getBoundingClientRect().width });
        }
        if (xAxRef.current) {
            setXAxHeight(xAxRef.current.getBoundingClientRect().height * 1.5);
        }
    }, [canvDim]);
    return (React.createElement(React.Fragment, { key: "f" },
        React.createElement("div", { className: "line-graph", ref: canvRef },
            React.createElement("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg" },
                title ?
                    React.createElement(Title, { ref: titleRef, x: yAxWidth, width: graphDim.width, height: titleHeight, title: title })
                    : null,
                React.createElement(YAxis, { minY: minY, maxY: maxY, width: yAxWidth, titleHeight: titleHeight, height: graphDim.height, yTicks: yTicks - 2, prefix: yPrefix, suffix: ySuffix, title: yAxisTitle, tickColor: borderColor, tickWidth: borderWidth, ref: yAxRef }),
                React.createElement("svg", { x: yAxWidth, y: titleHeight, width: Math.abs(graphDim.width), height: Math.abs(graphDim.height) },
                    React.createElement(Gridlines, { graphHeight: graphDim.height, graphWidth: graphDim.width, yLines: yGridLines ? (yTicks - 2) : 0, xLines: xGridLines ? xTicks - 1 : 0, color: gridLineColor, width: gridLineWidth, dash: gridLineDash }),
                    lines.map(function (line, i) {
                        return (React.createElement(React.Fragment, { key: "f" + i },
                            React.createElement(Line, { key: "l" + i, color: line.options.lineColor, width: line.options.lineWidth, minY: minY, maxY: maxY, data: line.data, graphHeight: graphDim.height, graphWidth: graphDim.width }),
                            React.createElement(Points, { key: "p" + i, fillColor: line.options.pointFill, color: line.options.lineColor, width: line.options.lineWidth, radius: line.options.pointRadius, minY: minY, maxY: maxY, data: line.data, graphHeight: graphDim.height, graphWidth: graphDim.width })));
                    }),
                    React.createElement(Border, { graphHeight: graphDim.height, graphWidth: graphDim.width, width: borderWidth, color: borderColor })),
                legend ?
                    React.createElement(Legend, { ref: legRef, x: yAxWidth + graphDim.width, y: titleHeight, width: legDim.width, height: legDim.height, lines: lines })
                    : null,
                React.createElement(XAxis, { x: 0, y: titleHeight + graphDim.height, height: xAxHeight, width: graphDim.width, yAxisWidth: yAxWidth, xTicks: xTicks, tickLabels: lines[0].data.map(function (point) { return point.x; }), title: xAxisTitle, tickColor: borderColor, tickWidth: borderWidth, ref: xAxRef })))));
};
LineGraph.displayName = "LineGraph";
export { LineGraph };
