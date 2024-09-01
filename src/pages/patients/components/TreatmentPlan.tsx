import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

// Utils
import { axiosInstance } from "../../../utils/baseAxios";

// Components
import { Button } from "../../../components/Button";
import EmptyState from "../../../components/EmptyState";
import AddMedication from "../../../components/AddMedication";
import AddTreatmentPlan from "../../../components/AddTreatmentPlan";
import DeleteConfirmPopover from "../../../components/DeleteConfirm";

// Assets
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";
import { ReactComponent as RemoveIcon } from "../../../assets/icons/remove.svg";
import { ReactComponent as TabletIcon } from "../../../assets/icons/tablet.svg";
import { ReactComponent as CancelIcon } from "../../../assets/icons/cancel.svg";

type TreatmentPlanProps = {
  userId: string;
  patientId: string;
};

type Medication = {
  completed: boolean;
  dosage: string;
  duration: string;
  frequency: string;
  id: number;
  instructions: string;
  name: string;
  startDate: string;
  treatmentId: string;
};

type TreatmentPlan = {
  id: number;
  title: string;
  status: string;
  startDate: Date;
  endDate: Date;
  notes: string;
  medications: Medication[];
};

const TreatmentPlanComponent: React.FC<TreatmentPlanProps> = ({
  userId,
  patientId,
}) => {
  const [loading, setLoading] = useState(false);
  const [showDeletePopover, setShowDeletePopover] = React.useState(false);
  const [treatmentPlans, setTreatmentPlans] = useState<TreatmentPlan[]>([]);
  const [showAddTreatment, setShowAddTreatment] = useState(false);
  const [showAddMedication, setShowAddMedication] = useState(false);

  useEffect(() => {
    axiosInstance
      .get(`/treatmentplan/patient/${userId}`)
      .then((res) => {
        setTreatmentPlans(res.data);
      })
      .catch(() => {});
  }, [userId]);

  const deleteTreatmentPlan = async (treatmentId: number) => {
    if (!treatmentId) return;
    try {
      setLoading(true);
      await axiosInstance.delete(`/treatmentplan/${treatmentId}`);
      setTreatmentPlans((prev) =>
        prev.filter((treatmentPlan) => treatmentPlan.id !== treatmentId)
      );
      setShowDeletePopover(false);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
      <div className="py-8 px-6 border rounded-lg max-h-[400px] overflow-auto">
        <div className="flex items-center justify-between">
          <h1 className="header1 text-xl">Treatment Plans</h1>
          <AddIcon
            onClick={() => setShowAddTreatment(true)}
            className="icon-pointer"
          />
        </div>
        {treatmentPlans.length === 0 && (
          <div className="mt-4">
            <EmptyState description="Add treatment plan" />
          </div>
        )}
        {treatmentPlans &&
          treatmentPlans.length > 0 &&
          treatmentPlans.map((treatmentPlan: TreatmentPlan) => {
            return (
              <div>
                <div className="mt-4 flex items-center gap-x-2 pr-1">
                  <h4 className="header4 text-primary text-sm font-semibold">
                    {treatmentPlan.title}
                  </h4>
                  <CancelIcon
                    onClick={() => deleteTreatmentPlan(treatmentPlan.id)}
                    className="icon-pointer hover:scale-[1.3] bg-primary/30 rounded-full"
                  />
                </div>
                <div className="p-1 flex justify-between text-secondary-200">
                  <p className="text-xs">
                    From:{" "}
                    {dayjs(treatmentPlan.startDate).format("ddd, MMM D, YYYY")}
                  </p>
                  <p className="text-xs">
                    To:{" "}
                    {dayjs(treatmentPlan.endDate).format("ddd, MMM D, YYYY")}
                  </p>
                </div>
                <DeleteConfirmPopover
                  show={showDeletePopover}
                  setShow={setShowDeletePopover}
                  handleDelete={() => deleteTreatmentPlan(treatmentPlan.id)}
                  loading={loading}
                />
                {treatmentPlan.medications.length === 0 && (
                  <p className="text-center my-4 text-sm text-secondary-200">
                    Add medications to the treatment plan
                  </p>
                )}
                <div>
                  {treatmentPlan.medications.map((medication: Medication) => (
                    <div className="flex flex-col">
                      <div
                        key={medication.id}
                        className="flex items-center gap-x-2 py-2"
                      >
                        <TabletIcon />
                        <div>
                          <div className="flex gap-x-2 text-sm">
                            <span className="">{medication.name}</span>
                            <span className="">{medication.dosage}</span>
                          </div>
                          <div className="flex gap-x-1 text-grey-100 text-xs">
                            <span className="capitalize">
                              {medication.frequency}
                            </span>{" "}
                            for
                            <span className="">{medication.duration}</span>
                          </div>
                          <p className="text-grey-100 text-xs capitalize italic">
                            Instruction: {medication.instructions}
                          </p>
                        </div>
                        <hr className="flex-1" />
                        <RemoveIcon
                          onClick={() => setShowDeletePopover(true)}
                          className="icon-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  title="Add Medication"
                  onClick={() => setShowAddMedication(true)}
                  className="w-fit mt-2 ml-auto px-2 py-1 bg-secondary-200"
                  titleStyle="text-xs"
                />
                <AddMedication
                  show={showAddMedication}
                  setShow={setShowAddMedication}
                  treatmentPlanId={treatmentPlan.id}
                />
              </div>
            );
          })}
      </div>
      {patientId && (
        <AddTreatmentPlan
          {...{
            show: showAddTreatment,
            setShow: setShowAddTreatment,
            patientId,
          }}
        />
      )}
    </>
  );
};

export default TreatmentPlanComponent;
