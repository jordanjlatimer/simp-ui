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
        const target = e.target;
        setOpen(!open && (control.current ? control.current.contains(target) : false));
    };
    const generateTable = () => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        let returnArray = [];
        for (let i = 0; i <= daysInMonth; i++) {
            if (i === 0) {
                const weekDays = new Date(year, month, i).getDay();
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
        label && React.createElement("div", { className: "datepicker-label" }, label),
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
