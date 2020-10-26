import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import "./accordion.sass";

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
      {label ? <h3 className="accordion-label">{label}</h3> : null}
      <div className="accordion-contents">
        {items.map((item, i) => {
          return (
            <div className="accordian-item" key={item.label}>
              <div
                className={
                  "accordion-item-label" +
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
                <h4>{item.label}</h4>
              </div>
              <div
                className={
                  "accordion-item-box" + (expanded.includes(i) ? " open" : "")
                }
              >
                <p className="accordion-item-contents">{item.contents}</p>
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
