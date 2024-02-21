import { ReactNode, useEffect, useRef } from "react";
import "./Modal.css";

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
}

function Modal({ children, open, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClick() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    if (dialogElement) {
      dialogElement.addEventListener("close", closeModal);
    }

    function closeModal() {
      onClose?.();
    }

    return () => {
      dialogElement?.removeEventListener("close", closeModal);
    };
  }, [dialogRef, onClose]);

  return (
    <dialog
      className="modal-content custom-scroll"
      onClick={handleClick}
      ref={dialogRef}
    >
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </dialog>
  );
}

export default Modal;
