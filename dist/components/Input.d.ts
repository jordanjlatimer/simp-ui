import * as React from "react";
import "../styles/input.sass";
declare type InputProps = {
    initialValue?: string;
    changeValidation?: (value: string) => boolean;
    onChange?: (value: string) => void;
    valueValidation?: (value: string) => {
        invalid: boolean;
        message: string;
    };
    label?: string;
    valueMask?: (value: string) => string;
    password?: boolean;
    placeholder?: string;
    prefix?: string;
    suffix?: string;
    width?: "short" | "medium" | "long";
};
export declare const Input: React.FC<InputProps>;
export {};
