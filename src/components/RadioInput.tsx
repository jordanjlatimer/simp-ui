import * as React from "react";
import "../styles/radio-input.sass";

type RadioInputProps = {
  label?: string;
  segmented?: boolean;
  horizontal?: boolean;
  options?: { 
    label: string; 
    value: string 
  }[];
  optionLabels?: "left" | "right";
  onChange?: (value: string) => void;
};

export const RadioInput: React.FC<RadioInputProps> = ({
  label,
  segmented,
  horizontal,
  options,
  optionLabels = "right",
  onChange
}: RadioInputProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  return (
    <div className="radio-input">
      {label && <div className="radio-input-label">{label}</div>}
      <div className={"radio-input-control" + (segmented ? " segmented" : "") + (horizontal ? " horizontal" : "")}>
        {options?.map(option => {
          return segmented ? (
            <div
              className={"radio-input-option segmented" + (selected === option.value ? " active" : "")}
              onClick={() => (setSelected(option.value), onChange && onChange(option.value))}
              tabIndex={0}
            >
              {option.label}
            </div>
          ) : (
            <div className="radio-input-option" onClick={() => (setSelected(option.value), onChange && onChange(option.value))} tabIndex={0}>
              {optionLabels === "left" && <div className="radio-input-option-label left">{option.label}</div>}
              <div className="radio-input-box-outer">
                <div className={"radio-input-box-inner" + (selected === option.value ? " active" : "")} />
              </div>
              {optionLabels === "right" && <div className="radio-input-option-label right">{option.label}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
