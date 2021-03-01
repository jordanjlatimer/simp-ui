import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    password?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    flagged?: boolean;
    flaggedMessage?: string;
    textArea?: boolean;
    styles?: {
        wrapper?: CSSObject;
        label?: CSSObject;
        flag?: CSSObject;
        control?: CSSObject;
        controlWrapper?: CSSObject;
    };
};
export declare const Input: React.FC<InputProps>;
export {};
