import { twMerge } from "tailwind-merge";

// Hooks
import useScreenSize from "../hooks/useScreenSize";

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
  const { height } = useScreenSize();
  const cardHeight = `${height - 450}px`;
  return (
    <div
      className="p-4 flex flex-col divide-y-2 divide-stroke-300/10 flex-1 overflow-auto h-full"
      style={{ maxHeight: cardHeight }}
    >
      {records.map((record, i) => (
        <div key={i} className="flex flex-col gap-y-2 py-4">
          <div className="flex">
            <h3 className="font-semibold">{record.title}</h3>
          </div>
          <div
            className={twMerge(
              "flex flex-wrap gap-1  max-w-[90%] pb-4 border-b overflow-auto"
            )}
          >
            {record.response.map((response, i) => (
              <span className="text-sm">
                {response}
                {i < record.response.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicalCard;
