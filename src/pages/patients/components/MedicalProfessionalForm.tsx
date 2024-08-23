// Components
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";
import { cleanData, createDefaultOption, removeNull } from "../../../utils/helpers";

// Components
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import Multiselect from "../../../components/MultiSelect";

const MedicalProfessionalForm = ({
  doctor: user,
  id,
}: {
  doctor: Record<string, any>;
  id: string | undefined;
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const doctor = user.doctor
  useEffect(() => {
    const fetchUpdatedValues = async () => {
      const {
        specialty,
        licenseNumber,
        employmentDate,
        certifications,
        languages,
      } = doctor || {};
      reset({
        specialty,
        employmentDate,
        licenseNumber,
        certifications,
        languages,
      });
    };
    fetchUpdatedValues();
  }, [id, user, reset, doctor]);

  const onSubmit = (data: Record<string, any>) => {
    data = removeNull(data);
    if (!data && !user) return;
    setLoading(true);
    data = cleanData(data);
    setLoading(true);
    axiosInstance
      .patch(`/doctor/${doctor.id}`, removeNull(data))
      .then((res) => {
        navigate(-1);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  };

  return (
    <form
      className="overflow-y-scroll pr-10 h-[90%] pb-10 pt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Input
            name="specialty"
            label="Specialty"
            placeholder="Enter specialty"
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="employmentDate"
            label="Employment Date"
            type="date"
            value={new Date(doctor?.employmentDate)}
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="licenseNumber"
            label="License Number"
            placeholder="Enter license number"
            defaultValue={doctor?.licenseNumber}
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Qualifications</label>
          <Multiselect
            control={control}
            options={[
              { value: "MBBS", label: "MBBS" },
              { value: "M.D.", label: "M.D." },
              { value: "MB", label: "M.B." },
              { value: "PhD", label: "MSc." },
              { value: "PhD.", label: "PhD." },
              { value: "DO", label: "DO" },
              { value: "DA", label: "DA" },
              { value: "MPH", label: "MPH" },
              { value: "NMA", label: "NMA" },
            ]}
            name="qualifications"
            defaultValue={createDefaultOption(doctor?.qualifications)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="certifications"
            label="Certifications"
            placeholder="Enter certifications"
            defaultValue={doctor?.certifications}
            {...{ register, errors }}
          />
        </div>
      </div>

      <Button
        title="Save"
        color="primary"
        className={twMerge("mt-10 py-6", loading && "bg-black")}
        disabled={!isValid}
        type="submit"
        loading={loading}
      />
    </form>
  );
};

export default MedicalProfessionalForm;
