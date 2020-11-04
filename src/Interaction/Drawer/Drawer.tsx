import * as React from "react";
import "./drawer.sass";

type DrawerProps = {
  open: boolean;
  position?: "top" | "bottom" | "right" | "left";
  callback?: () => void;
  children?: React.ReactNode;
};

const positionIcons = {
  top: <svg><rect width="20" height="20"/></svg>,
  right: <svg><rect width="20" height="20"/></svg>,
  bottom: <svg><rect width="20" height="20"/></svg>,
  left: <svg><rect width="20" height="20"/></svg>,
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
        {positionIcons[position]}
      </div>
      {children}
    </div>
  );
};

Drawer.displayName = "Drawer";

export { Drawer };
