import { CSSObject } from "@emotion/react";
import * as React from "react";

const $divider = (override?: CSSObject): CSSObject => ({
  height: 2,
  border: 0,
  margin: "16px 0px",
  ...override,
});

type DividerProps = {
  styles?: CSSObject;
};

export const Divider: React.FC<DividerProps> = ({ styles }) => <hr css={$divider(styles)} />;
