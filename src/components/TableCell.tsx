import * as React from "react";
import "../styles/table-cell.sass";

type TableCellProps = {
  group?: "positive" | "negative" | "total";
  indent?: number;
  colspan?: number;
  header?: boolean;
  clickable?: boolean;
  align?: "left" | "center" | "right";
  onClick?: () => void;
};

export const TableCell: React.FC<TableCellProps> = ({
  group,
  indent,
  colspan,
  header,
  clickable,
  align = "left",
  onClick,
  children,
}) => (
  <td
    className={
      "table-cell" +
      (group ? " " + group : "") +
      (header ? "-header" : "") +
      (clickable ? " clickable" : "") +
      (" align-" + align)
    }
    colSpan={colspan}
    onClick={onClick ? () => onClick() : undefined}
    style={indent ? { paddingLeft: indent * 30 + "px" } : undefined}
  >
    {children}
  </td>
);
