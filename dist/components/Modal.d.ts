import * as React from "react";
import "../styles/modal.sass";
declare type ModalProps = {
    open?: boolean;
    children?: React.ReactNode;
    parent?: Element;
};
export declare const Modal: React.FC<ModalProps>;
export {};
