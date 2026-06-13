import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BreadCrumbs,
  AppButton,
  TableTopBar,
  FilterRenderer,
  TabButtons,
} from "../../../../components";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import type {
  TableFilters,
  TableState,
  UniversityFilters,
  SearchColumn,
} from "./types";

import { UniversityStats, UniversityTable } from "./containers";

const CrmUniversityPage = () => {
  const initialFilters: UniversityFilters = {
    state: null,
    district: null,
    establishedYear: null,
    location: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "name",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState(initialFilters);
  const searchColumns: SearchColumn[] = [
    { key: "name", label: "Name", default: true },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];
  const [status, setStatus] = useState<string>("pending");

  const columnFilters: TableFilters[] = [
    {
      key: "state",
      dataType: "MultiSelect",
      label: "State",
      options: [
        {
          value: 1,
          label: "Bihar",
        },
        {
          value: 2,
          label: "Delhi",
        },
        {
          value: 3,
          label: "Haryana",
        },
        {
          value: 4,
          label: "Madhya Pradesh",
        },
        {
          value: 5,
          label: "Haryana",
        },
      ],
    },
    {
      key: "district",
      dataType: "MultiSelect",
      label: "City",
      options: [
        {
          value: 1,
          label: "Aara",
        },
        {
          value: 2,
          label: "Darbhanga",
        },
        {
          value: 3,
          label: "Hajipur",
        },
        {
          value: 4,
          label: "Madhubani",
        },
        {
          value: 5,
          label: "Patna",
        },
      ],
    },
    {
      key: "establishedYear",
      dataType: "NumericRange",
      label: "Established Year",
    },
    {
      key: "location",
      dataType: "SingleSelect",
      label: "Location",
      options: [
        {
          value: 1,
          label: "Urban",
        },
        {
          value: 2,
          label: "Rural",
        },
      ],
    },
  ];

  const tabs = [
    {
      value: "pending",
      label: "Pending",
      count: 1250,
    },
    {
      value: "requestedToAdmin",
      label: "Requested to Admin",
      count: 10,
    },
    {
      value: "approved",
      label: "Approved",
      count: 20,
    },
    {
      value: "rejected",
      label: "Rejected",
      count: 30,
    },
  ];
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setStatus(newValue);
  };

  const handleChange = (name: keyof TableState, value: string | number) => {
    setState((p: TableState) => ({ ...p, [name]: value }));
  };
  const handleApplyFilter = () => {
    console.log("APPLIED FILTERS: ", filters);
  };
  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  return (
    <Box sx={{ paddingY: 2, paddingX: 4 }}>
      <BreadCrumbs />
      <Box sx={{ marginY: 2 }}>
        <Box
          sx={{
            display: "flex ",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
            >
              University Management
            </Typography>
            <Typography className="text-slate-600">
              Manage and track university accreditation status
            </Typography>
          </Box>
        </Box>
      </Box>
      <UniversityStats />
      <TableTopBar
        search={state.search}
        setSearch={(value) => handleChange("search", value)}
        setSearchColumn={(value) => handleChange("search", value)}
        searchColumn={state.searchColumn}
        searchColumns={searchColumns}
        filterComponent={
          <FilterRenderer
            columnFilters={columnFilters}
            appliedFilters={filters}
            setAppliedFilters={setFilters}
          />
        }
        handleApplyFilter={handleApplyFilter}
        handleResetFilters={handleResetFilters}
      />
      <Paper
        elevation={0}
        sx={{ paddingY: 1, paddingX: 2, marginTop: 2, borderRadius: 3 }}
      >
        {" "}
        <TabButtons value={status} tabs={tabs} onChange={handleTabChange} />
      </Paper>
      <Box sx={{ mt: 2 }}>
        {" "}
        <UniversityTable tableState={state} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default CrmUniversityPage;
