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
const LineGraph = ({ lines, borderColor = "gray", borderWidth = 2, gridLineColor = "rgba(128, 128, 128, 0.5", gridLineWidth = 1, gridLineDash = "8,4", legend = false, maxY = Math.ceil(Math.max(...lines.map(line => Math.max(...line.data.map(point => point.y)))) / 100) * 100, minY = Math.floor(Math.min(...lines.map(line => Math.min(...line.data.map(point => point.y)))) / 100) * 100, title, xGridLines = false, xAxisTitle, yGridLines = true, yAxisTitle, yTicks = 5, yPrefix = "", ySuffix = "", }) => {
    const [canvDim, setCanvDim] = React.useState({ width: 0, height: 0 });
    const [titleHeight, setTitleHeight] = React.useState(10);
    const [yAxWidth, setYAxWidth] = React.useState(0);
    const [graphDim, setGraphDim] = React.useState({ width: 0, height: 0 });
    const [legDim, setLegDim] = React.useState({ width: 0, height: 0 });
    const [xAxHeight, setXAxHeight] = React.useState(0);
    const canvRef = React.useRef(null);
    const titleRef = React.useRef(null);
    const yAxRef = React.useRef(null);
    const legRef = React.useRef(null);
    const xAxRef = React.useRef(null);
    const xTicks = lines[0].data.length;
    React.useEffect(() => {
        window.addEventListener("resize", resize);
        resize();
        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);
    const resize = () => {
        if (canvRef.current) {
            setCanvDim({ height: canvRef.current.offsetHeight, width: canvRef.current.offsetWidth });
        }
    };
    React.useEffect(() => {
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
                    lines.map((line, i) => {
                        return (React.createElement(React.Fragment, { key: "f" + i },
                            React.createElement(Line, { key: "l" + i, color: line.options.lineColor, width: line.options.lineWidth, minY: minY, maxY: maxY, data: line.data, graphHeight: graphDim.height, graphWidth: graphDim.width }),
                            React.createElement(Points, { key: "p" + i, fillColor: line.options.pointFill, color: line.options.lineColor, width: line.options.lineWidth, radius: line.options.pointRadius, minY: minY, maxY: maxY, data: line.data, graphHeight: graphDim.height, graphWidth: graphDim.width })));
                    }),
                    React.createElement(Border, { graphHeight: graphDim.height, graphWidth: graphDim.width, width: borderWidth, color: borderColor })),
                legend ?
                    React.createElement(Legend, { ref: legRef, x: yAxWidth + graphDim.width, y: titleHeight, width: legDim.width, height: legDim.height, lines: lines })
                    : null,
                React.createElement(XAxis, { x: 0, y: titleHeight + graphDim.height, height: xAxHeight, width: graphDim.width, yAxisWidth: yAxWidth, xTicks: xTicks, tickLabels: lines[0].data.map(point => point.x), title: xAxisTitle, tickColor: borderColor, tickWidth: borderWidth, ref: xAxRef })))));
};
LineGraph.displayName = "LineGraph";
export { LineGraph };
