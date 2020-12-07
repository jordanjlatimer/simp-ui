import * as React from "react";
import "../styles/modal.sass";
declare type ModalProps = {
    open: boolean;
    callback: () => void;
    children?: React.ReactNode;
};
declare const Modal: React.FC<ModalProps>;
export { Modal };
