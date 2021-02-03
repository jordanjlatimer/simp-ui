import * as React from "react";
const TableHeader = ({ children }) => {
    return (React.createElement("thead", null,
        React.createElement("tr", null, children)));
};
TableHeader.displayName = "TableHeader";
export { TableHeader };
