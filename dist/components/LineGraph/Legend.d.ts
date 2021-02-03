import * as React from "react";
declare type LegendProps = {
    x: number;
    y: number;
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
    width: number;
    height: number;
};
export declare const Legend: React.ForwardRefExoticComponent<LegendProps & React.RefAttributes<SVGSVGElement>>;
export {};
