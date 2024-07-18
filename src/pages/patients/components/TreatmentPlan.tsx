import React from "react";

// Components
import EmptyState from "../../../components/EmptyState";
import Modal from "../../../components/Modal";

// Assets
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/icons/remove.svg";
import { ReactComponent as TabletIcon } from "../../../assets/icons/tablet.svg";
import AddTreatmentPlan from "../../../components/AddTreatmentPlan";

type TreatmentPlanProps = {
  showAddTreatment: boolean;
  setShowAddTreatment: React.Dispatch<React.SetStateAction<boolean>>;
};

const TreatmentPlan: React.FC<TreatmentPlanProps> = ({
  showAddTreatment,
  setShowAddTreatment,
}) => {
  const [medications, setMedications] = React.useState([
    {
      name: "Paracetamol Acetine 500g",
      dosage: "2 tablets",
      frequency: "M&N 3 days",
    },
    {
      name: "Amoxicillin 500g",
      dosage: "2 tablets",
      frequency: "M&N 5 days",
    },
  ]);

  const handleAddMedication = ({
    name,
    dosage,
    frequency,
  }: {
    name: string;
    dosage: string;
    frequency: string;
  }) => {
    setMedications([
      ...medications,
      {
        name,
        frequency,
        dosage,
      },
    ]);
  };
  const handleRemoveMedication = (index: number) => {
    const newMedications = medications.filter((_, i) => i !== index);
    setMedications(newMedications);
  };
  return (
    <>
      <div className="py-8 px-6 border rounded-lg max-h-[400px] overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="header1 text-xl">Treatment Plan</h1>
          <AddIcon
            onClick={() => setShowAddTreatment(true)}
            className="cursor-pointer"
          />
        </div>
        <span className="text-primary mt-4 mb-3 text-sm font-semibold">
          Current medication {(medications.length) ? `(${medications.length})` : ""}
        </span>
        <div className="flex flex-col">
          {medications.length === 0 && (
            <div className="mt-4">
              <EmptyState description="Add medication to the treatment plan" />
            </div>
          )}

          {medications.map((medication, i) => (
            <div key={i} className="flex items-center gap-x-2 py-2">
              <TabletIcon />
              <div>
                <h2 className="text-sm">{medication.name}</h2>
                <span className="text-grey-100 text-xs">
                  {medication.dosage} -{medication.frequency}
                </span>
              </div>
              <hr className="flex-1" />
              <RemoveIcon
                onClick={() => handleRemoveMedication(i)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
      <AddTreatmentPlan
        {...{ show: showAddTreatment, setShow: setShowAddTreatment, handleAddMedication }}
      />
    </>
  );
};

export default TreatmentPlan;
