import {
  AddAndUpdateMedicationRecordHistReq,
  MedicationControllerApi,
  MedicationRecordHistControllerApi,
  SelectMedicationRecordHistResDivisionCodeEnum,
  SelectMedicationRecordHistResUsageStatusCodeEnum,
} from "@/api/api";
import SearchComponent from "@/components/common/SearchComponent";
import TableComponent from "@/components/common/TableComponent";
import { Button } from "@/components/ui/button";
import { GridColDef } from "@mui/x-data-grid";
import { changeActiveTab } from "@/reducers/tabReducer";
import useMedicineMemoStore from "@/store/medicineMemoStore";
import useNomalMedicineTableStore from "@/store/nomalMedicineTableStore";
import usePrescribedMedicineTableStore from "@/store/prescribedMedicineTableStore";
import { useQuery } from "@tanstack/react-query";
import {
  createDefaultDateColumn,
  createDefaultNumberColumn,
  createDefaultTextColumn,
} from "@/utils/TableUtils";
import { useEffect } from "react";
import { useAppDispatch } from "@/app/reduxHooks";
import NulpeumImg from "@/assets/temp-nulpeum.png";
import TabContentContainer from "@/components/consult/TabContentContainer";
import GrayContainer from "../GrayContainer";

const MedicineMemo: React.FC = () => {
  const counselSessionId = "TEST-COUNSEL-SESSION-01"; // TODO : 다른 곳에서 전달받아야됨

  const medicationApi = new MedicationControllerApi();
  const medicationRecordHistControllerApi =
    new MedicationRecordHistControllerApi();

  const searchMedicationByKeyword = async (keyword: string) => {
    const response = await medicationApi.searchMedicationByKeyword(keyword);
    console.log("searchMedicationByKeyword", response);
    return response;
  };
  const selectMedicationRecordListBySessionId1 = async () => {
    const response =
      await medicationRecordHistControllerApi.selectMedicationRecordListBySessionId1(
        counselSessionId,
      );
    console.log("selectMedicationRecordListBySessionId1", response);
    return response;
  };
  const addAndUpdateMedicationRecordHist = async (
    editedData: AddAndUpdateMedicationRecordHistReq[],
  ) => {
    const response =
      await medicationRecordHistControllerApi.addAndUpdateMedicationRecordHist(
        counselSessionId,
        editedData,
      );
    console.log("addAndUpdateMedicationRecordHist", response);
    return response;
  };

  const searchMedicationByKeywordQuery = useQuery({
    queryKey: ["searchMedicationByKeyword"],
    queryFn: () => searchMedicationByKeyword(""),
    enabled: false,
  });
  const selectMedicationRecordListBySessionIdQuery = useQuery({
    queryKey: ["selectMedicationRecordListBySessionId"],
    queryFn: selectMedicationRecordListBySessionId1,
    enabled: false,
  });
  const addAndUpdateMedicationRecordHistQuery = useQuery({
    queryKey: ["addAndUpdateMedicationRecordHist"],
    queryFn: () => addAndUpdateMedicationRecordHist,
    enabled: false,
  });

  const {
    originalData,
    editedData,
    setOriginalData,
    setEditedData,
    setHttpStatus,
  } = useMedicineMemoStore();

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
  }, []);

  useEffect(() => {
    // API 호출
    searchMedicationByKeywordQuery.refetch();
    selectMedicationRecordListBySessionIdQuery.refetch().then(() => {
      // 처방 의약품 데이터 셋팅
      if (
        selectMedicationRecordListBySessionIdQuery.isSuccess &&
        JSON.stringify(originalData) === "[]"
      ) {
        setHttpStatus &&
          setHttpStatus(
            selectMedicationRecordListBySessionIdQuery.data?.status || 0,
          );
        setOriginalData &&
          setOriginalData([
            ...(selectMedicationRecordListBySessionIdQuery.data?.data?.data ||
              []),
          ]);

        console.log("jw, medicineMemo:: originalData updated!!");

        // 의약품 테이블 zustand 데이터 세팅
        selectMedicationRecordListBySessionIdQuery.data?.data?.data?.map(
          (item) => {
            if (
              item.divisionCode ===
              SelectMedicationRecordHistResDivisionCodeEnum.Prescription
            ) {
              addPrescribedMedicineRow({
                id: item.rowId,
                col1: item.usageStatusCode,
                col2: item.medicationName,
                col3: item.usageObject,
                col4: item.prescriptionDate,
                col5: item.prescriptionDays,
              });
            } else if (
              item.divisionCode ===
              SelectMedicationRecordHistResDivisionCodeEnum.Otc
            ) {
              addNormalMedicineRow({
                id: item.rowId,
                col1: item.usageStatusCode,
                col2: item.medicationName,
                col3: item.usageObject,
                col4: item.prescriptionDate,
                col5: item.prescriptionDays,
              });
            }
          },
        );
      }
    });
  }, [originalData]);

  const columns: GridColDef[] = [
    {
      field: "col1",
      headerName: "사용상태",
      flex: 1,
      editable: true,
      type: "singleSelect",
      valueOptions: ["상시 복용", "필요 시 복용", "복용 중단"],
      renderCell: (params) => {
        return (
          params.value || <span className="text-gray-400 italic">선택</span>
        );
      },
      // headerClassName: "!pl-6",
      // cellClassName: "!pl-6",
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
            items={
              searchMedicationByKeywordQuery.data?.data?.data?.map(
                (item) => item.itemName || "",
              ) || []
            }
            placeholder="성분명 / 상품명"
            onSelect={(item) => {
              params.api.setEditCellValue({
                id: params.id,
                field: params.field,
                value: item,
              });
            }}
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

  const test = () => {
    console.log("originalData", originalData);
    console.log("prescribedMedicineRows", prescribedMedicineRows);

    // prescribedMedicineRows 에 수정되어 저장돼있는걸 editedData 에 이쁘게 넣어주기
    editedData?.map((item) => {
      const idx = prescribedMedicineRows.findIndex(
        (row) => row.id === item.rowId,
      );

      // 조회해온 데이터를 수정한 경우
      if (idx !== -1) {
        item.usageStatusCode = prescribedMedicineRows[idx].col1;
        item.medicationName = prescribedMedicineRows[idx].col2;
        item.usageObject = prescribedMedicineRows[idx].col3;
        item.prescriptionDate = prescribedMedicineRows[idx].col4;
        item.prescriptionDays = prescribedMedicineRows[idx].col5;
      }
      // 모든 row에 대해 medicationId 를 넣어주기 (있는 경우에만)
      item.medicationId =
        searchMedicationByKeywordQuery.data?.data?.data?.find(
          (medication) => medication.itemName === item.medicationName,
        )?.id || "";
    });

    console.log("수정된 editedData", editedData);

    // editted Data 에 있는 값으로 API 호출
    // 현재 단계에서 데이터 잘 받고 editedData 에 잘 들어가는지 확인 후 등록 API 호출
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
                variant="secondaryError"
                onClick={() =>
                  deletePrescribedMedicineRowById(
                    selectedPrescribedMedicineRowIds,
                  )
                }
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

        <GrayContainer
          title="일반 의약품"
          subTitle="가정 내 보관중인 모든 식품"
          titleButton={
            <div className="inline-block">
              <Button
                variant="secondaryError"
                onClick={() =>
                  deletePrescribedMedicineRowById(
                    selectedPrescribedMedicineRowIds,
                  )
                }
                disabled={selectedPrescribedMedicineRowIds.length == 0}>
                선택항목 삭제
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
              withAddButton
              onClickAddButton={() => {
                addNormalMedicineRow({
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

        <div>
          <p
            className="text-subtitle2 font-bold text-grayscale-90 mt-8"
            onClick={test}>
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
