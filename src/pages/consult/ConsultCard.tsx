import timeGray from "@icon/timeGray.png";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useAppDispatch } from "../../../hooks";
import Button from "../../components/Button";
import ConsultCardContainer from "../../components/consult/ConsultCardContainer";
import TabContentContainer from "../../components/consult/TabContentContainer";
import TabContentTitle from "../../components/consult/TabContentTitle";
import { changeActiveTab } from "../../reducers/tabReducer";

const ConsultCard: React.FC = () => {
  const [modalStyle, setModalStyle] = useState<ReactModal.Styles>({});
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/consultCard")); // 해당 tab의 url
  }, []);

  const openModalAtPosition = (
    e: React.MouseEvent<HTMLImageElement>,
    dir?: "left" | "right" | undefined,
  ) => {
    // 클릭한 위치에서 마우스 좌표를 가져옴
    const { clientX, clientY } = e;

    // 모달의 위치를 클릭한 위치로 설정
    setModalStyle({
      content: {
        top: `${clientY + 10}px`, // 클릭 위치에서 10px 아래
        left: `${dir === "right" ? clientX + 10 : clientX - 300}px`, // -300은 width와 같음
        position: "absolute",
        transform: "none", // transform은 사용하지 않음
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "white",
        width: "300px", // 원하는 너비 설정
        height: "auto",
      },
      overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
    });

    setIsHistoryModalOpen(true);
  };

  return (
    <>
      <TabContentContainer>
        <div className="flex justify-between items-center mb-6">
          <TabContentTitle text="상담카드" />
          <Button variant="secondary" onClick={() => {}}>
            수정하기
          </Button>
        </div>

        <div className="flex justify-between items-start space-x-4">
          <div id="consult-card-left" className="w-1/2">
            <ConsultCardContainer
              _class="border-t-4 border-gray-500"
              title={<p className="font-bold">기본정보</p>}>
              <div className="h-20 p-4">여러가지 정보들</div>
            </ConsultCardContainer>
            <ConsultCardContainer
              title={
                <div className="flex justify-item-center">
                  <span className="font-bold">기본정보</span>
                  <img
                    src={timeGray}
                    className="w-6 h-6"
                    onClick={(e) => openModalAtPosition(e, "right")}
                  />
                </div>
              }>
              {"카드"}
            </ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
            <ConsultCardContainer
              _class="border-t-4 border-yellow-500"
              title={<p className="font-bold">기본정보</p>}>
              <div className="h-24 p-4">여러가지 정보들</div>
            </ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
          </div>

          <div id="consult-card-right" className="w-1/2">
            <ConsultCardContainer
              _class="border-t-4 border-blue-500"
              title={
                <div className="flex justify-item-center">
                  <span className="font-bold">기본정보</span>
                  <img
                    src={timeGray}
                    className="w-6 h-6"
                    onClick={(e) => openModalAtPosition(e, "right")}
                  />
                </div>
              }>
              <div className="h-16 p-4">여러가지 정보들</div>
            </ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
            <ConsultCardContainer>{"카드"}</ConsultCardContainer>
          </div>
        </div>
      </TabContentContainer>

      <ReactModal
        isOpen={isHistoryModalOpen}
        style={modalStyle}
        onRequestClose={() => setIsHistoryModalOpen(false)}>
        <div>히스토리</div>
        <div>다양한 정보들</div>
      </ReactModal>
    </>
  );
};

export default ConsultCard;
