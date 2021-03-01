import { CSSObject } from "@emotion/react";
import * as React from "react";
import * as ReactDOM from "react-dom";

const $backdrop = (open?: boolean, override?: CSSObject): CSSObject => ({
  position: "absolute",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "#00000080",
  backdropFilter: "blur(10px)",
  transition: "all 200ms, z-index 0ms 200ms",
  opacity: 0,
  zIndex: -1,
  ...(open && {
    opacity: 1,
    zIndex: 2,
    transition: "all 200ms, z-index 0ms 0ms",
  }),
  ...override,
});

const $contents = (override?: CSSObject): CSSObject => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  padding: 20,
  borderRadius: 2,
  ...override,
});

type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  parent?: Element;
  styles?: {
    backdrop?: (open?: boolean) => CSSObject;
    contents?: CSSObject;
  };
};

export const Modal: React.FC<ModalProps> = ({ open = false, children, parent, styles }: ModalProps) => {
  return ReactDOM.createPortal(
    <div css={$backdrop(open, styles?.backdrop?.(open))}>
      <div css={$contents(styles?.contents)}>{children}</div>
    </div>,
    parent || document.body
  );
};
