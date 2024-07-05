import React from "react";

// Components
import { Button } from "../../../components/Button";

// Assets
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";
import { ReactComponent as TabletIcon } from "../../../assets/icons/doc.svg";

const LaboratoryTests = () => {
  const [tests, ] = React.useState([
    {
      name: "Blood Test",
      date: "1 July 2024",
    },
    {
      name: "Urine Test",
      date: "1 July 2024",
    },
    {
      name: "Stool Test",
      date: "1 July 2024",
    },
  ]);

  return (
    <div className="py-8 px-6 border rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="header1 text-xl">Laboratory Tests</h1>
        <AddIcon />
      </div>
      <div className="flex flex-col">
        {tests.map((test, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-x-2 py-2 border-b border-tertiary-100"
          >
            <div className="flex items-center gap-x-2">
              <TabletIcon />
              <div>
                <h2 className="text-sm">{test.name}</h2>
                <span className="text-grey-100 text-xs">{test.date}</span>
              </div>
            </div>
            <Button title="Download" color="secondary" className="w-fit border-0 text-tertiary" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaboratoryTests;
