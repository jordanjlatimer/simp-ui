import { CSSObject } from "@emotion/react";
import * as React from "react";
import { AngleIcon } from "./icons/AngleIcon";

const $wrapper = (disabled?: boolean, override?: CSSObject): CSSObject => ({
  height: "fit-contet",
  fontSize: 16,
  margin: "16px 16px 0px 0px",
  position: "relative",
  width: 200,
  ...(disabled && {
    opacity: 0.5,
    pointerEvents: "none",
  }),
  ...override,
});

const $label = (override?: CSSObject): CSSObject => ({
  marginBottom: 4,
  ...override,
});

const $control = (override?: CSSObject): CSSObject => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  borderRadius: 2,
  border: "2px solid black",
  transition: "all 200ms",
  height: 40,
  ":hover": {
    boxShadow: "2px 2px 6px 0px #00000080",
  },
  ...override,
});

const $controlItem = (multiple?: boolean, override?: CSSObject): CSSObject => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  margin: 8,
  ...(multiple && {
    overflow: "visible",
    borderRadius: 2,
    backgroundColor: "lightgray",
    padding: 4,
    margin: "4px 0px 4px 4px",
  }),
  ...override,
});

const $controlIcon = (open?: boolean, override?: CSSObject): CSSObject => ({
  margin: "0px 8px 0px auto",
  transition: "all 200ms, margin 0ms",
  flexShrink: 0,
  ...(open && {
    transform: "scaleY(-1)",
  }),
  ...override,
});

const $menu = (open?: boolean, override?: CSSObject): CSSObject => ({
  width: "100%",
  maxHeight: "400%",
  position: "absolute",
  top: "calc(100% + 2px)",
  backgroundColor: "white",
  transformOrigin: "0% 0%",
  transform: "scaleY(0)",
  borderRadius: 2,
  zIndex: 1,
  transition: "all 200ms",
  overflowY: "auto",
  padding: 4,
  border: "2px solid black",
  ...(open && {
    transform: "scaleY(1)",
  }),
  ...override,
});

const $menuItem = (selected?: boolean, override?: CSSObject): CSSObject => ({
  padding: "12px 16px",
  cursor: "pointer",
  transition: "all 200ms",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  borderRadius: 2,
  marginTop: 4,
  ":hover": {
    backgroundColor: "lightgray",
  },
  ":first-of-type": {
    marginTop: 0,
  },
  ...(selected && {
    backgroundColor: "gray",
  }),
  ...override,
});

type option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  multiple?: boolean;
  placeholder?: string;
  options?: option[];
  disabled?: boolean;
  value?: option[] | option;
  styles?: {
    wrapper?: (disabled?: boolean) => CSSObject;
    label?: CSSObject;
    control?: CSSObject;
    controlItem?: (multiple?: boolean) => CSSObject;
    controlIcon?: (open?: boolean) => CSSObject;
    menu?: (open?: boolean) => CSSObject;
    menuItem?: (selected?: boolean) => CSSObject;
  };
  onChange?: (value: { value: string; label: string }) => void;
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  multiple,
  placeholder,
  options,
  disabled,
  value,
  styles,
  onChange,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const control = React.useRef<HTMLDivElement>(null);
  const menu = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener("click", toggle, false);
    return () => {
      document.removeEventListener("click", toggle);
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
    <div css={$wrapper(disabled, styles?.wrapper?.(disabled))}>
      {label && <div css={$label(styles?.label)}>{label}</div>}
      <div ref={control} css={$control(styles?.control)} onClick={() => setOpen(!open)}>
        {Array.isArray(value) ? (
          value.length > 0 ? (
            over ? (
              <div css={$controlItem(multiple, styles?.controlItem?.(multiple))}>
                {value?.length + " Items Selected"}
              </div>
            ) : (
              value?.map(selection => (
                <div key={selection.value} css={$controlItem(multiple, styles?.controlItem?.(multiple))}>
                  {selection.label}
                </div>
              ))
            )
          ) : (
            <div css={$controlItem(multiple, styles?.controlItem?.(multiple))}>{placeholder}</div>
          )
        ) : (
          <div css={$controlItem(multiple, styles?.controlItem?.(multiple))}>{value ? value.label : placeholder}</div>
        )}
        <AngleIcon styles={{svg: $controlIcon(open, styles?.controlIcon?.(open))}} />
      </div>
      <div ref={menu} css={$menu(open, styles?.menu?.(open))}>
        {options?.map(option => {
          const selected = Array.isArray(value)
            ? value?.some(selection => selection?.value === option?.value)
            : value?.value === option.value;
          return (
            <div
              css={$menuItem(selected, styles?.menuItem?.(selected))}
              onClick={() => {
                !multiple && setOpen(false);
                setOver(false);
                !selected && onChange?.(option);
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
