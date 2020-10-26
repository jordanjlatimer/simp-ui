import * as React from "react";
import "./checkbox.sass";

type CheckboxProps = {
  label: string;
  initChecked?: boolean;
  labelPosition?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  initChecked = false,
  labelPosition = "left",
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(initChecked);

  return (
    <div className="checkbox" onClick={() => setChecked(!checked)} tabIndex={0}>
      {labelPosition === "left" ? (
        <p className="checkbox-label left">{label}</p>
      ) : null}
      <div className="checkbox-outer">
        <div className={"checkbox-inner" + (checked ? " checked" : "")} />
      </div>
      {labelPosition === "left" ? null : (
        <p className="checkbox-label right">{label}</p>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
