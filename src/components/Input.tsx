import { CSSObject } from "@emotion/react";
import * as React from "react";

const $wrapper = (override?: CSSObject): CSSObject => ({
  fontSize: 16,
  width: "fit-content",
  position: "relative",
  ...override,
});

const $label = (override?: CSSObject): CSSObject => ({
  marginBottom: 4,
  ...override,
});

const $flag = (visible?: boolean, override?: CSSObject): CSSObject => ({
  position: "absolute",
  top: "calc(100% + 2px)",
  width: "100%",
  opacity: 0,
  zIndex: 0,
  padding: 8,
  transition: "all 200ms, z-index 0ms",
  transform: "scaleY(0)",
  transformOrigin: "0% 0%",
  border: "1px solid black",
  ...(visible && {
    opacity: 1,
    zIndex: 1,
    transform: "scaleY(1)",
  }),
  ...override,
});

const $controlWrapper = (override?: CSSObject): CSSObject => ({
  width: "100%",
  position: "relative",
  ...override,
});

const $control = (override?: CSSObject): CSSObject => ({
  border: "2px solid black",
  padding: 8,
  borderRadius: 2,
  width: "100%",
  fontFamily: "Verdana",
  fontSize: 16,
  transition: "all 200ms, outline 0ms",
  "::placeholder": {
    color: "gray",
  },
  ...override,
});

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  password?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  flagged?: boolean;
  flaggedMessage?: string;
  textArea?: boolean;
  styles?: {
    wrapper?: CSSObject;
    label?: CSSObject;
    flag?: CSSObject;
    control?: CSSObject;
    controlWrapper?: CSSObject;
  };
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  password,
  placeholder,
  readOnly,
  flagged,
  flaggedMessage,
  styles,
  textArea,
}: InputProps) => {
  return (
    <div css={$wrapper(styles?.wrapper)}>
      {label && <div css={$label(styles?.label)}>{label}</div>}
      <div css={$controlWrapper(styles?.controlWrapper)}>
        {textArea ? (
          <textarea
            css={$control(styles?.control)}
            value={value}
            placeholder={placeholder}
            onChange={e => onChange?.(e.target.value)}
            readOnly={readOnly}
          />
        ) : (
          <input
            css={$control(styles?.control)}
            value={value}
            type={password ? "password" : "text"}
            placeholder={placeholder}
            onChange={e => onChange?.(e.target.value)}
            readOnly={readOnly}
          />
        )}
        <div css={$flag(flagged, styles?.flag)}>{flaggedMessage}</div>
      </div>
    </div>
  );
};
