import * as React from "react";
import "../styles/button.sass";

type ButtonProps = {
  text: string;
  color?: "green" | "red" | "blue";
  icon?: React.ReactNode;
  marginRight?: boolean;
  floatRight?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, color = "green", icon, marginRight, floatRight, onClick }) => (
  <div
    className={"button" + " " + color + (marginRight ? " m-right" : "") + (floatRight ? " f-right" : "")}
    onClick={onClick}
  >
    {icon}
    {text}
  </div>
);
