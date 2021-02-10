import * as React from "react";
import "../styles/table.sass";
export const Table = ({ children }) => {
    return React.createElement("table", { className: "table" }, children);
};
