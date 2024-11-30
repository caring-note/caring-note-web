import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import { changeActiveTab } from "../../reducers/tabReducer";
import Badge from "../../components/Badge";
import CardContainer from "../../components/common/CardContainer";
import InputLayout from "../../components/layout/input/InputLayout";

type option = {
  val: string;
  name: string;
};
type element = {
  type: string;
  name: string;
  label: string;
  options?: option[];
  value: string;
  placeholder?: string;
};

const AssistantBasicInfo = () => {
  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/assistant/basicInfo")); // 해당 tab의 url
  }, []);
  const [assistantBasicInfo, setAssistantBasicInfo] = useState({
    name: "",
    birthDate: "",
    medicalWarantType: "",
    caringNumber: "",
    latestCaringDate: "",
  });

  const inputsRef: element[] = [
    {
      // 성명
      type: "text",
      name: "name",
      label: "성명",
      value: assistantBasicInfo.name,
      placeholder: "이름을 입력해주세요",
    },
    {
      // 생년월일
      type: "text",
      name: "birthDate",
      label: "생년월일",
      value: assistantBasicInfo.birthDate,
      placeholder: "생년월일을 입력해주세요",
    },
    {
      // 의료보장형태
      type: "select",
      name: "medicalWarantType",
      label: "의료보장형태",
      options: [
        {
          val: "medicalfee1",
          name: "의료급여1",
        },
        {
          val: "medicalfee2",
          name: "의료급여2",
        },
      ],
      value: assistantBasicInfo.medicalWarantType,
    },
    {
      // 상담차수
      type: "select",
      name: "caringNumber",
      label: "상담차수",
      options: [
        {
          val: "1",
          name: "1차",
        },
        {
          val: "2",
          name: "2차",
        },
      ],
      value: assistantBasicInfo.caringNumber,
    },
    {
      // 최근 상담일
      type: "text",
      name: "latestCaringDate",
      label: "최근 상담일",
      value: assistantBasicInfo.latestCaringDate,
      placeholder: "최근 상담일을 입력해주세요",
    },
  ];
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAssistantBasicInfo({ ...assistantBasicInfo, [name]: value });
  };
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAssistantBasicInfo({ ...assistantBasicInfo, [name]: value });
  };
  return (
    <div className="w-full h-auto pt-8 px-10">
      <Badge
        _class=""
        variant="primary"
        size="xl"
        type="tint"
        text="이전 상담 노트에서 불러온 정보를 토대로 손쉽게 작성해보세요"
        isIcon={true}
        isWarning={true}
      />
      <CardContainer
        _class="border-t-8 border-gray-400"
        title={<p className="font-bold text-xl">기본정보</p>}>
        <div className="px-5">
          <InputLayout
            inputsRef={inputsRef}
            onChange={onChange}
            onSelect={onSelect}
          />
        </div>
      </CardContainer>
      <CardContainer
        _class="border-gray-400"
        title={<p className="font-bold text-xl">상담 목적 및 특이사항</p>}>
        <div className="px-5">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5 px-5 py-7">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-10">
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[164px] gap-3">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <rect width="16" height="16" rx="3.2" fill="#2888F6"></rect>
                    <g clip-path="url(#clip0_2043_8221)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0295 4.05938C13.4385 4.43059 13.469 5.06301 13.0978 5.47194L7.2882 11.8719C7.09866 12.0807 6.82977 12.1998 6.54777 12.1998C6.26577 12.1998 5.99688 12.0807 5.80734 11.8719L2.90252 8.67194C2.53131 8.26301 2.56189 7.63059 2.97082 7.25938C3.37975 6.88817 4.01218 6.91875 4.38338 7.32768L6.54777 9.71201L11.617 4.12768C11.9882 3.71875 12.6206 3.68817 13.0295 4.05938Z"
                        fill="white"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2043_8221">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1b1b1c]">
                    약물 부작용 상담
                  </p>
                </div>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative">
                    <div className="w-4 h-4 absolute left-[-1.5px] top-[-1.5px] rounded bg-white border-2 border-[#909193]"></div>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1b1b1c]">
                    발병/질병에 대한 이해
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[164px] gap-3">
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet">
                    <rect width="16" height="16" rx="3.2" fill="#2888F6"></rect>
                    <g clip-path="url(#clip0_2043_11025)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0295 4.05938C13.4385 4.43059 13.469 5.06301 13.0978 5.47194L7.2882 11.8719C7.09866 12.0807 6.82977 12.1998 6.54777 12.1998C6.26577 12.1998 5.99688 12.0807 5.80734 11.8719L2.90252 8.67194C2.53131 8.26301 2.56189 7.63059 2.97082 7.25938C3.37975 6.88817 4.01218 6.91875 4.38338 7.32768L6.54777 9.71201L11.617 4.12768C11.9882 3.71875 12.6206 3.68817 13.0295 4.05938Z"
                        fill="white"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2043_11025">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1b1b1c]">
                    생활습관 관리
                  </p>
                </div>
                <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <div className="flex-grow-0 flex-shrink-0 w-4 h-4 relative">
                    <div className="w-4 h-4 absolute left-[-1.5px] top-[-1.5px] rounded bg-white border-2 border-[#909193]"></div>
                  </div>
                  <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#1b1b1c]">
                    기타
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[600px] relative gap-8">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-[#5e5f60]">
                특이사항
              </p>
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0">
                <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2 px-2 py-1.5 rounded bg-white border border-[#a8aaaf]">
                  <p className="flex-grow w-[444px] text-base font-medium text-left text-[#1b1b1c]">
                    약물 복용 관련 질문이 있어 신청(혈압약 및 건강약 3가지)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};
export default AssistantBasicInfo;
