import React from 'react';
import { Outlet } from 'react-router-dom';

const AssistantLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AssistantLayout;
