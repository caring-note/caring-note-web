import classNames from "classnames";
import React from "react";

interface TabContentContainerProps {
  className?: string;
  children: React.ReactNode;
}

const TabContentContainer: React.FC<TabContentContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={classNames("w-full h-auto pt-8 px-10 mb-20", className)}>
      {children}
    </div>
  );
};

export default TabContentContainer;
