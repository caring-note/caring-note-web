import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";

const AssistantBasicInfo = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/assistant/basicInfo")); // 해당 tab의 url
  }, []);
  return <div>기본 정보 탭</div>;
};
export default AssistantBasicInfo;
