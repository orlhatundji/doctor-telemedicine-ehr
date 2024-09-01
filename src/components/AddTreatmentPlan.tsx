import React from "react";
import { useForm } from "react-hook-form";

// Components
import { Button } from "./Button";
import Modal from "./Modal";
import Input from "./Input";
import { axiosInstance } from "../utils/baseAxios";

type AddTreatmentPlanProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  patientId: string;
};

const AddMedication: React.FC<AddTreatmentPlanProps> = ({
  show,
  setShow,
  patientId,
}) => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      title: "",
      startDate: "",
      endDate: "",
      patientId: patientId,
    },
  });
  const onSubmit = async (data: {
    title: string;
    startDate: string;
    endDate: string;
    patientId?: number | string;
  }) => {
    if(!patientId) return;
    try {
      setLoading(true);
      data.patientId = +patientId;
      data.endDate = new Date(data.endDate).toISOString();
      data.startDate = new Date(data.startDate).toISOString();
      await axiosInstance.post(`/treatmentplan`, data)
      setShow(false);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false)
  };
  return (
    <Modal {...{ show, setShow }} title="Add treatment plan">
      <form className="min-w-[523px] z-[100]" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Plan Name"
          placeholder="What's the name of the plan?"
          name="title"
          errorMessage="Plan name is required"
          {...{ register, errors }}
          rules={{
            required: true,
            maxLength: {
              value: 30,
              message: "Plan name is too long",
            },
          }}
        />
        <div className="flex gap-4 mt-4">
          <Input
            label="Start Date"
            placeholder="When should the plan start?"
            name="startDate"
            type="date"
             {...{ register, errors }}
            errorMessage="Start date is required"
            rules={{
              required: true,
            }}
          />
          <Input
            label="Expected End Date"
            placeholder="When should the plan stop?"
            name="endDate"
            type="date"
             {...{ register, errors }}
             errorMessage="End date is required"
            rules={{
              required: true,
            }}
          />
        </div>
          <Input
            label="Extra Notes"
            placeholder="Any additional notes?"
            name="notes"
             {...{ register, errors }}
          />
        <Button
          className="mt-8 max-w-[342px] mx-auto"
          title="Add plan"
          type="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddMedication;
