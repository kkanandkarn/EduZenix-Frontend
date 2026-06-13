import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import Input from "../ui/Input";
import AppButton from "../ui/AppButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterDrawer from "../ui/FilterDrawer";
import type { SearchColumn } from "../ui/type";
import UploadFileIcon from "@mui/icons-material/UploadFile";
interface TableTopBarProps {
  search: string;
  searchColumn?: string;
  setSearch: (value: string) => void;
  setSearchColumn?: (value: string) => void;
  searchColumns?: SearchColumn[];
  filterComponent?: React.ReactNode;
  handleApplyFilter?: () => void;
  handleResetFilters?: () => void;
}
const TableTopBar = ({
  search,
  searchColumn,
  setSearch,
  setSearchColumn,
  searchColumns,
  filterComponent,
  handleApplyFilter,
  handleResetFilters,
}: TableTopBarProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleApply = () => {
    setDrawerOpen(false);
    handleApplyFilter?.();
  };
  const handleReset = () => {
    setDrawerOpen(false);
    handleResetFilters?.();
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          marginY: 2,
          padding: 2,
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
            width: "100%",
          }}
        >
          {" "}
          <Box
            sx={{
              width: searchColumns ? "40%" : "30%",

              borderRadius: "4px",
              paddingX: 1,
            }}
          >
            {" "}
            <Input
              type="search"
              label="Search..."
              name="search"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
              placeholder="Search...."
              fullWidth={true}
              searchColumns={searchColumns}
              searchColumn={searchColumn}
              onColumnChange={(value) => setSearchColumn?.(value)}
            />
          </Box>
          {filterComponent && (
            <AppButton
              variant="outlined"
              label="Filter"
              startIcon={<FilterListIcon />}
              onClick={() => setDrawerOpen(true)}
            />
          )}
          <AppButton
            variant="outlined"
            label="Export Excel"
            startIcon={<UploadFileIcon />}
          />
        </Box>
      </Paper>
      {filterComponent && handleApplyFilter && handleResetFilters && (
        <FilterDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onApply={handleApply}
          children={filterComponent}
          onReset={handleReset}
        />
      )}
    </>
  );
};

export default TableTopBar;
