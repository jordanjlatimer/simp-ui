import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type AccordionProps = {
    items?: {
        label: string;
        contents: string;
    }[];
    multiple?: boolean;
    styles?: {
        control?: CSSObject;
        controlIcon?: (open?: boolean) => CSSObject;
        contents?: (open?: boolean) => CSSObject;
    };
};
export declare const Accordion: React.FC<AccordionProps>;
export {};
