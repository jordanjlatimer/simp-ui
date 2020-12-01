import * as React from "react";
import "./loader.sass";

type LoaderProps = {
  text?: string
};

const Loader: React.FC<LoaderProps> = ({
  text = "Loading..."
}: LoaderProps) => {
  return (
    <div className="loader">
      <div className="loader-container">
        <div className="loader-container-text">{text}</div>
        <div className="loader-container-ball first"></div>
        <div className="loader-container-ball second"></div>
        <div className="loader-container-ball third"></div>
        <div className="loader-container-ball fourth"></div>
        <div className="loader-container-ball fifth"></div>
        <div className="loader-container-ball sixth"></div>
        <div className="loader-container-ball seventh"></div>
        <div className="loader-container-ball eighth"></div>
      </div>
    </div>
  );
};

Loader.displayName = "Loader";

export { Loader };