import * as React from "react";
import "../../styles/line-graph.sass";
declare type LineGraphProps = {
    borderColor?: string;
    borderWidth?: number;
    gridLineColor?: string;
    gridLineWidth?: number;
    gridLineDash?: string;
    legend?: boolean;
    maxY?: number;
    minY?: number;
    title?: string;
    xGridLines?: boolean;
    xAxisTitle?: string;
    yGridLines?: boolean;
    yAxisTitle?: string;
    yTicks?: number;
    yPrefix?: string;
    ySuffix?: string;
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
};
declare const LineGraph: React.FC<LineGraphProps>;
export { LineGraph };
