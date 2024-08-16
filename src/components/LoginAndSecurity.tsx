import { twMerge } from "tailwind-merge";

// Components
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const records = [
  {
    title: "Email",
    response: "michaelakinsola@gmail.com",
  },
  {
    title: "Password",
    response: "********",
    actionPage: "/reset-password",
  },
];
const LoginAndSecurity = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full ">
        {records.map((record, i) => (
          <div key={i} className="flex flex-col py-4">
            <div className="flex">
              <h3 className="font-semibold leading-[0rem]">{record.title}</h3>
              <Button
                type="button"
                className={twMerge(
                  "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                  "p-0"
                )}
                onClick={() => record.actionPage ? navigate(record.actionPage) : {}}
                title="Edit"
              />
            </div>
            <span className="text-grey-100 text-sm">{record.response}</span>
          </div>
        ))}
      </div>
      <Button
        className={twMerge(
          " text-primary text-xs font-semibold w-fit bg-transparent",
        
        )}
        onClick={() => {}}
        title="Delete your account"
      />
    </div>
  );
};

export default LoginAndSecurity;
