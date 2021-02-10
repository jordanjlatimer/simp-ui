import * as React from "react";
import * as ReactDOM from "react-dom";
import "../styles/modal.sass";

type ModalProps = {
  open?: boolean;
  children?: React.ReactNode;
  parent?: Element
};

export const Modal: React.FC<ModalProps> = ({ open = false, children, parent }: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return ReactDOM.createPortal(
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal-contents">{children}</div>
    </div>,
    parent || document.body
  );
};
