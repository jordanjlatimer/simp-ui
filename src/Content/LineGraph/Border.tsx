import * as React from "react";

type BorderProps = {
  graphHeight: number;
  graphWidth: number;
  color: string;
  width: number;
};

const Border: React.FC<BorderProps> = ({ graphHeight, graphWidth, color, width }) => {
  const createPath = () => {
    let d = "M" + width / 2 + " " + width / 2 + " h" + (graphWidth - width);
    d += " v" + (graphHeight - width);
    d += " h-" + (graphWidth - width);
    d += " v-" + (graphHeight - width / 2);
    return d;
  };

  return <path fill="transparent" stroke={color} strokeWidth={width} d={createPath()} />;
};

Border.displayName = "Border";

export { Border };
