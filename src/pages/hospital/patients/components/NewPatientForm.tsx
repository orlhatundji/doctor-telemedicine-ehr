import React from "react";
import { useForm } from "react-hook-form";

// Utils
import { axiosInstance } from "../../../../utils/baseAxios";

// Components
import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import { Button } from "../../../../components/Button";

type NewPatientFormProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const NewPatientForm: React.FC<NewPatientFormProps> = ({ show, setShow }) => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      name: "",
    },
  });
  const onSubmit = (data: Record<string, string>) => {
    setLoading(true);
    axiosInstance
      .post("/patient", data)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setShow(false);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Modal title="Add New Patient" {...{ show, setShow }}>
      <form
        action=""
        className="min-w-[400px] flex flex-col gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Patient's Name"
          name="name"
          {...{ register }}
          placeholder="Enter patient's name"
        />
        <Input
          label="Patient's Email"
          type="email"
          name="email"
          {...{ register }}
          placeholder="Enter patient's email"
        />
        <Button title="Add Patient" loading={loading} type="submit" />
      </form>
    </Modal>
  );
};

export default NewPatientForm;
