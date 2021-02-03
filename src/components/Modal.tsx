import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/modal.sass";

type ModalProps = {
  open: boolean;
  children?: React.ReactNode;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
};

export const Modal: React.FC<ModalProps> = ({ open, children, position }: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return ReactDOM.createPortal(
    <div className={isOpen ? "modal open" : "modal"} style={{ ...position }}>
      <div className="modal-contents">{children}</div>
    </div>,
    document.body
  );
};
