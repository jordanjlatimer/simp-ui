import * as React from "react";
import "../styles/notice.sass";
declare type NoticeProps = {
    text: string;
    icon?: React.ReactNode;
    linger?: number;
    position?: {
        top?: string;
        right?: string;
        left?: string;
    };
};
export declare const Notice: React.FC<NoticeProps>;
export {};
