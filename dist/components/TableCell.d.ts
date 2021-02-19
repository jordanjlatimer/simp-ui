import * as React from "react";
import "../styles/table-cell.sass";
declare type TableCellProps = {
    group?: "positive" | "negative" | "total";
    indent?: number;
    colspan?: number;
    header?: boolean;
    clickable?: boolean;
    padded?: boolean;
    align?: "left" | "center" | "right";
    onClick?: () => void;
};
export declare const TableCell: React.FC<TableCellProps>;
export {};
