import TableComponent from "@components/common/TableComponent";
import { GridColDef, GridRowModel, GridRowsProp } from "@mui/x-data-grid";
import {
  addRow,
  updateRowById,
} from "@reducers/prescribedMedicineTableReducer";
import { changeActiveTab } from "@reducers/tabReducer";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Button from "../../components/Button";
import TabContentContainer from "../../components/consult/TabContentContainer";
import GrayContainer from "./GrayContainer";

const MedicineMemo: React.FC = () => {
  const rows = useAppSelector(
    (state) => state.prescribedMedicineTableState.rows,
  );
  const memoizedRows = useMemo(() => rows, [rows]);

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
        return params.value || <span className="text-gray-400">선택</span>;
      },
    },
    {
      field: "col2",
      headerName: "일반텍스트",
      flex: 1,
      editable: true,
      renderCell: (params) => {
        return params.value || <span className="text-gray-400">입력해</span>;
      },
    },
    {
      field: "col3",
      headerName: "처방일수",
      headerAlign: "left",
      flex: 1,
      editable: true,
      type: "number",
      renderCell: (params) => {
        return params.value > 0 ? (
          `${params.value} 일`
        ) : (
          <span className="text-gray-400">0</span>
        );
      },
      align: "left",
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
                variant="primary"
                onClick={() => {
                  console.log(rows);
                }}
                _class="">
                저장하기 (로그확인)
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  // TODO: 선택된 row 삭제
                }}
                _class="">
                삭제하기 TODO
              </Button>
            </div>
          }>
          <div className="h-auto">
            <TableComponent
              rows={memoizedRows}
              columns={columns}
              onUpdateCell={(update: GridRowModel) => {
                dispatch(updateRowById(update));
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
                    col3: null,
                    name: "",
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
          <div className="h-96">테이블 컴포넌트</div>
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
