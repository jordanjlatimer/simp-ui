import * as React from "react";
import { CSSObject } from "@emotion/react";
declare type ButtonProps = {
    text: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    styles?: (disabled?: boolean) => CSSObject;
    onClick?: () => void;
};
export declare const Button: React.FC<ButtonProps>;
export {};
