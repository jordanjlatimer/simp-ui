import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import "../../styles/accordion.sass";

type AccordionProps = {
  label?: string;
  items: { label: string; contents: string }[];
  multiple?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({
  label,
  items,
  multiple = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = React.useState([] as number[]);

  return (
    <div className="accordion">
      {label ? <div className="accordion-label">{label}</div> : null}
      <div className="accordion-contents">
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
    </div>
  );
};

Accordion.displayName = "Accordion";

export { Accordion };
