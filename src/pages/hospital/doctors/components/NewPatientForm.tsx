import React from "react";
import { useForm } from "react-hook-form";

// Utils
import { axiosInstance } from "../../../../utils/baseAxios";

// Components
import Input from "../../../../components/Input";
import Modal from "../../../../components/Modal";
import { Button } from "../../../../components/Button";

type NewDoctorFormProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
const NewDoctorForm: React.FC<NewDoctorFormProps> = ({ show, setShow }) => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      name: "",
      specialty: '',
    },
  });
  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
    setLoading(true);
    axiosInstance
      .post("/doctor", data)
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
    <Modal title="Add New Doctor" {...{ show, setShow }}>
      <form
        action=""
        className="min-w-[400px] flex flex-col gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Doctor's Name"
          name="name"
          {...{ register }}
          placeholder="Enter doctor's name"
        />
        <Input
          label="Doctor's Email"
          type="email"
          name="email"
          {...{ register }}
          placeholder="Enter doctor's email"
        />
        <Input
          label="Doctor's Specialty"
          name="specialty"
          {...{ register }}
          placeholder="Enter doctor's specialty"
        />
        <Button title="Add Doctor" loading={loading} type="submit" />
      </form>
    </Modal>
  );
};

export default NewDoctorForm;
