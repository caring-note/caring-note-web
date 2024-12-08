import TableComponent from "@components/common/TableComponent";
import {
  GridColDef,
  GridRowModel,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import {
  addRow,
  deleteRowById,
  setSelectedRowIds,
  updateRowById,
} from "@reducers/prescribedMedicineTableReducer";
import { changeActiveTab } from "@reducers/tabReducer";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../components/Button";
import TabContentContainer from "../../components/consult/TabContentContainer";
import GrayContainer from "./GrayContainer";
import { create } from "domain";
import {
  createDefaultDateColumn,
  createDefaultNumberColumn,
  createDefaultTextColumn,
} from "@utils/TableUtils";

const MedicineMemo: React.FC = () => {
  const rows = useAppSelector(
    (state) => state.prescribedMedicineTableState.rows,
  );
  const selectedRows = useAppSelector(
    (state) => state.prescribedMedicineTableState.selectedRowIds,
  );

  // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(changeActiveTab("/consult/medicineMemo")); // 해당 tab의 url
  }, []);

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: "사용상태",
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: ["상시복용", "필요시 복용", "일시중단"],
      renderCell: (params) => {
        return (
          params.value || <span className="text-gray-400 italic">선택</span>
        );
      },
      headerClassName: "!pl-6",
      cellClassName: "!pl-6",
    },
    {
      ...createDefaultTextColumn({
        field: "col2",
        headerName: "성분명 / 상품명",
      }),
      editable: true,
    },
    {
      ...createDefaultTextColumn({
        field: "col3",
        headerName: "약물 사용 목적",
      }),
      editable: true,
    },
    {
      ...createDefaultDateColumn({
        field: "col4",
        headerName: "처방 날짜",
      }),
      editable: true,
    },
    {
      ...createDefaultNumberColumn({
        field: "col5",
        headerName: "처방 일수",
        unitName: "일",
      }),
      editable: true,
    },
  ];

  return (
    <>
      <TabContentContainer>
        <GrayContainer
          title="처방 의약품"
          subTitle="최근 3개월 이내 복용 기준 약물 이용 내역"
          titleButton={
            <div className="inline-block">
              <Button
                variant="secondary"
                onClick={() => {
                  dispatch(deleteRowById(selectedRows));
                }}
                _class="">
                삭제하기
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  // TODO:  저장하기 버튼 클릭 시 API 연동
                  console.log(rows);
                  console.log(selectedRows);
                }}
                _class="">
                저장하기
              </Button>
            </div>
          }>
          <div className="h-auto">
            <TableComponent
              rows={rows}
              columns={columns}
              checkboxSelection={true}
              onUpdateCell={(update: GridRowModel) => {
                dispatch(updateRowById(update));
              }}
              onRowSelectionModelChange={(selection: string[]) => {
                dispatch(setSelectedRowIds(selection));
              }}
            />
            <Button
              _class="mt-2"
              variant="secondary"
              onClick={() => {
                dispatch(
                  addRow({
                    col1: "",
                    col2: "",
                    col3: "",
                    col4: "",
                    col5: null,
                  }),
                );
              }}>
              + 새 의약품 추가하기
            </Button>
          </div>
        </GrayContainer>

        <GrayContainer
          title="일반 의약품"
          subTitle="최근 3개월 이내 복용 기준 약물 이용 내역"
          titleButton={
            <Button variant="primary" onClick={() => {}} _class="">
              수정하기
            </Button>
          }>
          <div className="h-96">
            위 처방 의약품 테이블과 아주 동일하므로, 처방 의약품 테이블이 완전히
            제대로 작동하는지 확인 후 개발
          </div>
        </GrayContainer>

        <div>
          <p className="text-lg font-bold mt-8">유용한 사이트</p>
          <div className="h-40 bg-green-100 mt-8">이미지들</div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default MedicineMemo;
