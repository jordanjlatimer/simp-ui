import * as React from "react";
import "./accordion.sass";
import { RiArrowRightSLine } from "@meronex/icons/ri"

type AccordionProps = {
  items: { label: string; contents: string }[];
  multiple?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = React.useState([] as number[]);

  return (
    <div>
      {items.map((item, i) => {
        return (
            <div>
              <div
                className={
                  "accordion-control" +
                  (i === 0 ? " first" : "") +
                  (i === items.length - 1 ? " last" : "")
                }
                onClick={() => {
                  multiple
                    ? expanded.includes(i)
                      ? setExpanded(expanded.filter((value) => value !== i))
                      : setExpanded([...expanded, i])
                    : expanded.includes(i)
                    ? setExpanded([])
                    : setExpanded([i]);
                }}
              >
                <RiArrowRightSLine className={"accordion-icon" + (expanded.includes(i) ? " open" : "")}/>
                <div className="accordion-label">{item.label}</div>
              </div>
              <div className={"accordion-contents" + (expanded.includes(i) ? " open" : "")}>
                <div className="accordion-contents-inner">{item.contents}</div>
              </div>
            </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = "Accordion";

export { Accordion };
