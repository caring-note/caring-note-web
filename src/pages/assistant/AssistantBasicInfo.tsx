import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import Badge from "../../components/Badge";

const AssistantBasicInfo = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/assistant/basicInfo")); // 해당 tab의 url
  }, []);
  return (
    <div className="flex flex-col items-start justify-center bg-white w-full px-10 pt-5">
      <Badge
        _class=""
        variant="primary"
        size="xl"
        type="tint"
        text="이전 상담 노트에서 불러온 정보를 토대로 손쉽게 작성해보세요"
        isIcon={true}
        isWarning={true}
      />
    </div>
  );
};
export default AssistantBasicInfo;
