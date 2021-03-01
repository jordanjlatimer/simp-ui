import { CSSObject } from "@emotion/react";
import * as React from "react";

type TableBodyProps = {
  styles?: CSSObject;
};

export const TableBody: React.FC<TableBodyProps> = ({ styles, children }) => <tbody css={styles}>{children}</tbody>;
