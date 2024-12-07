import React from "react";
import adminBlack from "../assets/icon/adminBlack.png";
import homeBlack from "../assets/icon/homeBlack.png";
import homeBlue from "../assets/icon/homeBlue.png";
import noteBlack from "../assets/icon/noteBlack.png";
import questionBlack from "../assets/icon/questionBlack.png";
import settingBlack from "../assets/icon/settingBlack.png";
import logoBlack from "../assets/logoBlack.png";
import Button from "../components/Button";
import NavigationLeftMenu from "../components/NavigationLeftMenu";
import { useNavigate } from "react-router-dom";

interface NavigationLeftProps {}

const NavigationLeft: React.FC<NavigationLeftProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen relative py-4 bg-gray-0 border-r border-gray-300 z-1000">
      <div className="flex justify-center items-center">
        <img
          className="hover:cursor-pointer"
          src={logoBlack}
          alt="logo"
          onClick={() => navigate("/consult/home")}
        />
      </div>
      <div className="flex justify-center items-center">
        <Button
          _class="mb-5"
          variant="primary"
          size="xl"
          icon="none"
          onClick={() => {}}
          children={"박진완 약사님"}
        />
      </div>
      <NavigationLeftMenu
        isActive={true}
        imgSrc={homeBlack}
        activeImgSrc={homeBlue}
        menuName="홈"
      />
      <NavigationLeftMenu
        imgSrc={noteBlack}
        activeImgSrc={homeBlue}
        menuName="상담노트"
      />
      <NavigationLeftMenu
        imgSrc={adminBlack}
        activeImgSrc={homeBlue}
        menuName="계정관리"
      />
      <div className="absolute bottom-5 w-full">
        <NavigationLeftMenu
          imgSrc={settingBlack}
          activeImgSrc={homeBlue}
          menuName="설정"
        />
        <NavigationLeftMenu
          imgSrc={questionBlack}
          activeImgSrc={homeBlue}
          menuName="도움말"
        />
      </div>
    </div>
  );
};

export default NavigationLeft;
