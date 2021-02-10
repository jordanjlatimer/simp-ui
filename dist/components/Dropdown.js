import * as React from "react";
import "../styles/dropdown.sass";
export const Dropdown = ({ label, multiple = false, placeholder = "Select an option...", options, width = "medium", disabled = false, onChange, }) => {
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
            control.current.scrollWidth > control.current.clientWidth ? setOver(true) : setOver(false);
        }
    }, [value]);
    const toggle = (e) => {
        if (control.current && menu.current) {
            if (!control.current.contains(e.target) && !menu.current.contains(e.target)) {
                setOpen(false);
            }
        }
    };
    return (React.createElement("div", { className: "dropdown" + " " + width + (disabled ? " disabled" : "") },
        React.createElement("div", { className: "dropdown-label" }, label),
        React.createElement("div", { ref: control, className: "dropdown-control" + (open ? " open" : ""), onClick: () => setOpen(!open), tabIndex: 0 }, !disabled ? (multiple ? (value ? (value.length > 0 ? (over ? (React.createElement("div", { className: "dropdown-value multiple" }, value.length + " Items Selected")) : (value.map(selection => (React.createElement("div", { key: selection.value, className: "dropdown-value multiple" }, selection.label))))) : (React.createElement("div", { className: "dropdown-value" }, placeholder))) : (React.createElement("div", { className: "dropdown-value" }, placeholder))) : (React.createElement("div", { className: "dropdown-value" }, value ? (value[0] ? value[0].label : placeholder) : placeholder))) : (React.createElement("div", { className: "dropdown-value" }, placeholder))),
        React.createElement("div", { ref: menu, className: "dropdown-menu" + (open ? " open" : "") }, options === null || options === void 0 ? void 0 : options.map(option => {
            return (React.createElement("div", { className: "dropdown-item" + ((value === null || value === void 0 ? void 0 : value.some(selection => selection.value === option.value)) ? " selected" : ""), onClick: () => {
                    setValue(multiple
                        ? value
                            ? value.every(selection => selection.value !== option.value)
                                ? [...value, { label: option.label, value: option.value }]
                                : [...value.filter(selection => selection.value !== option.value)]
                            : [{ label: option.label, value: option.value }]
                        : [{ label: option.label, value: option.value }]);
                    setOpen(multiple ? true : false);
                    setOver(false);
                    onChange === null || onChange === void 0 ? void 0 : onChange(option);
                }, key: option.value }, option.label));
        }))));
};
