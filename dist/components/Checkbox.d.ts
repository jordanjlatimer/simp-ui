import * as React from "react";
import "../styles/checkbox.sass";
declare type CheckboxProps = {
    label?: string;
    initChecked?: boolean;
    labelPosition?: "left" | "right";
};
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
