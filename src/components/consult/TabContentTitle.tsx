import React from "react";

interface TabTitleProps {
  text: string;
}

const TabContentTitle: React.FC<TabTitleProps> = ({ text }) => {
  return <span className="text-3xl font-bold text-black">{text}</span>;
};

export default TabContentTitle;
