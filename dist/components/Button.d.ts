import * as React from "react";
import "../styles/button.sass";
declare type ButtonProps = {
    text: string;
    color?: "green" | "red" | "blue";
    icon?: React.ReactNode;
    marginRight?: boolean;
    floatRight?: boolean;
    onClick?: () => void;
};
export declare const Button: React.FC<ButtonProps>;
export {};
