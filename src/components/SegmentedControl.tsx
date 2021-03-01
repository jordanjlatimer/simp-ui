import { CSSObject } from "@emotion/react";
import * as React from "react";

const $wrapper = (override?: CSSObject): CSSObject => ({
  width: "fit-content",
  ...override,
});

const $label = (override?: CSSObject): CSSObject => ({
  marginBottom: 4,
  ...override,
});

const $optionsWrapper = (override?: CSSObject): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 2,
  width: "fit-content",
  transition: "all 200ms",
  border: "2px solid black",
  ...override,
});

const $option = (active?: boolean, override?: CSSObject): CSSObject => ({
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  padding: 10,
  cursor: "pointer",
  transition: "all 200ms, z-index 0ms",
  textAlign: "center",
  ":hover": {
    backgroundColor: "lightgray",
    boxShadow: "2px 2px 6px 0px #00000080",
    zIndex: 2,
  },
  ...(active && {
    backgroundColor: "gray",
  }),
  ...override,
});

type SegmentedControlProps = {
  label?: string;
  options?: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
  styles?: {
    wrapper?: CSSObject;
    label?: CSSObject;
    optionsWrapper?: CSSObject;
    option?: (active?: boolean) => CSSObject;
  };
};

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ label, options, onChange, styles }) => {
  const [active, setActive] = React.useState<string | undefined>(undefined);

  return (
    <div css={$wrapper(styles?.wrapper)}>
      {label && <div css={$label(styles?.label)}>{label}</div>}
      <div css={$optionsWrapper(styles?.optionsWrapper)}>
        {options?.map(option => {
          return (
            <div
              css={$option(option.value === active)}
              onClick={() => (setActive(option.value), onChange && onChange(option.value))}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
