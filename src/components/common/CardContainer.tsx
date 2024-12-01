import classNames from "classnames";
import React from "react";

interface CardContainerProps {
  _class?: string;
  title?: React.ReactElement;
  children: React.ReactNode;
}

const CardContainer = ({ _class, title, children }: CardContainerProps) => {
  return (
    <div
      className={classNames(
        "py-4 w-full bg-gray-100 rounded-md mb-4 my-5",
        _class,
      )}>
      <div className="px-5">{title}</div>
      {children}
    </div>
  );
};

export default CardContainer;
