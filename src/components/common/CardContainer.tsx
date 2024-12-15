import classNames from "classnames";
import { get } from "http";
import React, { useState } from "react";
import ClockBlackIcon from "@icon/24/clock.outlined.black.svg?react";
import ReactModal from "react-modal";
import Badge from "./Badge";
import HistoryList from "./HistoryList";

interface CardContainerProps {
  className?: string;
  variant?: "primary" | "secondary" | "grayscale" | "error";
  title?: string;
  titleIcon?: "clock";
  children: React.ReactNode;
}

const CardContainer = ({
  className,
  variant,
  title,
  titleIcon,
  children,
}: CardContainerProps) => {
  const [modalStyle, setModalStyle] = useState<ReactModal.Styles>({});
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  const getTitleIcon = () => {
    if (titleIcon === "clock") {
      return (
        <ClockBlackIcon
          className="w-6 h-6 text-grayscale-50 ml-3 cursor-pointer"
          onClick={(e) => openModalAtPosition(e)}
        />
      );
    }
    return titleIcon;
  };

  const openModalAtPosition = (e: React.MouseEvent<SVGSVGElement>) => {
    // 클릭한 위치에서 마우스 좌표를 가져옴
    const { clientX, clientY } = e;

    // 클릭한 위치가 왼쪽인지 오른쪽인지 확인
    const dir = clientX > window.innerWidth / 2 ? "left" : "right";

    // 모달의 위치를 클릭한 위치로 설정
    setModalStyle({
      content: {
        top: `${clientY + 10}px`, // 클릭 위치에서 10px 아래
        left: `${dir === "left" ? clientX - 300 : clientX + 10}px`, // -300은 width와 같음
        position: "absolute",
        transform: "none", // transform은 사용하지 않음
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        width: "32rem", // 원하는 너비 설정
        height: "auto",
      },
      overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
    });

    setIsHistoryModalOpen(true);
  };

  return (
    <>
      <div
        className={classNames(
          "py-4 w-full bg-grayscale-3 rounded-md mb-4",
          variant ? `border-t-4 border-${variant}-30` : "",
          className,
        )}>
        {title && (
          <div className="flex items-center px-4 mb-4">
            <p className="text-subtitle2 font-bold text-grayscale-90">
              {title}
            </p>
            {getTitleIcon()}
          </div>
        )}
        {children}
      </div>

      <ReactModal
        isOpen={isHistoryModalOpen}
        style={modalStyle}
        onRequestClose={() => setIsHistoryModalOpen(false)}>
        <div>
          <p className="text-subtitle2 font-bold mb-4">히스토리</p>
          <HistoryList
            date="2021-08-01"
            items={[
              "고혈압 · 고지혈증 · 뇌혈관질환 · 척추 관절염/신경통 · 호흡기질환 · 당뇨병 · 수면장애",
              "고혈압",
              "고지혈증",
            ]}
          />
          <HistoryList
            date="2021-08-01"
            items={[
              "고혈압 · 고지혈증 · 뇌혈관질환 · 척추 관절염/신경통 · 호흡기질환 · 당뇨병 · 수면장애",
              "고혈압",
              "고지혈증",
            ]}
          />
          <HistoryList
            date="2021-08-01"
            items={[
              "고혈압 · 고지혈증 · 뇌혈관질환 · 척추 관절염/신경통 · 호흡기질환 · 당뇨병 · 수면장애",
              "고혈압",
              "고지혈증",
            ]}
          />
        </div>
      </ReactModal>
    </>
  );
};

export default CardContainer;
