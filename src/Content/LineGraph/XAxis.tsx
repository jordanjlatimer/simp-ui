import * as React from "react";

type XAxisProps = {
  x: number;
  y: number;
  xTicks: number;
  width: number;
  height: number;
  tickLabels: (number | string)[];
  title?: string;
  tickColor: string;
  tickWidth: number;
  yAxisWidth: number;
};

export const XAxis = React.forwardRef<SVGSVGElement, XAxisProps>(({ x, y, xTicks, width, height, tickLabels, title, tickColor, tickWidth, yAxisWidth }, ref) => {

  return (
    <svg x={x} y={y} ref={ref} className="line-graph-x-axis">
      {tickLabels.map((tick, i) => {
        return (
          <React.Fragment key={"f" + i}>
            <text key={"l" + i} x={yAxisWidth + i * (width / (xTicks - 1))} y={24} alignmentBaseline="hanging" dominantBaseline="hanging" textAnchor="middle">
              {tick}
            </text>
            <path
              key={"t" + i}
              stroke={tickColor}
              strokeWidth={tickWidth}
              fill="transparent"
              d={"M" + (yAxisWidth + i * (width / (xTicks - 1)) + (i === tickLabels.length - 1 ? -1.05 : i === 0 ? 1 : 0)) + " 0 v10"}
            />
          </React.Fragment>
        );
      })}
      {title ? (
        <text x={yAxisWidth + (width / 2)} y={54} textAnchor="middle">
          {title}
        </text>
      ) : null}
    </svg>
  );
})
