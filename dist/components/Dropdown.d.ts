import * as React from "react";
import "../styles/dropdown.sass";
declare type option = {
    value: string;
    label: string;
};
declare type DropdownProps = {
    label?: string;
    multiple?: boolean;
    placeholder?: string;
    options?: option[];
    width?: "short" | "medium" | "long";
    disabled?: boolean;
    onChange?: (value: {
        value: string;
        label: string;
    }) => void;
};
export declare const Dropdown: React.FC<DropdownProps>;
export {};
