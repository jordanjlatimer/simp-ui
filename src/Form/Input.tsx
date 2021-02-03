import * as React from "react";
import "../styles/input.sass";

type InputProps = {
  initialValue?: string;
  changeValidation?: (value: string) => boolean;
  onChange?: (value: string) => void;
  valueValidation?: (value: string) => { invalid: boolean; message: string };
  label: string;
  valueDisplay?: (value: string) => string;
  password?: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  width?: "short" | "medium" | "long";
};

export const Input: React.FC<InputProps> = ({
  initialValue,
  changeValidation = value => true,
  onChange = value => value,
  valueValidation = value => {
    return { invalid: false, message: "" };
  },
  label,
  valueDisplay = value => value,
  password = false,
  placeholder,
  prefix,
  suffix,
  width = "medium",
}: InputProps) => {
  const [value, setValue] = React.useState(initialValue ? initialValue : "");
  const [invalid, setInvalid] = React.useState(false);
  const [invMessage, setInvMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [blurred, setBlurred] = React.useState(false);
  const prefixRef = React.useRef<HTMLDivElement>(null);
  const suffixRef = React.useRef<HTMLDivElement>(null);
  const control = React.useRef<HTMLInputElement>(null);

  const blurFunc = () => {
    setShowMessage(false);
    setBlurred(true);
  };
  const focusFunc = () => {
    setShowMessage(true);
    setClicked(true);
  };

  React.useLayoutEffect(() => {
    if (control.current && prefixRef.current) {
      control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
    }
    if (control.current && suffixRef.current) {
      control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
    }
  }, []);

  const changeFunc = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target) {
      if (target.value.split("").every(changeValidation)) {
        setValue(target.value);
        onChange(target.value);
      }
      let validation = valueValidation(target.value);
      if (validation.invalid) {
        setInvalid(true);
        setInvMessage(validation.message);
      } else {
        setInvalid(false);
      }
    }
  };

  return (
    <div className="input">
      <div className="input-label">{label}</div>
      <div className="input-container">
        <input
          className={"input-control" + (invalid ? " invalid" : "") + " " + width}
          onBlur={blurFunc}
          value={valueDisplay(value)}
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
