import classNames from "classnames";
import React from "react";
import badgeBlue from "../assets/icon/badgeBlue.png";
import badgeRed from "../assets/icon/badgeRed.png";
import warningInfoBlue from "../assets/icon/warningInfoBlue.png";

interface BadgeProps {
  _class?: string;
  variant: "primary" | "error";
  size: "sm" | "md" | "lg" | "xl";
  type: "tint" | "outline";
  text: string;
  isIcon?: boolean;
  isWarning?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  _class = "",
  variant,
  size,
  type,
  text,
  isIcon = true,
  isWarning,
}) => {
  const baseClasses =
    "flex items-center space-x-2 rounded-full font-semibold my-1 mx-1";

  const variantClasses = {
    primary: {
      tint: "bg-blue-100 text-blue-500 border-2 border-blue-300",
      outline: "bg-white text-blue-500 border-2 border-blue-600",
    },
    error: {
      tint: "bg-red-100 text-red-500 border-2 border-red-300",
      outline: "bg-white text-red-500 border-2 border-red-600",
    },
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-5 py-2.5 text-lg",
  };

  return (
    <div
      className={
        "inline-flex rounded-md" +
        classNames(
          _class,
          baseClasses,
          variantClasses[variant][type],
          sizeClasses[size],
        )
      }>
      {isIcon ?? (
        <>
          {variant === "primary" ? (
            <img src={badgeBlue} alt="badgeBlue" className="w-4 h-4" />
          ) : null}
          {variant === "error" ? (
            <img src={badgeRed} alt="badgeRed" className="w-4 h-4" />
          ) : null}
        </>
      )}
      {isWarning ? (
        <img src={warningInfoBlue} alt="warningInfoBlue" className="w-5 h-5" />
      ) : null}
      <span>{text}</span>
    </div>
  );
};

export default Badge;
