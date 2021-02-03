import * as React from "react";
import "../styles/container.sass";

type ContainerProps = {
  raised?: boolean;
  bordered?: boolean;
  margined?: boolean;
  clickable?: boolean;
  stretchX?: boolean;
  flex?: boolean;
  wrap?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
  column?: boolean;
  header?: string;
  inverted?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  raised,
  bordered,
  margined,
  clickable,
  stretchX,
  flex,
  wrap,
  padded,
  children,
  column,
  header,
  inverted,
}: ContainerProps) => {
  return (
    <div
      className={
        "container" +
        (raised ? " raised" : "") +
        (bordered ? " bordered" : "") +
        (margined ? " margined" : "") +
        (clickable ? " clickable" : "") +
        (stretchX ? " stretch-x" : "")
      }
    >
      {header ? <div className={"container-header" + (inverted ? " inverted" : "")}>{header}</div> : null}
      <div
        className={
          "container-contents" +
          (flex ? " flex" : "") +
          (wrap ? " wrap" : "") +
          (column ? " column" : "") +
          (padded ? " padded" : "")
        }
      >
        {children}
      </div>
    </div>
  );
};
