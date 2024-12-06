import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import React from "react";
import { useAppDispatch } from "../../../hooks";
import { updatePrescribedMedicineRow } from "@reducers/tableRowStateReducer";

type TableComponentProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
  onUpdateCell: (update: GridRowModel) => void;
};

const TableComponent: React.FC<TableComponentProps> = ({
  rows,
  columns,
  onUpdateCell,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <DataGrid
        className="!rounded-xl"
        classes={{
          columnHeader: "bg-blue-200",
          cell: "bg-white",
        }}
        rows={rows}
        columns={columns}
        checkboxSelection // 체크박스 추가
        disableRowSelectionOnClick // cell 클릭시 row 선택 안되도록
        processRowUpdate={(update) => {
          onUpdateCell(update);
          return update;
        }}
        onProcessRowUpdateError={(error) => {
          console.error(error);
        }}
      />
    </div>
  );
};

export default TableComponent;
