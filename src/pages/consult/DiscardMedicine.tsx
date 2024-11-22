import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";

const DiscardMedicine: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/discardMedicine")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <TabContentTitle text="폐의약품의 처리" />
        <div>
          <p className="text-lg font-bold mt-8">
            사용하지 않고 약이 남는 경우에 누구의 판단으로 사용하지 않게
            되었나요?
          </p>
          <div className="h-40 bg-green-100">라디오 버튼</div>
        </div>

        <div className="mt-8">
          <TabContentTitle text="폐의약품 목록" />
          <div className="h-96 bg-green-100">테이블</div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default DiscardMedicine;
