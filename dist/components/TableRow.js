import * as React from "react";
import "../styles/table-row.sass";
export const TableRow = ({ bold, group, children }) => (React.createElement("tr", { className: "table-row" + (bold ? " bold" : "") + (group ? " " + group : "") }, children));
