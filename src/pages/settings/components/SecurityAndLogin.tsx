import { useForm } from "react-hook-form";

// Components
import Input from "../../../components/Input";
import { Button } from "../../../components/Button";

const PersonalDetails = () => {
  const { register } = useForm();
  return (
    <form className="flex flex-col gap-y-6 w-[474px] pt-10">
      
      <Input
        label="Current Password"
        type="password"
        name="password"
        {...{ register }}
        placeholder="Enter your current password"
      />
      <Input
        label="New Password"
        type="password"
        name="password"
        {...{ register }}
        placeholder="Enter a secure password"
      />
      <Button title="Submit" className="w-full" onClick={() => {}} />
    </form>
  );
};

export default PersonalDetails;
