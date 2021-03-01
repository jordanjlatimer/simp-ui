import { CSSObject } from "@emotion/react";
import * as React from "react";

const $table = (override?: CSSObject): CSSObject => ({
  border: "4px solid black",
  ...override,
});

type TableProps = {
  styles?: CSSObject;
};

export const Table: React.FC<TableProps> = ({ styles, children }) => <table css={$table(styles)}>{children}</table>;
