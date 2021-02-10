import * as React from "react";
import "../styles/input.sass";

type InputProps = {
  initialValue?: string;
  changeValidation?: (value: string) => boolean;
  onChange?: (value: string) => void;
  valueValidation?: (value: string) => { invalid: boolean; message: string };
  label?: string;
  valueMask?: (value: string) => string;
  password?: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  width?: "short" | "medium" | "long";
};

export const Input: React.FC<InputProps> = ({
  initialValue,
  changeValidation,
  onChange,
  valueValidation,
  label,
  valueMask,
  password,
  placeholder,
  prefix,
  suffix,
  width = "medium",
}: InputProps) => {
  const [value, setValue] = React.useState(initialValue || "");
  const [invalid, setInvalid] = React.useState(false);
  const [invMessage, setInvMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [blurred, setBlurred] = React.useState(false);
  const prefixRef = React.useRef<HTMLDivElement>(null);
  const suffixRef = React.useRef<HTMLDivElement>(null);
  const control = React.useRef<HTMLInputElement>(null);

  const blurFunc = () => (setShowMessage(false), setBlurred(true))

  const focusFunc = () => (setShowMessage(true), setClicked(true))

  React.useLayoutEffect(() => {
    if (control.current && prefixRef.current) {
      control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
    }
    if (control.current && suffixRef.current) {
      control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
    }
  }, []);

  const changeFunc = (e: React.ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    if (value.split("").every(value => (changeValidation && changeValidation(value)) || true)) {
      setValue(value);
      onChange && onChange(value);
    }
    if (valueValidation){
      let validation = valueValidation(value);
      setInvalid(validation && validation.invalid);
      setInvMessage(validation.message);
    }
  };

  return (
    <div className="input">
      {label && <div className="input-label">{label}</div>}
      <div className="input-container">
        <input
          className={"input-control" + (invalid ? " invalid" : "") + " " + width}
          onBlur={blurFunc}
          value={(valueMask && valueMask(value)) || value}
          onFocus={focusFunc}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          ref={control}
          onChange={changeFunc}
        />
        <div className="input-prefix" ref={prefixRef}>
          {prefix}
        </div>
        <div className="input-suffix" ref={suffixRef}>
          {suffix}
        </div>
        <div className={"input-label-invalid" + (showMessage && invalid && clicked && blurred ? " active" : "")}>
          {invMessage}
        </div>
      </div>
    </div>
  );
};
