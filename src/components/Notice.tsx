import * as React from "react";
import * as ReactDOM from "react-dom";
import { CSSObject } from "@emotion/react";

const $wrapper = (visible?: boolean, override?: CSSObject): CSSObject => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  transform: "translateY(-100%)",
  opacity: 0,
  zIndex: -1,
  transition: "all 600ms, z-index 0ms",
  display: "flex",
  justifyContent: "center",
  ...(visible && {
    transform: "translateY(0px)",
    opacity: 1,
  }),
  ...override,
});

const $notice = (override?: CSSObject): CSSObject => ({
  marginTop: 12,
  backgroundColor: "lightgray",
  padding: 20,
  borderRadius: 4,
  boxShadow: "2px 2px 6px 0px #00000080",
  width: "fit-content",
  zIndex: 2,
  ...override,
});

type NoticeProps = {
  linger?: number;
  parent?: Element;
  styles?: {
    wrapper?: (visible?: boolean) => CSSObject;
    notice?: CSSObject;
  };
};

export const Notice: React.FC<NoticeProps> = ({ children, linger = 4000, parent, styles }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
    window.setTimeout(() => setShow(false), linger);
  }, []);

  return ReactDOM.createPortal(
    <div css={$wrapper(show, styles?.wrapper?.(show))}>
      <div css={$notice(styles?.notice)}>{children}</div>
    </div>,
    parent || document.body
  );
};
