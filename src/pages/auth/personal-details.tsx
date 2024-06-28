import { useForm } from "react-hook-form";

// Components
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import Multiselect from "../../components/MultiSelect";

type PersonalDetailsProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const PersonalDetails = ({ setStep }: PersonalDetailsProps) => {
  const { register } = useForm();
  return (
    <form className="flex flex-col gap-y-6 w-[474px]">
      <h1 className="header1 leading-[0]">Hello, Dr. Kunle</h1>
      <p className="mt-1 mb-10">
        Kindly fill in your data to complete your personal profile
      </p>
      <Input
        label="Phone number"
        name="phone"
        {...{ register }}
        placeholder="Enter your primary phone number"
      />
      <Input
        label="Nationality"
        name="phone"
        {...{ register }}
        placeholder="Enter your nationality"
      />

      <Multiselect
        name="languages"
        label="Languages"
        placeholder="Languages"
        options={[
          { value: "Yoruba", label: "Yoruba" },
          { value: "Igbo", label: "Igbo" },
          { value: "Hausa", label: "Hausa" },
          { value: "French", label: "French" },
          { value: "Spanish", label: "Spanish" },
          { value: "Portuguese", label: "Portuguese" },
          { value: "Russian", label: "Russian" },
          { value: "Chinese", label: "Chinese" },
          { value: "Hindi", label: "Hindi" },
          { value: "Arabic", label: "Arabic" },
          { value: "Bengali", label: "Bengali" },
          { value: "Japanese", label: "Japanese" },
          { value: "Punjabi", label: "Punjabi" },
          { value: "German", label: "German" },
          { value: "Javanese", label: "Javanese" },
          { value: "Telugu", label: "Telugu" },
          { value: "Marathi", label: "Marathi" },
          { value: "Tamil", label: "Tamil" },
          { value: "Turkish", label: "Turkish" },
          { value: "Vietnamese", label: "Vietnamese" },
          { value: "Korean", label: "Korean" },
          { value: "Italian", label: "Italian" },
          { value: "Urdu", label: "Urdu" },
          { value: "Thai", label: "Thai" },
          { value: "Gujarati", label: "Gujarati" },
          { value: "Jin", label: "Jin" },
          { value: "Southern Min", label: "Southern Min" },
          { value: "Persian", label: "Persian" },
          { value: "Polish", label: "Polish" },
          { value: "Pashto", label: "Pashto" },
          { value: "Kannada", label: "Kannada" },
          { value: "Xiang", label: "Xiang" },
          { value: "Malayalam", label: "Malayalam" },
          { value: "Sundanese", label: "Sundanese" },
        ]}
      />

      <Input
        label="New Password"
        type="password"
        name="password"
        {...{ register }}
        placeholder="Enter a secure password"
      />
      <Button title="Next" className="w-full" onClick={() => setStep(1)} />
    </form>
  );
};

export default PersonalDetails;
