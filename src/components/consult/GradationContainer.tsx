import React from "react";

interface GradationContainerProps {
  variant: "primary" | "secondary";
  children?: React.ReactNode;
}

const GradationContainer: React.FC<GradationContainerProps> = ({
  variant,
  children,
}) => {
  return (
    <div
      className={`w-1/2 bg-gradient-to-b from-white to-${variant}-10 rounded-lg p-4 shadow-md`}>
      {children}
    </div>
  );
};

export default GradationContainer;
