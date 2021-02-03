import * as React from "react";
const TableRow = ({ children, bold }) => {
    return React.createElement("tr", { className: bold ? "table-row-bold" : "" }, children);
};
TableRow.displayName = "TableRow";
export { TableRow };
