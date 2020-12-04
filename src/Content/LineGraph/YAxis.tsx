import * as React from "react";

type YAxisProps = {
  yTicks: number;
  width: number;
  height: number;
  maxY: number;
  minY: number;
  prefix: string;
  suffix: string;
  title?: string;
  tickColor: string;
  tickWidth: number;
  titleHeight: number
};

const YAxis = React.forwardRef<SVGSVGElement, YAxisProps>(({ yTicks, width, height, maxY, minY, prefix, suffix, title, tickColor, tickWidth, titleHeight }, ref) => {
  const tickArray = new Array(yTicks + 2).fill(null);

  return (
    <svg ref={ref} className="line-graph-y-axis">
      {tickArray
        .map((j, i) => {
          return {
            x: width - 18,
            y: (titleHeight + (i * height) / (yTicks + 1)) + (i === tickArray.length - 1 ? -1.05 : i === 0 ? 1.05 : 0),
            value: Math.floor(maxY - (i * ((maxY - minY) / (yTicks + 1)))),
          };
        })
        .map((tick, i) => {
          return (
            <React.Fragment key={"f" + i}>
              <text key={"k" + i} x={tick.x} y={tick.y} alignmentBaseline="middle" dominantBaseline="middle" textAnchor="end">
                {(prefix ? prefix : "") + tick.value + (suffix ? suffix : "")}
              </text>
              <path key={"p" + i} stroke={tickColor} strokeWidth={tickWidth} fill="transparent" d={"M" + width + " " + tick.y + " h-10"} />
            </React.Fragment>
          );
        })}
      {title ? (
        <text
          transform={"translate(" + (width - 80) + "," + (titleHeight + (height / 2)) + ") rotate(270)"}
          alignmentBaseline="middle"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {title}
        </text>
      ) : null}
    </svg>
  );
})

YAxis.displayName = "YAxis";

export { YAxis };
