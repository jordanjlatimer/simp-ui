import * as React from "react";
import "../styles/textarea.sass";
declare type TextAreaProps = {
    initialValue?: string;
    onChange?: (value: string) => void;
    valueValidation?: (value: string) => {
        invalid: boolean;
        message: string;
    };
    label?: string;
    placeholder?: string;
    width?: "short" | "medium" | "long";
    height?: "short" | "medium" | "long";
};
export declare const TextArea: React.FC<TextAreaProps>;
export {};
