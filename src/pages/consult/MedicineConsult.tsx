import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import HighlightInput from "../../components/consult/HighlightInput";
import TabContentContainer from "../../components/consult/TabContentContainer";
import { changeActiveTab } from "../../reducers/tabReducer";
import logoBlack from "../../assets/logoBlack.png";
import GrayContainer from "./GrayContainer";

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
          {isRightNavigationOpen ? (
            <div className="flex items-center justify-center">
              <div className="min-h-72 flex flex-col items-center justify-center space-y-1">
                <img className="w-28 h-28 mb-4" src={logoBlack} alt="logo" />
                <p className="text-body1 font-bold text-grayscale-60">
                  우측 창이 열려있는 상태에서 동시에 사용할 수 없어요
                </p>
                <p className="text-caption1 text-grayscale-60">
                  이 곳을 이용하고 싶으시다면 우측 창을 닫아주세요!
                </p>
              </div>
              <div className="min-w-60"></div>
            </div>
          ) : (
            <HighlightInput />
          )}
        </GrayContainer>

        {/* 늘픔가치 1차 인터뷰 이후 스펙아웃 */}
        {/* <GrayContainer title="상담 필요도">
          <div className="h-96">라디오 버튼</div>
        </GrayContainer> */}
      </TabContentContainer>
    </>
  );
};

export default MedicineConsult;
