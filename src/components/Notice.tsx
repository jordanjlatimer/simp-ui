import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/notice.sass";

type NoticeProps = {
  text?: string;
  icon?: React.ReactNode;
  linger?: number;
  parent?: Element
};

export const Notice: React.FC<NoticeProps> = ({ text, icon, linger = 4000, parent }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(true);
    window.setTimeout(() => setShow(false), linger);
  }, []);

  return ReactDOM.createPortal(
    <div className={"notice" + (show ? " show" : "")}>
      <div className={"notice-wrapper"}>
        {icon}
        {text}
      </div>
    </div>,
    parent || document.body
  );
};
