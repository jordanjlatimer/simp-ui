import * as React from "react";
import "../styles/container.sass";

type ContainerProps = {
  raised?: boolean;
  bordered?: boolean;
  margined?: boolean;
  clickable?: boolean;
  stretchX?: boolean;
  flex?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
  column?: boolean;
  header?: string;
  inverted?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  raised,
  bordered,
  margined,
  clickable,
  stretchX,
  flex,
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
      {header ? (
        <h1 className={"container-header" + (inverted ? " inverted" : "")}>
          {header}
        </h1>
      ) : null}
      <div
        className={
          "container-contents" +
          (flex ? " flex" : "") +
          (column ? " column" : "") +
          (padded ? " padded" : "")
        }
      >
        {children}
      </div>
    </div>
  );
};

Container.displayName = "Container";

export { Container };
