import * as React from "react";
import "../styles/dropdown.sass";
export const Dropdown = ({ label, multiple, placeholder, options, width = "medium", disabled, onChange, value, }) => {
    const [open, setOpen] = React.useState(false);
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
        control.current && setOver(control.current.scrollWidth > control.current.clientWidth);
    }, [value]);
    const toggle = (e) => {
        let target = e.target;
        control.current &&
            menu.current &&
            !control.current.contains(target) &&
            !menu.current.contains(target) &&
            setOpen(false);
    };
    return (React.createElement("div", { className: "dropdown" + " " + width + (disabled ? " disabled" : "") },
        label && React.createElement("div", { className: "dropdown-label" }, label),
        React.createElement("div", { ref: control, className: "dropdown-control" + (open ? " open" : ""), onClick: () => setOpen(!open), tabIndex: 0 },
            (disabled || !(value === null || value === void 0 ? void 0 : value[0])) && React.createElement("div", { className: "dropdown-value" }, placeholder),
            !multiple && !disabled && (value === null || value === void 0 ? void 0 : value[0]) && React.createElement("div", { className: "dropdown-value" }, value[0].label),
            multiple && !disabled && over && (React.createElement("div", { className: "dropdown-value multiple" }, (value === null || value === void 0 ? void 0 : value.length) + " Items Selected")),
            multiple &&
                !disabled &&
                !over && (value === null || value === void 0 ? void 0 : value.map(selection => (React.createElement("div", { key: selection.value, className: "dropdown-value multiple" }, selection.label))))),
        React.createElement("div", { ref: menu, className: "dropdown-menu" + (open ? " open" : "") }, options === null || options === void 0 ? void 0 : options.map(option => (React.createElement("div", { className: "dropdown-item" + ((value === null || value === void 0 ? void 0 : value.some(selection => (selection === null || selection === void 0 ? void 0 : selection.value) === (option === null || option === void 0 ? void 0 : option.value))) ? " selected" : ""), onClick: () => {
                !multiple && setOpen(false);
                setOver(false);
                !(value === null || value === void 0 ? void 0 : value.some(selection => (selection === null || selection === void 0 ? void 0 : selection.value) === (option === null || option === void 0 ? void 0 : option.value))) && (onChange === null || onChange === void 0 ? void 0 : onChange(option));
            }, key: option.value }, option.label))))));
};
