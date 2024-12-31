import { MedicationControllerApi } from "@api/api";
import SearchComponent from "@components/common/SearchComponent";
import TableComponent from "@components/common/TableComponent";
import { GridColDef } from "@mui/x-data-grid";
import { changeActiveTab } from "@reducers/tabReducer";
import useNomalMedicineTableStore from "@store/nomalMedicineTableStore";
import usePrescribedMedicineTableStore from "@store/prescribedMedicineTableStore";
import {
  createDefaultDateColumn,
  createDefaultNumberColumn,
  createDefaultTextColumn,
} from "@utils/TableUtils";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks";
import NulpeumImg from "../../assets/temp-nulpeum.png";
import Button from "../../components/Button";
import TabContentContainer from "../../components/consult/TabContentContainer";
import GrayContainer from "./GrayContainer";

const MedicineMemo: React.FC = () => {
  const [searchedMedicines, setSearchedMedicines] = useState<string[]>([
    "Loading...",
  ]);

  const {
    normalMedicineRows,
    selectedNormalMedicineRowIds,
    addNormalMedicineRow,
    updateNormalMedicineRowById,
    deleteNormalMedicineRowById,
    setSelectedNormalMedicineRowIds,
  } = useNomalMedicineTableStore();

  const {
    prescribedMedicineRows,
    selectedPrescribedMedicineRowIds,
    addPrescribedMedicineRow,
    updatePrescribedMedicineRowById,
    deletePrescribedMedicineRowById,
    setSelectedPrescribedMedicineRowIds,
  } = usePrescribedMedicineTableStore();

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

  // TODO: rows를 서버로 보내어 저장하는 로직 추가
  const handleClickSavePrescribedMedicine = () => {
    console.log(prescribedMedicineRows);
  };

  // TODO: rows를 서버로 보내어 저장하는 로직 추가
  const handleClickSaveNormalMedicine = () => {
    console.log(normalMedicineRows);
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
                onClick={() =>
                  deletePrescribedMedicineRowById(
                    selectedPrescribedMedicineRowIds,
                  )
                }
                _class=""
                disabled={selectedPrescribedMedicineRowIds.length == 0}>
                선택항목 삭제
              </Button>
            </div>
          }>
          <div className="h-auto">
            <TableComponent
              tableKey="prescribedMedicineTable"
              rows={prescribedMedicineRows}
              columns={columns}
              checkboxSelection={true}
              onUpdateCell={updatePrescribedMedicineRowById}
              onRowSelectionModelChange={setSelectedPrescribedMedicineRowIds}
              withAddButton
              onClickAddButton={() => {
                addPrescribedMedicineRow({
                  col1: "",
                  col2: "",
                  col3: "",
                  col4: "",
                  col5: null,
                });
              }}
            />
          </div>
        </GrayContainer>

        {/* TODO : 처방 의약품 테이블 확정 후 수정사항 반영 */}
        <GrayContainer
          title="일반 의약품"
          subTitle="가정 내 보관중인 모든 식품"
          titleButton={
            <div className="inline-block">
              <Button
                variant="secondary"
                onClick={() => {
                  deleteNormalMedicineRowById(selectedNormalMedicineRowIds);
                }}
                _class=""
                disabled={selectedNormalMedicineRowIds.length == 0}>
                삭제하기
              </Button>
              <Button
                variant="primary"
                onClick={handleClickSaveNormalMedicine}
                _class="">
                저장하기
              </Button>
            </div>
          }>
          <div className="h-auto">
            <TableComponent
              tableKey="nomalMedicineTable"
              rows={normalMedicineRows}
              columns={columns}
              checkboxSelection={true}
              onUpdateCell={updateNormalMedicineRowById}
              onRowSelectionModelChange={setSelectedNormalMedicineRowIds}
            />
            <Button
              _class="mt-2"
              variant="secondary"
              onClick={() => {
                addNormalMedicineRow({
                  col1: "",
                  col2: "",
                  col3: "",
                  col4: "",
                  col5: null,
                });
              }}>
              + 새 의약품 추가하기
            </Button>
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
