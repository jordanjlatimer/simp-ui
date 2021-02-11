import * as React from "react";
import "../styles/dropdown.sass";
export const Dropdown = ({ label, multiple, placeholder, options, width = "medium", disabled, onChange, }) => {
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
            (disabled || !value[0]) && React.createElement("div", { className: "dropdown-value" }, placeholder),
            !multiple && !disabled && value[0] && React.createElement("div", { className: "dropdown-value" }, value[0].label),
            multiple && !disabled && over && (React.createElement("div", { className: "dropdown-value multiple" }, value.length + " Items Selected")),
            multiple &&
                !disabled &&
                !over &&
                value.map(selection => (React.createElement("div", { key: selection.value, className: "dropdown-value multiple" }, selection.label)))),
        React.createElement("div", { ref: menu, className: "dropdown-menu" + (open ? " open" : "") }, options === null || options === void 0 ? void 0 : options.map(option => (React.createElement("div", { className: "dropdown-item" + ((value === null || value === void 0 ? void 0 : value.some(selection => selection.value === option.value)) ? " selected" : ""), onClick: () => {
                setValue(multiple
                    ? value.every(selection => selection.value !== option.value)
                        ? [...value, { label: option.label, value: option.value }]
                        : [...value.filter(selection => selection.value !== option.value)]
                    : [{ label: option.label, value: option.value }]);
                !multiple && setOpen(false);
                setOver(false);
                onChange === null || onChange === void 0 ? void 0 : onChange(option);
            }, key: option.value }, option.label))))));
};
