import classNames from "classnames";
import React from "react";

interface TabTitleProps {
  className?: string;
  text: string;
}

const TabContentTitle: React.FC<TabTitleProps> = ({ className = "", text }) => {
  return (
    <div className={classNames("mb-4", className)}>
      <span className="text-subtitle1 font-bold text-grayscale-90">{text}</span>
    </div>
  );
};

export default TabContentTitle;
