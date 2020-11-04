import * as React from "react";
import "./radio-input.sass";

type RadioInputProps = {
  label?: string;
  segmented?: boolean;
  horizontal?: boolean;
  options: { label: string; value: string }[];
  optionLabels?: "left" | "right";
};

const RadioInput: React.FC<RadioInputProps> = ({
  label,
  segmented,
  horizontal,
  options,
  optionLabels = "right",
}: RadioInputProps) => {
  const [selected, setSelected] = React.useState(-1);

  return (
    <div className="radio-input">
      <div className="radio-input-label">{label}</div>
      <div
        className={
          "radio-input-control" +
          (segmented ? " segmented" : "") +
          (horizontal ? " horizontal" : "")
        }
      >
        {options.map((option, index) => {
          return segmented ? (
            <div
              className={
                "radio-input-option segmented" +
                (selected === index ? " active" : "")
              }
              onClick={() => setSelected(index)}
              tabIndex={0}
            >
              {option.label}
            </div>
          ) : (
            <div
              key={option.value}
              className="radio-input-option"
              onClick={() => setSelected(index)}
              tabIndex={0}
            >
              {optionLabels === "left" ? (
                <div className="radio-input-option-label left">{option.label}</div>
              ) : null}
              <div className="radio-input-box-outer">
                <div
                  className={
                    "radio-input-box-inner" +
                    (selected === index ? " active" : "")
                  }
                />
              </div>
              {optionLabels === "right" ? (
                <div className="radio-input-option-label right">{option.label}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

RadioInput.displayName = "RadioInput";

export { RadioInput };
