import * as React from "react";
import "../styles/menu.sass";

type MenuProps = {
  children?: React.ReactNode;
  inverted?: boolean;
  hideable?: boolean;
  startOpen?: boolean;
};

export const Menu: React.FC<MenuProps> = ({
  children,
  inverted = false,
  hideable = false,
  startOpen = true
}: MenuProps) => {
  const [open, setOpen] = React.useState(startOpen)

  return (
    <div className={"menu" + (open ? " open" : "") + (inverted ? " inverted" : "")}>
      {
        hideable ? 
          <div
            className={"menu-toggle" + (open ? " open" : "") + (inverted ? " inverted" : "")}
            onClick={() => setOpen(!open)}
          >
          </div>
          : null
      }
      {children}
    </div>
  );
};
