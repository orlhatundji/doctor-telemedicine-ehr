import React from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "./Button";
import Modal from "./Modal";
import Input from "./Input";

type AddTreatmentPlanProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddMedication: (medication: {
    name: string;
    dosage: string;
    frequency: string;
  }) => void;
};

const AddTreatmentPlan: React.FC<AddTreatmentPlanProps> = ({
  show,
  setShow,
  handleAddMedication,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "Chloroquine Acetone 1000g",
      dosage: "1",
      frequency: "once daily",
    },
  });
  const onSubmit = (data: {
    name: string;
    dosage: string;
    frequency: string;
  }) => {
    handleAddMedication(data);
    setShow(false);
  };
  return (
    <Modal {...{ show, setShow }} title="Add treatment plan">
      <form className="min-w-[523px] z-[100]" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Medication"
          placeholder="Name of medication"
          name="name"
          defaultValue={"Chloroquine Acetone 1000g"}
          {...{ register, errors }}
          rules={{
            required: true,
            maxLength: {
              value: 30,
              message: "Medication name is too long",
            },
          }}
        />
        <div className="flex gap-4 mt-4">
          <Input
            label="Dosage"
            placeholder="How many tablets/litres"
            name="dosage"
            defaultValue={"1"}
             {...{ register, errors }}
            rules={{
              required: true,
              maxLength: {
                value: 10,
                message: "Dosage is too long",
              },
            }}
          />
          <Input
            label="Frequency"
            placeholder="How many times daily"
            name="frequency"
            defaultValue={"once daily"}
             {...{ register, errors }}
            rules={{
              required: true,
              maxLength: {
                value: 30,
                message: "Frequency is too long",
              },
            }}
          />
        </div>
        <Button
          className="mt-8 max-w-[342px] mx-auto"
          title="Add plan"
          type="submit"
        />
      </form>
    </Modal>
  );
};

export default AddTreatmentPlan;
