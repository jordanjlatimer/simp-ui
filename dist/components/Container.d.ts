import * as React from "react";
import "../styles/container.sass";
declare type ContainerProps = {
    raised?: boolean;
    bordered?: boolean;
    margined?: boolean;
    clickable?: boolean;
    stretchX?: boolean;
    flex?: boolean;
    wrap?: boolean;
    padded?: boolean;
    children?: React.ReactNode;
    column?: boolean;
    header?: string;
    inverted?: boolean;
};
export declare const Container: React.FC<ContainerProps>;
export {};
