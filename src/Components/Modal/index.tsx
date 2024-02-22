import { FC, useRef } from 'react';
import './style.css';

interface ModalProps {
  title: string;
  description: string;
  onSubmit: () => void;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ title, description, onSubmit, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleConfirm = () => {
    onSubmit();
    handleCloseModal();
  };

  const handleCloseModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  };

  return (
    <dialog ref={dialogRef} open className="modal-dialog">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={handleCloseModal}>&times;</button>
        </div>
        <div className="modal-body">      
          <p>{description}</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleCloseModal} className="btn-cancel">
            Cancelar
          </button>
          <button onClick={handleConfirm} className="btn-confirm">
            Confirmar
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;