import * as React from "react";
import "../styles/table-row.sass";

type TableRowProps = {
  bold?: boolean;
  group?: "total";
};

export const TableRow: React.FC<TableRowProps> = ({ bold, group, children }) => (
  <tr className={"table-row" + (bold ? " bold" : "") + (group ? " " + group : "")}>{children}</tr>
);
