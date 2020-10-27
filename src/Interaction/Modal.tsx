import * as React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import "../styles/modal.sass";

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
        <div
          className="modal-close"
          onClick={() => {
            setIsOpen(false);
            callback();
          }}
        >
          <FaRegWindowClose />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.displayName = "Modal";

export { Modal };
