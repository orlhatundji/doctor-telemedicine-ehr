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
  loading?: boolean;
};

const DeleteConfirmPopover: React.FC<DeleteConfirmPopoverProps> = ({
  show,
  setShow,
  handleDelete,
  loading,
}) => {
  return (
    <Modal {...{ show, setShow }} title=" ">
      <div className="min-w-[441px]">
      <WarningIcon className="mx-auto text-red-500" />
      <p className="font-bold text-xl leading-[1.5rem] text-center mt-6 mx-auto max-w-[251px]">
        Are you sure you <br /> want to delete this <br /> treatment plan?
      </p>
      <Button
        className="mt-8 max-w-[342px] mx-auto"
        title="Confirm delete"
        onClick={handleDelete}
        loading={loading}
      />
      </div>
    </Modal>
  );
};

export default DeleteConfirmPopover;
