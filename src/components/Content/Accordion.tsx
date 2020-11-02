import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import "../../styles/accordion.sass";
import "../../styles/utility-classes.sass"

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
    <div className="accordion">
      {items.map((item, i) => {
        return (
          <div className="accordian-item" key={item.label}>
            <div
              className={
                "accordion-item-control" +
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
              <FaAngleRight className={expanded.includes(i) ? "open" : ""} />
              <div className="accordion-item-label">{item.label}</div>
            </div>
            <div
              className={
                "accordion-item-box" + (expanded.includes(i) ? " open" : "")
              }
            >
              <div className="accordion-item-contents">{item.contents}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.displayName = "Accordion";

export { Accordion };
