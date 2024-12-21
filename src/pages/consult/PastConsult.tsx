import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";
import highlightpenBlue from "@icon/highlightpenBlue.png";
import listYellow from "@icon/listYellow.png";
import TableComponent from "@components/common/TableComponent";
import { GridColDef } from "@mui/x-data-grid";
import {
  createDefaultTextColumn,
  createDefaultNumberColumn,
  createDefaultDateColumn,
} from "@utils/TableUtils";
import GradationContainer from "@components/consult/PastConsultContainer";
import PastConsultContainer from "@components/consult/PastConsultContainer";

const PastConsult: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/pastConsult")); // 해당 tab의 url
  }, []);

  const columns: GridColDef[] = [
    {
      ...createDefaultNumberColumn({
        field: "col1",
        headerName: "상담횟수",
        unitName: "회차",
        isFirstColumn: true,
      }),
    },
    {
      ...createDefaultDateColumn({
        field: "col2",
        headerName: "상담일자",
      }),
    },
    { ...createDefaultTextColumn({ field: "col3", headerName: "담당약사" }) },
    {
      ...createDefaultTextColumn({ field: "col4", headerName: "케어링메세지" }),
    },
  ];
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  return (
    <>
      <TabContentContainer>
        <TabContentTitle text="이전 상담 내용" />
        <div className="flex flex-row justify-between items-start space-x-4">
          <PastConsultContainer title="상담 기록 하이라이트" variant="primary">
            <ul className="mt-4 text-body1 font-medium space-y-2">
              <li className="border-l-2 border-grayscale-10 pl-2">
                5년 전 우측 고관절에 골절상을 입음
              </li>
              <li className="border-l-2 border-grayscale-10 pl-2">고지혈증</li>
              <li className="border-l-2 border-grayscale-10 pl-2">
                신장에 물혹이 있음
              </li>
              <li className="border-l-2 border-grayscale-10 pl-2">
                혼자살기 외로워 하며, 알코올 중독 증세가 있음. 돌봄 요양사의
                특별 조치가 필요해보임. 가능하다면 푸드뱅크 제도 연계 가능한지
                확인 필요
              </li>
              <li className="border-l-2 border-grayscale-10 pl-2">
                당뇨약과 혈압약을 복용 중이나, 지속적인 약 수급에 문제가 있음.
                꾸준한 복약 상담 관찰이 필요
              </li>
              <li className="border-l-2 border-grayscale-10 pl-2">
                당뇨약과 혈압약을 복용 중이나, 지속적인 약 수급에 문제가 있음.
                꾸준한 복약 상담 관찰이 필요
              </li>
              <li className="border-l-2 border-grayscale-10 pl-2">
                당뇨약과 혈압약을 복용 중이나, 지속적인 약 수급에 문제가 있음.
                꾸준한 복약 상담 관찰이 필요
              </li>
            </ul>
          </PastConsultContainer>

          <PastConsultContainer title="상담노트 요약" variant="secondary">
            <h2 className="text-subtitle2 font-bold text-secondary-70 flex items-center"></h2>
            <p className="mt-4 whitespace-pre-wrap">
              [약 복용 및 관리] 내담자는 당뇨약과 혈압약을 복용 중이며,
              보건소에서 약 복용 여부에 대해 의견을 들었다고 언급. 혈압 수치
              (130-140)와 관련하여 약을 줄일 수 있는지질문. 약사는 재 복용 중인
              약이 뇌졸중 예방에 중요하다고 설명. 2. **혈압 및 당뇨 관리**: -
              내담자는 혈압이 상황에 따라 변동이 있다고 언급. 약사도 혈압 약의
              중요성을 강조하며, 지속적인 복용을 권장. - 당뇨약 복용에 대해
              조정이 가능하다는 의견을 제시하고, 혈당 조절이 잘 되고 있다고
              확인. 3. **건강 이력**: - 내담자는 과거에 뇌경색 경험이 있으며,
              현재는 큰 문제 없이 생활하고 있다고 설명. - 약사와 내담자 간에
              뇌졸중 예방을 위한 약물 복용의 필요성에 대해 논의. 4. **상담
              마무리**: - 내담자는 약물 복용을 계속할 것이라고 응답. - 약사는
              내담자에게 약 복용을 잘 유지하라고 조언하며, 건강한 생활을 위해
              주의할 점을 강조.
            </p>
          </PastConsultContainer>
        </div>

        <TabContentTitle className="mt-12" text="상담 내역" />
        <p className="text-body1 font-medium text-grayscale-70 ">
          케어링 노트로 남긴 상담 내역이 노출됩니다
        </p>
        <div className="h-auto mt-4">
          {/* TODO: rows는 API로 받아와서 세팅 */}
          <TableComponent
            rows={[
              {
                id: 1,
                col1: 1,
                col2: "2021-09-01",
                col3: "김약사",
                col4: "(TODO)",
              },
              {
                id: 2,
                col1: 2,
                col2: "2021-09-03",
                col3: "박약사",
                col4: "(TODO)",
              },
              {
                id: 3,
                col1: 3,
                col2: "2021-09-05",
                col3: "이약사",
                col4: "(TODO)",
              },
            ]}
            columns={memoizedColumns}
          />
        </div>
      </TabContentContainer>
    </>
  );
};

export default PastConsult;
