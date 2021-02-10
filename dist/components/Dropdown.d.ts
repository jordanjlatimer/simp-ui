import * as React from "react";
import "../styles/dropdown.sass";
declare type DropdownProps = {
    label: string;
    multiple?: boolean;
    placeholder?: string;
    options?: {
        value: string;
        label: string;
    }[];
    width?: "short" | "medium" | "long";
    disabled?: boolean;
    onChange?: (value: {
        value: string;
        label: string;
    }) => void;
};
export declare const Dropdown: React.FC<DropdownProps>;
export {};
