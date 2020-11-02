import * as React from "react";
import { FaAngleRight } from "react-icons/fa";
import "../../styles/accordion.sass";
import "../../styles/utility-classes.sass";
const Accordion = ({ items, multiple = false, }) => {
    const [expanded, setExpanded] = React.useState([]);
    return (React.createElement("div", { className: "accordion m8" }, items.map((item, i) => {
        return (React.createElement("div", { className: "accordian-item", key: item.label },
            React.createElement("div", { className: "accordion-item-control" +
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
                React.createElement(FaAngleRight, { className: "mr12" + (expanded.includes(i) ? " open" : "") }),
                React.createElement("div", { className: "accordion-item-label" }, item.label)),
            React.createElement("div", { className: "accordion-item-box" + (expanded.includes(i) ? " open" : "") },
                React.createElement("div", { className: "accordion-item-contents ml16" }, item.contents))));
    })));
};
Accordion.displayName = "Accordion";
export { Accordion };
