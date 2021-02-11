import * as React from "react";
import "../styles/table-row.sass";
export const TableRow = ({ bold, children }) => (React.createElement("tr", { className: bold ? "table-row-bold" : "" }, children));
