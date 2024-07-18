import React from "react";

// Assets
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  withClose?: boolean;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  show,
  setShow,
  title,
  withClose = true,
}) => {
  return show ? (
    <div
      className="z-50 absolute inset-0 bg-black/30 items-center justify-center flex"
    >
      {withClose ? (
        <div className="py-10 px-8 bg-white rounded-lg z-[1000]">
          <div className="flex items-center justify-between gap-x-4 mb-6">
          {title && <h1 className="header1 text-xl">{title}</h1>}
          <CloseIcon onClick={() => setShow(false)} className="float-right cursor-pointer hover:scale-150 transition-all" />
          </div>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  ) : null;
};

export default Modal;
