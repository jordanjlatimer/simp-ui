import * as React from "react";
export const TableHeader = ({ children }) => {
    return (React.createElement("thead", null,
        React.createElement("tr", null, children)));
};
