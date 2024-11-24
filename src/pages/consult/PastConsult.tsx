import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";
import highlightpenBlue from "@icon/highlightpenBlue.png";
import listYellow from "@icon/listYellow.png";

const PastConsult: React.FC = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/pastConsult")); // 해당 tab의 url
  }, []);

  return (
    <>
      <TabContentContainer>
        <TabContentTitle text="최신 상담 내역" />
        <div className="flex flex-row justify-between items-start space-x-4">
          <div className="w-1/2 bg-gradient-to-b from-white to-blue-200 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold text-blue-600 flex items-center">
              <img
                src={highlightpenBlue}
                alt="highlightpenBlue"
                className="w-4 h-4 inline-block mr-2"
              />
              상담 기록 하이라이트
            </h2>
            <ul className="mt-3 text-sm space-y-2">
              <li className="border-l-2 border-blue-500 pl-2">
                5년 전 우측 고관절에 골절상을 입음
              </li>
              <li className="border-l-2 border-blue-500 pl-2">고지혈증</li>
              <li className="border-l-2 border-blue-500 pl-2">
                신장에 물혹이 있음
              </li>
              <li className="border-l-2 border-blue-500 pl-2">
                혼자살기 외로워 하며, 알코올 중독 증세가 있음. 돌봄 요양사의
                특별 조치가 필요해보임. 가능하다면 푸드뱅크 제도 연계 가능한지
                확인 필요
              </li>
              <li className="border-l-2 border-blue-500 pl-2">
                당뇨약과 혈압약을 복용 중이나, 지속적인 약 수급에 문제가 있음.
                꾸준한 복약 상담 관찰이 필요
              </li>
            </ul>
          </div>

          <div className="w-1/2 bg-gradient-to-b from-white to-yellow-200 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold text-yellow-600 flex items-center">
              <img
                src={listYellow}
                alt="listYellow"
                className="w-4 h-4 inline-block mr-2"
              />
              상담노트 요약
            </h2>
            <p className="whitespace-pre-wrap">
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
          </div>
        </div>

        <TabContentTitle _class="mt-6" text="이전 상담 내역" />
        <p className="text-lg font-medium text-gray-500 ">
          케어링 노트로 남긴 상담 내역이 노출됩니다
        </p>
        <div className="mt-4 h-96 bg-gray-200">테이블</div>
      </TabContentContainer>
    </>
  );
};

export default PastConsult;
