import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "@reducers/tabReducer";
import TabContentContainer from "@components/consult/TabContentContainer";
import TabContentTitle from "@components/consult/TabContentTitle";
import Button from "@components/Button";

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
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-lg font-medium mb-4">
            사용하지 않고 약이 남는 경우에 누구의 판단으로 사용하지 않게
            되었나요?
          </p>
          <div className="h-20 bg-green-100">라디오 버튼</div>
        </div>

        <div className="bg-gray-200 rounded-lg p-4 mt-4">
          <p className="text-lg font-medium mb-4">
            사용하지 않고 약이 남는 경우에 누구의 판단으로 사용하지 않게
            되었나요?
          </p>
          <div className="h-20 bg-green-100">많은 버튼들</div>
          <p className="text-lg font-medium mb-4">
            사용하지 않고 약이 남는 경우에 누구의 판단으로 사용하지 않게
            되었나요?
          </p>
          <div className="h-20 bg-green-100">많은 버튼들</div>
          <p className="text-lg font-medium mb-4">
            사용하지 않고 약이 남는 경우에 누구의 판단으로 사용하지 않게
            되었나요?
          </p>
          <div className="h-20 bg-green-100">많은 버튼들</div>
        </div>

        <div className="mt-8">
          <div className="flex flex-row items-center justify-between">
            <TabContentTitle text="폐의약품 목록" />
            <Button variant="primary" onClick={() => {}} _class="mb-4">
              수정하기
            </Button>
          </div>
          <div className="h-96 bg-green-100">테이블</div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default DiscardMedicine;
