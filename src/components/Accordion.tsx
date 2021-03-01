import { CSSObject } from "@emotion/react";
import * as React from "react";
import { AngleIcon } from "./icons/AngleIcon";

const $control = (override?: CSSObject): CSSObject => ({
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  backgroundColor: "lightgray",
  transition: "all 200ms",
  zIndex: 1,
  ":hover": {
    boxShadow: "2px 2px 6px 0px #00000080",
  },
  padding: 12,
  ...override,
});

const $controlIcon = (open?: boolean, override?: CSSObject): CSSObject => ({
  transition: "all 200ms",
  ...(open && {
    transform: "rotate(180deg)",
  }),
  ...override,
});

const $contents = (open?: boolean, override?: CSSObject): CSSObject => ({
  transformOrigin: "0% 0%",
  transform: "scaleY(0)",
  height: 0,
  flexBasis: "100%",
  transition: "all 200ms",
  ...(open && {
    padding: 8,
    transform: "scaleY(1)",
    height: "initial",
  }),
  ...override,
});

type AccordionProps = {
  items?: { label: string; contents: string }[];
  multiple?: boolean;
  styles?: {
    control?: CSSObject;
    controlIcon?: (open?: boolean) => CSSObject;
    contents?: (open?: boolean) => CSSObject;
  };
};

export const Accordion: React.FC<AccordionProps> = ({ items, multiple, styles }: AccordionProps) => {
  const [expanded, setExpanded] = React.useState([] as string[]);

  return (
    <>
      {items?.map(item => {
        const open = expanded.indexOf(item.label) >= 0;
        return (
          <>
            <div
              css={$control(styles?.control)}
              onClick={() =>
                setExpanded(
                  multiple
                    ? open
                      ? expanded.filter(value => value !== item.label)
                      : [...expanded, item.label]
                    : open
                    ? []
                    : [item.label]
                )
              }
            >
              {item.label}
              <AngleIcon styles={{svg: $controlIcon(open, styles?.controlIcon?.(open))}}/>
            </div>
            <div css={$contents(open, styles?.contents?.(open))}>{item.contents}</div>
          </>
        );
      })}
    </>
  );
};
