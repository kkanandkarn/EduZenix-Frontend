import { useMemo, useState } from "react";
import { Box, Paper, Skeleton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { DataGrid } from "@mui/x-data-grid";
import type {
  GridColumnVisibilityModel,
  GridSortModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import ActiveChips from "./ActiveChips";
import TablePagination from "./TablePagination";
import TableTabs from "./TableTabs";
import TableToolbar from "./TableToolbar";
import type { HideableColumn } from "./ColumnsMenu";
import { describeAppliedFilters } from "./filterUtils";
import { DEFAULT_PAGE_SIZE_OPTIONS, TABLE_HEADER_HEIGHT } from "./constants";
import {
  dataGridSx,
  skeletonCellSx,
  skeletonGridSx,
  sortedHeaderSx,
  tableCardSx,
} from "./tableStyles";
import type { AppTableProps } from "./types";

/**
 * Tabs, search/filter/sort toolbar, grid and pagination in a single card.
 * Sorting is driven by the toolbar's Sort button, so the headers only mark which
 * column is currently sorted.
 */
export default function AppTable<T extends GridValidRowModel>({
  rows,
  columns,
  total,
  tableState,
  handleChange,
  loading,
  rowsLabel,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  paginationMode = "client",
  tabs,
  activeTab,
  onTabChange,
  showSearch,
  searchPlaceholder,
  searchColumns,
  sortColumns,
  columnFilters,
  appliedFilters,
  onRemoveFilter,
  handleApplyFilter,
  handleResetFilters,
  showColumns,
  onExport,
  actions,
}: Readonly<AppTableProps<T>>) {
  const [columnVisibilityModel, setColumnVisibilityModel] =
    useState<GridColumnVisibilityModel>({});

  const searchEnabled = showSearch ?? Boolean(searchColumns?.length);
  const sortableColumns = sortColumns ?? [];

  const hideableColumns: HideableColumn[] = useMemo(
    () =>
      columns
        .filter((column) => column.hideable !== false && column.headerName)
        .map((column) => ({
          field: column.field,
          label: column.headerName as string,
        })),
    [columns],
  );

  const hasToolbarContent =
    searchEnabled ||
    sortableColumns.length > 0 ||
    Boolean(columnFilters?.length) ||
    Boolean(onExport) ||
    Boolean(actions);
  const columnsEnabled =
    (showColumns ?? hasToolbarContent) && hideableColumns.length > 0;
  const toolbarVisible = hasToolbarContent || columnsEnabled;

  // What the user has narrowed, summarised as removable chips under the toolbar.
  const appliedFilterChips = useMemo(
    () => describeAppliedFilters(columnFilters, appliedFilters),
    [columnFilters, appliedFilters],
  );
  const sortedColumnLabel = sortableColumns.find(
    (column) => column.key === tableState.sortColumn,
  )?.label;
  const sortChipLabel = sortedColumnLabel
    ? `${sortedColumnLabel} (${tableState.sortOrder === "desc" ? "Descending" : "Ascending"})`
    : "";
  const chipsVisible = appliedFilterChips.length > 0 || Boolean(sortChipLabel);

  const handleClearAll = () => {
    handleResetFilters?.();
    handleChange("sortColumn", "");
  };

  // The Sort button owns the grid's sort model.
  const sortModel: GridSortModel = useMemo(
    () =>
      tableState.sortColumn
        ? [{ field: tableState.sortColumn, sort: tableState.sortOrder }]
        : [],
    [tableState.sortColumn, tableState.sortOrder],
  );

  // Mark the sorted column in its header instead of showing a sort icon on each.
  const gridColumns = useMemo(
    () =>
      columns.map((column) => {
        if (column.field !== tableState.sortColumn || column.renderHeader) {
          return column;
        }

        return {
          ...column,
          renderHeader: () => (
            <Box sx={sortedHeaderSx}>
              {column.headerName ?? column.field}
              {tableState.sortOrder === "desc" ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </Box>
          ),
        };
      }),
    [columns, tableState.sortColumn, tableState.sortOrder],
  );

  // While loading, the grid renders a full page of placeholder rows in the real
  // column layout instead of the default progress bar above the header.
  const showSkeleton = Boolean(loading);

  const skeletonRows = useMemo(
    () =>
      Array.from({ length: tableState.pageSize }, (_, index) => ({
        id: `skeleton-${index}`,
      })) as unknown as T[],
    [tableState.pageSize],
  );

  // Cells are placeholders, so the real value/format hooks must not run on them.
  const skeletonColumns = useMemo(
    () =>
      gridColumns.map((column, index) => ({
        ...column,
        valueGetter: undefined,
        valueFormatter: undefined,
        renderCell: () => (
          <Skeleton variant="rounded" sx={skeletonCellSx(index)} />
        ),
      })),
    [gridColumns],
  );

  return (
    <Paper elevation={0} sx={tableCardSx}>
      {tabs && tabs.length > 0 && (
        <TableTabs
          tabs={tabs}
          value={activeTab ?? tabs[0].value}
          onChange={(value) => onTabChange?.(value)}
        />
      )}

      {toolbarVisible && (
        <TableToolbar
          showSearch={searchEnabled}
          search={tableState.search}
          searchColumn={tableState.searchColumn}
          searchColumns={searchColumns}
          searchPlaceholder={searchPlaceholder}
          onSearchChange={(value) => handleChange("search", value)}
          onSearchColumnChange={(value) => handleChange("searchColumn", value)}
          sortColumns={sortableColumns}
          sortColumn={tableState.sortColumn}
          sortOrder={tableState.sortOrder}
          onSortColumnChange={(key) => handleChange("sortColumn", key)}
          onSortOrderChange={(order) => handleChange("sortOrder", order)}
          columnFilters={columnFilters}
          appliedFilters={appliedFilters}
          handleApplyFilter={handleApplyFilter}
          handleResetFilters={handleResetFilters}
          showColumns={columnsEnabled}
          hideableColumns={hideableColumns}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityChange={setColumnVisibilityModel}
          onExport={onExport}
          actions={actions}
        />
      )}

      {chipsVisible && (
        <ActiveChips
          filters={appliedFilterChips}
          sortLabel={sortChipLabel}
          onRemoveFilter={onRemoveFilter}
          onClearSort={() => handleChange("sortColumn", "")}
          onClearAll={handleClearAll}
        />
      )}

      <DataGrid
        autoHeight
        rows={showSkeleton ? skeletonRows : rows}
        columns={showSkeleton ? skeletonColumns : gridColumns}
        loading={false}
        paginationMode={paginationMode}
        {...(paginationMode === "server"
          ? { rowCount: showSkeleton ? tableState.pageSize : total }
          : {})}
        paginationModel={{
          // Client pagination slices the rows itself, so the placeholder page
          // has to sit at index 0 to stay visible.
          page: showSkeleton ? 0 : tableState.pageNo - 1,
          pageSize: tableState.pageSize,
        }}
        onPaginationModelChange={(model) => {
          if (model.page + 1 !== tableState.pageNo) {
            handleChange("pageNo", model.page + 1);
          }
          if (model.pageSize !== tableState.pageSize) {
            handleChange("pageSize", model.pageSize);
          }
        }}
        pageSizeOptions={pageSizeOptions}
        sortingMode={paginationMode}
        sortModel={sortModel}
        onSortModelChange={(model) => {
          const [item] = model;
          if ((item?.field ?? "") !== tableState.sortColumn) {
            handleChange("sortColumn", item?.field ?? "");
          }
          if (item?.sort && item.sort !== tableState.sortOrder) {
            handleChange("sortOrder", item.sort);
          }
        }}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={setColumnVisibilityModel}
        columnHeaderHeight={TABLE_HEADER_HEIGHT}
        getRowHeight={() => "auto"}
        disableColumnSorting
        disableColumnMenu
        disableRowSelectionOnClick
        hideFooter
        sx={[dataGridSx, ...(showSkeleton ? [skeletonGridSx] : [])]}
      />

      <TablePagination
        pageNo={tableState.pageNo}
        pageSize={tableState.pageSize}
        total={total}
        pageSizeOptions={pageSizeOptions}
        rowsLabel={rowsLabel}
        handleChange={handleChange}
      />
    </Paper>
  );
}
