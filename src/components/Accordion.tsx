import * as React from "react";
import "../styles/accordion.sass";

type AccordionProps = {
  items: { label: string; contents: string }[];
  multiple?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({ items, multiple }: AccordionProps) => {
  const [expanded, setExpanded] = React.useState([] as string[]);

  return (
    <div>
      {items.map(item => (
        <div>
          <div
            className="accordion-control"
            onClick={() =>
              setExpanded(
                multiple
                  ? expanded.indexOf(item.label) >= 0
                    ? expanded.filter(value => value !== item.label)
                    : [...expanded, item.label]
                  : expanded.indexOf(item.label) >= 0
                  ? []
                  : [item.label]
              )
            }
          >
            <div className="accordion-label">{item.label}</div>
          </div>
          <div className={"accordion-contents" + (expanded.indexOf(item.label) >= 0 ? " open" : "")}>
            <div className="accordion-contents-inner">{item.contents}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
