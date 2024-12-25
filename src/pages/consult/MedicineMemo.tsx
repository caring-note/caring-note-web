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
import { useEffect, useState } from "react";
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
import NulpeumImg from "../../assets/temp-nulpeum.png";
import { Search } from "lucide-react";
import SearchComponent from "@components/common/SearchComponent";
import { MedicationControllerApi } from "@api/api";
import { createCustomConfiguration } from "@api/apiConfiguration";

const MedicineMemo: React.FC = () => {
  const [searchedMedicines, setSearchedMedicines] = useState<string[]>([
    "Loading...",
  ]);

  const rows = useAppSelector(
    (state) => state.prescribedMedicineTableState.rows,
  );
  const selectedRows = useAppSelector(
    (state) => state.prescribedMedicineTableState.selectedRowIds,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    // 새로고침이 되었을 때도 active tab 을 잃지 않도록 컴포넌트 load 시 dispatch
    dispatch(changeActiveTab("/consult/medicineMemo")); // 해당 tab의 url

    // 의약물 전체 목록을 가져와서 setSearchedMedicines
    // TODO? : 최초 렌더링에 의약물 전체를 가져온 뒤 Front에서 필터링하는 방식으로 구현
    medicationApi.searchMedicationByKeyword("").then((res) => {
      console.log(res.data);
      setSearchedMedicines(
        res.data.data
          ?.map((d) => d.itemName)
          .filter((item): item is string => item !== undefined) || [],
      );
    });
  }, []);

  const medicationApi = new MedicationControllerApi();

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
      field: "col2",
      headerName: "성분명 / 상품명",
      flex: 1,
      cellClassName: "!relative !h-full !overflow-visible",
      editable: true,
      renderCell: (params) => {
        return (
          <div className="truncate max-w-full">
            {params.value || (
              <span className="text-gray-400 italic">{"성분명 / 상품명"}</span>
            )}
          </div>
        );
      },
      renderEditCell: (params) => {
        return (
          <SearchComponent
            items={searchedMedicines}
            placeholder="성분명 / 상품명"
            onSelect={(item) => {
              params.api.setEditCellValue({
                id: params.id,
                field: params.field,
                value: item,
              });
            }}
            // onChangeInputValue={(value) => {
            //   // 300ms 디바운스로 의약물 검색하여 setSearchedMedicines
            //   medicationApi.searchMedication(value).then((res) => {
            //     console.log(res.data);
            //     setSearchedMedicines(
            //       res.data.data
            //         ?.map((d) => d.itemName)
            //         .filter((item): item is string => item !== undefined) || [],
            //     );
            //   });
            // }}
          />
        );
      },
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

  const handleClickAddMedicine = () => {
    dispatch(
      addRow({
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: null,
      }),
    );
  };

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
                _class=""
                disabled={selectedRows.length == 0}>
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
              key="prescribedMedicineTable"
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
              onClick={handleClickAddMedicine}>
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
          <p className="text-subtitle2 font-bold text-grayscale-90 mt-8">
            유용한 사이트
          </p>
          <div className="mt-6">
            <img
              src={NulpeumImg}
              alt="늘픔가치"
              className="w-60 h-60 inline-block mr-4"
            />
            <img
              src={NulpeumImg}
              alt="늘픔가치"
              className="w-60 h-60 inline-block mr-4"
            />
            <img
              src={NulpeumImg}
              alt="늘픔가치"
              className="w-60 h-60 inline-block mr-4"
            />
          </div>
        </div>
      </TabContentContainer>
    </>
  );
};

export default MedicineMemo;
