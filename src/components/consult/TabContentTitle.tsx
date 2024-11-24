import classNames from "classnames";
import React from "react";

interface TabTitleProps {
  text: string;
  _class?: string;
}

const TabContentTitle: React.FC<TabTitleProps> = ({ text, _class = "" }) => {
  return (
    <div className={classNames("mb-4", _class)}>
      <span className="text-3xl font-bold text-black">{text}</span>
    </div>
  );
};

export default TabContentTitle;
