import * as React from "react";
import "../styles/table-cell.sass";
const TableCell = ({ group, indent, colspan, header, clickable, onClick, children }) => {
    return (React.createElement("td", { className: "table-cell" +
            (group ? " " + group : "") +
            (indent ? " indent-" + indent : "") +
            (header ? "-header" : "") +
            (clickable ? " clickable" : ""), colSpan: colspan, onClick: onClick ? () => onClick() : undefined }, children));
};
TableCell.displayName = "TableCell";
export { TableCell };
