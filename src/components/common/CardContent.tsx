import React from "react";

interface CardContentProps {
  className?: string;
  item: string;
  value: string;
}

const CardContent: React.FC<CardContentProps> = ({
  className,
  item,
  value,
}) => {
  return (
    <div className="px-4 py-2">
      <p className="text-body2 font-medium text-grayscale-60 inline-block w-32">
        {item}
      </p>
      <span className="text-body1 font-medium text-grayscale-90 ml-4">
        {value}
      </span>
    </div>
  );
};

export default CardContent;
