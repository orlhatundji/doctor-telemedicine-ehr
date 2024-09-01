// Components
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Utils
import {
  allergies,
  familyConditions,
  pastMedicalConditions,
  currentMedications,
  vaccinationHistory,
  surgicalHistory,
  socialHistory,
} from "../../../utils/constants";
import { axiosInstance } from "../../../utils/baseAxios";
import { cleanData, createDefaultOption } from "../../../utils/helpers";

// Components
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import Multiselect from "../../../components/MultiSelect";

const MedicalHistoryForm = ({
  patient: user = {},
  id,
}: {
  id: string | undefined;
  patient: Record<string, any>;
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      weight: user.patient?.weight,
      height: user.patient?.height,
    },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: Record<string, any>) => {
    if (!data && !user.patient) return;
    setLoading(true);
    data = cleanData(data);
    await axiosInstance
      .patch(`/patient/${user.patient.id}`, data)
      .then((res) => {
        navigate(-1);
      })
      .catch((error) => {});
    setLoading(false);
  };

  return (
    <form
      className="overflow-y-scroll pr-10 h-full pb-10 pt-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Common family conditions</label>
          <Multiselect
            control={control}
            options={familyConditions}
            name="familyConditions"
            defaultValue={createDefaultOption(user?.patient?.familyConditions)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Allergies</label>
          <Multiselect
            control={control}
            options={allergies}
            name="allergies"
            defaultValue={createDefaultOption(user?.patient?.allergies)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Past medical conditions</label>
          <Multiselect
            control={control}
            options={pastMedicalConditions}
            name="pastMedicalConditions"
            defaultValue={createDefaultOption(user?.patient?.pastMedicalConditions)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Alcohol consumption</label>
          <Multiselect
            control={control}
            options={[
              { value: "daily", label: "Daily" },
              { value: "casually", label: "Casually" },
              { value: "weekly", label: "Weekly" },
              { value: "never", label: "Never" },
            ]}
            name="alcoholConsumption"
            isMulti={false}
            defaultInputValue={user?.patient?.alcoholConsumption}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Current medications</label>
          <Multiselect
            control={control}
            options={currentMedications}
            name="currentMedications"
            defaultValue={createDefaultOption(user?.patient?.currentMedications)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Vaccination history</label>
          <Multiselect
            control={control}
            options={vaccinationHistory}
            name="vaccinationHistory"
            defaultValue={createDefaultOption(user?.patient?.vaccinationHistory)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Surgical history</label>
          <Multiselect
            control={control}
            options={surgicalHistory}
            name="surgicalHistory"
            defaultValue={createDefaultOption(user?.patient?.surgicalHistory)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Social history</label>
          <Multiselect
            control={control}
            options={socialHistory}
            name="socialHistory"
            defaultValue={createDefaultOption(user?.patient?.socialHistory)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Blood group</label>
          <Multiselect
            control={control}
            options={[
              { value: "o+", label: "O+" },
              { value: "o-", label: "O-" },
              { value: "a+", label: "A+" },
              { value: "a-", label: "A-" },
              { value: "b+", label: "B+" },
              { value: "b-", label: "B-" },
              { value: "ab+", label: "AB+" },
              { value: "ab-", label: "AB-" },
            ]}
            name="bloodGroup"
            isMulti={false}
            isValidNewOption={false}
            defaultInputValue={user?.patient?.bloodGroup}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Genotype</label>
          <Multiselect
            control={control}
            options={[
              { value: "aa", label: "AA" },
              { value: "as", label: "AS" },
              { value: "ss", label: "SS" },
              { value: "ac", label: "AC" },
              { value: "sc", label: "SC" },
              { value: "cc", label: "CC" },
            ]}
            name="genotype"
            isMulti={false}
            isValidNewOption={false}
            defaultInputValue={user?.patient?.genotype}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <Input
            name="weight"
            type="number"
            label="Current weight (kg)"
            placeholder="Enter weight"
            {...{ register, errors }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <Input
            name="height"
            type="number"
            label="Current height (cm)"
            placeholder="Enter height"
            {...{ register, errors }}
          />
        </div>
      </div>
      <Button
        title="Save"
        loading={loading}
        className="mt-10 py-6"
        type="submit"
      />
    </form>
  );
};

export default MedicalHistoryForm;
