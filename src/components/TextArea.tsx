import * as React from "react";
import "../styles/textarea.sass";

type TextAreaProps = {
  initialValue?: string;
  onChange?: (value: string) => void;
  valueValidation?: (value: string) => { invalid: boolean; message: string };
  label?: string;
  placeholder?: string;
  width?: "short" | "medium" | "long";
  height?: "short" | "medium" | "long";
};

export const TextArea: React.FC<TextAreaProps> = ({
  initialValue,
  onChange,
  valueValidation,
  label,
  placeholder,
  width = "medium",
  height = "medium",
}: TextAreaProps) => {
  const [value, setValue] = React.useState(initialValue || "");
  const [invalid, setInvalid] = React.useState(false);
  const [invMessage, setInvMessage] = React.useState("");
  const [showMessage, setShowMessage] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [blurred, setBlurred] = React.useState(false);
  const control = React.useRef<HTMLTextAreaElement>(null);

  const blurFunc = () => {
    setShowMessage(false);
    setBlurred(true);
  };

  const focusFunc = () => {
    setShowMessage(true);
    setClicked(true);
  };

  const changeFunc = (e: React.ChangeEvent) => {
    const target = (e.target as HTMLTextAreaElement).value;
    setValue(value);
    if(valueValidation){
      let validation = valueValidation(value);
      setInvalid(validation && validation.invalid);
      setInvMessage(validation.message);
    }
    onChange && onChange(value);
  };

  return (
    <div className="textarea">
      {label && <div className="textarea-label">{label}</div>}
      <div className="textarea-container">
        <textarea
          className={"textarea-control" + (invalid ? " invalid" : "") + " w-" + width + " h-" + height}
          onBlur={blurFunc}
          value={value}
          onFocus={focusFunc}
          placeholder={placeholder}
          ref={control}
          onChange={changeFunc}
        />
        <div className={"textarea-label-invalid" + (showMessage && invalid && clicked && blurred ? " active" : "")}>
          {invMessage}
        </div>
      </div>
    </div>
  );
};
