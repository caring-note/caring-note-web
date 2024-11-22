import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import TabContentContainer from "../../components/consult/TabContentContainer";

const MedicineConsult: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/medicineConsult")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <p className="text-lg font-bold">상담 기록</p>
        <p className="text-md font-normal text-gray-500">
          하이라이트 시, 다음 지속 상담에 해당 내용을 가장 먼저 확인할 수 있어요
        </p>
        <div className="h-96 bg-green-100">input text</div>

        <p className="text-lg font-bold mt-8">상담 필요도</p>
        <div className="h-96 bg-green-100">라디오 버튼</div>
      </TabContentContainer>
    </>
  );
};

export default MedicineConsult;
