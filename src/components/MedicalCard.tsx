import { Button } from "./Button";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

const records = [
  {
    title: "Common family conditions",
    response: ["Diabetes", "Hypertension", "Asthma", "Sickle cell"],
  },
  {
    title: "Allergies",
    response: ["Peanuts", "Dust", "Mold", "Pet dander", "lactose intolerant"],
  },
  {
    title: "Alcohol consumption",
    response: ["Daily"],
  },
  {
    title: "Past Medical conditions",
    response: ["Malaria", "Typhoid", "Tuberculosis", "Hepatitis", "Surgery"],
  },
  {
    title: "Blood group",
    response: ["A+"],
  },
  {
    title: "Genotype",
    response: ["AA"],
  },
  {
    title: "Family history",
    response: ["Diabetes", "Hypertension", "Asthma", "Sickle cell"],
  },
  {
    title: "Current medications",
    response: [
      "Paracetamol",
      "Amoxicillin",
      "Paracetamol",
      "Paracetamol",
      "Paracetamol",
    ],
  },
  {
    title: "Vaccination history",
    response: ["Yellow fever", "Hepatitis B", "Polio", "Tetanus"],
  },
  {
    title: "Surgical history",
    response: ["Appendectomy", "Hernia repair", "Cesarean section"],
  },
  {
    title: "Social history",
    response: ["Smoking", "Alcohol", "Drug abuse"],
  },
  {
    title: "Obstetric history",
    response: ["Gravida", "Para", "Abortions", "Living children"],
  },
  {
    title: "Current Weight(kg)",
    response: ["70"],
  },
  {
    title: "Current Height(cm)",
    response: ["170"],
  },
];
const MedicalCard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full ">
      {records.map((record, i) => (
        <div key={i} className="flex flex-col gap-y-2 py-4">
          <div className="flex">
            <h3 className="font-semibold">{record.title}</h3>
            <Button
              type="button"
              className={twMerge(
                "ml-auto text-primary text-xs font-semibold w-fit bg-transparent",
                "p-0"
              )}
              onClick={() => navigate("/doctor-telemedicine-ehr/medical-history-form")}
              title="Edit"
            />
          </div>
          <div className="flex flex-wrap gap-1  max-w-[90%] ">
            {record.response.map((response, i) => (
              <div key={i} className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary text-sm">{response}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalCard;
