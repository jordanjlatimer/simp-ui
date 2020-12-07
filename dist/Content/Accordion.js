import * as React from "react";
import "../styles/accordion.sass";
import { RiArrowRightSLine } from "@meronex/icons/ri";
const Accordion = ({ items, multiple = false, }) => {
    const [expanded, setExpanded] = React.useState([]);
    return (React.createElement("div", null, items.map((item, i) => {
        return (React.createElement("div", null,
            React.createElement("div", { className: "accordion-control" +
                    (i === 0 ? " first" : "") +
                    (i === items.length - 1 ? " last" : ""), onClick: () => {
                    multiple
                        ? expanded.includes(i)
                            ? setExpanded(expanded.filter((value) => value !== i))
                            : setExpanded([...expanded, i])
                        : expanded.includes(i)
                            ? setExpanded([])
                            : setExpanded([i]);
                } },
                React.createElement(RiArrowRightSLine, { className: "accordion-icon" + (expanded.includes(i) ? " open" : "") }),
                React.createElement("div", { className: "accordion-label" }, item.label)),
            React.createElement("div", { className: "accordion-contents" + (expanded.includes(i) ? " open" : "") },
                React.createElement("div", { className: "accordion-contents-inner" }, item.contents))));
    })));
};
Accordion.displayName = "Accordion";
export { Accordion };
