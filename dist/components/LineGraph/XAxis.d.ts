import * as React from "react";
declare type XAxisProps = {
    x: number;
    y: number;
    xTicks: number;
    width: number;
    height: number;
    tickLabels: (number | string)[];
    title?: string;
    tickColor: string;
    tickWidth: number;
    yAxisWidth: number;
};
export declare const XAxis: React.ForwardRefExoticComponent<XAxisProps & React.RefAttributes<SVGSVGElement>>;
export {};
