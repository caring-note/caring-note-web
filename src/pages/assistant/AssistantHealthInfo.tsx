import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";

const AssistantHealthInfo = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/assistant/healthInfo")); // 해당 tab의 url
  }, []);
  return <div>건강 정보 탭</div>;
};
export default AssistantHealthInfo;
