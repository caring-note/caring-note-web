import { CounselCardControllerApi } from "@api/api";
import CardContent from "@components/common/CardContent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks";
import Button from "../../components/Button";
import CardContainer from "../../components/common/CardContainer";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";

const ConsultCard: React.FC = () => {
  const counselSessionId = "TEST-COUNSEL-SESSION-01"; // TODO : 다른 곳에서 전달받아야됨
  const counselCardControllerApi = new CounselCardControllerApi();

  const selectCounselCard = async () => {
    const response = await counselCardControllerApi.selectCounselCard(
      counselSessionId,
    );
    console.log(response.data);
    return response.data;
  };

  // tanstack/react-query 를 사용하여 데이터 fetch
  const queryClient = useQueryClient();
  // 상담카드 API는 JSON Object 덩어리로 내려오므로 any 로 강제 type 해야 에러가 나지 않는다
  const consultCardQuery: any = useQuery({
    queryKey: ["consultCard"],
    queryFn: selectCounselCard,
  });
  // 상담카드 수정 시 사용
  const mutation = useMutation({
    mutationFn: async () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultCard"] });
    },
  });

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
              title="기본 정보"
              titleIcon="clock"
              variant="grayscale">
              <CardContent
                item="성명"
                value={
                  consultCardQuery.data?.data?.baseInformation?.baseInfo
                    ?.name || ""
                }
              />
              <CardContent
                item="생년월일"
                value={
                  consultCardQuery.data?.data?.baseInformation?.baseInfo
                    ?.birthDate || ""
                }
              />
              <CardContent
                item="의료보장형태"
                value={
                  consultCardQuery.data?.data?.baseInformation?.baseInfo
                    ?.counselSessionOrder || ""
                }
              />
            </CardContainer>
            <CardContainer title="상담 목적 및 특이사항" titleIcon="clock">
              <CardContent
                item="상담 목적"
                value={
                  consultCardQuery.data?.data?.baseInformation
                    ?.counselPurposeAndMomo?.counselPurpose || ""
                }
              />
              <CardContent
                item="특이사항"
                value={
                  consultCardQuery.data?.data?.baseInformation
                    ?.counselPurposeAndMomo?.SignificantNote || ""
                }
              />
              <CardContent
                item="의약품"
                value={
                  consultCardQuery.data?.data?.baseInformation
                    ?.counselPurposeAndMomo?.MedicationNote || ""
                }
              />
            </CardContainer>
            <CardContainer title="흡연" variant="secondary">
              <CardContent
                item="흡연 여부"
                value={
                  consultCardQuery.data?.data?.livingInformation?.smoking
                    ?.isSmoking
                    ? "흡연"
                    : "비흡연"
                }
              />
              <CardContent
                item="총 흡연기간"
                value={
                  consultCardQuery.data?.data?.livingInformation?.smoking
                    ?.smokingPeriodNote || ""
                }
              />
              <CardContent
                item="하루 평균 흡연량"
                value={
                  consultCardQuery.data?.data?.livingInformation?.smoking
                    ?.smokingAmount || ""
                }
              />
            </CardContainer>
            <CardContainer title="음주">
              <CardContent
                item="음주 여부"
                value={
                  consultCardQuery.data?.data?.livingInformation?.drinking
                    ?.isDrinking
                    ? "음주"
                    : "비음주"
                }
              />
              <CardContent
                item="음주 횟수"
                value={
                  consultCardQuery.data?.data?.livingInformation?.drinking
                    ?.drinkingAmount || ""
                }
              />
            </CardContainer>
            <CardContainer title="영양상태">
              <CardContent
                item="하루 식사 패턴"
                value={
                  consultCardQuery.data?.data?.livingInformation?.nutrition
                    ?.mealPattern || ""
                }
              />
              <CardContent
                item="식생활 특이사항"
                value={
                  consultCardQuery.data?.data?.livingInformation?.nutrition
                    ?.nutritionNote || ""
                }
              />
            </CardContainer>
            <CardContainer title="운동">
              <CardContent
                item="주간 운동 패턴"
                value={
                  consultCardQuery.data?.data?.livingInformation?.exercise
                    ?.exercisePattern || ""
                }
              />
              <CardContent
                item="운동 종류"
                value={
                  consultCardQuery.data?.data?.livingInformation?.exercise
                    ?.exerciseNote || ""
                }
              />
            </CardContainer>
            <CardContainer title="약 복용 관리">
              <CardContent
                item="독거 여부"
                value={
                  consultCardQuery.data?.data?.livingInformation
                    ?.medicationManagement?.isAlone
                    ? "혼자"
                    : "동거"
                }
              />
              <CardContent
                item="동거인 구성원"
                value={
                  consultCardQuery.data?.data?.livingInformation
                    ?.medicationManagement?.houseMateNote || ""
                }
              />
              <CardContent
                item="복용자 및 투약 보조자"
                value={
                  consultCardQuery.data?.data?.livingInformation?.medicationManagement?.medicationAssistants?.join(
                    ", ",
                  ) || ""
                }
              />
            </CardContainer>
          </div>
          <div id="consult-card-right" className="w-1/2">
            <CardContainer
              title="앓고 있는 질병"
              titleIcon="clock"
              variant="primary">
              <CardContent
                item="질병"
                value={
                  consultCardQuery.data?.data?.healthInformation?.diseaseInfo?.diseases?.join(
                    " · ",
                  ) || ""
                }
              />
              <CardContent
                item="질병 및 수술 이력"
                value={
                  consultCardQuery.data?.data?.healthInformation?.diseaseInfo
                    ?.historyNote || ""
                }
              />
              <CardContent
                item="주요 불편 증상"
                value={
                  consultCardQuery.data?.data?.healthInformation?.diseaseInfo
                    ?.mainInconvenienceNote || ""
                }
              />
            </CardContainer>
            <CardContainer title="알레르기" titleIcon="clock">
              <CardContent
                item="알레르기 여부"
                value={
                  consultCardQuery.data?.data?.healthInformation?.allergy
                    ?.isAllergy
                    ? "알레르기 있음"
                    : "없음"
                }
              />
              <CardContent
                item="의심 식품/약물"
                value={
                  consultCardQuery.data?.data?.healthInformation?.allergy
                    ?.allergyNote || ""
                }
              />
            </CardContainer>
            <CardContainer title="약물 부작용" titleIcon="clock">
              <CardContent
                item="약물 부작용 여부"
                value={
                  consultCardQuery.data?.data?.healthInformation
                    ?.medicationSideEffect?.isSideEffect
                    ? "약물 부작용 있음"
                    : "없음"
                }
              />
              <CardContent
                item="부작용 의심 약물"
                value={
                  consultCardQuery.data?.data?.healthInformation
                    ?.medicationSideEffect?.suspectedMedicationNote || ""
                }
              />
              <CardContent
                item="부작용 증상"
                value={
                  consultCardQuery.data?.data?.healthInformation
                    ?.medicationSideEffect?.symptomsNote || ""
                }
              />
            </CardContainer>
          </div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default ConsultCard;
