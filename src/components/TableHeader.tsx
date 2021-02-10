import * as React from "react";

export const TableHeader: React.FC<{}> = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};
