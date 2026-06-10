// AppTable.tsx
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import type {
  GridColDef,
  GridSortModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import TablePagination from "./TablePagination";
import type { TableState } from "../../types";

// Generic component banao
type AppTableProps<T extends GridValidRowModel> = {
  rows: T[];
  columns: GridColDef<T>[];
  total: number;
  tableState: TableState;
  handleChange: (name: keyof TableState, value: string | number) => void;
};

export default function AppTable<T extends GridValidRowModel>({
  rows,
  columns,
  total,
  tableState,
  handleChange,
}: AppTableProps<T>) {
  const handleSortModelChange = (model: GridSortModel) => {
    console.log("MODEL: ", model);
    // if (!onSortChange) return;
    if (model.length === 0) {
      // onSortChange("", null); // sort cleared
    } else {
      // onSortChange(model[0].field, model[0].sort ?? null);
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSizeOptions={[10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: tableState.pageSize,
              page: tableState.pageNo - 1,
            },
          },
        }}
        slots={{
          pagination: TablePagination,
        }}
        slotProps={{
          pagination: { handleChange }, // 👈 forward prop into slot
        }}
        sx={{ borderRadius: "18px" }}
        disableRowSelectionOnClick
        onSortModelChange={handleSortModelChange}
        rowCount={total}
      />
    </Box>
  );
}
