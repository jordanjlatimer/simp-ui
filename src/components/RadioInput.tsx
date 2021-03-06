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
  ...override,
});

const $option = (override?: CSSObject): CSSObject => ({
  display: "flex",
  alignItems: "center",
  height: "fit-content",
  padding: 10,
  cursor: "pointer",
  transition: "all 200ms, z-index 0ms",
  ...override,
});

const $optionLabel = (override?: CSSObject): CSSObject => ({
  display: "block",
  height: "fit-content",
  ...override,
});

const $controlOuter = (override?: CSSObject): CSSObject => ({
  display: "flex",
  width: 20,
  height: 20,
  borderRadius: "50%",
  border: "2px solid black",
  alignItems: "center",
  justifyContent: "center",
  ...override,
});

const $controlInner = (active?: boolean, override?: CSSObject): CSSObject => ({
  display: "block",
  width: "60%",
  height: "60%",
  borderRadius: "50%",
  transition: "all 200ms",
  ...(active && {
    backgroundColor: "black",
  }),
  ...override,
});

type RadioInputProps = {
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
    option?: CSSObject;
    optionLabel?: CSSObject;
    controlOuter?: CSSObject;
    controlInner?: (active?: boolean) => CSSObject;
  };
};

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  options,
  onChange,
  styles,
}: RadioInputProps) => {
  const [active, setActive] = React.useState<string | undefined>(undefined);

  return (
    <div css={$wrapper(styles?.wrapper)}>
      {label && <div css={$label(styles?.label)}>{label}</div>}
      <div css={$optionsWrapper(styles?.optionsWrapper)}>
        {options?.map(option => {
          const isActive = option.value === active;
          return (
            <div
              css={$option(styles?.option)}
              onClick={() => (setActive(option.value), onChange && onChange(option.value))}
            >
              <div css={$controlOuter(styles?.controlOuter)}>
                <div css={$controlInner(isActive, styles?.controlInner?.(isActive))} />
              </div>
              <div css={$optionLabel(styles?.optionLabel)}>{option.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
