import { CSSObject } from "@emotion/react";
import * as React from "react";

const $wrapper = (override?: CSSObject): CSSObject => ({
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  cursor: "pointer",
  ...override,
});

const $label = (override?: CSSObject): CSSObject => ({
  display: "block",
  height: "fit-content",
  marginLeft: 12,
  ...override,
});

const $outerBox = (override?: CSSObject): CSSObject => ({
  display: "flex",
  width: 20,
  height: 20,
  borderRadius: "15%",
  border: "2px solid black",
  alignItems: "center",
  justifyContent: "center",
  ...override,
});

const $innnerBox = (checked?: boolean, override?: CSSObject): CSSObject => ({
  display: "block",
  width: "60%",
  height: "60%",
  borderRadius: "15%",
  transition: "all 200ms",
  ...(checked && {
    backgroundColor: "lightgray",
  }),
  ...override,
});

type CheckboxProps = {
  label?: string;
  initChecked?: boolean;
  styles?: {
    wrapper?: CSSObject;
    label?: CSSObject;
    outerBox?: CSSObject;
    innerBox?: (checked?: boolean) => CSSObject;
  };
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, initChecked, styles }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(initChecked);

  return (
    <div css={$wrapper(styles?.wrapper)} onClick={() => setChecked(!checked)}>
      <div css={$outerBox(styles?.outerBox)}>
        <div css={$innnerBox(checked, styles?.innerBox?.(checked))} />
      </div>
      <div css={$label(styles?.label)}>{label}</div>
    </div>
  );
};
