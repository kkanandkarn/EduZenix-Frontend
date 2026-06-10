// TablePagination.tsx
import { Box, Pagination, Typography } from "@mui/material";
import {
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
  gridPaginationModelSelector,
  gridRowCountSelector,
} from "@mui/x-data-grid";
import type { TableState } from "../../types";
declare module "@mui/x-data-grid" {
  interface PaginationPropsOverrides {
    handleChange: (name: keyof TableState, value: string | number) => void;
  }
}

interface Props {
  handleChange: (name: keyof TableState, value: string | number) => void;
}

export default function TablePagination({ handleChange }: Props) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const totalRows = useGridSelector(apiRef, gridRowCountSelector);

  const { page, pageSize } = paginationModel;
  const from = page * pageSize + 1;
  const to = Math.min((page + 1) * pageSize, totalRows);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    apiRef.current.setPage(value - 1);
    handleChange("pageNo", value); // 👈 call parent handler
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: 2,
      }}
    >
      <Typography variant="body2" sx={{ color: "var(--color-slate-600)" }}>
        Showing {from} to {to} of {totalRows}
      </Typography>

      <Pagination
        color="primary"
        count={pageCount}
        page={paginationModel.page + 1}
        onChange={handlePageChange}
      />
    </Box>
  );
}
