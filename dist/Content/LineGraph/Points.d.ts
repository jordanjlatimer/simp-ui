import * as React from "react";
declare type PointsProps = {
    graphHeight: number;
    graphWidth: number;
    color: string;
    fillColor: string;
    width: number;
    radius: number;
    maxY: number;
    minY: number;
    data: {
        x: number | string;
        y: number;
    }[];
};
declare const Points: React.FC<PointsProps>;
export { Points };
