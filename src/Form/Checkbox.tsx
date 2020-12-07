import * as React from "react";
import "../styles/checkbox.sass";

type CheckboxProps = {
  label: string;
  initChecked?: boolean;
  labelPosition?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  initChecked = false,
  labelPosition = "right",
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(initChecked);

  return (
    <div className="checkbox" onClick={() => setChecked(!checked)} tabIndex={0}>
      {labelPosition === "left" ? (
        <div className="checkbox-label left">{label}</div>
      ) : null}
      <div className="checkbox-outer">
        <div className={"checkbox-inner" + (checked ? " checked" : "")} />
      </div>
      {labelPosition === "left" ? null : (
        <div className="checkbox-label right">{label}</div>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
