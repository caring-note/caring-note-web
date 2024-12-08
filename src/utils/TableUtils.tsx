import { GridColDef } from "@mui/x-data-grid";
import moment from "moment";

export const createDefaultTextColumn = ({
  field,
  headerName,
  isFirstColumn = false,
}: {
  field: string;
  headerName: string;
  isFirstColumn?: boolean;
}): GridColDef => {
  return {
    field,
    headerName,
    flex: 1,
    renderCell: (params) => {
      return (
        params.value || (
          <span className="text-gray-400 italic">{headerName}</span>
        )
      );
    },
    headerClassName: isFirstColumn ? "!pl-6" : "",
    cellClassName: isFirstColumn ? "!pl-6" : "",
  };
};

export const createDefaultNumberColumn = ({
  field,
  headerName,
  unitName = "",
  isFirstColumn = false,
}: {
  field: string;
  headerName: string;
  unitName?: string;
  isFirstColumn?: boolean;
}): GridColDef => {
  return {
    field,
    headerName,
    headerAlign: "left",
    flex: 1,
    type: "number",
    renderCell: (params) => {
      return params.value > 0 ? (
        `${params.value} ${unitName}`
      ) : (
        <span className="text-gray-400 italic">0</span>
      );
    },
    align: "left",
    headerClassName: isFirstColumn ? "!pl-6" : "",
    cellClassName: isFirstColumn ? "!pl-6" : "",
  };
};

export const createDefaultDateColumn = ({
  field,
  headerName,
  dateFormat = "YYYY-MM-DD",
  isFirstColumn = false,
}: {
  field: string;
  headerName: string;
  dateFormat?: string;
  isFirstColumn?: boolean;
}): GridColDef => {
  return {
    field,
    headerName,
    flex: 1,
    renderCell: (params) => {
      const formattedDate = params.value
        ? moment(params.value).format(dateFormat)
        : null;
      return (
        formattedDate || (
          <span className="text-gray-400 italic">{dateFormat}</span>
        )
      );
    },
    headerClassName: isFirstColumn ? "!pl-6" : "",
    cellClassName: isFirstColumn ? "!pl-6" : "",
  };
};
