import * as React from "react";
declare type LineProps = {
    graphHeight: number;
    graphWidth: number;
    color: string;
    width: number;
    maxY: number;
    minY: number;
    data: {
        x: number | string;
        y: number;
    }[];
};
declare const Line: React.FC<LineProps>;
export { Line };
