import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type RadioInputProps = {
    label?: string;
    options?: {
        label: string;
        value: string;
    }[];
    onChange?: (value: string) => void;
    styles?: {
        wrapper?: CSSObject;
        label?: CSSObject;
        optionsWrapper?: CSSObject;
        option?: CSSObject;
        optionLabel?: CSSObject;
        controlOuter?: CSSObject;
        controlInner?: (active?: boolean) => CSSObject;
    };
};
export declare const RadioInput: React.FC<RadioInputProps>;
export {};
