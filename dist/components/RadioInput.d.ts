import * as React from "react";
import "../styles/radio-input.sass";
declare type RadioInputProps = {
    label?: string;
    segmented?: boolean;
    horizontal?: boolean;
    options: {
        label: string;
        value: string;
    }[];
    optionLabels?: "left" | "right";
};
export declare const RadioInput: React.FC<RadioInputProps>;
export {};
