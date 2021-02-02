import * as React from "react";
import "../styles/accordion.sass";

type AccordionProps = {
  items: { label: string; contents: string }[];
  multiple?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
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
                    ? expanded.indexOf(i) !== -1
                      ? setExpanded(expanded.filter((value) => value !== i))
                      : setExpanded([...expanded, i])
                    : expanded.indexOf(i) !== -1
                    ? setExpanded([])
                    : setExpanded([i]);
                }}
              >
                <div className="accordion-label">{item.label}</div>
              </div>
              <div className={"accordion-contents" + (expanded.indexOf(i) !== -1 ? " open" : "")}>
                <div className="accordion-contents-inner">{item.contents}</div>
              </div>
            </div>
        );
      })}
    </div>
  );
};
