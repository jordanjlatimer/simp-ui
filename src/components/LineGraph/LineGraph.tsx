import * as React from "react";
import { Gridlines } from "./Gridlines";
import { Line } from "./Line";
import { Points } from "./Points";
import { Border } from "./Border";
import { Title } from "./Title";
import { YAxis } from "./YAxis";
import { Legend } from "./Legend";
import { XAxis } from "./XAxis";

type LineGraphProps = {
  borderColor?: string;
  borderWidth?: number;
  gridLineColor?: string;
  gridLineWidth?: number;
  gridLineDash?: string;
  legend?: boolean;
  maxY?: number;
  minY?: number;
  title?: string;
  xGridLines?: boolean;
  xAxisTitle?: string;
  yGridLines?: boolean;
  yAxisTitle?: string;
  yTicks?: number;
  yPrefix?: string;
  ySuffix?: string;
  lines: {
    label: string;
    options: {
      lineColor: string;
      lineWidth: number;
      pointFill: string;
      pointRadius: number;
    };
    data: {
      x: number | string;
      y: number;
    }[];
  }[];
};

export const LineGraph: React.FC<LineGraphProps> = ({
  lines,
  borderColor = "gray",
  borderWidth = 2,
  gridLineColor = "rgba(128, 128, 128, 0.5",
  gridLineWidth = 1,
  gridLineDash = "8,4",
  legend = false,
  maxY = Math.ceil(Math.max(...lines.map(line => Math.max(...line.data.map(point => point.y)))) / 100) * 100,
  minY = Math.floor(Math.min(...lines.map(line => Math.min(...line.data.map(point => point.y)))) / 100) * 100,
  title,
  xGridLines = false,
  xAxisTitle,
  yGridLines = true,
  yAxisTitle,
  yTicks = 5,
  yPrefix = "",
  ySuffix = "",
}: LineGraphProps) => {
  const [canvDim, setCanvDim] = React.useState({ width: 0, height: 0 });
  const [titleHeight, setTitleHeight] = React.useState(10);
  const [yAxWidth, setYAxWidth] = React.useState(0);
  const [graphDim, setGraphDim] = React.useState({ width: 0, height: 0 });
  const [legDim, setLegDim] = React.useState({ width: 0, height: 0 });
  const [xAxHeight, setXAxHeight] = React.useState(0);
  const canvRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<SVGSVGElement>(null);
  const yAxRef = React.useRef<SVGSVGElement>(null);
  const legRef = React.useRef<SVGSVGElement>(null);
  const xAxRef = React.useRef<SVGSVGElement>(null);

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
      setLegDim({
        width: legRef.current.getBoundingClientRect().width * 1.5,
        height: legRef.current.getBoundingClientRect().width,
      });
    }
    if (xAxRef.current) {
      setXAxHeight(xAxRef.current.getBoundingClientRect().height * 1.5);
    }
  }, [canvDim]);

  return (
    <React.Fragment key="f">
      <div className="line-graph" ref={canvRef}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {title ? (
            <Title ref={titleRef} x={yAxWidth} width={graphDim.width} height={titleHeight} title={title} />
          ) : null}
          <YAxis
            minY={minY}
            maxY={maxY}
            width={yAxWidth}
            titleHeight={titleHeight}
            height={graphDim.height}
            yTicks={yTicks - 2}
            prefix={yPrefix}
            suffix={ySuffix}
            title={yAxisTitle}
            tickColor={borderColor}
            tickWidth={borderWidth}
            ref={yAxRef}
          />
          <svg x={yAxWidth} y={titleHeight} width={Math.abs(graphDim.width)} height={Math.abs(graphDim.height)}>
            <Gridlines
              graphHeight={graphDim.height}
              graphWidth={graphDim.width}
              yLines={yGridLines ? yTicks - 2 : 0}
              xLines={xGridLines ? xTicks - 1 : 0}
              color={gridLineColor}
              width={gridLineWidth}
              dash={gridLineDash}
            />
            {lines.map((line, i) => {
              return (
                <React.Fragment key={"f" + i}>
                  <Line
                    key={"l" + i}
                    color={line.options.lineColor}
                    width={line.options.lineWidth}
                    minY={minY}
                    maxY={maxY}
                    data={line.data}
                    graphHeight={graphDim.height}
                    graphWidth={graphDim.width}
                  />
                  <Points
                    key={"p" + i}
                    fillColor={line.options.pointFill}
                    color={line.options.lineColor}
                    width={line.options.lineWidth}
                    radius={line.options.pointRadius}
                    minY={minY}
                    maxY={maxY}
                    data={line.data}
                    graphHeight={graphDim.height}
                    graphWidth={graphDim.width}
                  />
                </React.Fragment>
              );
            })}
            <Border graphHeight={graphDim.height} graphWidth={graphDim.width} width={borderWidth} color={borderColor} />
          </svg>
          {legend ? (
            <Legend
              ref={legRef}
              x={yAxWidth + graphDim.width}
              y={titleHeight}
              width={legDim.width}
              lines={lines}
            />
          ) : null}
          <XAxis
            x={0}
            y={titleHeight + graphDim.height}
            width={graphDim.width}
            yAxisWidth={yAxWidth}
            xTicks={xTicks}
            tickLabels={lines[0].data.map(point => point.x)}
            title={xAxisTitle}
            tickColor={borderColor}
            tickWidth={borderWidth}
            ref={xAxRef}
          />
        </svg>
      </div>
    </React.Fragment>
  );
};
