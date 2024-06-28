import { useForm } from "react-hook-form";

// Components
import Input, { labelDefault } from "../../components/Input";
import { Button } from "../../components/Button";
import Multiselect from "../../components/MultiSelect";

// Assets
import { ReactComponent as CloudIcon } from "../../assets/icons/cloud.svg";
import { useNavigate } from "react-router-dom";

type WorkDetailsProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const WorkDetails: React.FC<WorkDetailsProps> = () => {
  const navigate = useNavigate();
  const { register } = useForm();
  return (
    <form className="flex flex-col gap-y-6 w-[474px]">
      <h1 className="header1 leading-[0]">Hello, Dr. Kunle</h1>
      <p className="mt-1 mb-10">
        Kindly fill in your detail to complete your work profile
      </p>
      <div className="">
        <span className={labelDefault}>Practice license</span>
        <div className="flex flex-col gap-y-1 items-center justify-center py-8 rounded-lg bg-primary/5 mt-1">
          <CloudIcon />
          <span className="text-primary text-sm">
            Click to upload your license
          </span>
        </div>
      </div>

      <Multiselect
        name="specialization"
        label="Field of works (Specialization)"
        placeholder="Field of works (Specialization)"
        options={[
          { value: "Cardiologist", label: "Cardiologist" },
          { value: "Dermatologist", label: "Dermatologist" },
          { value: "Endocrinologist", label: "Endocrinologist" },
          { value: "Gastroenterologist", label: "Gastroenterologist" },
          { value: "Hematologist", label: "Hematologist" },
          { value: "Nephrologist", label: "Nephrologist" },
          { value: "Neurologist", label: "Neurologist" },
          { value: "Oncologist", label: "Oncologist" },
          { value: "Ophthalmologist", label: "Ophthalmologist" },
          { value: "Orthopedic Surgeon", label: "Orthopedic Surgeon" },
          { value: "Otolaryngologist", label: "Otolaryngologist" },
          { value: "Pediatrician", label: "Pediatrician" },
          { value: "Plastic Surgeon", label: "Plastic Surgeon" },
          { value: "Psychiatrist", label: "Psychiatrist" },
          { value: "Pulmonologist", label: "Pulmonologist" },
          { value: "Radiologist", label: "Radiologist" },
          { value: "Rheumatologist", label: "Rheumatologist" },
          { value: "Urologist", label: "Urologist" },
        ]}
      />
      <Input
        label="Years of Experience"
        name="workExperience"
        placeholder="Enter your years of experience"
        {...{ register }}
        type="number"
      />

      <Button title="Next" className="w-full"
        onClick={() => navigate("/doctor-telemedicine-ehr/overview")}
      />
    </form>
  );
};

export default WorkDetails;
