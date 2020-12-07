import * as React from "react";
import "../styles/dropdown.sass";
declare type DropdownProps = {
    label: string;
    multiple?: boolean;
    placeholder?: string;
    options: {
        value: string;
        label: string;
    }[];
};
declare const Dropdown: React.FC<DropdownProps>;
export { Dropdown };
