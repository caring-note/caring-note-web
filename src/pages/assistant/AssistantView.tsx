import TableComponent from "@components/common/TableComponent";
import { Button } from "@components/components/ui/button";
import { GridColDef } from "@mui/x-data-grid";
import {
  createDefaultDateColumn,
  createDefaultTextColumn,
} from "@utils/TableUtils";
import moment from "moment";

const AssistantView = () => {
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
          <Button variant={"primary"}>카드 작성</Button>
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

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-primary-30">
        <p className="w-full font-bold text-h2 text-primary-70 pl-28">
          박진완님, <br />
          오늘도 힘찬 하루를 보내세요!{" "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center pt-20 bg-grayscale-3">
        <div className="flex flex-row items-center justify-center w-full px-24 mt-10 space-x-5">
          <div className="grid w-full grid-cols-2 p-6 bg-white shadow-lg rounded-xl">
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
          <div className="w-full h-auto p-10 bg-white shadow-lg rounded-xl">
            <div className="mt-10">
              <TableComponent
                key="home-table"
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
          <div className="grid items-center w-full h-auto grid-cols-2 gap-4 p-10 bg-white shadow-lg rounded-xl">
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
    </>
  );
};

export default AssistantView;
