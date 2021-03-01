import { CSSObject } from "@emotion/react";
import * as React from "react";

const $drawer = (open?: boolean, override?: CSSObject): CSSObject => ({
  position: "fixed",
  transition: "all 200ms",
  zIndex: 2,
  backgroundColor: "white",
  top: 0,
  left: 0,
  height: "100%",
  transform: "translateX(-100%)",
  ...(open && {
    transform: "translateX(0%)",
    boxShadow: "10px 0px 10px 0px #00000080",
  }),
  ...override,
});

type DrawerProps = {
  open: boolean;
  callback?: () => void;
  children?: React.ReactNode;
  styles?: (open?: boolean) => CSSObject;
};

export const Drawer: React.FC<DrawerProps> = ({ open, children, styles }: DrawerProps) => (
  <div css={$drawer(open, styles?.(open))}>{children}</div>
);
