import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import type { TableState } from "../../types";
import { TABLE_TEXT_MUTED } from "./constants";
import { footerRowSx, pageSizeSelectSx, pagerButtonSx } from "./tableStyles";

interface Props {
  pageNo: number;
  pageSize: number;
  total: number;
  pageSizeOptions: number[];
  /** Noun appended to the count, e.g. "users". */
  rowsLabel?: string;
  handleChange: (name: keyof TableState, value: string | number) => void;
}

/** Row count on the left, page size and page steppers on the right. */
const TablePagination = ({
  pageNo,
  pageSize,
  total,
  pageSizeOptions,
  rowsLabel,
  handleChange,
}: Props) => {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (pageNo - 1) * pageSize + 1;
  const to = Math.min(pageNo * pageSize, total);
  const label = rowsLabel ? ` ${rowsLabel}` : "";

  const handlePageSizeChange = (value: number) => {
    handleChange("pageSize", value);
    handleChange("pageNo", 1);
  };

  return (
    <Box sx={footerRowSx}>
      <Typography sx={{ fontSize: "0.8125rem", color: TABLE_TEXT_MUTED }}>
        Showing {from}&ndash;{to} of {total}
        {label}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Select
          value={pageSize}
          size="small"
          onChange={(event) => handlePageSizeChange(Number(event.target.value))}
          sx={pageSizeSelectSx}
        >
          {pageSizeOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{ fontSize: "0.8125rem" }}
            >
              {option} per page
            </MenuItem>
          ))}
        </Select>

        <IconButton
          aria-label="Previous page"
          disabled={pageNo <= 1}
          onClick={() => handleChange("pageNo", pageNo - 1)}
          sx={pagerButtonSx}
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>

        <IconButton
          aria-label="Next page"
          disabled={pageNo >= pageCount}
          onClick={() => handleChange("pageNo", pageNo + 1)}
          sx={pagerButtonSx}
        >
          <ChevronRightIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TablePagination;
