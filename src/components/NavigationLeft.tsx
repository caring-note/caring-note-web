import AdminBlackIcon from "@icon/24/accountcircle.fiiled.black.svg?react";
import AdminBlueIcon from "@icon/24/accountcircle.fiiled.blue.svg?react";
import QuestionBlackIcon from "@icon/24/help.fiiled.black.svg?react";
import HomeBlackIcon from "@icon/24/home.filled.black.svg?react";
import HomeBlueIcon from "@icon/24/home.filled.blue.svg?react";
import NoteBlackIcon from "@icon/24/note.fiiled.black.svg?react";
import NoteBlueIcon from "@icon/24/note.fiiled.blue.svg?react";
import PaperPlainBlackIcon from "@icon/24/paperplane.black.svg?react";
import PaperPlainBlueIcon from "@icon/24/paperplane.blue.svg?react";
import SettingBlackIcon from "@icon/24/settings.fiiled.black.svg?react";
import SettingBlueIcon from "@icon/24/settings.fiiled.blue.svg?react";
import React from "react";
import { useNavigate } from "react-router-dom";
import logoBlack from "../assets/logoBlack.png";
import NavigationLeftMenu from "../components/NavigationLeftMenu";
import PatientBlackIcon from "@icon/24/patient.fiiled.black.svg?react";
import PatientBlueIcon from "@icon/24/patient.fiiled.blue.svg?react";

interface NavigationLeftProps {}

const NavigationLeft: React.FC<NavigationLeftProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className="w-52 h-auto bg-grayscale-3 relative py-0 z-1000">
      <div className="flex justify-start items-end p-5">
        <span className="text-subtitle2 font-bold mr-3">{"박진완"}</span>
        <span className="text-body1 font-medium">{`${"약사"}님`}</span>
      </div>
      <hr className="border-t border-grayscale-10" />
      <NavigationLeftMenu
        className="mt-4"
        isActive={true}
        menuIcon={<HomeBlackIcon width={24} height={24} />}
        activteMenuIcon={<HomeBlueIcon width={24} height={24} />}
        menuName="홈"
      />
      <NavigationLeftMenu
        menuIcon={<NoteBlackIcon width={24} height={24} />}
        activteMenuIcon={<NoteBlueIcon width={24} height={24} />}
        menuName="상담노트"
      />
      <NavigationLeftMenu
        menuIcon={<PaperPlainBlackIcon width={24} height={24} />}
        activteMenuIcon={<PaperPlainBlueIcon width={24} height={24} />}
        menuName="케어링노트"
      />
      <NavigationLeftMenu
        menuIcon={<PatientBlackIcon width={24} height={24} />}
        activteMenuIcon={<PatientBlueIcon width={24} height={24} />}
        menuName="내담자관리"
      />
      <NavigationLeftMenu
        menuIcon={<AdminBlackIcon width={24} height={24} />}
        activteMenuIcon={<AdminBlueIcon width={24} height={24} />}
        menuName="계정관리"
      />
      <hr className="border-t border-grayscale-10" />
      <NavigationLeftMenu
        menuIcon={<SettingBlackIcon width={24} height={24} />}
        activteMenuIcon={<SettingBlueIcon width={24} height={24} />}
        menuName="설정"
      />
      <NavigationLeftMenu
        menuIcon={<QuestionBlackIcon width={24} height={24} />}
        activteMenuIcon={<QuestionBlackIcon width={24} height={24} />}
        menuName="도움말"
      />
      <div className="flex justify-center items-center absolute bottom-5 w-full">
        <img
          className="hover:cursor-pointer"
          src={logoBlack}
          alt="logo"
          onClick={() => navigate("/consult/home")}
        />
      </div>
    </div>
  );
};

export default NavigationLeft;
