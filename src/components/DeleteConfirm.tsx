import React from "react";

// Components
import { Button } from "./Button";
import Modal from "./Modal";

// Assets
import { ReactComponent as WarningIcon } from "../assets/icons/warning.svg";

type DeleteConfirmPopoverProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleDelete: () => void;
};

const DeleteConfirmPopover: React.FC<DeleteConfirmPopoverProps> = ({
  show,
  setShow,
  handleDelete,
}) => {
  return (
    <Modal {...{ show, setShow }} title=" ">
      <div className="min-w-[441px]">
      <WarningIcon className="mx-auto text-red-500" />
      <p className="font-bold text-xl leading-[1.5rem] text-center mt-6 mx-auto max-w-[251px]">
        Are you sure you want to delete this treatment plan?
      </p>
      <Button
        className="mt-8 max-w-[342px] mx-auto"
        title="Confirm delete"
        onClick={handleDelete}
      />
      </div>
    </Modal>
  );
};

export default DeleteConfirmPopover;
