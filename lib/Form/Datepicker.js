"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Datepicker = void 0;
var React = require("react");
require("../styles/datepicker.sass");
var fa_1 = require("react-icons/fa");
var Datepicker = function (_a) {
    var label = _a.label, placeholder = _a.placeholder;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(0), day = _c[0], setDay = _c[1];
    var _d = React.useState(new Date().getMonth()), month = _d[0], setMonth = _d[1];
    var _e = React.useState(new Date().getFullYear()), year = _e[0], setYear = _e[1];
    var picker = React.useRef(null);
    React.useEffect(function () {
        document.addEventListener("mousedown", toggle);
        return function () {
            document.removeEventListener("mousedown", toggle);
        };
    }, []);
    var toggle = function (e) {
        var current = picker.current;
        if (current && !current.contains(e.target)) {
            setOpen(false);
        }
    };
    var generateTable = function () {
        var monthDays = new Date(year, month + 1, 0).getDate();
        var returnArray = [];
        var _loop_1 = function (i) {
            if (i === 0) {
                var weekDays = new Date(year, month, i).getDay();
                if (weekDays !== 6) {
                    for (var j = 0; j <= weekDays; j++) {
                        returnArray.push(React.createElement("div", { key: j, className: "datepicker-picker-days-day" }));
                    }
                }
            }
            else {
                returnArray.push(React.createElement("div", { onClick: function () { return setDay(i); }, className: "datepicker-picker-days-day" + (day === i ? " active" : "") }, i));
            }
        };
        for (var i = 0; i <= monthDays; i++) {
            _loop_1(i);
        }
        return returnArray;
    };
    return (React.createElement("div", { className: "datepicker" },
        React.createElement("p", { className: "datepicker-label" }, label),
        React.createElement("div", null,
            React.createElement("p", { className: "datepicker-control" + (day > 0 ? " selected" : ""), onClick: function () { return setOpen(true); }, tabIndex: 0 }, day < 1
                ? placeholder
                : new Date(year, month, day).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                })),
            React.createElement("div", { ref: picker, className: "datepicker-picker" + (open ? " open" : "") },
                React.createElement("div", { className: "datepicker-picker-navbar" },
                    React.createElement(fa_1.FaAngleDoubleLeft, { onClick: function () {
                            setDay(0);
                            setYear(year - 1);
                        } }),
                    React.createElement(fa_1.FaAngleLeft, { onClick: function () {
                            return month === 0
                                ? (setDay(0), setMonth(11), setYear(year - 1))
                                : (setDay(0), setMonth(month - 1));
                        } }),
                    React.createElement("div", null, day > 0
                        ? new Date(year, month).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })
                        : new Date(year, month, day).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                            day: "numeric",
                        })),
                    React.createElement(fa_1.FaAngleRight, { onClick: function () {
                            return month === 11
                                ? (setDay(0), setMonth(0), setYear(year + 1))
                                : (setDay(0), setMonth(month + 1));
                        } }),
                    React.createElement(fa_1.FaAngleDoubleRight, { onClick: function () {
                            setDay(0);
                            setYear(year - 1);
                        } })),
                React.createElement("div", { className: "datepicker-picker-days" },
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (label) {
                        return (React.createElement("div", { key: label, className: "datepicker-picker-days-header" }, label));
                    }),
                    generateTable())))));
};
exports.Datepicker = Datepicker;
Datepicker.displayName = "Datepicker";
//# sourceMappingURL=Datepicker.js.map