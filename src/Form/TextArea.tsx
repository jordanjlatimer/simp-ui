import * as React from "react";
import "../styles/textarea.sass";

type TextAreaProps = {
  initialValue?: string;
  onChange?: (value: string) => void;
  valueValidation?: (value: string) => { invalid: boolean; message: string };
  label: string;
  placeholder?: string;
  width?: "short" | "medium" | "long"
  height?: "short" | "medium" | "long"
};

const TextArea: React.FC<TextAreaProps> = ({
  initialValue,
  onChange = (value) => value,
  valueValidation = (value) => {
    return { invalid: false, message: "" };
  },
  label,
  placeholder,
  width = "medium",
  height = "medium"
}: TextAreaProps) => {
  const [value, setValue] = React.useState(initialValue ? initialValue : "");
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
    const target = e.target as HTMLTextAreaElement;
    if (target) {
      let validation = valueValidation(target.value);
      setValue(target.value);
      if (validation.invalid) {
        setInvalid(true);
        setInvMessage(validation.message);
      } else {
        setInvalid(false);
      }
    }
  };

  return (
    <div className="textarea">
      <div className="textarea-label">
        {label}
      </div>
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
        <div
          className={
            "textarea-label-invalid" +
            (showMessage && invalid && clicked && blurred ? " active" : "")
          }
        >
          {invMessage}
        </div>
      </div>
    </div>
  );
};

TextArea.displayName = "TextArea";

export { TextArea };