import * as React from "react";
import "../styles/notice.sass";
declare type NoticeProps = {
    text?: string;
    icon?: React.ReactNode;
    linger?: number;
    parent?: Element;
};
export declare const Notice: React.FC<NoticeProps>;
export {};
