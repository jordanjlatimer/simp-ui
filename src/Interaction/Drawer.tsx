import * as React from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import "../styles/drawer.sass";

type DrawerProps = {
  open: boolean;
  position?: "top" | "bottom" | "right" | "left";
  callback: () => void;
  children: React.ReactNode;
};

const positionIcons = {
  top: <FaAngleUp />,
  right: <FaAngleRight />,
  bottom: <FaAngleDown />,
  left: <FaAngleLeft />,
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
