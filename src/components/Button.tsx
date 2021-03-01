import * as React from "react";
import { CSSObject } from "@emotion/react";

const $button = (disabled?: boolean, override?: CSSObject): CSSObject => ({
  padding: 12,
  borderRadius: 4,
  boxShadow: "2px 2px 6px 0px #00000080",
  transition: "all 200ms, zIndex 0ms",
  cursor: "pointer",
  display: "flex",
  alignContent: "center",
  width: "fit-content",
  backgroundColor: "lightgray",
  ":hover": {
    boxShadow: "0px 2px 4px 2px #00000080",
    transform: "translate(-1px, -1px)",
  },
  svg: {
    marginRight: 8,
  },
  ...(disabled && {
    opacity: 0.5,
    pointerEvents: "none",
  }),
  ...override,
});

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  styles?: (disabled?: boolean) => CSSObject;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, icon, disabled, styles, onClick }) => (
  <button css={$button(disabled, styles?.(disabled))} onClick={onClick}>
    {icon}
    {text}
  </button>
);
