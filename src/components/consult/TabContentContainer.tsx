import classNames from "classnames";
import React from "react";

interface TabContentContainerProps {
  _class?: string;
  children: React.ReactNode;
}

const TabContentContainer: React.FC<TabContentContainerProps> = ({
  _class = "",
  children,
}) => {
  return (
    <div className={classNames("w-full h-auto bg-red-100 pt-8 px-10", _class)}>
      {children}
    </div>
  );
};

export default TabContentContainer;
