import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import TabContentContainer from "../../components/consult/TabContentContainer";

const MedicineMemo: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/medicineMemo")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <div className="bg-yellow-100">
          <p className="text-lg font-bold">처방 의약품</p>
          <p className="text-md font-normal text-gray-500">
            최근 3개월 이내 복용 기준 약물 이용 내역
          </p>
          <div className="h-96 bg-green-100 mt-8">테이블 컴포넌트</div>
        </div>
        <div className="bg-yellow-100 mt-10">
          <p className="text-lg font-bold">일반 의약품</p>
          <p className="text-md font-normal text-gray-500">
            최근 3개월 이내 복용 기준 약물 이용 내역
          </p>
          <div className="h-40 bg-green-100 mt-8">테이블 컴포넌트</div>
        </div>
        <div>
          <p className="text-lg font-bold mt-8">유용한 사이트</p>
          <div className="h-40 bg-green-100 mt-8">이미지들</div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default MedicineMemo;
