import * as React from "react";
import "../styles/table-row.sass";

type TableRowProps = {
  bold?: boolean;
};

export const TableRow: React.FC<TableRowProps> = ({ bold, children }) => {
  return <tr className={bold ? "table-row-bold" : ""}>{children}</tr>;
};
