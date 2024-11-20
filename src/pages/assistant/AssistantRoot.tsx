import React from "react";
import { Outlet } from "react-router-dom";

const AssistantRoot: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AssistantRoot;
