import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";

const PastConsult: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/consultCard")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <TabContentTitle text="최신 상담 내역" />
        <div className="flex flex-row bg-blue-100">
          <div className="w-1/2 h-96">상담기록 하이라이트</div>
          <div>상담노트 요약</div>
        </div>

        <TabContentTitle text="이전 상담 내역" />
        <p className="text-xl font-medium text-gray-500">
          케어링 노트로 남긴 상담 내역이 노출됩니다
        </p>
        <div className="h-96">테이블</div>
      </TabContentContainer>
    </>
  );
};

export default PastConsult;
