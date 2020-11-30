import * as React from "react";

type AxesProps = {
  graphHeight: number;
  graphWidth: number;
  color: string;
  width: number;
  yTicks: number;
  xTicks: number;
};

const Axes: React.FC<AxesProps> = ({ graphHeight, graphWidth, color, width, xTicks, yTicks }) => {
  const createPath = () => {
    let d = "M0 0 v" + graphHeight + " h" + graphWidth + " v-" + graphHeight + " h-" + graphWidth;
    const hSpacing = graphWidth / xTicks;
    const vSpacing = graphHeight / (yTicks + 1);
    for (let i = 0; i <= yTicks; i++) {
      d += " M0 " + (graphHeight - vSpacing * i) + " h-10";
    }
    for (let i = 0; i <= xTicks; i++) {
      d += " M" + hSpacing * i + " " + graphHeight + " v10";
    }
    return d;
  };

  return <path fill="transparent" stroke={color} strokeWidth={width} d={createPath()} />;
};

Axes.displayName = "Axes";

export { Axes };
