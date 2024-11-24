import React from "react";

interface GrayContainerProps {
  title?: string;
  subTitle?: string;
  titleButton?: React.ReactNode;
  children: React.ReactNode;
}

const GrayContainer: React.FC<GrayContainerProps> = ({
  title,
  subTitle,
  titleButton,
  children,
}) => {
  return (
    <div className="bg-gray-100 mb-4 p-4 rounded-lg">
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-md font-normal text-gray-500">{subTitle}</p>
        </div>
        {titleButton}
      </div>
      <div className="h-40 mt-4 bg-gray-300">{children}</div>
    </div>
  );
};

export default GrayContainer;
