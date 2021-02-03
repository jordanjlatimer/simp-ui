import * as React from "react";
declare type YAxisProps = {
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
    titleHeight: number;
};
export declare const YAxis: React.ForwardRefExoticComponent<YAxisProps & React.RefAttributes<SVGSVGElement>>;
export {};
