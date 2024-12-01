import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import HighlightInput from "@components/consult/HighlightInput";
import TabContentContainer from "@components/consult/TabContentContainer";
import { changeActiveTab } from "@reducers/tabReducer";
import GrayContainer from "@pages/consult/GrayContainer";

const MedicineConsult: React.FC = () => {
  const dispatch = useAppDispatch();
  const isRightNavigationOpen = useAppSelector(
    (state) => state.navigation.isOpenRightNavigation,
  );

  useEffect(() => {
    dispatch(changeActiveTab("/consult/medicineConsult")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <GrayContainer
          title="상담 기록"
          subTitle="하이라이트 시, 다음 지속 상담에 해당 내용을 가장 먼저 확인할 수 있어요">
          {/* 아래 조건은, 오른쪽 네비게이션이 활성화됐을 때 상담기록 textarea를 hide 한다 */}
          {/* 이유는, 같은 textarea를 쓰고 있기 때문에 화면이 겹치게 된다 (궁금하면 조건 풀어서 확인) */}
          {isRightNavigationOpen ? null : <HighlightInput />}
        </GrayContainer>

        <GrayContainer title="상담 필요도">
          <div className="h-96">라디오 버튼</div>
        </GrayContainer>
      </TabContentContainer>
    </>
  );
};

export default MedicineConsult;
