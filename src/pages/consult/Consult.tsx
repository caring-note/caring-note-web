import { CounseleeControllerApi, CounselSessionControllerApi } from "@api/api";
import arrowHeadLeftGray from "@icon/arrowHeadLeftGray.png";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../components/Button";
import { changeActiveTab } from "../../reducers/tabReducer";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const tabTitle = (text: string, goPage: string, isHidden?: boolean) => {
  const navigate = useNavigate();
  const activeTab = useAppSelector((state) => state.tab.activeTab);
  const dispatch = useAppDispatch();

  return (
    <p
      className={`${
        activeTab === goPage
          ? "text-body2 font-bold text-primary-50 border-b-2 border-primary-50"
          : "text-body2 font-medium text-grayscale-50"
      } ${
        isHidden ? "hidden" : ""
      } mr-10 py-3 h-full flex items-center hover:text-primary-50 hover:border-b-2 border-primary-50 cursor-pointer`}
      onClick={() => {
        dispatch(changeActiveTab(goPage));
        navigate(goPage);
      }}>
      {text}
    </p>
  );
};

function Consult() {
  const [hidePastConsultTab, setHidePastConsultTab] = useState(true);
  let diseasesLength = 0;
  const SHOW_DISEASE_COUNT = 5;

  const counselSessionId = "TEST-COUNSEL-SESSION-01"; // TODO : 다른 곳에서 전달받아야됨
  const counselSessionControllerApi = new CounselSessionControllerApi();
  const counseleeControllerApi = new CounseleeControllerApi();

  const selectPreviousCounselSessionList = async () => {
    const response =
      await counselSessionControllerApi.selectPreviousCounselSessionList(
        counselSessionId,
      );
    console.log(response.data);
    return response.data;
  };

  const selectCounseleeBaseInformation = async () => {
    const response =
      await counseleeControllerApi.selectCounseleeBaseInformation(
        counselSessionId,
      );
    console.log(response.data);
    return response.data.data;
  };

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const previousCounselQuery = useQuery({
    queryKey: ["previousCounsel"],
    queryFn: selectPreviousCounselSessionList,
  });
  const counseleeBaseInfoQuery = useQuery({
    queryKey: ["counseleeBaseInfo"],
    queryFn: selectCounseleeBaseInformation,
  });

  useEffect(() => {
    if ((previousCounselQuery.data?.data?.length || 0) > 0) {
      setHidePastConsultTab(false);
      navigate("/consult/pastConsult");
    } else {
      setHidePastConsultTab(true);
      navigate("/consult/consultCard");
    }
  }, [previousCounselQuery.data]);

  useEffect(() => {
    diseasesLength = counseleeBaseInfoQuery.data?.diseases?.length || 0;
  }, [counseleeBaseInfoQuery.data]);

  return (
    <div>
      <div className="flex flex-col items-center justify-start w-full h-fit px-8 py-4">
        <div className="flex flex-row justify-start w-full mt-6">
          {/* 스펙 아웃 */}
          {/* <img
            src={arrowHeadLeftGray}
            alt="arrowHeadLeftGray"
            className="w-6 h-6"
          /> */}
        </div>
        <div className="flex flex-row items-center justify-start w-full h-8 mt-4 pl-6">
          <p className="text-h2 font-bold text-grayscale-100">
            {counseleeBaseInfoQuery.data?.name}
          </p>
          <Button _class="ml-6" variant="secondary" onClick={() => {}}>
            임시저장
          </Button>
          <Button _class="ml-2" variant="primary" onClick={() => {}}>
            기록완료
          </Button>
        </div>
        <div className="flex flex-row items-center justify-start w-full h-8 mt-4 pl-6">
          <p className="text-body1 font-medium text-grayscale-70">
            만 {counseleeBaseInfoQuery.data?.age}세
          </p>
          <div className="w-0.5 h-6 bg-grayscale-10 mx-2" />
          <p className="text-body1 font-medium text-grayscale-70">
            {counseleeBaseInfoQuery.data?.diseases
              ?.slice(0, SHOW_DISEASE_COUNT)
              .join(" · ")}
          </p>
          {diseasesLength > SHOW_DISEASE_COUNT ? (
            <p className="text-body1 font-medium text-grayscale-30 px-2">
              외 {diseasesLength - SHOW_DISEASE_COUNT}개의 질병
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start w-full h-auto pl-14 my-0 border-t-2 border-b-2 border-grayscale-5 ">
        {tabTitle("이전 상담 내역", "/consult/pastConsult", hidePastConsultTab)}
        {tabTitle("상담카드", "/consult/consultCard")}
        {tabTitle("의약물 기록", "/consult/medicineMemo")}
        {tabTitle("복약 상담", "/consult/medicineConsult")}
        {tabTitle("폐의약품 처리", "/consult/discardMedicine")}
      </div>
      <Outlet />
    </div>
  );
}

export default Consult;
