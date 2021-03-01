import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type SegmentedControlProps = {
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
        option?: (active?: boolean) => CSSObject;
    };
};
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export {};
