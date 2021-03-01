import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type CheckboxProps = {
    label?: string;
    initChecked?: boolean;
    styles?: {
        wrapper?: CSSObject;
        label?: CSSObject;
        outerBox?: CSSObject;
        innerBox?: (checked?: boolean) => CSSObject;
    };
};
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
