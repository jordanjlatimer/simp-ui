import { CSSObject } from "@emotion/react";
import * as React from "react";
declare type TableCellProps = {
    colspan?: number;
    onClick?: () => void;
    styles?: CSSObject;
};
export declare const TableCell: React.FC<TableCellProps>;
export {};
