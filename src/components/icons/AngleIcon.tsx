import { CSSObject } from "@emotion/react";
import * as React from "react";

const $svg = (override?: CSSObject): CSSObject => ({
  width: 12,
  height: 12,
  ...override
})

const $path = (override?: CSSObject): CSSObject => ({
  stroke: "black",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "10",
  fill: "none",
  ...override
});

interface AngleIconProps {
  styles?: {
    svg?: CSSObject,
    path?: CSSObject
  }
}

export const AngleIcon: React.FC<AngleIconProps> = ({ styles }) => {
  return (
    <svg viewBox="0 0 72.7 52.3" xmlns="http://www.w3.org/2000/svg" css={$svg(styles?.svg)}>
      <path d="M4.67 5.02l31.8 42.3 31.7-42.3" css={$path(styles?.path)} />
    </svg>
  );
};
