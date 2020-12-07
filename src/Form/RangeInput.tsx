import * as React from "react";
import "../styles/range-input.sass";

type RangeInputProps = {
  initial?: number;
  label: string;
  prefix?: string;
  suffix?: string;
  min: number;
  max: number;
  step?: number;
};

const RangeInput: React.FC<RangeInputProps> = ({
  initial = 0,
  label,
  prefix = "",
  suffix = "",
  min,
  max,
  step = 1,
}: RangeInputProps) => {
  const [value, setValue] = React.useState(initial);

  return (
    <div className="range-input">
      <div className="range-input-label">{label}</div>
      <div className="range-input-value">{prefix + value + suffix}</div>
      <input
        className="range-input-slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e: React.ChangeEvent) => {
          const target = e.target as HTMLInputElement;
          if (target) {
            setValue(parseInt(target.value));
          }
        }}
      />
    </div>
  );
};

RangeInput.displayName = "RangeInput";

export { RangeInput };
