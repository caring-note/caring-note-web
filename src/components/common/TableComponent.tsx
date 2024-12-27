import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridRowSelectionModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import React from "react";

type TableComponentProps = {
  key: string;
  rows: GridRowsProp;
  columns: GridColDef[];
  checkboxSelection?: boolean;
  onUpdateCell?: (update: GridRowModel) => void;
  onRowSelectionModelChange?: (selection: string[]) => void;
};

const TableComponent: React.FC<TableComponentProps> = ({
  key,
  rows,
  columns,
  checkboxSelection = false,
  onUpdateCell,
  onRowSelectionModelChange,
}) => {
  const memoizedRows = React.useMemo(() => rows, [rows]);
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  return (
    <div>
      <DataGrid
        key={key}
        className="!rounded-xl !min-h-96"
        classes={{
          columnHeader: "bg-gray-200",
          cell: "bg-white",
        }}
        rows={memoizedRows}
        columns={memoizedColumns}
        checkboxSelection={checkboxSelection} // 체크박스 추가
        disableRowSelectionOnClick // cell 클릭시 row 선택 안되도록
        processRowUpdate={(update) => {
          onUpdateCell?.(update);
          return update;
        }}
        onProcessRowUpdateError={(error) => {
          console.error(error);
        }}
        onRowSelectionModelChange={(selection: GridRowSelectionModel) => {
          onRowSelectionModelChange?.(selection.map((s) => s.toString()));
        }}
        disableColumnMenu
        hideFooter
        slots={{
          noRowsOverlay: () => (
            <div className="flex items-center justify-center w-full h-full bg-white">
              <span className="text-gray-400">항목이 존재하지 않습니다</span>
            </div>
          ),
        }}
      />
    </div>
  );
};

export default TableComponent;
