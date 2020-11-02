import * as React from "react";
import "../../styles/dropdown.sass";
import { FaAngleDown } from "react-icons/fa";
const Dropdown = ({ label, multiple = false, placeholder, options, }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState([]);
    const [over, setOver] = React.useState(false);
    const control = React.useRef(null);
    const menu = React.useRef(null);
    React.useEffect(() => {
        document.addEventListener("mousedown", toggle, false);
        return () => {
            document.removeEventListener("mousedown", toggle);
        };
    }, []);
    React.useLayoutEffect(() => {
        if (control.current) {
            control.current.scrollWidth > control.current.clientWidth
                ? setOver(true)
                : setOver(false);
        }
    }, [value]);
    const toggle = (e) => {
        if (control.current && menu.current) {
            if (!control.current.contains(e.target) &&
                !menu.current.contains(e.target)) {
                setOpen(false);
            }
        }
    };
    return (React.createElement("div", { className: "dropdown" },
        React.createElement("div", { className: "dropdown-label" }, label),
        React.createElement("div", { ref: control, className: "dropdown-control" +
                (open ? " open" : "") +
                (multiple && value.length > 0 ? " multiple" : ""), onClick: () => setOpen(!open), tabIndex: 0 },
            multiple ? (value.length > 0 ? (over ? (React.createElement("div", { className: "dropdown-value-multiple" }, value.length + " Items Selected")) : (value.map((selection) => (React.createElement("div", { key: selection.value, className: "dropdown-value-multiple" }, selection.label))))) : (React.createElement("div", { className: "dropdown-value" }, placeholder))) : (React.createElement("div", { className: "dropdown-value" }, value[0] ? value[0].label : placeholder)),
            React.createElement(FaAngleDown, { className: "dropdown-icon" + (open ? " open" : "") })),
        React.createElement("div", { ref: menu, className: "dropdown-menu" + (open ? " open" : "") }, options.map((option) => {
            return (React.createElement("div", { className: "dropdown-item" +
                    (value.some((selection) => selection.value === option.value)
                        ? " selected"
                        : ""), onClick: () => {
                    setValue(multiple
                        ? value.every((selection) => selection.value !== option.value)
                            ? [...value, { label: option.label, value: option.value }]
                            : [
                                ...value.filter((selection) => selection.value !== option.value),
                            ]
                        : [{ label: option.label, value: option.value }]);
                    setOpen(multiple ? true : false);
                    setOver(false);
                }, key: option.value }, option.label));
        }))));
};
Dropdown.displayName = "Dropdown";
export { Dropdown };
