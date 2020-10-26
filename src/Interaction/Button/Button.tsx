import * as React from "react";
import "./button.sass";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>
      <p>{label}</p>
    </div>
  );
};

Button.displayName = "Button";

export { Button };
