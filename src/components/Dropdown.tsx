import * as React from "react";
import "../styles/dropdown.sass";

type option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  multiple?: boolean;
  placeholder?: string;
  options?: option[];
  width?: "short" | "medium" | "long";
  disabled?: boolean;
  onChange?: (value: { value: string; label: string }) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  multiple,
  placeholder,
  options,
  width = "medium",
  disabled,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([] as option[]);
  const [over, setOver] = React.useState(false);
  const control = React.useRef<HTMLDivElement>(null);
  const menu = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener("mousedown", toggle, false);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, []);

  React.useLayoutEffect(() => {
    control.current && setOver(control.current.scrollWidth > control.current.clientWidth);
  }, [value]);

  const toggle = (e: MouseEvent) => {
    let target = e.target as Node;
    control.current &&
      menu.current &&
      !control.current.contains(target) &&
      !menu.current.contains(target) &&
      setOpen(false);
  };

  return (
    <div className={"dropdown" + " " + width + (disabled ? " disabled" : "")}>
      {label && <div className="dropdown-label">{label}</div>}
      <div
        ref={control}
        className={"dropdown-control" + (open ? " open" : "")}
        onClick={() => setOpen(!open)}
        tabIndex={0}
      >
        {(disabled || !value[0]) && <div className="dropdown-value">{placeholder}</div>}
        {!multiple && !disabled && value[0] && <div className="dropdown-value">{value[0].label}</div>}
        {multiple && !disabled && over && (
          <div className="dropdown-value multiple">{value.length + " Items Selected"}</div>
        )}
        {multiple &&
          !disabled &&
          !over &&
          value.map(selection => (
            <div key={selection.value} className="dropdown-value multiple">
              {selection.label}
            </div>
          ))}
      </div>
      <div ref={menu} className={"dropdown-menu" + (open ? " open" : "")}>
        {options?.map(option => (
          <div
            className={
              "dropdown-item" + (value?.some(selection => selection.value === option.value) ? " selected" : "")
            }
            onClick={() => {
              setValue(
                multiple
                  ? value.every(selection => selection.value !== option.value)
                    ? [...value, { label: option.label, value: option.value }]
                    : [...value.filter(selection => selection.value !== option.value)]
                  : [{ label: option.label, value: option.value }]
              );
              !multiple && setOpen(false);
              setOver(false);
              onChange?.(option);
            }}
            key={option.value}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
