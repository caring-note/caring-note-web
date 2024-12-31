import TableComponent from "@components/common/TableComponent";
import { Button } from "@components/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@components/components/ui/dialog";
import { GridColDef } from "@mui/x-data-grid";
import {
  createDefaultDateColumn,
  createDefaultTextColumn,
} from "@utils/TableUtils";
import moment from "moment";
import { useEffect, useState } from "react";
import arrowForwardIcon from "@icon/24/arrowback.outlined.black.svg";
import AgreementDetailsDialog from "./AgreementDetailsDialog";
import AgreementDetails2Dialog from "./AgreementDetails2Dialog";
import AgreementDetails3Dialog from "./AgreementDetails3Dialog";
import { useNavigate } from "react-router-dom";

const AssistantView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isDetails2DialogOpen, setIsDetails2DialogOpen] = useState(false);
  const [isDetails3DialogOpen, setIsDetails3DialogOpen] = useState(false);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: "예약 시각",
      flex: 1,
      renderCell: (params) => {
        const formattedDate = params.value
          ? moment(params.value).format("HH:mm")
          : null;
        return (
          formattedDate || <span className="italic text-gray-400">HH:mm</span>
        );
      },
    },
    {
      ...createDefaultDateColumn({
        field: "col2",
        headerName: "상담 일자",
      }),
    },
    {
      ...createDefaultTextColumn({
        field: "col3",
        headerName: "상담 진행",
      }),
    },
    {
      ...createDefaultTextColumn({
        field: "col4",
        headerName: "내담자명",
      }),
    },
    {
      field: "col5",
      headerName: "기초 상담 카드",
      flex: 1,
      renderCell: (params) => {
        // TODO : 할당 여부에 따라 버튼 diable 처리 (아래는 임시 코드)
        return parseInt(params.id.toString()) % 2 === 1 ? (
          <Button variant={"primary"} onClick={handleOpen}>
            카드 작성
          </Button>
        ) : (
          <Button variant={"secondary"} disabled>
            작성 완료
          </Button>
        );
      },
    },
  ];

  const testRows = [
    {
      id: "1",
      col1: new Date(),
      col2: new Date(),
      col3: "예정",
      col4: "박진완",
    },
    {
      id: "2",
      col1: new Date(),
      col2: new Date(),
      col3: "예정",
      col4: "김진영",
    },
    {
      id: "3",
      col1: new Date(),
      col2: new Date(),
      col3: "예정",
      col4: "조영호",
    },
  ];

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // data-scroll-locked 제거
    document.body.removeAttribute("data-scroll-locked");
  });
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-20 pb-20 bg-primary-30">
        <p className="w-full font-bold text-h2 text-primary-70 pl-28">
          박진완님, <br />
          오늘도 힘찬 하루를 보내세요!{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 bg-grayscale-3">
        <div className="flex flex-row items-center justify-center w-full px-24 mt-10 space-x-5">
          <div className="grid w-full grid-cols-2 p-6 bg-white rounded-lg shadow-lg">
            <div className="w-full p-4 text-center">
              <h1 className="text-xl font-bold text-secondary-50">
                약으로 이어지는 건강한 변화들
              </h1>
              <p className="text-sm text-gray-500">2025.03.01 기준</p>
            </div>
            <div className="flex grid-cols-2 gap-4">
              <div className="w-1/2 p-4 text-center rounded-lg bg-secondary-5">
                <h2 className="font-semibold text-grayscale-90">
                  복약상담소 방문자
                </h2>
                <p className="text-2xl font-bold text-secondary-50">
                  000,000명
                </p>
              </div>
              <div className="w-1/2 p-4 text-center rounded-lg bg-secondary-5">
                <h2 className="font-semibold text-grayscale-90">
                  케어링 메시지 연계
                </h2>
                <p className="text-2xl font-bold text-secondary-50">
                  000,000회
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-24 pt-10">
          <div className="w-full h-auto p-10 bg-white rounded-xl">
            <div className="mt-10">
              <TableComponent
                tableKey="home-table"
                rows={testRows}
                columns={columns}
                checkboxSelection={false}
                onUpdateCell={() => {}}
                onRowSelectionModelChange={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-24 pt-10 pb-10">
          <div className="grid items-center w-full h-auto grid-cols-2 gap-4 p-10 bg-white rounded-xl">
            <div className="w-1/2 text-left">
              <h1 className="text-2xl font-bold text-primary-60">
                동료약사의 따뜻한 마음
              </h1>
            </div>
            <div className="w-full p-4 rounded-lg bg-primary-5">
              <p className="text-gray-700">
                약대 입학 후 얼마 안 되었을 때, 더 나은 사회를 위해 같이
                공부하고 행동해 보자는 글귀를 읽고 가입하기로 마음먹었어요.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={handleOpen}>
        <DialogOverlay />
        <DialogContent className="w-[480px] h-[350px] flex flex-col justify-between">
          <DialogHeader className="pt-2 border-none">
            <DialogTitle className="text-2xl font-bold text-grayscale-100">
              개인정보 수집 동의서를 작성해주세요.
            </DialogTitle>
          </DialogHeader>

          <div className="p-5 space-y-3 bg-grayscale-3">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => {
                setIsDetailsDialogOpen(true);
                setIsOpen(false);
              }}>
              <h2 className="ml-2 text-grayscale-90">
                개인정보 수집 · 이용 내역 동의
              </h2>
              <img
                src={arrowForwardIcon}
                className="rotate-180 cursor-pointer"
              />
            </div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => {
                setIsDetails2DialogOpen(true);
                setIsOpen(false);
              }}>
              <h2 className="ml-2 text-grayscale-90">
                개인정보의 제 3자 제공 동의
              </h2>

              <img
                src={arrowForwardIcon}
                className="rotate-180 cursor-pointer"
              />
            </div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => {
                setIsDetails3DialogOpen(true);
                setIsOpen(false);
              }}>
              <h2 className="ml-2 text-grayscale-90">
                폐의약품 수거에 관한 동의
              </h2>
              <img
                src={arrowForwardIcon}
                className="rotate-180 cursor-pointer"
              />
            </div>
          </div>

          <DialogFooter className="justify-center">
            <Button
              className={"w-full bg-primary-50 text-white h-12"}
              onClick={() => navigate("/assistant/view/basicInfo")}>
              전부 동의하고 시작하기
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AgreementDetailsDialog
        isDetailOpen={isDetailsDialogOpen}
        mainOpen={() => setIsOpen(true)}
        onClose={() => setIsDetailsDialogOpen(false)}
      />
      <AgreementDetails2Dialog
        isDetailOpen={isDetails2DialogOpen}
        mainOpen={() => setIsOpen(true)}
        onClose={() => setIsDetails2DialogOpen(false)}
      />
      <AgreementDetails3Dialog
        isDetailOpen={isDetails3DialogOpen}
        mainOpen={() => setIsOpen(true)}
        onClose={() => setIsDetails3DialogOpen(false)}
      />
    </div>
  );
};

export default AssistantView;
