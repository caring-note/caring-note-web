import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import React from "react";

type TableComponentProps = {
  rows: GridRowsProp;
  columns: GridColDef[];
};

const TableComponent: React.FC<TableComponentProps> = ({ rows, columns }) => {
  return (
    <div className="">
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
      />
    </div>
  );
};

export default TableComponent;
