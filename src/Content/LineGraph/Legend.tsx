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
          <>
            <path
              fill="transparent"
              stroke={line.options.lineColor}
              strokeWidth={line.options.lineWidth}
              d={"M" + width * 0.2 + " " + (i + 1) * 40 + " h" + width * 0.6}
            />
            <path
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
            <text x={width / 2} y={(i + 1) * 40 - 10} textAnchor="middle">
              {line.label}
            </text>
          </>
        );
      })}
    </svg>
  );
})

Legend.displayName = "Legend";

export { Legend };
