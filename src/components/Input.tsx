import * as React from "react";
import "../styles/input.sass";

type InputProps = {
  value?: string;
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
  margined?: boolean;
  bordered?: boolean;
  stretchy?: boolean;
  changeHighlight?: boolean;
  readOnly?: boolean;
  blurFunc?: () => void;
};

export const Input: React.FC<InputProps> = ({
  value,
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
  margined = true,
  bordered = true,
  stretchy,
  changeHighlight,
  readOnly,
  blurFunc,
}: InputProps) => {
  const [invalid, setInvalid] = React.useState(false);
  const [invMessage, setInvMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [blurred, setBlurred] = React.useState(false);
  const prefixRef = React.useRef<HTMLDivElement>(null);
  const suffixRef = React.useRef<HTMLDivElement>(null);
  const control = React.useRef<HTMLInputElement>(null);

  const onBlur = () => (setShowMessage(false), setBlurred(true), blurFunc && blurFunc());

  const focusFunc = () => (setShowMessage(true), setClicked(true));

  React.useLayoutEffect(() => {
    if (control.current && prefixRef.current) {
      control.current.style.paddingLeft = prefixRef.current.clientWidth + "px";
    }
    if (control.current && suffixRef.current) {
      control.current.style.paddingRight = suffixRef.current.clientWidth + "px";
    }
  }, []);

  const changeFunc = (e: React.ChangeEvent) => {
    const targetValue = (e.target as HTMLInputElement).value;
    if (targetValue.split("").every(char => (changeValidation ? changeValidation(char) : true))) {
      onChange && onChange(targetValue);
    }
    if (valueValidation) {
      let validation = valueValidation(targetValue);
      setInvalid(validation.invalid);
      setInvMessage(validation.message);
    }
  };

  return (
    <div className={"input" + (margined ? " margined" : "") + (stretchy ? " stretchy" : "")}>
      {label && <div className="input-label">{label}</div>}
      <div className="input-container">
        <input
          className={
            "input-control" +
            (invalid ? " invalid" : "") +
            " " +
            width +
            (stretchy ? " stretchy" : "") +
            (bordered ? " bordered" : "") +
            (changeHighlight ? " changed" : "")
          }
          onBlur={onBlur}
          value={(valueMask && valueMask(value || "")) || value}
          onFocus={focusFunc}
          type={password ? "password" : "text"}
          placeholder={placeholder}
          ref={control}
          onChange={changeFunc}
          readOnly={readOnly}
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
