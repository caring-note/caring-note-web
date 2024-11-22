import classNames from "classnames";
import React from "react";

interface ConsultCardContainerProps {
  _class?: string;
  title?: React.ReactElement;
  children: React.ReactNode;
}

const ConsultCardContainer: React.FC<ConsultCardContainerProps> = ({ _class = "", title = null, children }) => {
  return (
    <div className={classNames("w-full bg-gray-200 rounded-md mb-4", _class)}>
      <div className="px-2 py-2">{title}</div>
      {children}
    </div>
  );
};

export default ConsultCardContainer;
