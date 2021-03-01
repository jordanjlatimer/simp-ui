import { CSSObject, keyframes } from "@emotion/react";
import * as React from "react";

const $wrapper = (override?: CSSObject): CSSObject => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  ...override,
});

const $animation = keyframes({
  "0%": {
    transform: "scale(0.5, 0.5)",
  },
  "50%": {
    transform: "scale(1.5, 1.5)",
  },
  "100%": {
    transform: "scale(0.5, 0.5)",
  },
});

const $circle = (delayLevel: number, override?: CSSObject): CSSObject => ({
  backgroundColor: "black",
  opacity: 0.1 * delayLevel,
  animation: `${$animation} 1000ms ease-in-out ${delayLevel * 200}ms infinite`,
  height: "100%",
  width: "100%",
  ...override
});

type LoaderProps = {
  styles?: {
    wrapper?: CSSObject;
    circle?: CSSObject;
  };
};

export const Loader: React.FC<LoaderProps> = ({ styles }) => {
  return (
    <div css={$wrapper(styles?.wrapper)}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
        <div css={$circle(value, styles?.circle)} />
      ))}
    </div>
  );
};
