import React from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "./Button";
import Modal from "./Modal";
import Input from "./Input";

type AddLabTestProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddLabTest: React.FC<AddLabTestProps> = ({
  show,
  setShow,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "Urine Test",
    },
  });
  const onSubmit = (data: {
    name: string;
  }) => {
    setShow(false);
  };
  return (
    <Modal {...{ show, setShow }} title="Add treatment plan">
      <form className="flex flex-col gap-y-4 min-w-[523px] z-[100]" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Test name"
          placeholder="Name of test"
          name="name"
          defaultValue={"Urine Test"}
          {...{ register, errors }}
          rules={{
            required: true,
            maxLength: {
              value: 30,
              message: "Test name is too long",
            },
          }}
        />
        <Input
          label="Test File"
          placeholder="Scanned copy of test result"
          name="test-report"
          disabled
          {...{ register, errors }}
         type="file"
        />
   
        <Button
          className="mt-8 max-w-[342px] mx-auto"
          title="Upload test result"
          type="submit"
        />
      </form>
    </Modal>
  );
};

export default AddLabTest;
