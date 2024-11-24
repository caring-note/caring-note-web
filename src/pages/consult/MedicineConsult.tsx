import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import TabContentContainer from "../../components/consult/TabContentContainer";
import GrayContainer from "./GrayContainer";

const MedicineConsult: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/medicineConsult")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <GrayContainer
          title="상담 기록"
          subTitle="하이라이트 시, 다음 지속 상담에 해당 내용을 가장 먼저 확인할 수 있어요">
          <div className="h-96">input text</div>
        </GrayContainer>

        <GrayContainer title="상담 필요도">
          <div className="h-96">라디오 버튼</div>
        </GrayContainer>
      </TabContentContainer>
    </>
  );
};

export default MedicineConsult;
