import * as React from "react";
import { RiArrowLeftSLine } from "@meronex/icons/ri"
import "../styles/drawer.sass";

type DrawerProps = {
  open: boolean;
  position?: "top" | "bottom" | "right" | "left";
  callback?: () => void;
  children?: React.ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({
  open,
  position = "left",
  callback,
  children,
}: DrawerProps) => {
  return (
    <div className={"drawer" + (open ? " open" : "") + (" " + position)}>
      <div
        className={"drawer-close" + (open ? " open" : "") + (" " + position)}
        onClick={callback}
      >
        <RiArrowLeftSLine className={"drawer-close-icon" + (" " + position)}/>
      </div>
      {children}
    </div>
  );
};

Drawer.displayName = "Drawer";

export { Drawer };
