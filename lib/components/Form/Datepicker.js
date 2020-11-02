import * as React from "react";
import "../../styles/datepicker.sass";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight, } from "react-icons/fa";
const Datepicker = ({ label, placeholder, }) => {
    const [open, setOpen] = React.useState(false);
    const [day, setDay] = React.useState(0);
    const [month, setMonth] = React.useState(new Date().getMonth());
    const [year, setYear] = React.useState(new Date().getFullYear());
    const picker = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener("mousedown", toggle);
        return () => {
            document.removeEventListener("mousedown", toggle);
        };
    }, []);
    const toggle = (e) => {
        const { current } = picker;
        if (current && !current.contains(e.target)) {
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
            React.createElement("div", { className: "datepicker-control" + (day > 0 ? " selected" : ""), onClick: () => setOpen(true), tabIndex: 0 }, day < 1
                ? placeholder
                : new Date(year, month, day).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                })),
            React.createElement("div", { ref: picker, className: "datepicker-picker" + (open ? " open" : "") },
                React.createElement("div", { className: "datepicker-picker-navbar" },
                    React.createElement(FaAngleDoubleLeft, { onClick: () => {
                            setDay(0);
                            setYear(year - 1);
                        } }),
                    React.createElement(FaAngleLeft, { onClick: () => month === 0
                            ? (setDay(0), setMonth(11), setYear(year - 1))
                            : (setDay(0), setMonth(month - 1)) }),
                    React.createElement("div", null, day === 0
                        ? new Date(year, month).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                        })
                        : new Date(year, month, day).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                            day: "numeric",
                        })),
                    React.createElement(FaAngleRight, { onClick: () => month === 11
                            ? (setDay(0), setMonth(0), setYear(year + 1))
                            : (setDay(0), setMonth(month + 1)) }),
                    React.createElement(FaAngleDoubleRight, { onClick: () => {
                            setDay(0);
                            setYear(year - 1);
                        } })),
                React.createElement("div", { className: "datepicker-picker-days" },
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => {
                        return (React.createElement("div", { key: label, className: "datepicker-picker-days-header" }, label));
                    }),
                    generateTable())))));
};
Datepicker.displayName = "Datepicker";
export { Datepicker };
