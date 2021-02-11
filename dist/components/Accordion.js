import * as React from "react";
import "../styles/accordion.sass";
export const Accordion = ({ items, multiple }) => {
    const [expanded, setExpanded] = React.useState([]);
    return (React.createElement("div", null, items.map(item => (React.createElement("div", null,
        React.createElement("div", { className: "accordion-control", onClick: () => setExpanded(multiple
                ? expanded.indexOf(item.label) >= 0
                    ? expanded.filter(value => value !== item.label)
                    : [...expanded, item.label]
                : expanded.indexOf(item.label) >= 0
                    ? []
                    : [item.label]) },
            React.createElement("div", { className: "accordion-label" }, item.label)),
        React.createElement("div", { className: "accordion-contents" + (expanded.indexOf(item.label) >= 0 ? " open" : "") },
            React.createElement("div", { className: "accordion-contents-inner" }, item.contents)))))));
};
