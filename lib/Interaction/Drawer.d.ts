import * as React from "react";
import "../styles/drawer.sass";
declare type DrawerProps = {
    open: boolean;
    position?: "top" | "bottom" | "right" | "left";
    callback: () => void;
    children: React.ReactNode;
};
declare const Drawer: React.FC<DrawerProps>;
export { Drawer };
