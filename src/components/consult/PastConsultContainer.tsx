import React from "react";

interface PastConsultContainerProps {
  variant: "primary" | "secondary";
  title: string;
  children?: React.ReactNode;
}

const PastConsultContainer: React.FC<PastConsultContainerProps> = ({
  variant,
  title,
  children,
}) => {
  return (
    <div
      className={`w-1/2 min-h-80 rounded-lg border border-${variant}-30 mb-10`}>
      <div className={`bg-${variant}-10 p-4 rounded-t-lg`}>
        <h2
          className={`text-subtitle2 font-bold text-${variant}-70 flex items-center`}>
          {title}
        </h2>
      </div>
      <div className="px-4 pb-4 overflow-y-auto h-64">{children}</div>
    </div>
  );
};

export default PastConsultContainer;
