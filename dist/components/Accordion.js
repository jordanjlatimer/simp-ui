import * as React from "react";
import "../styles/accordion.sass";
export const Accordion = ({ items, multiple = false }) => {
    const [expanded, setExpanded] = React.useState([]);
    return (React.createElement("div", null, items.map((item, i) => {
        return (React.createElement("div", null,
            React.createElement("div", { className: "accordion-control" + (i === 0 ? " first" : "") + (i === items.length - 1 ? " last" : ""), onClick: () => {
                    multiple
                        ? expanded.indexOf(i) !== -1
                            ? setExpanded(expanded.filter(value => value !== i))
                            : setExpanded([...expanded, i])
                        : expanded.indexOf(i) !== -1
                            ? setExpanded([])
                            : setExpanded([i]);
                } },
                React.createElement("div", { className: "accordion-label" }, item.label)),
            React.createElement("div", { className: "accordion-contents" + (expanded.indexOf(i) !== -1 ? " open" : "") },
                React.createElement("div", { className: "accordion-contents-inner" }, item.contents))));
    })));
};
