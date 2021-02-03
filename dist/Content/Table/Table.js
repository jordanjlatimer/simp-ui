import * as React from "react";
import "../../styles/table.sass";
const Table = ({ children }) => {
    return React.createElement("table", { className: "table" }, children);
};
Table.displayName = "Table";
export { Table };
