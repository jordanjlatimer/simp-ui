import { CSSObject } from "@emotion/react";
import * as React from "react";

const $tableCell = (override?: CSSObject): CSSObject => ({
  border: "2px solid black",
  padding: 10,
  ...override
});

type TableCellProps = {
  colspan?: number;
  onClick?: () => void;
  styles?: CSSObject;
};

export const TableCell: React.FC<TableCellProps> = ({ colspan, onClick, children, styles }) => (
  <td css={$tableCell(styles)} colSpan={colspan} onClick={onClick ? () => onClick() : undefined}>
    {children}
  </td>
);
