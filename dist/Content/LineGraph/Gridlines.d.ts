import * as React from "react";
declare type GridlinesProps = {
    graphHeight: number;
    graphWidth: number;
    yLines: number;
    xLines: number;
    color: string;
    width: number;
    dash: string;
};
declare const Gridlines: React.FC<GridlinesProps>;
export { Gridlines };
