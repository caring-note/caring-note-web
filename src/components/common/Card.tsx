import classNames from "classnames";
import React from "react";

interface ConsultCardContainerProps {
  _class?: string;
  title?: React.ReactElement;
  children: React.ReactNode;
}

const Card = ({ _class, title, children }: ConsultCardContainerProps) => {
  return (
    <div
      className={classNames(
        "py-10 w-full bg-gray-100 rounded-md mb-4 my-5",
        _class,
      )}>
      <div className="px-5">{title}</div>
      {children}
    </div>
  );
};

export default Card;
