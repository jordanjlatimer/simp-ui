import * as React from "react";
import "../styles/divider.sass";

type DividerProps = {
  margin?: "small" | "medium" | "large";
};

export const Divider: React.FC<DividerProps> = ({ margin = "medium" }) => <hr className={"divider" + " " + margin} />;
