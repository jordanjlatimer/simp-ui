import * as React from "react";

type LegendProps = {
  x: number;
  y: number;
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
  width: number;
  height: number;
};

const Legend = React.forwardRef<SVGSVGElement, LegendProps>(({ x, y, lines, width, height }, ref) => {
  return (
    <svg ref={ref} x={x} y={y} className="line-graph-legend">
      {lines.map((line, i) => {
        const radius = line.options.pointRadius;
        return (
          <React.Fragment key={"f" + i}>
            <path
              key={"l" + i}
              fill="transparent"
              stroke={line.options.lineColor}
              strokeWidth={line.options.lineWidth}
              d={"M" + width * 0.2 + " " + (i + 1) * 40 + " h" + width * 0.6}
            />
            <path
              key={"p" + i}
              fill={line.options.pointFill}
              stroke={line.options.lineColor}
              strokeWidth={line.options.lineWidth}
              d={
                "M" +
                (width / 2 - radius) +
                " " +
                (i + 1) * 40 +
                " a" +
                radius +
                " " +
                radius +
                " 0 1 0 " +
                radius * 2 +
                " 0" +
                " a" +
                radius +
                " " +
                radius +
                " 0 1 0 -" +
                radius * 2 +
                " 0"
              }
            />
            <text key={"t" + i} x={width / 2} y={(i + 1) * 40 - 10} textAnchor="middle">
              {line.label}
            </text>
          </React.Fragment>
        );
      })}
    </svg>
  );
})

Legend.displayName = "Legend";

export { Legend };
