import * as React from "react";
import { RiPlayFill, RiRewindFill } from "@meronex/icons/ri";
import "../styles/datepicker.sass";
var Datepicker = function (_a) {
    var label = _a.label, placeholder = _a.placeholder;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(0), day = _c[0], setDay = _c[1];
    var _d = React.useState(new Date().getMonth()), month = _d[0], setMonth = _d[1];
    var _e = React.useState(new Date().getFullYear()), year = _e[0], setYear = _e[1];
    var picker = React.useRef(null);
    var control = React.useRef(null);
    React.useEffect(function () {
        document.addEventListener("mousedown", toggle);
        return function () {
            document.removeEventListener("mousedown", toggle);
        };
    }, [open]);
    var toggle = function (e) {
        var _a, _b;
        if (!open && ((_a = control.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setOpen(true);
        }
        else if (open && !((_b = picker.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
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
                        returnArray.push(React.createElement("div", { key: j + "p", className: "datepicker-picker-days-day" }));
                    }
                }
            }
            else {
                returnArray.push(React.createElement("div", { key: i + "d", onClick: function () { return setDay(i); }, className: "datepicker-picker-days-day" + (day === i ? " active" : "") }, i));
            }
        };
        for (var i = 0; i <= monthDays; i++) {
            _loop_1(i);
        }
        return returnArray;
    };
    return (React.createElement("div", { className: "datepicker" },
        React.createElement("div", { className: "datepicker-label" }, label),
        React.createElement("div", null,
            React.createElement("div", { className: "datepicker-control" + (day > 0 ? " selected" : ""), tabIndex: 0, ref: control }, day < 1
                ? placeholder
                : new Date(year, month, day).toLocaleString("default", { month: "long", year: "numeric", day: "numeric", })),
            React.createElement("div", { ref: picker, className: "datepicker-picker" + (open ? " open" : "") },
                React.createElement("div", { className: "datepicker-picker-navbar" },
                    React.createElement(RiRewindFill, { onClick: function () {
                            setDay(0);
                            setYear(year - 1);
                        }, className: "datepicker-picker-navbar-button" }),
                    React.createElement(RiPlayFill, { onClick: function () {
                            return month === 0
                                ? (setDay(0), setMonth(11), setYear(year - 1))
                                : (setDay(0), setMonth(month - 1));
                        }, className: "datepicker-picker-navbar-button r180" }),
                    React.createElement("div", { className: "datepicker-picker-navbar-header" }, day === 0
                        ? new Date(year, month).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })
                        : new Date(year, month, day).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                            day: "numeric",
                        })),
                    React.createElement(RiPlayFill, { onClick: function () {
                            return month === 11
                                ? (setDay(0), setMonth(0), setYear(year + 1))
                                : (setDay(0), setMonth(month + 1));
                        }, className: "datepicker-picker-navbar-button" }),
                    React.createElement(RiRewindFill, { onClick: function () {
                            setDay(0);
                            setYear(year + 1);
                        }, className: "datepicker-picker-navbar-button r180" })),
                React.createElement("div", { className: "datepicker-picker-days" },
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(function (label) {
                        return (React.createElement("div", { key: label, className: "datepicker-picker-days-header" }, label));
                    }),
                    generateTable())))));
};
Datepicker.displayName = "Datepicker";
export { Datepicker };
