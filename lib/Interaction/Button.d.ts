import * as React from "react";
import "../styles/button.sass";
declare type ButtonProps = {
    label: string;
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;
export { Button };
