import * as React from "react";
import { RiMenuFill } from "@meronex/icons/ri"
import "../styles/menu.sass";

type MenuProps = {
  children?: React.ReactNode;
  inverted?: boolean;
  hideable?: boolean;
  startOpen?: boolean;
};

const Menu: React.FC<MenuProps> = ({
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
            <RiMenuFill className={"menu-close-icon" + (inverted ? " inverted" : "")}/>
          </div>
          : null
      }
      {children}
    </div>
  );
};

Menu.displayName = "Menu";

export { Menu };
