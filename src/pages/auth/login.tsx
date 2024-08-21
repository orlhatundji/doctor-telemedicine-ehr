import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { axiosInstance } from "../../utils/baseAxios";
import { useAuth } from "../../contexts/authContext";
import { twMerge } from "tailwind-merge";

type LoginProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Login: React.FC<LoginProps> = ({ setStep }) => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [loginType, setLoginType] = React.useState("doctor");
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
        localStorage.getItem("role") || "",
        localStorage.getItem("name") || "",
      );
    }
  }, [login]);

  const onSubmit = async (data: { email: string; password: string }) => {
    if(!data.email || !data.password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setLoading(true);
    await axiosInstance
      .post(loginType === "doctor" ? "/auth/login" : "/auth/hospital/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        login(
          res.data.access_token,
          res.data.email,
          res.data.id,
          res.data.role,
          res.data.name,
        );
        localStorage.setItem("email", data.email);
        setStep(0);
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });
    setLoading(false);
  };
  return (
    <form
      className="flex flex-col gap-y-6 w-[474px]"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-center gap-10 py-5 justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setLoginType("doctor")}
        >
          <input
            type="radio"
            value={loginType}
            checked={loginType === "doctor"}
            defaultChecked
            name="doctor"
            id="doctor"
            className="mr-2"
            title="Doctor"
          />
          <label htmlFor="doctor">Doctor</label>
        </div>
        <hr className="w-full shadow" />
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setLoginType("hospital")}
        >
          <input
            type="radio"
            value={loginType}
            checked={loginType === "hospital"}
            name="hospital"
            id="hospital"
            className="mr-2"
            title="Hospital"
          />
          <label htmlFor="hospital">Hospital</label>
        </div>
      </div>
      <Button title="Login" className={twMerge("w-full", loading ? "bg-black" : "")} type="submit" />
    </form>
  );
};

export default Login;
