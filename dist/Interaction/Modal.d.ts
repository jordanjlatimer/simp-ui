import * as React from "react";
import "../styles/modal.sass";
declare type ModalProps = {
    open: boolean;
    children?: React.ReactNode;
    position?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
};
export declare const Modal: React.FC<ModalProps>;
export {};
