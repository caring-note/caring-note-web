import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridRowSelectionModel,
  GridRowsProp,
} from "@mui/x-data-grid";
import React from "react";
import PlusBlueIcon from "@icon/24/add.outlined.black.svg?react";
import classNames from "classnames";

type TableComponentProps = {
  tableKey: string;
  rows: GridRowsProp;
  columns: GridColDef[];
  checkboxSelection?: boolean;
  onUpdateCell?: (update: GridRowModel) => void;
  onRowSelectionModelChange?: (selection: string[]) => void;
  withAddButton?: boolean;
  onClickAddButton?: () => void;
};

const TableComponent: React.FC<TableComponentProps> = ({
  tableKey,
  rows,
  columns,
  checkboxSelection = false,
  onUpdateCell,
  onRowSelectionModelChange,
  withAddButton,
  onClickAddButton,
}) => {
  const memoizedRows = React.useMemo(() => rows, [rows]);
  const memoizedColumns = React.useMemo(() => columns, [columns]);

  return (
    <div>
      <DataGrid
        key={tableKey}
        className={classNames(
          withAddButton ? "!rounded-t-xl" : "!rounded-xl",
          "!min-h-96",
        )}
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
        // disableColumnMenu  // 24.12.29 : 기디쪽 기능 확인을 위해 컬럼 기능 사용
        hideFooter
        slots={{
          noRowsOverlay: () => (
            <div className="flex items-center justify-center w-full h-full bg-white">
              <span className="text-gray-400">항목이 존재하지 않습니다</span>
            </div>
          ),
        }}
      />
      {withAddButton ? (
        <div
          className="flex items-center rounded-b-xl bg-white border-x border-b border-grayscale-10 p-3 hover:cursor-pointer"
          onClick={onClickAddButton}>
          <PlusBlueIcon
            className="inline-block"
            width={24}
            height={24}></PlusBlueIcon>
          <span className="text-body1 text-primary-50 ml-2">
            새 의약품 추가하기
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default TableComponent;
