import React from 'react';
import withFixedSidebar from "../components/Layout";

const OverviewPage: React.FC = () => {
  return (
    <div className='flex items-center justify-center flex-1'>
      Overview
    </div>
  );
};

export default withFixedSidebar(OverviewPage, "Overview");