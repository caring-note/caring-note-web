import timeGray from "@icon/timeGray.png";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useAppDispatch } from "../../../hooks";
import Button from "../../components/Button";
import CardContainer from "../../components/common/CardContainer";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";
import CardContent from "@components/common/CardContent";
import { Card } from "@mui/material";

const ConsultCard: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/consultCard")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <div className="flex justify-between items-center">
          <TabContentTitle text="상담카드" />
          <Button variant="secondary" onClick={() => {}}>
            수정하기
          </Button>
        </div>

        <div className="flex justify-between items-start space-x-4">
          <div id="consult-card-left" className="w-1/2">
            <CardContainer
              title="상담 내용"
              titleIcon="clock"
              variant="primary">
              <div className="w-full flex-dir-row">
                <div className="w-1/2 inline-block">
                  <CardContent item="상담일" value="2021-08-01" />
                  <CardContent item="상담시간" value="10:00 ~ 11:00" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                </div>
                <div className="w-1/2 inline-block align-top">
                  <CardContent item="상담일" value="2021-08-01" />
                  <CardContent item="상담시간" value="10:00 ~ 11:00" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                </div>
              </div>
            </CardContainer>
            <CardContainer title="상담 내용" titleIcon="clock" variant="error">
              <CardContent item="상담일" value="2021-08-01" />
              <CardContent item="상담시간" value="10:00 ~ 11:00" />
              <CardContent item="복용자 및 투약 보조자" value="김상담" />
            </CardContainer>
            <CardContainer title="상담 내용">
              <CardContent item="상담일" value="2021-08-01" />
            </CardContainer>
            <CardContainer title="상담 내용">
              <CardContent item="상담일" value="2021-08-01" />
            </CardContainer>
            <CardContainer title="상담 내용">
              <CardContent item="상담일" value="2021-08-01" />
            </CardContainer>
            <CardContainer title="상담 내용">
              <CardContent item="상담일" value="2021-08-01" />
            </CardContainer>
          </div>
          <div id="consult-card-right" className="w-1/2">
            <CardContainer
              title="상담 내용"
              titleIcon="clock"
              variant="grayscale">
              <div className="w-full flex-dir-row">
                <div className="w-1/2 inline-block">
                  <CardContent item="상담일" value="2021-08-01" />
                  <CardContent item="상담시간" value="10:00 ~ 11:00" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                </div>
                <div className="w-1/2 inline-block">
                  <CardContent item="상담일" value="2021-08-01" />
                  <CardContent item="상담시간" value="10:00 ~ 11:00" />
                  <CardContent item="복용자 및 투약 보조자" value="김상담" />
                </div>
              </div>
            </CardContainer>
            <CardContainer
              title="상담 내용"
              titleIcon="clock"
              variant="secondary">
              <CardContent item="상담일" value="2021-08-01" />
              <CardContent item="상담시간" value="10:00 ~ 11:00" />
              <CardContent item="복용자 및 투약 보조자" value="김상담" />
            </CardContainer>
          </div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default ConsultCard;
