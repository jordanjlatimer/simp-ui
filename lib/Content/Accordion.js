"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var React = require("react");
var fa_1 = require("react-icons/fa");
require("../styles/accordion.sass");
var Accordion = function (_a) {
    var label = _a.label, items = _a.items, _b = _a.multiple, multiple = _b === void 0 ? false : _b;
    var _c = React.useState([]), expanded = _c[0], setExpanded = _c[1];
    return (React.createElement("div", { className: "accordion" },
        label ? React.createElement("h3", { className: "accordion-label" }, label) : null,
        React.createElement("div", { className: "accordion-contents" }, items.map(function (item, i) {
            return (React.createElement("div", { className: "accordian-item", key: item.label },
                React.createElement("div", { className: "accordion-item-label" +
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
                    React.createElement(fa_1.FaAngleRight, { className: expanded.includes(i) ? "open" : "" }),
                    React.createElement("h4", null, item.label)),
                React.createElement("div", { className: "accordion-item-box" + (expanded.includes(i) ? " open" : "") },
                    React.createElement("p", { className: "accordion-item-contents" }, item.contents))));
        }))));
};
exports.Accordion = Accordion;
Accordion.displayName = "Accordion";
//# sourceMappingURL=Accordion.js.map