import * as React from "react";
import "../styles/table-cell.sass";
declare type TableCellProps = {
    group?: "positive" | "negative" | "total";
    indent?: 1 | 2;
    colspan?: number;
    header?: boolean;
    clickable?: boolean;
    align?: "left" | "center" | "right";
    onClick?: () => void;
};
declare const TableCell: React.FC<TableCellProps>;
export { TableCell };
