import * as React from "react";
import { CSSObject } from "@emotion/react";
declare type NoticeProps = {
    linger?: number;
    parent?: Element;
    styles?: {
        wrapper?: (visible?: boolean) => CSSObject;
        notice?: CSSObject;
    };
};
export declare const Notice: React.FC<NoticeProps>;
export {};
