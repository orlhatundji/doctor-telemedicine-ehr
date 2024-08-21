// Components
import { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Multiselect from "../../../components/MultiSelect";

const familyConditions = [
  { value: "hypertension", label: "Hypertension" },
  { value: "diabetes", label: "Diabetes" },
  { value: "cancer", label: "Cancer" },
  { value: "asthma", label: "Asthma" },
  { value: "sickle_cell", label: "Sickle Cell" },
];

const allergies = [
  { value: "lactose_intolerant", label: "Lactose Intolerant" },
  { value: "peanuts", label: "Peanuts" },
  { value: "dust", label: "Dust" },
  { value: "mold", label: "Mold" },
  { value: "pet_dander", label: "Pet Dander" },
];

const previous_illness = [
  { value: "malarial", label: "Malaria" },
  { value: "typhoid", label: "Typhoid" },
  { value: "tuberculosis", label: "Tuberculosis" },
  { value: "hepatitis", label: "Hepatitis" },
  { value: "surgery", label: "Surgery" },
];

const current_medications = [
  { value: "paracetamol", label: "Paracetamol" },
  { value: "amoxicillin", label: "Amoxicillin" },
  { value: "ibuprofen", label: "Ibuprofen" },
  { value: "aspirin", label: "Aspirin" },
  { value: "tramadol", label: "Tramadol" },
];

const vaccination_history = [
  { value: "yellow_fever", label: "Yellow Fever" },
  { value: "hepatitis_b", label: "Hepatitis B" },
  { value: "polio", label: "Polio" },
  { value: "tetanus", label: "Tetanus" },
];

const surgical_history = [
  { value: "appendectomy", label: "Appendectomy" },
  { value: "hernia_repair", label: "Hernia repair" },
  { value: "cesarean_section", label: "Cesarean section" },
];

const social_history = [
  { value: "smoking", label: "Smoking" },
  { value: "alcohol", label: "Alcohol" },
  { value: "drug_abuse", label: "Drug abuse" },
];

const obstetric_history = [
  { value: "gravida", label: "Gravida" },
  { value: "para", label: "Para" },
  { value: "abortions", label: "Abortions" },
  { value: "living_children", label: "Living children" },
];

const MedicalHistoryForm = ({ patient }: { patient: Record<string, any> }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [hasAllergy, setHasAllergy] = useState<{
    value: string;
    label: string;
  } | null>(null);

  return (
    <div className="overflow-y-scroll pr-10 h-full pb-10 pt-4">
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Common family conditions</label>
          <Multiselect options={allergies} name="allergies" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Allergies</label>
          <Dropdown
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      {hasAllergy && hasAllergy.value === "yes" && (
        <div className="flex flex-col gap-y-4 mt-6 ml-10">
          <div className="flex flex-col gap-y-2">
            <label className="leading-[1.2rem]">List of Allergies</label>
            <Multiselect options={familyConditions} name="fcond" />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Past medical conditions</label>
          <Multiselect options={previous_illness} name="allergies" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Alcohol consumption</label>
          <Dropdown
            options={[
              { value: "daily", label: "Daily" },
              { value: "casually", label: "Casually" },
              { value: "weekly", label: "Weekly" },
              { value: "never", label: "Never" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Current medications</label>
          <Multiselect options={current_medications} name="allergies" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Vaccination history</label>
          <Multiselect options={vaccination_history} name="allergies" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Surgical history</label>
          <Multiselect options={surgical_history} name="allergies" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Social history</label>
          <Multiselect options={social_history} name="allergies" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Blood group</label>
          <Dropdown
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
            selected={hasAllergy}
            setSelected={setHasAllergy}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-6">
        <div className="flex flex-col gap-y-2">
          <label className="leading-[1.2rem]">Genotype</label>
          <Dropdown
            options={[
              { value: "aa", label: "AA" },
              { value: "as", label: "AS" },
              { value: "ss", label: "SS" },
              { value: "ac", label: "AC" },
              { value: "sc", label: "SC" },
              { value: "cc", label: "CC" },
            ]}
            selected={hasAllergy}
            setSelected={setHasAllergy}
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
            label="Current height (kg)"
            placeholder="Enter height"
            {...{ register, errors }}
          />
        </div>
      </div>
      <Button
        title="Save"
        color="primary"
        className="mt-10 py-6"
        disabled={!isValid}
        onClick={handleSubmit((data) => {
          console.log(data);
        })}
      />
    </div>
  );
};

export default MedicalHistoryForm;
