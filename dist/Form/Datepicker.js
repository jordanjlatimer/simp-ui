import * as React from "react";
import "../styles/datepicker.sass";
export const Datepicker = ({ label, placeholder }) => {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState(0);
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [year, setYear] = React.useState(new Date().getFullYear());
    const picker = React.useRef(null);
    const control = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener("mousedown", toggle);
        return () => {
            document.removeEventListener("mousedown", toggle);
        };
    }, [open]);
    const toggle = (e) => {
        var _a, _b;
        if (!open && ((_a = control.current) === null || _a === void 0 ? void 0 : _a.contains(e.target))) {
            setOpen(true);
        }
        else if (open && !((_b = picker.current) === null || _b === void 0 ? void 0 : _b.contains(e.target))) {
            setOpen(false);
        }
    };
    const generateTable = () => {
        let monthDays = new Date(year, month + 1, 0).getDate();
        let returnArray = [];
        for (let i = 0; i <= monthDays; i++) {
            if (i === 0) {
                let weekDays = new Date(year, month, i).getDay();
                if (weekDays !== 6) {
                    for (let j = 0; j <= weekDays; j++) {
                        returnArray.push(React.createElement("div", { key: j + "p", className: "datepicker-picker-days-day" }));
                    }
                }
            }
            else {
                returnArray.push(React.createElement("div", { key: i + "d", onClick: () => setDay(i), className: "datepicker-picker-days-day" + (day === i ? " active" : "") }, i));
            }
        }
        return returnArray;
    };
    return (React.createElement("div", { className: "datepicker" },
        React.createElement("div", { className: "datepicker-label" }, label),
        React.createElement("div", null,
            React.createElement("div", { className: "datepicker-control" + (day > 0 ? " selected" : ""), tabIndex: 0, ref: control }, day < 1
                ? placeholder
                : new Date(year, month, day).toLocaleString("default", { month: "long", year: "numeric", day: "numeric" })),
            React.createElement("div", { ref: picker, className: "datepicker-picker" + (open ? " open" : "") },
                React.createElement("div", { className: "datepicker-picker-navbar" },
                    React.createElement("div", { className: "datepicker-picker-navbar-header" }, day === 0
                        ? new Date(year, month).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })
                        : new Date(year, month, day).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                            day: "numeric",
                        }))),
                React.createElement("div", { className: "datepicker-picker-days" },
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(label => {
                        return (React.createElement("div", { key: label, className: "datepicker-picker-days-header" }, label));
                    }),
                    generateTable())))));
};
