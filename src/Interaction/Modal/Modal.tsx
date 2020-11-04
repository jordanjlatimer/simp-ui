import * as React from "react";
import "./modal.sass";

type ModalProps = {
  open: boolean;
  callback: () => void;
  children?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  open,
  callback,
  children,
}: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className={isOpen ? "modal open" : "modal"}>
      <div className="modal-contents">
      <svg
        className="modal-close"
        onClick={() => {
          setIsOpen(false);
          callback();
        }}
      >
        <rect width="20" height="20"/>
      </svg>
      {children}
      </div>
    </div>
  );
};

Modal.displayName = "Modal";

export { Modal };
