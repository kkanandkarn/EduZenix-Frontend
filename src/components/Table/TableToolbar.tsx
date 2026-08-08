import { useState } from "react";
import { Box } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";
import type { GridColumnVisibilityModel } from "@mui/x-data-grid";
import Input from "../ui/Input";
import FilterDrawer from "../ui/FilterDrawer";
import FilterRenderer from "../ui/FilterDrawer/FilterRenderer";
import ColumnsMenu, { type HideableColumn } from "./ColumnsMenu";
import SortMenu from "./SortMenu";
import ToolbarButton from "./ToolbarButton";
import { countAppliedFilters } from "./filterUtils";
import { searchWrapperSx, toolbarRowSx } from "./tableStyles";
import type { SortColumn, TableToolbarConfig } from "./types";

type ToolbarConfig = Omit<
  TableToolbarConfig,
  "tabs" | "activeTab" | "onTabChange" | "sortColumns" | "showSearch"
>;

interface Props extends ToolbarConfig {
  showSearch: boolean;
  search: string;
  searchColumn?: string;
  onSearchChange: (value: string) => void;
  onSearchColumnChange: (value: string) => void;

  sortColumns: SortColumn[];
  sortColumn: string;
  sortOrder: "asc" | "desc";
  onSortColumnChange: (key: string) => void;
  onSortOrderChange: (order: "asc" | "desc") => void;

  hideableColumns: HideableColumn[];
  columnVisibilityModel: GridColumnVisibilityModel;
  onColumnVisibilityChange: (model: GridColumnVisibilityModel) => void;
}

/** Search on the left, Filter / Sort / Columns actions on the right. */
const TableToolbar = ({
  showSearch,
  search,
  searchColumn,
  searchColumns,
  searchPlaceholder,
  onSearchChange,
  onSearchColumnChange,
  sortColumns,
  sortColumn,
  sortOrder,
  onSortColumnChange,
  onSortOrderChange,
  columnFilters,
  appliedFilters,
  handleApplyFilter,
  handleResetFilters,
  showColumns,
  hideableColumns,
  columnVisibilityModel,
  onColumnVisibilityChange,
  onExport,
  actions,
}: Props) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  // The drawer edits a copy; the page only sees it once Apply is pressed.
  const [draftFilters, setDraftFilters] = useState<Record<string, unknown>>({});
  const activeFilterCount = countAppliedFilters(appliedFilters);
  const filtersEnabled = Boolean(columnFilters?.length);

  const handleOpenDrawer = () => {
    setDraftFilters({ ...appliedFilters });
    setDrawerOpen(true);
  };
  const handleApply = () => {
    setDrawerOpen(false);
    handleApplyFilter?.(draftFilters);
  };
  const handleReset = () => {
    setDrawerOpen(false);
    handleResetFilters?.();
  };

  return (
    <>
      <Box sx={toolbarRowSx}>
        {showSearch && (
          <Box sx={searchWrapperSx}>
            <Input
              type="search"
              label="Search"
              name="search"
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onSearchChange(event.target.value)
              }
              placeholder={searchPlaceholder ?? "Search..."}
              fullWidth
              searchColumns={searchColumns}
              searchColumn={searchColumn}
              onColumnChange={onSearchColumnChange}
            />
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
            ml: "auto",
          }}
        >
          {filtersEnabled && (
            <ToolbarButton
              label="Filter"
              startIcon={<FilterListIcon />}
              active={activeFilterCount > 0}
              onClick={handleOpenDrawer}
            />
          )}

          {sortColumns.length > 0 && (
            <SortMenu
              sortColumns={sortColumns}
              sortColumn={sortColumn}
              sortOrder={sortOrder}
              onSortColumnChange={onSortColumnChange}
              onSortOrderChange={onSortOrderChange}
            />
          )}

          {showColumns && hideableColumns.length > 0 && (
            <ColumnsMenu
              columns={hideableColumns}
              model={columnVisibilityModel}
              onChange={onColumnVisibilityChange}
            />
          )}

          {onExport && (
            <ToolbarButton
              label="Export"
              startIcon={<FileDownloadOutlinedIcon />}
              onClick={onExport}
            />
          )}

          {actions}
        </Box>
      </Box>

      {filtersEnabled && (
        <FilterDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onApply={handleApply}
          onReset={handleReset}
        >
          <FilterRenderer
            columnFilters={columnFilters ?? []}
            appliedFilters={draftFilters}
            setAppliedFilters={setDraftFilters}
          />
        </FilterDrawer>
      )}
    </>
  );
};

export default TableToolbar;
