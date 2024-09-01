import React from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "./Button";
import Modal from "./Modal";
import Input from "./Input";
import { axiosInstance } from "../utils/baseAxios";

type AddMedicationProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  treatmentPlanId: string | number;
};

const AddTreatmentPlan: React.FC<AddMedicationProps> = ({
  show,
  setShow,
  treatmentPlanId,
}) => {
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      dosage: "",
      frequency: "Once daily",
      duration: "",
      startDate: new Date().toISOString().split("T")[0],
      treatmentId: +treatmentPlanId,
    },
  });
  const onSubmit = async (data: {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    startDate: string;
    treatmentId: number | string;
  }) => {
    setLoading(true);
    try {
      data.startDate = new Date(data.startDate).toISOString();
      await axiosInstance.post(`/treatmentplan/medication`, data);
      setShow(false);
    } catch (error) {}
    setLoading(false);
  };
  return (
    <Modal {...{ show, setShow }} title="Add medication">
      <form className="min-w-[523px] z-[100]" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Medication"
          placeholder="Name of medication"
          name="name"
          {...{ register, errors }}
          rules={{
            required: true,
          }}
        />

        <div className="flex gap-4 mt-4">
          <Input
            label="Frequency"
            placeholder="How many times daily"
            name="frequency"
            defaultValue={"once daily"}
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
          <Input
            label="Dosage"
            placeholder="500g, 2 tablets, etc"
            name="dosage"
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Input
            label="Duration"
            placeholder="For how long?"
            name="duration"
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />
          <Input
            label="Start Date"
            placeholder="When should the medication start? (optional, defaults to today)"
            name="startDate"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            {...{ register, errors }}
            rules={{
              required: true,
            }}
          />

        </div>
        <div className="flex gap-4 mt-4">
          <Input
            label="Instructions"
            placeholder="How should the medication be taken? (optional)"
            name="instructions"
            {...{ register, errors }}
          />
        </div>
        <Button
          className="mt-8 max-w-[342px] mx-auto"
          title="Add medication"
          type="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddTreatmentPlan;
