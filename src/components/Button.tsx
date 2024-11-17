import React from "react";
import arrowRightBlack from "../assets/icon/arrowRightBlack.png";
import searchGray from "../assets/icon/searchGray.png";

interface ButtonProps {
  variant?: "primary" | "secondary"; // primary : Primary Button, secondary : Secondary Button
  size?: "sm" | "md" | "lg" | "xl"; // sm : Small, md : Medium, lg : Large, xl : Extra Large
  icon?: "none" | "rightArrow" | "search";
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const getButtonClasses = (variant: "primary" | "secondary", size: "sm" | "md" | "lg" | "xl") => {
  const baseClasses = "font-bold py-2 px-4 my-1 mx-1 rounded focus:outline-none focus:shadow-outline inline-flex items-center";

  const variantClasses =
    variant === "primary"
      ? "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-800"
      : "text-blue-500 bg-white border-2 border-blue-500 hover:bg-blue-200 active:bg-blue-300";

  const disabledClasses =
    variant === "primary"
      ? "disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
      : "disabled:bg-gray-400 disabled:text-gray-600 disabled:border-2 disabled:border-gray-600 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-xl py-3 px-6",
  }[size];

  return `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses}`;
};

const getIconSizeClasses = (size: "sm" | "md" | "lg" | "xl") => {
  const baseClasses = "";

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-7 h-7",
  }[size];

  return `${baseClasses} ${sizeClasses}`;
}

// todo : 아이콘 이미지 경로 수정
const getSearchSrc = (variant: "primary" | "secondary", disabled: boolean) => {
  if(variant === "primary" && disabled === false) {
    return searchGray;
  }
  if(variant === "primary" && disabled === true) {
    return searchGray;
  }
  if(variant === "secondary" && disabled === false) {
    return searchGray;
  }
  if(variant === "secondary" && disabled === true) {
    return searchGray;
  }
}

// todo : 아이콘 이미지 경로 수정
const getRightArrowSrc = (variant: "primary" | "secondary", disabled: boolean) => {
  if(variant === "primary" && disabled === false) {
    return arrowRightBlack;
  }
  if(variant === "primary" && disabled === true) {
    return arrowRightBlack;
  }
  if(variant === "secondary" && disabled === false) {
    return arrowRightBlack;
  }
  if(variant === "secondary" && disabled === true) {
    return arrowRightBlack;
  }
}

const Button = ({ variant = "primary", size = "md", icon = "none", disabled = false, onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={getButtonClasses(variant, size)} disabled={disabled}>
      {icon === "search" ? <img className={"mr-1" + getIconSizeClasses(size)} src={getSearchSrc(variant, disabled)} /> : null}
      {children}
      {icon === "rightArrow" ? <img className={"ml-1" + getIconSizeClasses(size)} src={getRightArrowSrc(variant, disabled)} /> : null}
    </button>
  );
};

export default Button;
