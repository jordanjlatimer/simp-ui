import * as React from "react";

type TitleProps = {
  x: number;
  width: number;
  height: number;
  title: string;
};

export const Title = React.forwardRef<SVGSVGElement, TitleProps>(({ x, width, height, title}, ref) => {
  return (
    <svg x={x} ref={ref} className="line-graph-title">
      <text x={width / 2} y={height / 2} textAnchor="middle" alignmentBaseline="middle" dominantBaseline="middle" style={{ fontSize: "150%"}}>
        {title}
      </text>
    </svg>
  );
})
