import * as React from "react";
import "../styles/menu.sass";
declare type MenuProps = {
    children?: React.ReactNode;
    inverted?: boolean;
    hideable?: boolean;
    startOpen?: boolean;
};
export declare const Menu: React.FC<MenuProps>;
export {};
