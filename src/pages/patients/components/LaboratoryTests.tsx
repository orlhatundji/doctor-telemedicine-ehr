import React from "react";

// Components
import AddLabTest from "../../../components/AddLabTest";
import { Button } from "../../../components/Button";

// Assets
import { ReactComponent as AddIcon } from "../../../assets/icons/add.svg";
import { ReactComponent as TabletIcon } from "../../../assets/icons/doc.svg";
import MyPdfViewer from "../../../components/PDFViewer";
// import StoolTest from "../../../assets/lab_tests_patient/lab_test_stool_test.pdf"
type Test = {
  name: string;
  date: string;
  path: string;
};

const LaboratoryTests = () => {
  const [showAddLabTest, setShowAddLabTest] = React.useState(false);
  const [tests] = React.useState<Test[]>([
    {
      name: "Clinical Chemistry",
      date: "1 July 2024",
      path: `lab_test_clinical_chemistry.pdf`
    },
    {
      name: "Urinalysis",
      date: "24 June 2024",
      path: "lab_test_urinalysis.pdf"
    },
    {
      name: "Stool Test",
      date: "1 Aug 2023",
      path: `lab_test_stool_test.pdf`
    },
    {
      name: "Haematology",
      date: "14 Feb 2018",
      path: `lab_test_haematology.pdf`
    },
  ]);
  const [showPDF, setShowPDF] = React.useState(false);
  const [pdfPath, setPdfPath] = React.useState<Test>();

  return (
    <>
    <div className="py-8 px-6 border rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="header1 text-xl">Laboratory Tests</h1>
        <AddIcon
          onClick={() => setShowAddLabTest(true)}
          className="icon-pointer"
        />
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

            <Button
              title="View"
              color="secondary"
              className="w-fit border-0 text-tertiary"
              onClick={() => {
                setPdfPath(test);
                setShowPDF(true);
              }}
            />
          </div>
        ))}
      </div>
      <AddLabTest show={showAddLabTest} setShow={setShowAddLabTest} />
    </div>
    {pdfPath && <MyPdfViewer path={pdfPath.path} show={showPDF} setShow={setShowPDF} title={pdfPath.name} />}
    </>
  );
};

export default LaboratoryTests;
