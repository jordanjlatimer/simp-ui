import { CSSObject } from "@emotion/react";
import * as React from "react";

type TableRowProps = {
  styles?: CSSObject;
};

export const TableRow: React.FC<TableRowProps> = ({ styles, children }) => <tr css={styles}>{children}</tr>;
