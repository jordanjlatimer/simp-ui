import { CSSObject } from "@emotion/react";
import * as React from "react";

type TableHeaderProps = {
  styles?: CSSObject;
};

export const TableHeader: React.FC<TableHeaderProps> = ({ styles, children }) => <thead css={styles}>{children}</thead>;
