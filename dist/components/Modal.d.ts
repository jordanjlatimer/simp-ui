import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type ModalProps = {
    open?: boolean;
    children?: React.ReactNode;
    parent?: Element;
    styles?: {
        backdrop?: (open?: boolean) => CSSObject;
        contents?: CSSObject;
    };
};
export declare const Modal: React.FC<ModalProps>;
export {};
