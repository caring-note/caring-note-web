import { Outlet } from "react-router-dom";
import arrowHeadLeftGray from "@icon/arrowHeadLeftGray.png";
import shareBlue from "@icon/shareBlue.png";
import trashcanBlue from "@icon/trashcanBlue.png";
import Button from "../../components/Button";

const tabTitle = (text: string) => {
  return (
    <p className="text-md font-extrabold text-gray-600 mr-10 hover:text-blue-500 hover:border-b-2 border-blue-500">
      {text}
    </p>
  );
};

function Consult() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start w-full h-fit bg-gray-0 px-8 py-4">
        <div className="flex flex-row justify-start w-full h-8 mt-4">
          <img src={arrowHeadLeftGray} alt="arrowHeadLeftGray" className="w-6 h-6" />
        </div>
        <div className="flex flex-row items-center justify-start w-full h-8 mt-4 pl-6">
          <p className="text-4xl text-black font-bold">박진완</p>
          <img src={shareBlue} alt="shareBlue" className="w-8 h-8 ml-4" />
          <img src={trashcanBlue} alt="trashcanBlue" className="w-8 h-8 ml-4" />
          <Button _class="ml-4" variant="primary" onClick={() => {}}>
            기록완료
          </Button>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-8 mt-4 pl-6">
          <p className="text-md text-black">만 {"29"}세</p>
          <div className="w-0.5 h-6 bg-gray-300 mx-2" />
          <p className="text-md text-black">{"고혈압 · 고지혈증 · 뇌혈관질환 · 척추 관절염/신경통 · 호흡기질환"}</p>
          <p className="text-md text-gray-500 px-2">외 {"3"}개의 질병</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start w-full h-14 pl-14 my-0 border-t-2 border-gray-200 border-b-2 border-b-gray-300">
        {tabTitle("이전 상담 내역")}
        {tabTitle("상담카드")}
        {tabTitle("의약물 기록")}
        {tabTitle("복약 상담")}
        {tabTitle("폐의약품 처리")}
      </div>
      <Outlet />
    </div>
  );
}

export default Consult;
