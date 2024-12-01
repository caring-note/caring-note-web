import React from "react";

interface NavigationLeftMenuProps {
  isActive?: boolean;
  imgSrc: string;
  activeImgSrc: string;
  menuName: string;
  onClick?: () => void;
}

const NavigationLeftMenu: React.FC<NavigationLeftMenuProps> = ({
  isActive = false,
  activeImgSrc,
  imgSrc,
  menuName,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center mx-2 p-4 cursor-pointer rounded-md border-2 border-white hover:border-2 hover:border-blue-300 ${
        isActive
          ? "text-blue-500 font-bold bg-blue-100 "
          : "bg-white text-black"
      }`}
      onClick={onClick}>
      <img
        src={isActive ? activeImgSrc : imgSrc}
        alt={menuName}
        className="w-4 h-4 mr-3"
      />
      <span>{menuName}</span>
    </div>
  );
};

export default NavigationLeftMenu;
