import type { ReactNode } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  container?: Element | DocumentFragment;
}

export default function Modal({ 
  children,
  container = document.body,
  title,
  onClose,
  isOpen,
 }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    createPortal(
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={event => event.stopPropagation()}>
          <header className="modal__header">
            <div>
              <h2 className="modal__title">{title}</h2>
            </div>

            <button
              type="button"
              className="modal__close"
              aria-label="Close modal"
              onClick={onClose}
            >
              ×
            </button>
          </header>

          <div className="modal__content">
            {children}
          </div>
        </div>
      </div>,
      container,
    )
  );
}