import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type DrawerProps = {
    open: boolean;
    callback?: () => void;
    children?: React.ReactNode;
    styles?: (open?: boolean) => CSSObject;
};
export declare const Drawer: React.FC<DrawerProps>;
export {};
