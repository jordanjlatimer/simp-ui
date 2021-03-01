import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type option = {
    value: string;
    label: string;
};
declare type DropdownProps = {
    label?: string;
    multiple?: boolean;
    placeholder?: string;
    options?: option[];
    disabled?: boolean;
    value?: option[] | option;
    styles?: {
        wrapper?: (disabled?: boolean) => CSSObject;
        label?: CSSObject;
        control?: CSSObject;
        controlItem?: (multiple?: boolean) => CSSObject;
        controlIcon?: (open?: boolean) => CSSObject;
        menu?: (open?: boolean) => CSSObject;
        menuItem?: (selected?: boolean) => CSSObject;
    };
    onChange?: (value: {
        value: string;
        label: string;
    }) => void;
};
export declare const Dropdown: React.FC<DropdownProps>;
export {};
