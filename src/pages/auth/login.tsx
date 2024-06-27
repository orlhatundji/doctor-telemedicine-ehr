import React from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import { Button } from "../../components/Button";

type LoginProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Login: React.FC<LoginProps> = ({ setStep }) => {
  const { register } = useForm();
  return (
    <form className="flex flex-col gap-y-6 w-[474px]">
      <h1 className="header1 leading-[0]">Welcome</h1>
      <p className="mt-1 mb-10">
        Kindly fill in your details given from the hospital
      </p>
      <Input
        label="Email"
        type="email"
        name="email"
        {...{ register }}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        {...{ register }}
        placeholder="Enter a secure password"
      />
      <Button title="Login" className="w-full" onClick={() => setStep(1)} />
    </form>
  );
};

export default Login;
