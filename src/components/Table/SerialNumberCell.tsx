import { Box, Typography } from "@mui/material";
import {
  gridPaginationModelSelector,
  gridVisibleRowsSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import type { GridRowId } from "@mui/x-data-grid";
import { TABLE_TEXT_MUTED } from "./constants";

interface SerialNumberCellProps {
  id: GridRowId;
}

/**
 * Running row number. It is read off the rows the grid is currently showing, so
 * the column always counts 1..n down the page no matter how it is sorted or
 * filtered, and continues across pages.
 */
const SerialNumberCell = ({ id }: SerialNumberCellProps) => {
  const apiRef = useGridApiContext();
  const { rowIdToIndexMap } = useGridSelector(apiRef, gridVisibleRowsSelector);
  const { page, pageSize } = useGridSelector(apiRef, gridPaginationModelSelector);

  const indexOnPage = rowIdToIndexMap.get(id) ?? 0;
  const serialNumber = page * pageSize + indexOnPage + 1;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "0.8125rem", color: TABLE_TEXT_MUTED }}>
        {serialNumber}
      </Typography>
    </Box>
  );
};
export default SerialNumberCell;
