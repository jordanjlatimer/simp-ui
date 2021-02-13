import * as React from "react";
import "../styles/table-cell.sass";
export const TableCell = ({ group, indent, colspan, header, clickable, align = "left", onClick, children, }) => (React.createElement("td", { className: "table-cell" +
        (group ? " " + group : "") +
        (header ? "-header" : "") +
        (clickable ? " clickable" : "") +
        (" align-" + align), colSpan: colspan, onClick: onClick ? () => onClick() : undefined, style: indent ? { paddingLeft: indent * 30 + "px" } : undefined }, children));
