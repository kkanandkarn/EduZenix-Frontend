import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { BreadCrumbs, FilterRenderer, TableTopBar } from "../../../components";
import { TenantsMetricsCard, TenantsTable } from "./containers";
import type {
  SearchColumn,
  TableFilters,
  TableState,
  TenantsFilters,
} from "./types";

const TenantsPage = () => {
  const initialFilters: TenantsFilters = {
    status: null,
    expireDate: null,
    type: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "name",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState<TenantsFilters>(initialFilters);
  const searchColumns: SearchColumn[] = [
    { key: "name", label: "Name", default: true },
    { key: "poc", label: "POC" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone" },
  ];
  const columnFilters: TableFilters[] = [
    {
      key: "type",
      dataType: "SingleSelect",
      label: "Institution Type",
      options: [
        {
          value: 1,
          label: "University",
        },
        {
          value: 2,
          label: "College",
        },
        {
          value: 3,
          label: "School",
        },
        {
          value: 4,
          label: "Other Insitution",
        },
      ],
    },
    {
      key: "packageStatus",
      dataType: "SingleSelect",
      label: "status",
      options: [
        {
          value: 1,
          label: "Active",
        },
        {
          value: 2,
          label: "Hold",
        },
        {
          value: 3,
          label: "Suspended",
        },
        {
          value: 4,
          label: "Expired",
        },
      ],
    },
    {
      key: "expireDate",
      dataType: "DateRange",
      label: "Expired At",
    },
  ];
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
        <Typography
          variant="h6"
          sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
        >
          Tenant partners
        </Typography>
        <Typography className="text-slate-600">
          Manage and monitor tenant's subscriptions across the ecosystem
        </Typography>
      </Box>
      <TenantsMetricsCard />
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
      <Box sx={{ mt: 2 }}>
        {" "}
        <TenantsTable tableState={state} handleChange={handleChange} />
      </Box>
    </Box>
  );
};

export default TenantsPage;
