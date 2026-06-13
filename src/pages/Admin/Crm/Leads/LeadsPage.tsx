import { Box, Typography } from "@mui/material";
import { useState } from "react";
import {
  BreadCrumbs,
  FilterRenderer,
  TableTopBar,
} from "../../../../components";
import type { LeadsFilters, TableFilters, TableState } from "./types";
import { LeadsTable, LeadDistributionMetricsCard } from "./containers";
import type { SearchColumn } from "../../../../components/ui/type";

const LeadsPage = () => {
  const initialFilters: LeadsFilters = {
    consultantRole: [],
    assignedLeads: null,
    pendingLeads: null,
    completedLeads: null,
  };
  const [state, setState] = useState<TableState>({
    search: "",
    searchColumn: "consultantName",
    sortColumn: "",
    sortOrder: "asc",
    pageNo: 1,
    pageSize: 10,
  });
  const [filters, setFilters] = useState(initialFilters);

  const searchColumns: SearchColumn[] = [
    { key: "consultantName", label: "Name", default: true },
    { key: "consultantEmail", label: "Email" },
    { key: "consultantPhone", label: "Phone" },
  ];
  const columnFilters: TableFilters[] = [
    {
      key: "consultantRole",
      dataType: "MultiSelect",
      label: "Role",
      options: [
        {
          value: 1,
          label: "Senior Counselor",
        },
        {
          value: 2,
          label: "Junior Counselor",
        },
        {
          value: 3,
          label: "Regional Manager",
        },
        {
          value: 4,
          label: "Sales Associate",
        },
        {
          value: 5,
          label: "Sales Executive",
        },
      ],
    },
    { key: "assignedLeads", dataType: "NumericRange", label: "Assigned Leads" },
    { key: "pendingLeads", dataType: "NumericRange", label: "Pending Leads" },
    {
      key: "completedLeads",
      dataType: "NumericRange",
      label: "Completed Leads",
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
      {" "}
      <BreadCrumbs />
      <Box sx={{ marginY: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "semibold", color: "var(--slate-800)" }}
        >
          Lead Distribution
        </Typography>
        <Typography className="text-slate-600">
          Manage and monitor Consultant performance and lead conversion
          pipeline.
        </Typography>
      </Box>
      <LeadDistributionMetricsCard />
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
      <LeadsTable tableState={state} handleChange={handleChange} />
    </Box>
  );
};

export default LeadsPage;
