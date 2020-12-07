var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from "react";
import "../styles/accordion.sass";
import { RiArrowRightSLine } from "@meronex/icons/ri";
var Accordion = function (_a) {
    var items = _a.items, _b = _a.multiple, multiple = _b === void 0 ? false : _b;
    var _c = React.useState([]), expanded = _c[0], setExpanded = _c[1];
    return (React.createElement("div", null, items.map(function (item, i) {
        return (React.createElement("div", null,
            React.createElement("div", { className: "accordion-control" +
                    (i === 0 ? " first" : "") +
                    (i === items.length - 1 ? " last" : ""), onClick: function () {
                    multiple
                        ? expanded.includes(i)
                            ? setExpanded(expanded.filter(function (value) { return value !== i; }))
                            : setExpanded(__spreadArrays(expanded, [i]))
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
