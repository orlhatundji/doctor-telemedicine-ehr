import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { axiosInstance } from "../../utils/baseAxios";
import { useAuth } from "../../contexts/authContext";

type LoginProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Login: React.FC<LoginProps> = ({ setStep }) => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      login(
        accessToken,
        localStorage.getItem("email") || "",
        parseInt(localStorage.getItem("id") || "0"),
        localStorage.getItem("role") || ""
      );
    } }, [login]);
    
  const onSubmit = async (data: { email: string; password: string; }) => {
    await axiosInstance.post("/auth/login", {
      email: data.email,
      password: data.password,
    }).then((res) => {
      login(
        res.data.access_token,
        res.data.email,
        res.data.id,
        res.data.role
      );
      
      localStorage.setItem("email", data.email);
      setStep(0);
    }).catch((error) => {
      console.error(error);
    });
  }
  return (
    <form className="flex flex-col gap-y-6 w-[474px]" onSubmit={handleSubmit(onSubmit)}>
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
      <Button title="Login" className="w-full" type="submit" />
    </form>
  );
};

export default Login;
