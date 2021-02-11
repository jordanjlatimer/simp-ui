import * as React from "react";
import "../styles/checkbox.sass";

type CheckboxProps = {
  label?: string;
  initChecked?: boolean;
  labelPosition?: "left" | "right";
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, initChecked, labelPosition = "right" }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(initChecked);

  return (
    <div className="checkbox" onClick={() => setChecked(!checked)} tabIndex={0}>
      {labelPosition === "left" && <div className="checkbox-label left">{label}</div>}
      <div className="checkbox-outer">
        <div className={"checkbox-inner" + (checked ? " checked" : "")} />
      </div>
      {labelPosition === "right" && <div className="checkbox-label right">{label}</div>}
    </div>
  );
};
