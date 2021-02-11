import * as React from "react";

export const TableHeader: React.FC<{}> = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);
