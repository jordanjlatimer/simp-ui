import * as React from "react";
import "../../styles/container.sass";
declare type ContainerProps = {
    raised?: boolean;
    bordered?: boolean;
    margined?: boolean;
    clickable?: boolean;
    stretchX?: boolean;
    flex?: boolean;
    padded?: boolean;
    children?: React.ReactNode;
    column?: boolean;
    header?: string;
    inverted?: boolean;
};
declare const Container: React.FC<ContainerProps>;
export { Container };
