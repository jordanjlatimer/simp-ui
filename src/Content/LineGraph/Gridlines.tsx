import * as React from "react";

type GridlinesProps = {
  graphHeight: number;
  graphWidth: number;
  yLines: number;
  xLines: number;
  color: string;
  width: number;
  dash: string;
};

export const Gridlines: React.FC<GridlinesProps> = ({
  graphHeight,
  graphWidth,
  yLines,
  xLines,
  color,
  width,
  dash,
}) => {
  const createPath = () => {
    const hSpacing = graphWidth / xLines;
    const vSpacing = graphHeight / (yLines + 1);
    let d = "";
    for (let i = 1; i <= yLines; i++) {
      d += " M0 " + (vSpacing * i).toFixed(2) + " h" + graphWidth;
    }
    for (let i = 1; i <= xLines; i++) {
      d += " M" + (hSpacing * i).toFixed(2) + " 0" + " v" + graphHeight;
    }
    return d;
  };

  return <path fill="transparent" stroke={color} strokeWidth={width} strokeDasharray={dash} d={createPath()} />;
};
