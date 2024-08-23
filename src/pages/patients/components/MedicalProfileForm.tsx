// Components
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";
import { removeNull } from "../../../utils/helpers";

// Components
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import Multiselect from "../../../components/MultiSelect";
import { ROLE } from "../../../utils/constants";

const MedicalProfileForm = ({
  patient,
  id,
}: {
  patient: Record<string, any>;
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

  useEffect(() => {
    const fetchUpdatedValues = async () => {
      const {
        name,
        dateOfBirth,
        phone,
        gender,
        maritalStatus,
        occupation,
        emergencyContact,
        nextOfKin,
        nextOfKinRelationShip,
      } = patient || {};
      reset({
        name,
        dateOfBirth: dayjs(dateOfBirth).format("MM/DD/YYYY"),
        phone,
        gender,
        maritalStatus,
        occupation,
        emergencyContact,
        nextOfKin,
        nextOfKinRelationShip,
      });
    };
    fetchUpdatedValues();
  }, [id, patient, reset]);

  const onSubmit = (data: Record<string, any>) => {
    if (!id) return;
    setLoading(true);
    axiosInstance
      .patch(`/users/${id}`, removeNull(data))
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
            name="name"
            label="Name"
            placeholder="Enter name"
            defaultValue={patient?.name}
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="dateOfBirth"
            label="Date of Birth (MM/DD/YYYY)"
            placeholder="Date of Birth"
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="phone"
            label="Phone Number"
            placeholder="Enter phone number"
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="leading-[1.2rem]">Gender</label>
            <Multiselect
              control={control}
              options={[
                { value: "MALE", label: "Male" },
                { value: "FEMALE", label: "Female" },
              ]}
              name="genotype"
              isMulti={false}
              isValidNewOption={false}
              defaultInputValue={patient?.gender}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <label className="leading-[1.2rem]">Marital Status</label>
            <Multiselect
              control={control}
              options={[
                { value: "SINGLE", label: "Single" },
                { value: "MARRIED", label: "Married" },
                { value: "DIVORCED", label: "Divorce" },
                { value: "WIDOWED", label: "Windowed" },
              ]}
              name="maritalStatus"
              isMulti={false}
              isValidNewOption={false}
              defaultInputValue={patient?.maritalStatus}
            />
          </div>
        </div>
        {patient?.role === ROLE.PATIENT && (
          <div className="flex flex-col gap-y-2">
            <Input
              name="occupation"
              label="Occupation"
              placeholder="Enter occupation"
              {...{ register, errors }}
            />
          </div>
        )}
        <div className="flex flex-col gap-y-2">
          <Input
            name="emergencyContact"
            label="Emergency Contact"
            placeholder="Enter emergency contact"
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="nextOfKin"
            label="Next of Kin"
            placeholder="Enter next of kin"
            {...{ register, errors }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Input
            name="nextOfKinRelationShip"
            label="Relationship with Next of Kin"
            placeholder="Enter relationship with Next of Kin"
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
      />
    </form>
  );
};

export default MedicalProfileForm;
