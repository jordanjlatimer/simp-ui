import * as React from "react";
import "../styles/button.sass";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick}>
      {label}
    </div>
  );
};

Button.displayName = "Button";

export { Button };
