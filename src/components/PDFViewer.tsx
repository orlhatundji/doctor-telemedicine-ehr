import React  from "react";

// Components
import Modal from "./Modal";

type MyPdfViewerProps = {
  title: string;
  path: string;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyPdfViewer = ({ title, path, show, setShow }: MyPdfViewerProps) => {
  
  return (
    <Modal {...{ title, show, setShow }} withClose>
      <div className="h-[65vh] w-[80vw]">
        <div
          className="embed-responsive"
         
        >
          <object
            data={`http://localhost:3000/doctor-telemedicine-ehr/lab_tests_patient/${path}`}
            type="application/pdf"
            className="h-[65vh] w-full"
        
          >
            <p>Unable to load document</p>
          </object>
        </div>
      </div>
    </Modal>
  );
};

export default MyPdfViewer;
