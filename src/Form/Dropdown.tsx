import * as React from "react";
import { RiArrowDownSLine } from "@meronex/icons/ri"
import "../styles/dropdown.sass";

type DropdownProps = {
  label: string;
  multiple?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
  width?: "short" | "medium" | "long"
};

const Dropdown: React.FC<DropdownProps> = ({
  label,
  multiple = false,
  placeholder = "Select an option...",
  options,
  width = "medium"
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState([] as DropdownProps["options"]);
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
    if (control.current) {
      control.current.scrollWidth > control.current.clientWidth
        ? setOver(true)
        : setOver(false);
    }
  }, [value]);

  const toggle = (e: MouseEvent) => {
    if (control.current && menu.current) {
      if (
        !control.current.contains(e.target as Node) &&
        !menu.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
  };

  return (
    <div className={"dropdown" + " " + width}>
      <div className="dropdown-label">{label}</div>
      <div
        ref={control}
        className={
          "dropdown-control" +
          (open ? " open" : "")
        }
        onClick={() => setOpen(!open)}
        tabIndex={0}
      >
        {
          multiple ?
            value.length > 0 ?
              over ? 
                <div className="dropdown-value multiple">
                  {value.length + " Items Selected"}
                </div>
                : 
                value.map((selection) => (
                  <div key={selection.value} className="dropdown-value multiple">
                    {selection.label}
                  </div>
                ))
              :
              <div className="dropdown-value">{placeholder}</div>
            :
            <div className="dropdown-value">
              {value[0] ? value[0].label : placeholder}
            </div>
        }
        <RiArrowDownSLine
          className={
            "dropdown-icon" + 
            (open ? " open" : "") +
            (multiple && value.length > 0 ? " multiple" : "")
          }
        />
      </div>
      <div ref={menu} className={"dropdown-menu" + (open ? " open" : "")}>
        {options.map((option) => {
          return (
            <div
              className={
                "dropdown-item" +
                (value.some((selection) => selection.value === option.value)
                  ? " selected"
                  : "")
              }
              onClick={() => {
                setValue(
                  multiple
                    ? value.every(
                        (selection) => selection.value !== option.value
                      )
                      ? [...value, { label: option.label, value: option.value }]
                      : [
                          ...value.filter(
                            (selection) => selection.value !== option.value
                          ),
                        ]
                    : [{ label: option.label, value: option.value }]
                );
                setOpen(multiple ? true : false);
                setOver(false);
              }}
              key={option.value}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Dropdown.displayName = "Dropdown";

export { Dropdown };
